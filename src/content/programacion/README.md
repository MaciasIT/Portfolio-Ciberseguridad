# Scripts de Programación para Ciberseguridad

Esta carpeta contiene scripts desarrollados para automatizar tareas de ciberseguridad, demostrar habilidades técnicas y proporcionar herramientas prácticas para la gestión y protección de sistemas.

---

## 1. Script de Hardening para Linux (`harden_linux.sh`)

Este script de Bash automatiza los pasos fundamentales para asegurar un servidor basado en Debian o Ubuntu. Su objetivo es reducir la superficie de ataque aplicando una configuración de seguridad robusta de manera interactiva y controlada.

### Funcionalidades Principales

- **✅ Actualización del Sistema**: Sincroniza los repositorios y actualiza todos los paquetes a sus últimas versiones.
- **🤖 Actualizaciones Automáticas**: Instala y configura `unattended-upgrades` para aplicar parches de seguridad de forma automática.
- **👤 Gestión de Usuarios**: Crea un nuevo usuario con privilegios `sudo` y deshabilita el login directo del usuario `root`.
- **🔑 Seguridad SSH**: 
    - Configura la autenticación basada en claves públicas, deshabilitando el acceso por contraseña.
    - Permite cambiar el puerto SSH por defecto para evitar ataques automatizados.
- **🔥 Firewall (UFW)**: Instala, configura y activa `UFW` (Uncomplicated Firewall), permitiendo únicamente el tráfico necesario (como el nuevo puerto SSH y opcionalmente HTTP).

### Tecnologías Demostradas

- **Lenguaje de Scripting**: Bash.
- **Administración de Sistemas Linux**: Gestión de paquetes (APT), usuarios, servicios (Systemd) y configuración de red.
- **Seguridad de Sistemas (Hardening)**: Aplicación de principios de seguridad como el de mínimo privilegio, reducción de la superficie de ataque y configuración segura de servicios críticos como SSH.

### Modo de Uso

1.  **Dar permisos de ejecución**:
    ```bash
    chmod +x harden_linux.sh
    ```

2.  **Ejecutar en modo de aplicación de cambios**:
    ```bash
    sudo ./harden_linux.sh
    ```

3.  **Ejecutar en modo de solo verificación (recomendado para la primera vez)**:
    ```bash
    sudo ./harden_linux.sh --check
    ```

### ⚠️ Advertencia

Este script realiza cambios significativos en la configuración del sistema. Se recomienda encarecidamente tener un método de acceso de respaldo (consola física o virtual) antes de ejecutarlo. Úsalo bajo tu propio riesgo.

---

## 2. Script de Hardening para Windows (`harden_windows.ps1`)

Este script de PowerShell está diseñado para verificar y aplicar configuraciones de seguridad esenciales en sistemas operativos Windows modernos (Windows 10, 11, Server 2016+). El script puede ejecutarse en un modo de "solo verificación" para auditar el sistema sin realizar cambios.

### Funcionalidades Principales

- **🔥 Firewall de Defender**: Verifica que el firewall de Windows esté activado para todos los perfiles de red (Público, Privado y Dominio) y lo activa si es necesario.
- **🛡️ Antivirus de Defender**: Comprueba que el antivirus nativo de Windows y la protección en tiempo real estén operativos.
- **👤 Control de Cuentas de Usuario (UAC)**: Asegura que UAC esté habilitado para prevenir cambios no autorizados en el sistema.
- **🚫 Deshabilitación de SMBv1**: Verifica y deshabilita el protocolo SMBv1, conocido por sus vulnerabilidades de seguridad.
- **📜 Política de Ejecución de PowerShell**: Establece la política de ejecución a `RemoteSigned` para un equilibrio seguro entre funcionalidad y protección contra scripts maliciosos.
- **⚙️ Servicio de Windows Update**: Asegura que el servicio de actualizaciones automáticas no esté deshabilitado.

### Tecnologías Demostradas

- **Lenguaje de Scripting**: PowerShell.
- **Administración de Sistemas Windows**: Uso de cmdlets para gestionar el firewall, servicios, configuración del sistema y el registro de Windows.
- **Seguridad de Sistemas (Hardening)**: Auditoría y aplicación de configuraciones de seguridad recomendadas por la industria para sistemas Windows.

### Modo de Uso

Para utilizar el script, abre una terminal de PowerShell como **Administrador**:

1.  **Navegar al directorio del script**:
    ```powershell
    cd ruta\a\la\carpeta\programacion
    ```

