

# Categorías de control

Los controles dentro de la ciberseguridad se agrupan en tres categorías principales:

- Controles administrativos/gerenciales
- Controles técnicos
- Controles físicos/operativos

## Controles administrativos/gerenciales

Abordan el componente humano de la ciberseguridad. Incluyen políticas y procedimientos que definen cómo una organización administra los datos y asigna responsabilidades al personal.

| Nombre del control                         | Tipo de control | Propósito del control                                                                 |
|--------------------------------------------|-----------------|--------------------------------------------------------------------------------------|
| Privilegio mínimo                          | Preventivo      | Reducir el riesgo y el impacto general de cuentas comprometidas o de usuarios malintencionados |
| Planes de recuperación ante desastres      | Correctivo      | Proporcionar continuidad comercial                                                   |
| Políticas de contraseñas                   | Preventivo      | Reducir la probabilidad de que la cuenta se vea comprometida mediante técnicas de ataque de diccionario o fuerza bruta |
| Políticas de control de acceso             | Preventivo      | Reforzar la confidencialidad e integridad definiendo qué grupos pueden acceder o modificar los datos |
| Políticas de administración de cuentas     | Preventivo      | Administrar el ciclo de vida de la cuenta, reducir la superficie de ataque y limitar el impacto de ex empleados o cuentas predeterminadas |
| Separación de funciones                    | Preventivo      | Reducir el riesgo y el impacto general de las cuentas comprometidas o de usuarios malintencionados |

## Controles técnicos

Consisten en soluciones como firewalls, IDS/IPS, cifrado, antivirus, etc.

| Nombre del control                         | Tipo de control | Propósito del control                                                                 |
|--------------------------------------------|-----------------|--------------------------------------------------------------------------------------|
| Firewall                                   | Preventivo      | Filtrar tráfico no deseado o malicioso que ingresa a la red                           |
| IDS/IPS                                    | Detective       | Detectar y prevenir tráfico anómalo que coincide con una firma o regla               |
| Encriptación                               | Disuasoria      | Brindar confidencialidad a la información sensible                                   |
| Copias de seguridad                        | Correctivo      | Restaurar o recuperarse de un evento                                                 |
| Gestión de contraseñas                     | Preventivo      | Reducir la fatiga de contraseñas                                                     |
| Software antivirus (AV)                    | Preventivo      | Analizar para detectar y poner en cuarentena amenazas conocidas                      |
| Supervisión, mantenimiento e intervención manual | Preventivo  | Identificar y gestionar amenazas, riesgos o vulnerabilidades en sistemas obsoletos    |

## Controles físicos/operativos

Se utilizan para limitar el acceso físico a activos por parte de personal no autorizado.

| Nombre del control                         | Tipo de control | Propósito del control                                                                 |
|--------------------------------------------|-----------------|--------------------------------------------------------------------------------------|
| Caja fuerte controlada por tiempo          | Disuasoria      | Reducir la superficie de ataque e impacto de amenazas físicas                        |
| Iluminación adecuada                       | Disuasoria      | Disuadir amenazas limitando lugares de "escondite"                                   |
| Circuito cerrado de televisión (CCTV)      | Preventivo/Detective | Reducir riesgos y permitir revisiones posteriores                                    |
| Armarios con cerradura (para equipo de red) | Preventivo      | Evitar acceso/modificación física no autorizada a la infraestructura                 |
| Señalización del proveedor del sistema de alarma | Disuasivo | Disuadir amenazas al hacer parecer bajo el éxito de un ataque                        |
| Cerraduras                                 | Disuasivo/Preventivo | Disuadir y prevenir el acceso físico no autorizado                                  |
| Sistemas contra incendios (alarma, rociadores, etc.) | Detección/Preventivo | Detectar incendios y proteger activos físicos (servidores, inventario, etc.) |

## Recomendaciones para el Departamento de TI

### Controles Administrativos / Gerenciales

| Control                         | Recomendación                                                                      |
|---------------------------------|------------------------------------------------------------------------------------|
| Privilegio mínimo               | Aplicar RBAC y auditorías periódicas de permisos.                                  |
| Planes de recuperación          | Probar el plan anualmente. Asegurar redundancia geográfica.                        |
| Políticas de contraseñas        | Usar MFA, complejidad obligatoria, expiración y bloqueo tras intentos fallidos.    |
| Control de acceso               | Usar sistemas centralizados (ej. Active Directory) y auditar permisos.             |
| Gestión de cuentas              | Automatizar ciclo de vida de cuentas. Desactivar cuentas inactivas.                |
| Separación de funciones         | Separar tareas críticas y usar cuentas diferenciadas para administración.         |

### Controles Técnicos

| Control                         | Recomendación                                                                      |
|---------------------------------|------------------------------------------------------------------------------------|
| Firewall                        | Aplicar reglas estrictas, segmentar redes, documentar cambios.                     |
| IDS/IPS                         | Mantener firmas actualizadas, revisar alertas y patrones de comportamiento.       |
| Encriptación                    | Usar TLS 1.2/1.3 y AES-256. Gestionar claves de forma segura.                     |
| Copias de seguridad             | Automatizar backups diarios, probar restauraciones semanalmente, almacenar copias off-site o en la nube. |
| Gestión de contraseñas          | Usar gestores corporativos (Bitwarden, 1Password). Capacitar al personal.         |
| Antivirus                       | Mantener actualizado, integrar con SIEM si existe.                                |
| Supervisión y mantenimiento     | Parchar según calendario, monitorizar con herramientas como Zabbix, Nagios, Prometheus. |

### Controles Físicos / Operativos

| Control                         | Recomendación                                                                      |
|---------------------------------|------------------------------------------------------------------------------------|
| Caja fuerte controlada          | Guardar backups físicos en cajas con acceso restringido y registro.               |
| Iluminación adecuada            | Mejorar iluminación en áreas críticas, usar sensores de movimiento.                |
| CCTV                            | Verificar grabación 24/7, conservar registros 30 días, revisar ante incidentes.    |
| Armarios con cerradura          | Usar racks cerrados y controlar acceso físico.                                     |
| Señalización de alarma          | Señalizar visiblemente, cumplir normativas del proveedor.                         |
| Cerraduras                      | Usar electrónicas con acceso por tarjeta/huella. Cambiar claves tras movimientos de personal. |
| Sistemas contra incendios       | Verificar funcionamiento regularmente. Usar gas inerte en salas con servidores.   |
