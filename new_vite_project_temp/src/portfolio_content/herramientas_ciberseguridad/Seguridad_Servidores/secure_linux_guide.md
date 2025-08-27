# Seguridad en Linux: Guía Rápida para Proteger tu Sistema
## 5 Pasos para Asegurar tu Sistema Linux (Protección contra Hackers)
Basado en el video: 
5 Steps to Secure Linux (protect from hackers)" thanks to  networkchuck
[Video tutorial by NetworkChuck](https://youtu.be/ZhMw53Ud2tY?si=L5sn-OvT-4U8CeM1)

## Introducción
Esta guía está diseñada para ayudarte a asegurar tu sistema Linux de forma rápida y efectiva. Asegúrate de seguir cada paso cuidadosamente.

### Requisitos
- Acceso a un terminal de Linux.
- Conexión a Internet.
- Permisos de superusuario (root).

---

## Tabla de Contenidos
1. [Paso 1: Actualiza tu sistema](#paso-1-actualiza-tu-sistema)
2. [Paso 2: Activa actualizaciones automáticas](#paso-2-activa-actualizaciones-automáticas)
3. [Paso 3: Crea un usuario no-root y configura sudo](#paso-3-crea-un-usuario-no-root-y-configura-sudo)
4. [Paso 4: Configura autenticación SSH con clave pública](#paso-4-configura-autenticación-ssh-con-clave-pública)
5. [Paso 5: Asegura el servicio SSH](#paso-5-asegura-el-servicio-ssh)
6. [Extra: Configura el firewall (UFW)](#extra-configura-el-firewall-ufw)
7. [Verificación de puertos y servicios](#verificación-de-puertos-y-servicios)

---
## ⚠️ Advertencia
Estas configuraciones pueden afectar la conectividad y el acceso a tu sistema. Asegúrate de tener un método alternativo para acceder al sistema en caso de que algo salga mal.

---

## 📜 Notas
- Asegúrate de tener un respaldo de tus datos importantes antes de realizar cambios significativos en la configuración del sistema.
- Esta guía está orientada a usuarios con conocimientos básicos de Linux y administración de sistemas.

---
## 📚 Recursos Adicionales
- [Documentación de SSH](https://www.ssh.com/academy/ssh)
- [Guía de UFW](https://help.ubuntu.com/community/UFW)
- [Foros de soporte de Linux](https://linux.org/forums/)

---
# 🔐 5 Pasos para Asegurar tu Sistema Linux (Protección contra Hackers)

## 🧱 Paso 1: Actualiza tu sistema
Antes de configurar cualquier seguridad, asegúrate de tener tu sistema al día.

### 🔹 `apt update`  
Actualiza las listas de paquetes desde los repositorios. No instala nada, solo sincroniza la información.

### 🔹 `apt upgrade`  
Instala las versiones más recientes de los paquetes ya instalados. Puede requerir confirmación si hay cambios importantes.

---

## 🤖 Paso 2: Activa actualizaciones automáticas
Mantener tu sistema actualizado automáticamente es esencial.

### 🔹 `apt install unattended-upgrades`  
Instala la herramienta que permite actualizaciones de seguridad automáticas.

### 🔹 `dpkg --reconfigure --priority=low unattended-upgrades`  
Muestra un menú para configurar el comportamiento automático. Asegúrate de aceptar las actualizaciones automáticas.

---

## 👤 Paso 3: Crea un usuario no-root y configura sudo

### 🔹 `adduser networkchuck`  
(reemplaza *networkchuck* con tu usuario deseado)  
Crea un nuevo usuario. Se solicitará una contraseña.

### 🔹 `usermod -aG sudo networkchuck`  
Añade el nuevo usuario al grupo **sudo**, dándole acceso privilegiado.

### 🔹 `logout`  
Cierra la sesión del usuario actual (root).

### 🔹 `ssh networkchuck@<IP_DEL_SERVIDOR>`  
Inicia sesión como el nuevo usuario para continuar la configuración.

---

## 🔑 Paso 4: Configura autenticación SSH con clave pública

### 🔹 Desde tu PC local:
1. `ssh-keygen -b 4096` → Genera par de claves SSH (4096 bits).
2. `cd ~/.ssh` → Entra al directorio que contiene tus claves.
3. `ls` → Verifica que estén `id_rsa` y `id_rsa.pub`.

### 🔹 Copia la clave pública al servidor:
- **Windows (PowerShell):**  
  `scp $env:USERPROFILE/.ssh/id_rsa.pub networkchuck@<IP>:~/.ssh/authorized_keys`

- **Linux:**  
  `ssh-copy-id networkchuck@<IP>`

### 🔹 Prueba conexión sin contraseña:
```bash
ssh networkchuck@<IP>
```

---

## ⚙️ Paso 5: Asegura el servicio SSH

### 🔹 Edita la configuración:
```bash
sudo nano /etc/ssh/sshd_config
```

Cambia las siguientes líneas:
```
#Port 22         → Port 717       # Usa un puerto no estándar
#AddressFamily any → AddressFamily inet  # Solo IPv4
PermitRootLogin yes → PermitRootLogin no
PasswordAuthentication yes → PasswordAuthentication no
```

Guarda con: `Ctrl+X`, luego `Y`, luego `Enter`.

### 🔹 Reinicia el servicio SSH:
```bash
sudo systemctl restart sshd
```

Prueba que el nuevo puerto funcione:
```bash
ssh -p 717 networkchuck@<IP>
```

---

## 🔥 Extra: Configura el firewall (UFW)

### 🔹 Instalación y configuración:
```bash
sudo apt install ufw
sudo ufw allow 717        # Abre tu puerto SSH
sudo ufw enable
sudo ufw status
```

### 🔹 Instala y abre Apache:
```bash
sudo apt install apache2
sudo systemctl start apache2
sudo ufw allow 80/tcp
```

### 🔹 Oculta tu servidor (bloquea ping):
```bash
sudo nano /etc/ufw/before.rules
```

Agrega esta línea antes del final del bloque de entrada:
```
-A ufw-before-input -p icmp --icmp-type echo-request -j DROP
```

Guarda y aplica cambios:
```bash
sudo ufw reload
sudo reboot
```

---

## 🧪 Verificación de puertos y servicios

```bash
sudo ss -tulpn
```

Muestra los puertos abiertos y los servicios asociados.
