# 📖 Memoria Técnica: Lab 3.1.2 - Reconocimiento y Enumeración DNS

**Módulo:** 03 - Reconocimiento de Vulnerabilidades  
**Fecha:** 2 de Marzo de 2026  
**Auditor:** Michel Macias  
**Objetivo:** Infraestructura BIND9 (target.local)

---

## 1. Resumen Ejecutivo
Se ha realizado una auditoría de reconocimiento sobre el servicio DNS del dominio `target.local`. El análisis ha revelado una configuración insegura que permite la transferencia de zona completa (AXFR) a usuarios no autorizados, resultando en la exposición total de la topología de red y la fuga de tokens de seguridad internos.

---

## 2. Metodología y Pruebas Realizadas

### 2.1. Despliegue de la Infraestructura
Se utilizó Docker Compose para levantar un servidor BIND9 configurado específicamente para el laboratorio.

**Captura del despliegue:**
![Despliegue de Infraestructura](../Capturas_para_labs/levantar.png)

### 2.2. Descubrimiento de Registros A y MX
Se utilizaron herramientas estándar de resolución para mapear el host principal y los servidores de correo.

**Salida nslookup (A):**
```text
m1txel@UbuntuPcSalon:~$ nslookup target.local 127.0.0.1
Server:		127.0.0.1
Address:	127.0.0.1#53

Name:	target.local
Address: 172.30.0.10
```

**Salida nslookup (MX):**
```text
m1txel@UbuntuPcSalon:~$ nslookup -type=mx target.local 127.0.0.1
Server:		127.0.0.1
Address:	127.0.0.1#53

target.local	mail exchanger = 10 mail.target.local.
```

### 2.3. Explotación de Transferencia de Zona (AXFR)
Se ejecutó una consulta de transferencia de zona para verificar si el servidor permitía descargar la base de datos completa.

**Comando:** `dig @127.0.0.1 target.local AXFR`

**Salida Real del Comando:**
```text
; <<>> DiG 9.18.39-0ubuntu0.24.04.2-Ubuntu <<>> @127.0.0.1 target.local AXFR
; (1 server found)
;; global options: +cmd
target.local.		604800	IN	SOA	ns1.target.local. admin.target.local. 2 604800 86400 2419200 604800
target.local.		604800	IN	TXT	"v=spf1 include:_spf.google.com ~all"
target.local.		604800	IN	NS	ns1.target.local.
target.local.		604800	IN	A	172.30.0.10
target.local.		604800	IN	MX	10 mail.target.local.
admin.target.local.	604800	IN	A	172.30.0.30
dev.target.local.	604800	IN	A	172.30.0.20
ftp.target.local.	604800	IN	A	172.30.0.40
mail.target.local.	604800	IN	A	172.30.0.11
ns1.target.local.	604800	IN	A	172.30.0.10
secret.target.local.	604800	IN	TXT	"INTERNAL_TOKEN=9922-XDFG-OOPA"
www.target.local.	604800	IN	A	172.30.0.10
target.local.		604800	IN	SOA	ns1.target.local. admin.target.local. 2 604800 86400 2419200 604800
;; Query time: 1 msec
;; SERVER: 127.0.0.1#53(127.0.0.1) (TCP)
;; WHEN: Mon Mar 02 12:51:01 CET 2026
;; XFR size: 13 records (messages 1, bytes 407)
```

**Captura de Resultados:**
![Enumeración de Zona](../Capturas_para_labs/cap02.png)

## 3. Análisis de Riesgo

| Hallazgo | Criticidad | Impacto |
|:---|:---:|:---|
| Transferencia de Zona Insegura | **ALTA** | Permite mapear toda la infraestructura interna sin necesidad de escaneo ruidoso. |
| Exposición de Tokens en TXT | **ALTA** | Posible compromiso de servicios internos mediante el uso del token expuesto. |
| Política SPF Permisiva (`~all`) | **MEDIA** | Aumenta el éxito de campañas de Phishing al no rechazar correos suplantados. |

---

## 4. Recomendaciones (Remediación)
1.  **Restringir AXFR:** Configurar `allow-transfer` para permitir solo a direcciones IP de servidores esclavos conocidos.
    - *Corrección Bind9:* `allow-transfer { 192.168.1.50; };`
2.  **Limpieza de Registros TXT:** Eliminar tokens de seguridad de los registros públicos del DNS.
3.  **Endurecer SPF:** Cambiar la directiva a `-all` para rechazar explícitamente cualquier correo no originado en los servidores autorizados.

---
*Este documento forma parte del Portfolio de Seguridad de Michel Macias.*