2.  **Ejecutar en modo de aplicación de cambios**:
    ```powershell
    .\harden_windows.ps1
    ```

3.  **Ejecutar en modo de solo verificación (recomendado para la primera vez)**:
    ```powershell
    .\harden_windows.ps1 -Check
    ```

### ⚠️ Advertencia

Al igual que la versión de Linux, este script modifica configuraciones críticas del sistema. Ejecútalo con precaución y bajo tu propio riesgo.

---

## 3. Analizador de Puertos en Python (`port_scanner.py`)

Este script de Python permite escanear puertos en un host específico para identificar cuáles están abiertos. Es una herramienta fundamental para el reconocimiento de redes y la evaluación de la superficie de ataque de un sistema.

### Funcionalidades Principales

- **🎯 Escaneo de Host**: Acepta tanto nombres de dominio (ej: `google.com`) como direcciones IP.
- **🔢 Rango de Puertos Personalizable**: Permite definir un puerto de inicio y fin para el escaneo. Por defecto, escanea los puertos más comunes (1-1024).
- **⏱️ Timeout Configurable**: Se puede ajustar el tiempo de espera para cada puerto, permitiendo un balance entre velocidad y precisión.
- **🖥️ Interfaz de Línea de Comandos (CLI)**: Utiliza `argparse` para una gestión de argumentos clara y profesional, con un mensaje de ayuda integrado.
- **🛡️ Manejo de Errores**: Gestiona de forma segura interrupciones del usuario y errores de red, como hosts no encontrados.

### Tecnologías Demostradas

- **Lenguaje de Programación**: Python 3.
- **Programación de Redes**: Uso de la librería `socket` para establecer conexiones TCP a bajo nivel.
- **Desarrollo de Herramientas de CLI**: Implementación de una interfaz de línea de comandos robusta con `argparse`.
- **Manejo de Errores y Excepciones**: Implementación de bloques `try...except` para un funcionamiento estable.

### Modo de Uso

Para utilizar el script, abre una terminal y ejecuta los siguientes comandos:

1.  **Ver la ayuda y opciones**:
    ```bash
    python port_scanner.py -h
    ```

2.  **Escanear los puertos por defecto (1-1024) en un host**:
    ```bash
    python port_scanner.py scanme.nmap.org
    ```

3.  **Escanear un rango de puertos específico**:
    ```bash
    python port_scanner.py 192.168.1.1 -s 20 -e 81
    ```

4.  **Escanear con un timeout más agresivo (más rápido pero menos fiable en redes lentas)**:
    ```bash
    python port_scanner.py 192.168.1.1 -s 1 -e 100 -t 0.2
    ```

---

## 4. Analizador de Logs en Python (`log_analyzer.py`)

Esta herramienta de Python está diseñada para analizar archivos de log de servidores web (formato Apache/Nginx) en busca de patrones de ataque comunes. Es un script esencial para la detección de amenazas y el análisis forense básico.

### Funcionalidades Principales

- **🔎 Detección Basada en Patrones**: Utiliza expresiones regulares para identificar firmas de ataques conocidos.
- **🛡️ Tipos de Ataques Detectados**:
    - Inyección SQL (SQLi)
    - Cross-Site Scripting (XSS)
    - Escaneo de Directorios y Archivos Sensibles
    - Inyección de Comandos Básica
- **📄 Soporte de Archivos de Log**: Lee cualquier archivo de texto plano, siendo ideal para logs de acceso web.
- **📊 Reporte Claro**: Imprime las líneas sospechosas, el motivo de la sospecha y un resumen final.
- **📦 Archivo de Ejemplo**: Se incluye `sample_access.log` para poder probar y demostrar la funcionalidad del script de forma inmediata.

### Tecnologías Demostradas

- **Lenguaje de Programación**: Python 3.
- **Procesamiento de Texto**: Manejo de archivos y uso de expresiones regulares (`re`) para la búsqueda de patrones complejos.
- **Desarrollo de Herramientas de CLI**: Uso de `argparse` para aceptar el nombre del archivo de log como argumento.

### Modo de Uso

Para analizar un archivo de log, utiliza el siguiente comando:

1.  **Analizar el archivo de log de ejemplo**: 
    ```bash
    python log_analyzer.py sample_access.log
    ```

2.  **Analizar otro archivo de log**:
    ```bash
    python log_analyzer.py /ruta/a/tu/access.log
    ```