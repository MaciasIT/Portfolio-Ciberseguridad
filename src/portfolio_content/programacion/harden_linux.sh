#!/bin/bash

# ==============================================================================
# Script de Hardening para Sistemas Linux (Basado en Debian/Ubuntu)
# Versión: 2.0
#
# Autor: Gemini
# Basado en: secure_linux_guide.md del portafolio.
#
# ADVERTENCIA: Este script realiza cambios significativos en la configuración
# de seguridad del sistema. Úsalo bajo tu propio riesgo y asegúrate de
# tener un método de acceso de respaldo (como una consola física o virtual).
# ==============================================================================

# --- Colores y helpers ---
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

info() { echo -e "${GREEN}[INFO] $1${NC}"; }
warn() { echo -e "${YELLOW}[ADVERTENCIA] $1${NC}"; }
error() { echo -e "${RED}[ERROR] $1${NC}"; }
ok() { echo -e "${CYAN}[OK] $1${NC}"; }

# --- Variable global para el modo de verificación ---
CHECK_MODE=false
USERNAME=""
SSH_PORT=""

# --- Verificación de Root ---
if [[ $EUID -ne 0 ]]; then
   error "Este script debe ser ejecutado como root."
   exit 1
fi

# ==============================================================================
# --- FUNCIONES DE VERIFICACIÓN Y APLICACIÓN ---
# ==============================================================================

# --- 1. Actualizar el sistema ---
update_system() {
    info "1. Actualización del sistema"
    if [ "$CHECK_MODE" = true ]; then
        info "Modo Verificación: Se buscarían e instalarían actualizaciones del sistema."
    else
        apt update && apt upgrade -y
        ok "El sistema ha sido actualizado."
    fi
}

# --- 2. Configurar actualizaciones automáticas ---
setup_auto_updates() {
    info "2. Actualizaciones automáticas"
    if [ "$CHECK_MODE" = true ]; then
        if dpkg -s unattended-upgrades &> /dev/null; then
            ok "El paquete 'unattended-upgrades' ya está instalado."
        else
            warn "El paquete 'unattended-upgrades' no está instalado."
        fi
    else
        apt install -y unattended-upgrades
        dpkg-reconfigure --priority=low unattended-upgrades
        ok "Las actualizaciones automáticas han sido configuradas."
    fi
}

# --- 3. Crear un nuevo usuario con privilegios sudo ---
create_user() {
    info "3. Creación de usuario no-root"
    read -p "Introduce el nombre de usuario a crear/verificar: " USERNAME
    if id "$USERNAME" &>/dev/null; then
        ok "El usuario '$USERNAME' ya existe."
        if groups "$USERNAME" | grep -q '\bsudo\b'; then
            ok "El usuario '$USERNAME' ya pertenece al grupo sudo."
        else
            warn "El usuario '$USERNAME' existe pero no pertenece al grupo sudo."
            if [ "$CHECK_MODE" = false ]; then
                usermod -aG sudo "$USERNAME"
                ok "Usuario '$USERNAME' añadido al grupo sudo."
            fi
        fi
    else
        warn "El usuario '$USERNAME' no existe."
        if [ "$CHECK_MODE" = false ]; then
            adduser "$USERNAME"
            usermod -aG sudo "$USERNAME"
            ok "Usuario '$USERNAME' creado y añadido al grupo sudo."
        fi
    fi
}

# --- 4. Configurar autenticación por clave SSH ---
setup_ssh_keys() {
    if [ "$CHECK_MODE" = true ]; then
        info "4. Configuración de clave SSH (Omitido en modo de verificación)"
    else
        info "4. Configurando la autenticación por clave SSH para '$USERNAME'"
        warn "Necesitarás la clave pública SSH de tu máquina local."
        read -p "Pega aquí tu clave pública SSH (ej: 'ssh-rsa AAAA...'): " ssh_public_key

        local ssh_dir="/home/$USERNAME/.ssh"
        local auth_keys_file="$ssh_dir/authorized_keys"

        mkdir -p "$ssh_dir"
        chmod 700 "$ssh_dir"
        echo "$ssh_public_key" > "$auth_keys_file"
        chmod 600 "$auth_keys_file"
        chown -R "$USERNAME":"$USERNAME" "$ssh_dir"
        ok "La clave pública SSH ha sido añadida para el usuario '$USERNAME'."
    fi
}

