# SQL & Linux - Documentación
**Autor:** Michel Macias con Antigravity

Esta sección contiene documentación práctica sobre consultas SQL aplicadas a ciberseguridad y gestión de sistemas Linux.

## 📚 Contenido Disponible

### SQL para Ciberseguridad

Los siguientes documentos PDF contienen información detallada sobre el uso de SQL en contextos de seguridad:

1. **Consultas SQL en Ciberseguridad** - [`Consultas_SQL_Ciberseguridad.pdf`](Consultas_SQL_Ciberseguridad.pdf)
   - Consultas básicas y avanzadas
   - Filtrado de datos de seguridad
   - Análisis de logs con SQL

2. **Aplicando Filtros SQL** - [`Aplicando filtros SQL.pdf`](Aplicando%20filtros%20SQL.pdf)
   - Técnicas de filtrado avanzado
   - Operadores lógicos y de comparación
   - Optimización de consultas

3. **SQL Avanzado para Ciberseguridad** - [`Doc AIStudio SQL avanzado ciber.pdf`](Doc%20AIStudio%20SQL%20avanzado%20ciber.pdf)
   - Joins y subconsultas
   - Agregaciones y funciones
   - Análisis de datos de seguridad

4. **Ejercicio Online** - [`Ejercicio Online.pdf`](Ejercicio%20Online.pdf)
   - Ejercicios prácticos
   - Casos de uso reales
   - Soluciones comentadas

5. **Portfolio SQL & Filtros** - [`Portfolio Ciberseguridad. SQL & Filtros-1.pdf`](Portfolio%20Ciberseguridad.%20SQL%20%26%20Filtros-1.pdf)
   - Ejemplos de portfolio
   - Proyectos demostrativos
   - Mejores prácticas

## 🎯 Aplicaciones en Ciberseguridad

### Análisis de Logs
SQL es fundamental para analizar logs de sistemas y aplicaciones:
- Búsqueda de patrones de ataque
- Identificación de anomalías
- Correlación de eventos de seguridad

### Gestión de Bases de Datos
- Consultas de auditoría
- Verificación de integridad de datos
- Detección de inyecciones SQL

### Investigación Forense
- Extracción de evidencias
- Análisis temporal de eventos
- Reconstrucción de incidentes

## 🐧 Linux en Ciberseguridad

### Gestión de Permisos
- Comandos `chmod`, `chown`, `chgrp`
- Permisos especiales (SUID, SGID, Sticky bit)
- ACLs (Access Control Lists)

### Análisis de Logs del Sistema
- `/var/log/auth.log` - Autenticación
- `/var/log/syslog` - Sistema general
- `/var/log/apache2/` - Servidor web

### Comandos Útiles
```bash
# Buscar archivos modificados recientemente
find /var/log -mtime -1

# Analizar intentos de login fallidos
grep "Failed password" /var/log/auth.log

# Monitorear conexiones de red
netstat -tulpn
ss -tulpn

# Verificar procesos sospechosos
ps aux | grep -v root
```

## 📖 Recursos Adicionales

Para acceder a los documentos PDF completos, consulta la carpeta:
`/src/portfolio_content/documentos_portafolio/SQL_Linux/`

## 🔗 Temas Relacionados

- **Auditoría de Sistemas**: Verificación de configuraciones
- **Hardening**: Securización de servidores Linux
- **Análisis de Vulnerabilidades**: Detección de fallos de seguridad
- **Gestión de Riesgos**: Evaluación de amenazas en bases de datos
