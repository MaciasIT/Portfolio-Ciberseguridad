**Incident handler's journal**

---

## Índice de entradas

| Entrada | Fecha        | Descripción breve                                 | Fase NIST                       |
|---------|-------------|---------------------------------------------------|---------------------------------|
| #1      | 14/05/2025  | Ataque ransomware clínica sanitaria               | Detección, Contención, Recuperación |
| #2      | 28/05/2025  | Alerta de phishing en RR.HH.                      | Detección y análisis            |
| #3      | 10/06/2025  | Captura y análisis de tráfico con tcpdump         | Detección y análisis            |
| #4      | 24/06/2025  | Análisis de paquetes con Wireshark                | Detección y análisis            |
| #5      | 08/07/2025  | Respuesta a alerta de phishing con playbook       | Detección, Contención           |
| #6      | 22/07/2025  | Investigación de hash sospechoso con VirusTotal   | Detección y análisis            |
| #7      | 05/08/2025  | Revisión de informe final de incidente            | Post-incidente                  |
| #8      | 19/08/2025  | Reglas personalizadas en Suricata                 | Detección y análisis            |
| #9      | 30/09/2025  | Consultas en Wazuh sobre eventos de seguridad     | Detección y análisis            |

---

| Date: 14/05/2025 | Entry: #1 | Fase NIST: Detección, Contención, Recuperación |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se documenta un ataque de ransomware a una clínica sanitaria. Fase: Detección y análisis, Contención y recuperación. Se investigó el incidente, se aisló la red y se restauraron sistemas críticos para reanudar operaciones. |  |  |
| **Tool(s) used** | Antivirus, SIEM, EDR, IRP, IDS/IPS, Backup. |  |  |
| **The 5 W's** | **Who:** Grupo organizado de ciberdelincuentes mediante phishing.  
**What:** Ataque de ransomware, cifrado de archivos y bloqueo de sistemas.  
**When:** Martes por la mañana, 9:00 a.m.  
**Where:** Infraestructura informática de una clínica sanitaria en EE.UU.  
**Why:** Motivación económica, explotación de falta de protección frente a phishing. |  |  |
| **Additional notes** | Importancia de copias de seguridad y capacitación en phishing. |  |  |
| **Aprendizaje clave** | La respuesta rápida y la existencia de copias de seguridad son esenciales para minimizar el impacto de ransomware. |  |  |
| **Recomendación de mejora** | Implementar simulacros de phishing y auditorías periódicas de backup. |  |  |

---

| Date: 28/05/2025 | Entry: #2 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se investiga una alerta de phishing recibida por correo electrónico. Fase: Detección y análisis. Se identificó un archivo malicioso y se recomendó fortalecer controles y capacitación para prevenir futuros incidentes similares. |  |  |
| **Tool(s) used** | VirusTotal, sistema de tickets (SOC), gestión de alertas de correo. |  |  |
| **The 5 W's** | **Who:** Empleado de RR.HH. recibió el correo; atacante desconocido.  
**What:** Intento de phishing con archivo ejecutable malicioso.  
**When:** 28 de mayo de 2025.  
**Where:** Correo corporativo del área de RR.HH.  
**Why:** Intento de comprometer el sistema mediante malware. |  |  |
| **Additional notes** | Reforzar capacitación en phishing y revisar políticas de filtrado de adjuntos. |  |  |
| **Aprendizaje clave** | La detección temprana de phishing depende de la formación y de controles técnicos adecuados. |  |  |
| **Recomendación de mejora** | Mejorar filtros de correo y realizar campañas de concienciación. |  |  |

---

| Date: 10/06/2025 | Entry: #3 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se realiza captura y análisis de tráfico de red con tcpdump. Fase: Detección y análisis. El objetivo fue identificar patrones sospechosos y familiarizarse con herramientas de monitoreo en tiempo real. |  |  |
| **Tool(s) used** | tcpdump, ifconfig, curl. |  |  |
| **The 5 W's** | **Who:** Simulación de laboratorio, no aplica a un incidente real.  
**What:** Captura y análisis de tráfico de red, identificación de protocolos y detalles de comunicación.  
**When:** 10 de junio de 2025.  
**Where:** Entorno de laboratorio Linux, usando una máquina virtual y archivos de ejemplo.  
**Why:** Para adquirir experiencia práctica en el uso de tcpdump para la detección y análisis de tráfico de red. |  |  |
| **Additional notes** | Se practicó la captura selectiva de tráfico y el análisis de los datos en formato detallado y hexadecimal/ASCII. |  |  |
| **Aprendizaje clave** | El análisis de tráfico en tiempo real ayuda a detectar anomalías y posibles amenazas. |  |  |
| **Recomendación de mejora** | Automatizar alertas para tráfico sospechoso y documentar procedimientos. |  |  |

