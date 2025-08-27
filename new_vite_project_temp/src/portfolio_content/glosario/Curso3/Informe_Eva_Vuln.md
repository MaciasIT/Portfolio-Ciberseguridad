# 🛡️ Informe de Evaluación de Vulnerabilidad

## 📄 Parte 1: Resumen del Problema Detectado en el Registro tcpdump

Como parte del protocolo DNS, se utilizó el protocolo UDP para contactar con el servidor DNS y obtener la dirección IP del dominio `yummyrecipesforme.com`. Se utilizó el protocolo ICMP para responder con un mensaje de error que indicaba problemas al contactar con el servidor DNS.

El mensaje UDP que se envía desde el navegador al servidor DNS se muestra en las dos primeras líneas de cada evento de registro. La respuesta de error ICMP del servidor DNS a su navegador se muestra en la tercera y cuarta líneas de cada evento de registro con el mensaje de error `"puerto udp 53 inaccesible"`. Dado que el puerto 53 está asociado con el tráfico del protocolo DNS, sabemos que se trata de un problema con el servidor DNS.

Los problemas con la ejecución del protocolo DNS son aún más evidentes porque el signo más después del número de identificación de consulta `35084` indica indicadores con el mensaje UDP y el símbolo `"A?"` indica indicadores con la ejecución de operaciones del protocolo DNS. Debido al mensaje de respuesta de error ICMP sobre el puerto 53, es muy probable que el servidor DNS no esté respondiendo. Esta suposición se ve respaldada por las banderas asociadas con el mensaje UDP saliente y la recuperación del nombre de dominio.

## 🧪 Parte 2: Análisis del Incidente y Causa Probable

El incidente ocurrió hoy a la **1:24 p. m.** Los clientes notificaron a la organización que recibieron el mensaje `"puerto de destino inaccesible"` al intentar visitar el sitio web `yummyrecipesforme.com`.

El equipo de ciberseguridad que presta servicios de TI a su organización cliente está investigando el problema para restaurar el acceso al sitio web. Durante la investigación, se realizaron capturas de tráfico con `tcpdump`, identificando que el **puerto DNS 53 era inaccesible**.

### Causa probable:
- **Hipótesis 1**: El servidor DNS podría estar **caído o inactivo**.
- **Hipótesis 2**: Un **firewall podría estar bloqueando el tráfico** entrante o saliente en el puerto 53.
- **Hipótesis 3**: Posible ataque de **denegación de servicio DNS (DoS/DDoS)** o una **configuración errónea** en el servidor DNS.

---

## 🖥️ Descripción del Sistema

- **Hardware**: [Describir CPU, RAM, almacenamiento, etc.]  
- **Sistema operativo**: [Nombre y versión]  
- **Software crítico**: [Ej. Servidor de bases de datos, aplicaciones web, etc.]  
- **Topología de red**: [Ej. IPv4, subredes, conexiones externas]  
- **Seguridad existente**:  
  - Conexiones cifradas: [SSL/TLS]
  - [Firewalls, antivirus, etc.]

---

## 🎯 Alcance

- **Componentes evaluados**: [Controles de acceso, redes, servicios, etc.]  
- **Objetivos de la evaluación**:  
  - Identificar vulnerabilidades críticas
  - Evaluar exposición a amenazas
  - Recomendar mitigaciones técnicas

---

## 🔍 Propósito del Análisis

**1. ¿Qué valor tiene el sistema para la empresa?**  
[Explicar el valor estratégico del sistema evaluado]

**2. ¿Por qué es importante proteger los datos del sistema?**  
[Indicar el tipo de información almacenada y consecuencias de pérdida o fuga]

**3. ¿Cómo afectaría a la empresa si el sistema se ve comprometido?**  
[Impactos en continuidad operativa, reputación, cumplimiento legal]

---

## ⚠️ Evaluación de Riesgos

| Fuente de amenaza     | Evento de amenaza                                 | Probabilidad | Gravedad | Nivel de Riesgo |
|-----------------------|---------------------------------------------------|--------------|----------|-----------------|
| [Ej. Hacker externo]  | [Ej. Acceso remoto no autorizado]                | [1-3]        | [1-3]    | [P x G]         |
| [Ej. Usuario interno] | [Ej. Eliminación accidental de datos]            | [1-3]        | [1-3]    | [P x G]         |
| [Ej. Malware]         | [Ej. Robo de credenciales]                       | [1-3]        | [1-3]    | [P x G]         |
| ...                   | ...                                               | ...          | ...      | ...             |

> **Leyenda**:  
> - Probabilidad: 1 (Baja), 2 (Media), 3 (Alta)  
> - Gravedad: 1 (Leve), 2 (Moderada), 3 (Crítica)  
> - Riesgo: Multiplicación de Probabilidad x Gravedad

---

## 🧠 Análisis de Riesgo

- Se ha valorado cada riesgo en función de su impacto sobre las operaciones de la organización.  
- El análisis combina probabilidad e impacto para priorizar acciones correctivas.  
- Se han identificado vectores de ataque internos y externos.

---

## 🛠️ Estrategia de Remediación

- **Control de acceso**:  
  - Autenticación multifactor (MFA)  
  - Contraseñas robustas  
  - Roles y permisos mínimos (principio de menor privilegio)

- **Cifrado y comunicación segura**:  
  - TLS 1.2 o superior (no usar SSL)  
  - Cifrado de datos en tránsito y reposo

- **Auditoría y monitoreo**:  
  - Registro de eventos y alertas  
  - Análisis de comportamiento anómalo

- **Protección perimetral**:  
  - Listas blancas de IP  
  - Firewalls y detección de intrusos (IDS/IPS)

---

## ✅ Recomendaciones Finales

- Programar revisiones trimestrales de seguridad.
- Realizar pruebas de penetración anualmente.
- Capacitar al personal en seguridad y buenas prácticas.
- Documentar continuamente configuraciones y cambios.

---

*Informe preparado por: [Nombre del analista / auditor]*  
*Empresa / entidad: [Nombre de la empresa]*  
*Fecha: [dd/mm/aaaa]*
