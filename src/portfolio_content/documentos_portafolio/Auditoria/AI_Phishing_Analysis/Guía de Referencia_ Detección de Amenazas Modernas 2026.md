## **Guía de Referencia: Detección de Amenazas Modernas 2026**

### **1\. El Nuevo Rostro del Phishing (IA-Driven)**

Ya no busques solo errores gramaticales; los atacantes usan LLMs para escribir con una perfección clínica. Fíjate en:

* **La Anomalía del Contexto:** ¿Es normal que el CEO te pida un cambio de cuenta bancaria un martes a las 11 PM? El 90% de los ataques exitosos hoy usan **Spear Phishing** (personalizado).  
* **Dominios "Look-alike" (Typosquatting):** Verifica que el dominio sea empresa.com y no empręsa.com (uso de caracteres Unicode similares).  
* **El Factor Urgencia:** Los marcos del NIST destacan la "Ingeniería Social" basada en el pánico. Frases como *"Acción requerida inmediata para evitar suspensión de nómina"* son banderas rojas automáticas.

### **2\. Signos de Malware Invisible (Ransomware y Stealers)**

El malware actual no siempre "ralentiza" el PC; a menudo es silencioso para robar credenciales.

* **Adjuntos "Disfrazados":** Desconfía de archivos .zip, .7z o .iso protegidos con contraseña enviada en el mismo cuerpo del correo (esto es para saltarse los escáneres de seguridad).  
* **Scripts en Documentos:** Si un archivo de Office o PDF te pide "Habilitar Contenido" o "Ejecutar Macro", el marco **CIS Controls** recomienda tratarlo como una infección confirmada hasta que se demuestre lo contrario.  
* **Comportamiento del Sistema:** Reporta si notas que tu MFA (Doble Factor) se activa sin que hayas intentado loguearte (**MFA Fatigue Attack**).

### **3\. Matriz de Decisión Rápida (Protocolo de Respuesta)**

| Si recibes un correo... | Acción Inmediata |
| :---- | :---- |
| Con un enlace inesperado | **No hagas clic.** Pasa el ratón por encima (hover) para ver la URL real. |
| Pidiendo datos sensibles | **Canal Alternativo.** Llama al remitente por el canal interno oficial (Teams/Slack). |
| Con un adjunto no solicitado | **Reportar.** Usa el botón "Informar de Phishing" o reenvía al equipo de SOC/TI. |

