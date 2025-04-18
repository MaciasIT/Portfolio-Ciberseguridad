# Aplicar filtros a consultas SQL

## Descripción del proyecto

### Descripción General del Proyecto:
El proyecto involucra el diseño y ejecución de consultas SQL en una base de datos relacional para gestionar y recuperar información clave de dos tablas principales: `log_in_attempts` (intentos de inicio de sesión) y `employees` (empleados de la organización). A través de estas consultas, se busca recuperar datos relevantes para el análisis de seguridad y administración de la organización, permitiendo a los administradores obtener información precisa y útil sobre los empleados y los intentos de acceso a los sistemas.

### Objetivos del Proyecto:
- **Recuperación de intentos de inicio de sesión fallidos:** Permitir a los administradores de sistemas monitorear y rastrear accesos no autorizados para tomar medidas preventivas de seguridad.
- **Filtrado de datos de inicio de sesión según fechas específicas:** Proporcionar flexibilidad para filtrar y analizar los intentos de inicio de sesión en períodos concretos, facilitando la investigación de incidentes o la auditoría de accesos.
- **Recuperación de registros de inicio de sesión fuera de México:** Filtrar los intentos de inicio de sesión realizados fuera de la localización habitual de los empleados (en este caso, fuera de México), para identificar posibles accesos sospechosos desde ubicaciones no autorizadas.
- **Gestión de empleados por departamento:** Facilitar la recuperación de empleados pertenecientes a departamentos específicos (por ejemplo, Marketing, Finanzas, Ventas, etc.) o excluir a aquellos que pertenecen a departamentos no deseados, como TI, para realizar análisis o gestionar permisos y accesos de manera más eficiente.
- **Consultas complejas para obtener información específica:** Utilizar operadores SQL para filtrar datos por múltiples criterios, como departamento, ubicación de oficina o fecha de evento, permitiendo obtener información más detallada y relevante para la toma de decisiones.

### Herramientas y Tecnologías Utilizadas:
- **MariaDB/MySQL:** Sistema de gestión de bases de datos relacionales para almacenar la información de empleados e intentos de inicio de sesión.
- **SQL (Structured Query Language):** Lenguaje utilizado para realizar las consultas de filtrado, actualización y recuperación de datos de las tablas en la base de datos.

### Funcionalidades:
- **Consultas SQL básicas:** Recuperación de datos específicos de empleados y registros de inicio de sesión mediante filtros simples (por ejemplo, departamento, país).
- **Filtrado por condiciones complejas:** Uso de operadores como `IN`, `!=`, `AND`, `OR`, entre otros, para crear filtros avanzados.
- **Análisis de seguridad:** Permite a los administradores identificar intentos de inicio de sesión fallidos, posibles accesos no autorizados y otros eventos de seguridad.
- **Optimización para auditorías:** Ayuda en la auditoría de acceso a sistemas al permitir recuperar registros filtrados por fecha, país, tipo de acceso y más.

### Casos de Uso:
- **Auditoría de acceso:** El administrador puede consultar los intentos de inicio de sesión fallidos para identificar intentos de acceso no autorizado.
- **Seguridad de datos:** Filtrar intentos de inicio de sesión fuera del país de origen de la mayoría de los empleados (por ejemplo, fuera de México), ayudando a identificar posibles ataques externos.
- **Gestión de recursos humanos:** Recuperar información de empleados por departamento o por oficina para gestionar permisos y recursos de manera eficiente.

### Ejemplo de Consultas:
- **Recuperar un inicio de sesión fallido:**

```sql
SELECT * FROM log_in_attempts WHERE success = FALSE;
