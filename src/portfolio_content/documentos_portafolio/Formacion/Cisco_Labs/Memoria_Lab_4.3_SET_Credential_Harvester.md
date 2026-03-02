# 🎯 Memoria Técnica: Lab 04.3 - Credential Harvester con SET

**Módulo:** 04 - Ataques de Ingeniería Social  
**Fecha:** 2 de Marzo de 2026  
**Auditor:** Michel Macias  
**Objetivo:** Simulación de Phishing sobre Pixel Paradise Inc.

---

## 1. Resumen Ejecutivo
Se ha llevado a cabo una simulación de ataque de ingeniería social (Phishing) utilizando la metodología de clonación de sitios web. El objetivo fue evaluar la eficacia de los controles de seguridad visuales y la concienciación de los usuarios frente a un portal corporativo fraudulentamente duplicado. La prueba resultó exitosa, logrando la captura de credenciales corporativas en texto plano.

---

## 2. Escenario y Preparación

### 2.1. Infraestructura de Red
- **SITIO REAL:** `http://localhost:8082` (IP Interna: `172.31.0.20`)
- **ATACANTE:** Contenedor Kali Linux con SET (IP Interna: `172.31.0.10`)

### 2.2. Inspección del Objetivo
El portal de empleados de Pixel Paradise presenta un formulario de login estándar sin cifrado SSL/TLS, lo que facilita la interceptación de datos y aumenta la credibilidad del sitio clonado al no haber alertas de certificado en el original.

**Sitio Real:**
![Portal Real](../Capturas_para_labs/labs04/com1.png)
![Vista del Sitio](../Capturas_para_labs/labs04/2026-03-02_13-23.png)

---

## 3. Ejecución del Ataque

### 3.1. Clonación con Social-Engineer Toolkit (SET)
Se utilizó el módulo `Credential Harvester Attack Method` con la opción `Site Cloner`. SET descargó el HTML/CSS del sitio legítimo y levantó un servidor fraudulento en el puerto 80 del atacante (mapeado al 8888 del host).

**Configuración de SET:**
![Menú Principal de SET](../Capturas_para_labs/labs04/set1.png)

```text
1) Social-Engineering Attacks
2) Website Attack Vectors
3) Credential Harvester Attack Method
2) Site Cloner
IP for POST back: 172.31.0.10
URL to clone: http://172.31.0.20
```

![Configuración del Clonador](../Capturas_para_labs/labs04/set2.png)

### 3.2. Simulación de la Víctima
Una "víctima" accede a la URL fraudulenta `http://localhost:8888` e introduce sus credenciales pensando que está en el portal oficial.

**Sitio Clonado (Phishing):**
![Formulario Relleno](../Capturas_para_labs/labs04/phishing_clonado.png)

---

## 4. Resultados y Hallazgos

### 4.1. Captura de Datos
Inmediatamente después de que la víctima hace clic en "Entrar", SET captura los parámetros del POST y los muestra en la consola del atacante, guardándolos también en un reporte XML.

**Datos Capturados:**
```xml
<harvester>
   URL=http://172.31.0.20
   <url>
      <param>username=omar.sanchez@pixelparadise.com</param>
      <param>password=MiContraseñaSegura123!</param>
   </url>
</harvester>
```

**Evidencia de Captura en Consola:**
![Éxito en la Captura](../Capturas_para_labs/labs04/set3.png)
![Detalle de Credenciales](../Capturas_para_labs/labs04/phishing_post_envio.png)

---

## 5. Análisis de Riesgo y Recomendaciones

| Hallazgo | Impacto | Recomendación |
|:---|:---|:---|
| Ausencia de HTTPS | Alto | Implementar certificados SSL/TLS y forzar HSTS para evitar degradación de protocolo. |
| Vulnerabilidad a Clonado | Medio | Implementar cabeceras de seguridad como `X-Frame-Options` y monitorizar registros de dominios similares. |
| Credenciales en Texto Plano | Crítico | Implementar Autenticación de Doble Factor (2FA/MFA) para invalidar el uso de contraseñas robadas. |

---
*Este documento forma parte del Portfolio de Seguridad de Michel Macias.*
