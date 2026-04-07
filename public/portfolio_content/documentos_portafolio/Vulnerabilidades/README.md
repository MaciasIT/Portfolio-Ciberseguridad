# Vulnerabilidades - OWASP Top 10
**Autor:** Michel Macias con Antigravity

Esta sección contiene documentación sobre las vulnerabilidades más críticas en aplicaciones web según el proyecto OWASP (Open Web Application Security Project).

## 📚 Contenido Disponible

### El OWASP Top 10

El documento [**"El OWASP Top 10.pdf"**](/Portfolio-Ciberseguridad/pdfs/vulnerabilidades/El%20OWASP%20Top%2010.pdf) contiene información detallada sobre las 10 vulnerabilidades de seguridad más críticas en aplicaciones web.

## 🔐 OWASP Top 10 (2021)

### 1. **A01:2021 – Broken Access Control**
Control de acceso roto que permite a usuarios no autorizados acceder a recursos protegidos.

**Ejemplos:**
- Acceso a URLs sin autorización
- Modificación de parámetros para acceder a datos de otros usuarios
- Elevación de privilegios

**Mitigación:**
- Implementar control de acceso basado en roles (RBAC)
- Denegar acceso por defecto
- Validar permisos en cada solicitud

---

### 2. **A02:2021 – Cryptographic Failures**
Fallos en la implementación de criptografía que exponen datos sensibles.

**Ejemplos:**
- Transmisión de datos sin cifrado (HTTP en lugar de HTTPS)
- Uso de algoritmos de cifrado débiles
- Almacenamiento de contraseñas en texto plano

**Mitigación:**
- Usar TLS/SSL para todas las comunicaciones
- Implementar algoritmos de cifrado fuertes (AES-256)
- Hash de contraseñas con bcrypt o Argon2

---

### 3. **A03:2021 – Injection**
Inyección de código malicioso en consultas o comandos.

**Tipos:**
- **SQL Injection**: Inyección en consultas SQL
- **Command Injection**: Ejecución de comandos del sistema
- **LDAP Injection**: Manipulación de consultas LDAP

**Ejemplo de SQL Injection:**
```sql
-- Consulta vulnerable
SELECT * FROM users WHERE username = '$username' AND password = '$password'

-- Ataque
username: admin' OR '1'='1' --
password: cualquiera
```

**Mitigación:**
- Usar consultas preparadas (Prepared Statements)
- Validar y sanitizar todas las entradas
- Implementar ORM (Object-Relational Mapping)

---

### 4. **A04:2021 – Insecure Design**
Diseño inseguro que no considera amenazas de seguridad desde el inicio.

**Mitigación:**
- Threat modeling durante el diseño
- Principio de mínimo privilegio
- Defensa en profundidad

---

### 5. **A05:2021 – Security Misconfiguration**
Configuraciones de seguridad incorrectas o por defecto.

**Ejemplos:**
- Credenciales por defecto no cambiadas
- Mensajes de error detallados en producción
- Servicios innecesarios habilitados

**Mitigación:**
- Hardening de sistemas
- Deshabilitar funciones no utilizadas
- Actualizar regularmente

---

### 6. **A06:2021 – Vulnerable and Outdated Components**
Uso de componentes con vulnerabilidades conocidas.

**Mitigación:**
- Mantener dependencias actualizadas
- Usar herramientas de escaneo de vulnerabilidades
- Eliminar componentes no utilizados

---

### 7. **A07:2021 – Identification and Authentication Failures**
Fallos en autenticación y gestión de sesiones.

**Ejemplos:**
- Fuerza bruta sin limitación
- Sesiones que no expiran
- Contraseñas débiles permitidas

**Mitigación:**
- Implementar MFA (Multi-Factor Authentication)
- Políticas de contraseñas fuertes
- Limitación de intentos de login

---

### 8. **A08:2021 – Software and Data Integrity Failures**
Fallos en la integridad de software y datos.

**Ejemplos:**
- Actualizaciones sin verificación de firma
- Deserialización insegura
- CI/CD sin controles de seguridad

**Mitigación:**
- Verificar firmas digitales
- Implementar controles en pipelines CI/CD
- Validar integridad de datos

---

### 9. **A09:2021 – Security Logging and Monitoring Failures**
Falta de registro y monitoreo de eventos de seguridad.

**Mitigación:**
- Implementar logging completo
- Monitoreo en tiempo real
- Alertas de eventos sospechosos
- Retención adecuada de logs

---

### 10. **A10:2021 – Server-Side Request Forgery (SSRF)**
Forzar al servidor a realizar solicitudes no autorizadas.

**Ejemplo:**
```
http://vulnerable-site.com/fetch?url=http://internal-server/admin
```

**Mitigación:**
- Validar y sanitizar URLs
- Whitelist de dominios permitidos
- Segmentación de red

---

## 🛡️ Mejores Prácticas Generales

### Desarrollo Seguro
1. **Security by Design**: Considerar seguridad desde el diseño
2. **Principio de Mínimo Privilegio**: Dar solo los permisos necesarios
3. **Defensa en Profundidad**: Múltiples capas de seguridad
4. **Fail Securely**: Fallar de forma segura

### Testing
- **SAST** (Static Application Security Testing)
- **DAST** (Dynamic Application Security Testing)
- **Penetration Testing**
- **Code Reviews** enfocados en seguridad

### Recursos de Aprendizaje
- [OWASP Official Website](https://owasp.org)
- [OWASP Top 10 Project](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

---

## 📖 Documento Completo

Para información más detallada, consulta el documento PDF completo:
`/src/portfolio_content/documentos_portafolio/Vulnerabilidades/El OWASP Top 10.pdf`

---

## 🔗 Temas Relacionados

- **Pentesting**: Pruebas de penetración
- **Secure Coding**: Programación segura
- **Web Application Firewalls (WAF)**: Protección de aplicaciones web
- **Bug Bounty Programs**: Programas de recompensas por vulnerabilidades