---

| Date: 24/06/2025 | Entry: #4 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se analiza un archivo .pcap con Wireshark para identificar protocolos y anomalías. Fase: Detección y análisis. Se aplicaron filtros para aislar tráfico relevante y comprender la estructura de los paquetes. |  |  |
| **Tool(s) used** | Wireshark, filtros como `ip.addr`, `tcp.port`, `udp.port`, `eth.addr`. |  |  |
| **The 5 W's** | **Who:** Simulación de laboratorio, no aplica a un incidente real.  
**What:** Análisis de paquetes de red capturados para identificar protocolos y detalles de la comunicación.  
**When:** 24 de junio de 2025.  
**Where:** Laboratorio local, archivo de ejemplo en Wireshark.  
**Why:** Aprender a utilizar Wireshark en la detección y análisis de tráfico de red. |  |  |
| **Additional notes** | El uso de filtros en Wireshark facilita la identificación de tráfico relevante y la inspección de detalles a nivel de protocolo. |  |  |
| **Aprendizaje clave** | Wireshark permite visualizar y entender el tráfico de red en profundidad. |  |  |
| **Recomendación de mejora** | Crear guías rápidas de filtros y compartirlas con el equipo. |  |  |

---

| Date: 08/07/2025 | Entry: #5 | Fase NIST: Detección y análisis, Contención |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se responde a una alerta de phishing siguiendo el playbook institucional. Fase: Detección y análisis, Contención. Se verifica el hash del archivo y se documentan acciones en el sistema de tickets. |  |  |
| **Tool(s) used** | Sistema de tickets, VirusTotal, manual de estrategias (playbook). |  |  |
| **The 5 W's** | **Who:** Empleado de RR.HH. recibió el correo; atacante desconocido.  
**What:** Intento de phishing con archivo ejecutable malicioso adjunto.  
**When:** 8 de julio de 2025.  
**Where:** Correo corporativo del área de RR.HH.  
**Why:** Intento de comprometer el sistema mediante malware, usando ingeniería social y un archivo protegido por contraseña. |  |  |
| **Additional notes** | Se siguieron los pasos del manual de estrategias y se documentó el cierre del ticket tras confirmar la peligrosidad del archivo. |  |  |
| **Aprendizaje clave** | Seguir un playbook agiliza la respuesta y asegura la documentación adecuada. |  |  |
| **Recomendación de mejora** | Revisar y actualizar los playbooks periódicamente. |  |  |

---

| Date: 22/07/2025 | Entry: #6 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se investiga un archivo sospechoso con VirusTotal y se identifican IoC usando la Pirámide del Dolor. Fase: Detección y análisis. Se recomienda bloquear los IoC y reforzar la capacitación. |  |  |
| **Tool(s) used** | VirusTotal, Pirámide del Dolor. |  |  |
| **The 5 W's** | **Who:** Empleado de la empresa de servicios financieros recibió el archivo.  
**What:** Archivo adjunto malicioso ejecutado tras abrir una hoja de cálculo protegida por contraseña.  
**When:** 22 de julio de 2025.  
**Where:** Equipo del empleado, detectado por el sistema de detección de intrusos.  
**Why:** El atacante buscaba ejecutar malware en el equipo mediante ingeniería social y un archivo protegido. |  |  |
| **Additional notes** | El hash SHA256 fue confirmado como malicioso. Se recomienda bloquear los IoC y reforzar la capacitación en seguridad. |  |  |
| **Aprendizaje clave** | Clasificar IoC ayuda a priorizar acciones de defensa y respuesta. |  |  |
| **Recomendación de mejora** | Mantener una base de datos actualizada de IoC y compartirla con el equipo. |  |  |

---

| Date: 05/08/2025 | Entry: #7 | Fase NIST: Post-incidente |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se revisa un informe final de incidente de violación de datos. Fase: Actividad posterior al incidente. Se identifican causas, acciones tomadas y recomendaciones para prevenir incidentes futuros. |  |  |
| **Tool(s) used** | Informe final del incidente, materiales de apoyo del curso. |  |  |
| **The 5 W's** | **Who:** Atacante desconocido explotó una vulnerabilidad en la aplicación web de comercio electrónico.  
**What:** Robo de datos de más de un millón de usuarios mediante navegación forzada.  
**When:** 5 de agosto de 2025.  
**Where:** Plataforma de comercio electrónico de la empresa minorista.  
**Why:** Vulnerabilidad en la aplicación web permitió el acceso no autorizado a datos sensibles. |  |  |
| **Additional notes** | Acciones tomadas: investigación, mitigación, notificación a afectados y autoridades. Recomendaciones: controles de acceso y escaneos de vulnerabilidad. |  |  |
| **Aprendizaje clave** | Documentar incidentes y lecciones aprendidas mejora la seguridad futura. |  |  |
| **Recomendación de mejora** | Realizar revisiones post-incidente y actualizar controles preventivos. |  |  |