# --- 5. Asegurar la configuración de SSH ---
secure_ssh_service() {
    info "5. Asegurando el servicio SSH"
    local ssh_config="/etc/ssh/sshd_config"
    if [ "$CHECK_MODE" = true ]; then
        # Verificar puerto
        grep -qE "^Port\s+22" "$ssh_config" || ! grep -qE "^#Port\s+22" "$ssh_config" && warn "El puerto SSH no es el estándar (22), lo cual es bueno." || ok "El puerto SSH es el estándar (22)."
        # Verificar login de root
        grep -qE "^PermitRootLogin\s+no" "$ssh_config" && ok "PermitRootLogin ya está configurado como 'no'." || warn "PermitRootLogin no está configurado como 'no'."
        # Verificar autenticación por contraseña
        grep -qE "^PasswordAuthentication\s+no" "$ssh_config" && ok "PasswordAuthentication ya está configurado como 'no'." || warn "PasswordAuthentication no está configurado como 'no'."
    else
        read -p "Introduce un nuevo puerto para SSH (ej: 7171): " SSH_PORT
        cp "$ssh_config" "$ssh_config.bak"
        sed -i "s/#?Port 22/Port $SSH_PORT/" "$ssh_config"
        sed -i "s/PermitRootLogin yes/PermitRootLogin no/" "$ssh_config"
        sed -i "s/PasswordAuthentication yes/PasswordAuthentication no/" "$ssh_config"
        ok "Configuración de SSH actualizada."
        systemctl restart sshd
        info "Servicio SSH reiniciado."
    fi
}

# --- 6. Configurar el Firewall (UFW) ---
configure_firewall() {
    info "6. Configurando el firewall (UFW)"
    if [ "$CHECK_MODE" = true ]; then
        if ufw status | grep -q "Status: active"; then
            ok "El firewall UFW está activo."
            ufw status | head -n 5
        else
            warn "El firewall UFW está inactivo."
        fi
    else
        apt install -y ufw
        ufw default deny incoming
        ufw default allow outgoing
        ufw allow "$SSH_PORT"
        ok "Regla añadida para permitir el nuevo puerto SSH ($SSH_PORT)."
        read -p "¿Quieres permitir el tráfico web (HTTP/80)? (s/n): " allow_http
        if [[ "$allow_http" == "s" ]]; then
            ufw allow 80/tcp
            ok "Regla añadida para permitir el tráfico HTTP (puerto 80)."
        fi
        ufw --force enable
        ok "Firewall UFW configurado y activado."
        ufw status
    fi
}

# --- Script Principal ---
main() {
    if [ "$1" = "--check" ]; then
        CHECK_MODE=true
        info "Ejecutando en MODO DE VERIFICACIÓN. No se aplicarán cambios."
    else
        warn "Este script aplicará cambios de seguridad importantes a tu sistema."
        read -p "¿Estás seguro de que quieres continuar? (s/n): " confirmation
        if [[ "$confirmation" != "s" ]]; then
            info "Operación cancelada."
            exit 0
        fi
    fi

    update_system
    setup_auto_updates
    create_user
    setup_ssh_keys
    secure_ssh_service
    configure_firewall

    if [ "$CHECK_MODE" = true ]; then
        info "Verificación completada."
    else
        info "¡Proceso de hardening completado!"
        warn "Recuerda conectarte ahora usando: ssh $USERNAME@<IP_DEL_SERVIDOR> -p $SSH_PORT"
        info "Se recomienda reiniciar el sistema."
    fi
}

main "$1"