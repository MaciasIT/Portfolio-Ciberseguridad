<#
.SYNOPSIS
    Script de Hardening para Sistemas Windows (10, 11, Server 2016+).
.DESCRIPTION
    Este script de PowerShell aplica y verifica configuraciones de seguridad clave
    en sistemas operativos Windows para reducir la superficie de ataque.
    Puede ejecutarse en modo de aplicación de cambios o en un modo de "solo verificación".
.PARAMETER Check
    Si se especifica este parámetro, el script se ejecutará en modo de solo verificación.
    No realizará ningún cambio, solo informará sobre el estado de configuración actual.
.EXAMPLE
    .\harden_windows.ps1
    Ejecuta el script en modo normal, solicitando confirmación para aplicar los cambios.
.EXAMPLE
    .\harden_windows.ps1 -Check
    Ejecuta el script en modo de solo verificación, mostrando un informe sin aplicar cambios.
.NOTES
    Autor: Gemini
    ADVERTENCIA: Este script realiza cambios en la configuración de seguridad.
    Ejecútalo con precaución y asegúrate de entender los cambios que realiza.
#>
param (
    [switch]$Check
)

# --- Verificación de privilegios de Administrador ---
function Test-IsAdmin {
    $currentUser = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
    return $currentUser.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

# --- Funciones de coloreado de texto ---
function Write-Info { param($Message) Write-Host "[INFO] $Message" -ForegroundColor Green }
function Write-Warn { param($Message) Write-Host "[ADVERTENCIA] $Message" -ForegroundColor Yellow }
function Write-Error { param($Message) Write-Host "[ERROR] $Message" -ForegroundColor Red }
function Write-Ok { param($Message) Write-Host "[OK] $Message" -ForegroundColor Cyan }

# ==============================================================================
# --- FUNCIONES DE VERIFICACIÓN Y APLICACIÓN ---
# ==============================================================================

# --- 1. Firewall de Windows Defender ---
function Test-DefenderFirewall {
    Write-Info "1. Verificando el estado del Firewall de Windows Defender..."
    $profiles = Get-NetFirewallProfile
    $allEnabled = $true
    foreach ($profile in $profiles) {
        if (-not $profile.Enabled) {
            $allEnabled = $false
            Write-Warn "El firewall para el perfil '$($profile.Name)' está DESACTIVADO."
            if (-not $Check) {
                Write-Info "Activando firewall para el perfil '$($profile.Name)'..."
                Set-NetFirewallProfile -Name $profile.Name -Enabled True
            }
        } else {
            Write-Ok "El firewall para el perfil '$($profile.Name)' ya está ACTIVADO."
        }
    }
}

# --- 2. Antivirus de Windows Defender ---
function Test-DefenderAntivirus {
    Write-Info "2. Verificando el estado del Antivirus de Windows Defender..."
    $status = Get-MpComputerStatus
    if ($status.AntispywareEnabled) {
        Write-Ok "El Antivirus de Windows Defender está activado."
    } else {
        Write-Warn "El Antivirus de Windows Defender está DESACTIVADO. Esto puede deberse a que hay otro antivirus instalado."
    }
    if ($status.RealTimeProtectionEnabled) {
        Write-Ok "La protección en tiempo real está activada."
    } else {
        Write-Warn "La protección en tiempo real está DESACTIVADA."
    }
}

# --- 3. User Account Control (UAC) ---
function Test-UAC {
    Write-Info "3. Verificando el estado de User Account Control (UAC)..."
    $regKey = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System"
    $ua_status = (Get-ItemProperty -Path $regKey -Name "EnableLUA").EnableLUA
    if ($ua_status -eq 1) {
        Write-Ok "UAC (EnableLUA) ya está activado."
    } else {
        Write-Warn "UAC (EnableLUA) está DESACTIVADO."
        if (-not $Check) {
            Write-Info "Activando UAC..."
            Set-ItemProperty -Path $regKey -Name "EnableLUA" -Value 1
            Write-Warn "Se requiere un reinicio para que el cambio de UAC tenga efecto."
        }
    }
}

# --- 4. Deshabilitar SMBv1 ---
function Test-SMBv1 {
    Write-Info "4. Verificando la configuración de SMBv1..."
    try {
        $smbConfig = Get-SmbServerConfiguration -ErrorAction Stop
        if ($smbConfig.EnableSMB1Protocol) {
            Write-Warn "SMBv1 está HABILITADO. Este es un riesgo de seguridad."
            if (-not $Check) {
                Write-Info "Deshabilitando SMBv1..."
                Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force
                Write-Warn "Se recomienda un reinicio para asegurar que SMBv1 esté completamente deshabilitado."
            }
        } else {
            Write-Ok "SMBv1 ya está deshabilitado."
        }
    } catch {
        Write-Info "No se pudo obtener la configuración de SMB (probablemente no es una edición de servidor). Omitiendo."
    }
}

# --- 5. Política de ejecución de PowerShell ---
function Test-ExecutionPolicy {
    Write-Info "5. Verificando la política de ejecución de PowerShell..."
    $policy = Get-ExecutionPolicy
    if ($policy -eq "RemoteSigned" -or $policy -eq "AllSigned") {
        Write-Ok "La política de ejecución de PowerShell ya es segura ('$policy')."
    } else {
        Write-Warn "La política de ejecución es '$policy'. Se recomienda 'RemoteSigned'."
        if (-not $Check) {
            Write-Info "Estableciendo la política de ejecución a 'RemoteSigned'..."
            Set-ExecutionPolicy RemoteSigned -Force -Scope LocalMachine
        }
    }
}

# --- 6. Actualizaciones de Windows ---
function Test-WindowsUpdates {
    Write-Info "6. Verificando el servicio de Actualizaciones de Windows..."
    $service = Get-Service -Name wuauserv
    if ($service.StartType -eq "Disabled") {
        Write-Warn "El servicio de Windows Update está deshabilitado."
        if (-not $Check) {
            Write-Info "Configurando el servicio de Windows Update para inicio automático..."
            Set-Service -Name wuauserv -StartupType Automatic
        }
    } else {
        Write-Ok "El servicio de Windows Update está configurado para iniciarse ($($service.StartType))."
    }
}


# ==============================================================================
# --- SCRIPT PRINCIPAL ---
# ==============================================================================

# --- Comprobación inicial ---
if (-not (Test-IsAdmin)) {
    Write-Error "Acceso denegado. Por favor, ejecuta este script como Administrador."
    exit 1
}

# --- Encabezado ---
if ($Check) {
    Write-Host "===========================================================" -ForegroundColor Cyan
    Write-Host "      SCRIPT DE HARDENING DE WINDOWS (MODO VERIFICACIÓN)      " -ForegroundColor Cyan
    Write-Host "===========================================================" -ForegroundColor Cyan
    Write-Info "El script se está ejecutando en modo de solo lectura. No se aplicarán cambios."
} else {
    Write-Host "===========================================================" -ForegroundColor Yellow
    Write-Host "          SCRIPT DE HARDENING DE WINDOWS (MODO APLICAR)       " -ForegroundColor Yellow
    Write-Host "===========================================================" -ForegroundColor Yellow
    Write-Warn "Este script realizará cambios en la configuración de seguridad de tu sistema."
    $confirmation = Read-Host "¿Estás seguro de que quieres continuar? (s/n)"
    if ($confirmation -ne 's') {
        Write-Error "Operación cancelada por el usuario."
        exit
    }
}

# --- Ejecución de las funciones ---
Test-DefenderFirewall
Test-DefenderAntivirus
Test-UAC
Test-SMBv1
Test-ExecutionPolicy
Test-WindowsUpdates

Write-Info "Proceso completado."
if (-not $Check) {
    Write-Warn "Algunos cambios pueden requerir un reinicio para tener efecto."
}