---

| Date: 19/08/2025 | Entry: #8 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se configuran y prueban reglas personalizadas en Suricata para detectar tráfico malicioso. Fase: Detección y análisis. Se analizan alertas generadas para mejorar la capacidad de respuesta ante amenazas. |  |  |
| **Tool(s) used** | Suricata, jq, cat, less. |  |  |
| **The 5 W's** | **Who:** Simulación de laboratorio, no aplica a un incidente real.  
**What:** Creación y activación de reglas IDS, análisis de tráfico HTTP y revisión de alertas generadas.  
**When:** 19 de agosto de 2025.  
**Where:** Entorno de laboratorio Linux, usando archivos de ejemplo y Suricata.  
**Why:** Adquirir experiencia práctica en la detección de amenazas mediante reglas personalizadas y el análisis de registros de Suricata. |  |  |
| **Additional notes** | Se practicó la edición de reglas, la ejecución de Suricata y el análisis de alertas en diferentes formatos de registro. |  |  |
| **Aprendizaje clave** | Personalizar reglas IDS permite adaptar la detección a las necesidades reales. |  |  |
| **Recomendación de mejora** | Revisar y optimizar reglas IDS periódicamente. |  |  |

---

| Date: 30/09/2025 | Entry: #9 | Fase NIST: Detección y análisis |  |
| :---- | :---- | :---- | ----- |
| **Description** | Se realizan búsquedas en Wazuh para detectar intentos de acceso no autorizado. Fase: Detección y análisis. Se identifican eventos críticos y se practican técnicas de consulta para mejorar la respuesta ante incidentes. |  |  |
| **Tool(s) used** | Wazuh, tutorialdata.zip. |  |  |
| **The 5 W's** | **Who:** Analista de seguridad en Buttercup Games.  
**What:** Investigación de eventos de seguridad, especialmente inicios de sesión SSH fallidos para root.  
**When:** 30 de septiembre de 2025.  
**Where:** Plataforma Wazuh, entorno de laboratorio.  
**Why:** Identificar posibles intentos de acceso no autorizado y mejorar la detección de incidentes en el servidor de correo. |  |  |
| **Additional notes** | Se identificaron más de 100.000 eventos y 376 intentos fallidos de inicio de sesión SSH para root. Se practicó el uso de filtros y campos para acotar búsquedas. |  |  |
| **Aprendizaje clave** | El uso de SIEM facilita la gestión y análisis de grandes volúmenes de datos de seguridad. |  |  |
| **Recomendación de mejora** | Automatizar alertas en Wazuh y capacitar al equipo en búsquedas avanzadas. |  |  |

---

## Tabla de incidentes por fase NIST

| Fase NIST                       | Número de incidentes |
|----------------------------------|---------------------|
| Detección y análisis             | 7                   |
| Contención, erradicación, recuperación | 2            |
| Actividad posterior al incidente | 1                   |

---

### Reflexiones/Notas

**¿Hubo alguna actividad específica que supusiera un reto para ti? ¿Por qué sí o por qué no?**  
La actividad de crear reglas personalizadas en Suricata fue especialmente desafiante, ya que requería comprender la sintaxis y lógica de las reglas IDS. Me costó identificar correctamente los patrones de tráfico malicioso y validar las alertas generadas.

**¿Ha cambiado su comprensión de la detección y respuesta ante incidentes desde que realizó este curso?**  
Sí, mi comprensión ha mejorado notablemente. Ahora reconozco la importancia de cada fase del ciclo de vida NIST y cómo las herramientas y procedimientos se integran para una respuesta efectiva. He aprendido a documentar y analizar incidentes de manera más estructurada.

**¿Ha habido alguna herramienta o concepto específico que le haya gustado más? ¿Por qué?**  
Wireshark fue la herramienta que más me gustó, porque permite visualizar y analizar el tráfico de red de forma detallada y práctica. Me ayudó a entender cómo se comunican los sistemas y a identificar posibles amenazas en tiempo real.

---

