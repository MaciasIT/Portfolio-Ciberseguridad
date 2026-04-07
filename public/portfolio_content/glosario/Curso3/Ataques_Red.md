# Informe de Evaluación de Vulnerabilidad

## Parte 1: Resumen del problema detectado en el registro tcpdump

Como parte del protocolo DNS, se utilizó el protocolo UDP para contactar con el servidor DNS y obtener la dirección IP del dominio yummyrecipesforme.com. Se utilizó el protocolo ICMP para responder con un mensaje de error que indicaba problemas al contactar con el servidor DNS. El mensaje UDP que se envía desde el navegador al servidor DNS se muestra en las dos primeras líneas de cada evento de registro. La respuesta de error ICMP del servidor DNS a su navegador se muestra en la tercera y cuarta líneas de cada evento de registro con el mensaje de error "puerto udp 53 inaccesible". Dado que el puerto 53 está asociado con el tráfico del protocolo DNS, sabemos que se trata de un problema con el servidor DNS. Los problemas con la ejecución del protocolo DNS son aún más evidentes porque el signo más después del número de identificación de consulta 35084 indica indicadores con el mensaje UDP y el símbolo "A?" indica indicadores con la ejecución de operaciones del protocolo DNS. Debido al mensaje de respuesta de error ICMP sobre el puerto 53, es muy probable que el servidor DNS no esté respondiendo. Esta suposición se ve respaldada por las banderas asociadas con el mensaje UDP saliente y la recuperación del nombre de dominio.

## Parte 2: Explique su análisis de los datos e indique al menos una causa del incidente

El incidente ocurrió hoy a la 1:24 p. m. Los clientes notificaron a la organización que recibieron el mensaje "puerto de destino inaccesible" al intentar visitar el sitio web yummyrecipesforme.com. El equipo de ciberseguridad que presta servicios de TI a su organización cliente está investigando el problema para que los clientes puedan acceder de nuevo al sitio web. En nuestra investigación, realizamos pruebas de rastreo de paquetes con tcpdump. En el archivo de registro resultante, detectamos que el puerto DNS 53 era inaccesible. El siguiente paso es identificar si el servidor DNS está inactivo o si el firewall bloquea el tráfico al puerto 53. La caída del servidor DNS podría deberse a un ataque de denegación de servicio (DNS) o a una configuración incorrecta.

---

## Informe de evaluación de vulnerabilidad

**1 de enero de 20XX**

### Descripción del sistema

El hardware del servidor consta de un potente procesador CPU y 128 GB de memoria. Funciona con la última versión del sistema operativo Linux y aloja un sistema de gestión de bases de datos MySQL. Está configurado con una conexión de red estable mediante direcciones IPv4 e interactúa con otros servidores de la red. Las medidas de seguridad incluyen conexiones cifradas SSL/TLS.

### Alcance

El alcance de esta evaluación de vulnerabilidades se refiere a los controles de acceso actuales del sistema. La evaluación abarcará un período de tres meses, de junio de 20XX a agosto de 20XX. El análisis de riesgos del sistema de información se basa en la norma NIST SP 800-30 Rev. 1.

### Propósito

**Preguntas clave:**

- ¿Qué valor tiene el servidor de bases de datos para la empresa?
- ¿Por qué es importante para la empresa proteger los datos del servidor?
- ¿Cómo podría afectar el servidor a la empresa si se deshabilita?

---

## Evaluación de riesgos

| Fuente de amenaza | Evento de amenaza                            | Probabilidad | Gravedad | Riesgo |
|-------------------|-----------------------------------------------|--------------|----------|--------|
| E.g. Competitor   | Obtain sensitive information via exfiltration | 1            | 3        | 3      |

*(Espacio para más entradas según análisis realizado)*

---

## Enfoque

Los riesgos consideraron los métodos de almacenamiento y gestión de datos de la empresa. La probabilidad de ocurrencia de una amenaza y el impacto de estos posibles eventos se sopesaron frente a los riesgos para las necesidades operativas diarias.

---

## Estrategia de remediación

Implementación de mecanismos de autenticación, autorización y auditoría para garantizar que solo los usuarios autorizados accedan al servidor de la base de datos. Esto incluye el uso de contraseñas seguras, controles de acceso basados ​​en roles y autenticación multifactor para limitar los privilegios de los usuarios. Cifrado de datos en movimiento mediante TLS en lugar de SSL. Listado de direcciones IP permitidas en las oficinas corporativas para evitar que usuarios aleatorios de internet se conecten a la base de datos.

---

## Ejemplo de actividad: Analizar ataques a la red

### Section 1: Identify the type of attack that may have caused this network interruption  
### Sección 1: Identifique el tipo de ataque que pudo haber causado esta interrupción de la red

One potential explanation for the website’s connection timeout error message is a DoS attack. The logs show that the web server stops responding after it is overloaded with SYN packet requests. This event could be a type of DoS attack called SYN flooding.  
Una posible explicación del mensaje de error de tiempo de conexión agotado del sitio web es un ataque DoS. Los registros muestran que el servidor web deja de responder tras una sobrecarga con solicitudes de paquetes SYN. ​​Este evento podría ser un tipo de ataque DoS llamado inundación SYN.

---

### Section 2: Explain how the attack is causing the website malfunction  
### Sección 2: Explique cómo el ataque está provocando el mal funcionamiento del sitio web

When the website visitors try to establish a connection with the web server, a three-way handshake occurs using the TCP protocol. The handshake consists of three steps:

- A SYN packet is sent from the source to the destination, requesting to connect.  
- The destination replies to the source with a SYN-ACK packet to accept the connection request. The destination will reserve resources for the source to connect.  
- A final ACK packet is sent from the source to the destination acknowledging the permission to connect.  

In the case of a SYN flood attack, a malicious actor will send a large number of SYN packets all at once, which overwhelms the server’s available resources to reserve for the connection. When this happens, there are no server resources left for legitimate TCP connection requests.  
The logs indicate that the web server has become overwhelmed and is unable to process the visitors’ SYN requests. The server is unable to open a new connection to new visitors who receive a connection timeout message.

---

Cuando los visitantes del sitio web intentan establecer una conexión con el servidor web, se produce un protocolo de enlace de tres vías mediante el protocolo TCP. Este protocolo consta de tres pasos:

- Se envía un paquete SYN del origen al destino solicitando la conexión.  
- El destino responde al origen con un paquete SYN-ACK para aceptar la solicitud de conexión. El destino reserva recursos para que el origen se conecte.  
- Se envía un paquete ACK final del origen al destino confirmando el permiso de conexión.  

En caso de un ataque de inundación SYN, un atacante malicioso envía una gran cantidad de paquetes SYN a la vez, lo que desborda los recursos disponibles del servidor para la conexión. Cuando esto sucede, no quedan recursos del servidor para solicitudes de conexión TCP legítimas.  
Los registros indican que el servidor web está saturado y no puede procesar las solicitudes SYN de los visitantes. El servidor no puede abrir una nueva conexión a los nuevos visitantes que reciben un mensaje de tiempo de espera de conexión.
