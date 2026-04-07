# 📖 Memoria Técnica: Lab 3.3.1 - Escaneo de Vulnerabilidades en Red Industrial

**Módulo:** 03 - Reconocimiento de Vulnerabilidades  
**Fecha:** 2 de Marzo de 2026  
**Auditor:** Michel Macias  
**Objetivo:** Red Industrial Simulada (Control de Planta)

---

## 1. Resumen Ejecutivo
Se ha realizado un análisis de seguridad sobre una infraestructura industrial (OT) simulada. El objetivo principal fue mapear la superficie de ataque y detectar dispositivos críticos (PLCs e impresoras) utilizando metodologías de escaneo no invasivas para garantizar la disponibilidad de los procesos industriales.

---

## 2. Metodología de Escaneo

### 2.1. Despliegue del Entorno
Se ha utilizado un entorno de 6 contenedores Docker que simula una planta con segmentación de red.

**Captura del despliegue:**
![Docker Compose Up](../Capturas_para_labs/levantar2.png)

**Estado de los contenedores:**
![Contenedores Activos](../Capturas_para_labs/entorno2.png)

### 2.2. Descubrimiento de Activos (Host Discovery)
Se realizó un barrido de red sigiloso (`-sn`) para identificar los activos vivos sin alertar a los sistemas de detección.

**Comando:** `nmap -sn 172.30.0.0/24`

**Resultados:**
- Se identificaron 6 hosts activos.
- Se detectó una impresora de red (`172.30.0.20`) y un PLC (`172.30.0.21`).
- El servidor principal (`172.30.0.10`) no respondió al ping, sugiriendo endurecimiento (hardening) de red.

![Descubrimiento de Hosts](../Capturas_para_labs/nmap2.png)

---

## 3. Análisis de Servicios y Fingerprinting

### 3.1. Servidor Windows / Samba (172.30.0.11)
Se identificaron los puertos 139 y 445 abiertos, correspondientes al servicio Samba 4. La auditoría mediante scripts NSE no detectó vulnerabilidades críticas inmediatas (como EternalBlue), lo que indica un nivel de parcheado aceptable.

**Salida técnica:**
```text
PORT    STATE SERVICE     VERSION
139/tcp open  netbios-ssn Samba smbd 4
445/tcp open  microsoft-ds Samba smbd 4
```

**Detalle del escaneo de servicios:**
![Nmap detallado Windows](../Capturas_para_labs/nmap2_2.png)

![Escaneo de Samba](../Capturas_para_labs/samba2.png)

### 3.2. PLC Siemens S7-300 (172.30.0.21)
Se realizó un escaneo quirúrgico sobre puertos industriales conocidos para evitar la saturación del dispositivo.

**Comando:** `nmap -Pn -p 80,102,502 --script http-title 172.30.0.21`

**Hallazgos Detallados:**
- **Puerto 502 (Modbus):** Protocolo industrial estándar sin autenticación detectado.
- **Puerto 102 (S7comm):** Confirmación de protocolo propietario de Siemens.
- **Interfaz Web:** Identificada como `Siemens S7-300 Web Interface`.

![Escaneo de PLC](../Capturas_para_labs/nmap2_3.png)

---

## 4. Análisis de Riesgos y Hallazgos OT

| ID | Hallazgo | Criticidad | Impacto Industrial |
|:---|:---|:---:|:---|
| **VULN-01** | Protocolo Modbus Expuesto | **CRÍTICA** | Permite la manipulación de registros del PLC y parada de producción. |
| **VULN-02** | Panel Web Industrial | **ALTA** | Punto de entrada para ataques de fuerza bruta o explotación de UI. |
| **VULN-03** | Servicio Samba Activo | **MEDIA** | Posible vector para movimiento lateral desde la red IT a la red OT. |

---

## 5. Recomendaciones Técnicas

1.  **Segmentación de Red (Zonas y Conductos):** Aislar el PLC (`172.30.0.21`) en una red VLAN exclusiva, permitiendo solo el tráfico Modbus desde estaciones de ingeniería autorizadas.
2.  **Desactivación de Servicios Innecesarios:** Desactivar la interfaz web (puerto 80) del PLC si no es imprescindible para la operación.
3.  **Filtrado en Firewall Edge:** Implementar reglas estrictas en el firewall (`172.30.0.254`) para bloquear cualquier tráfico externo hacia los puertos 102 y 502.

---
*Este documento forma parte del Portfolio de Seguridad de Michel Macias.*
