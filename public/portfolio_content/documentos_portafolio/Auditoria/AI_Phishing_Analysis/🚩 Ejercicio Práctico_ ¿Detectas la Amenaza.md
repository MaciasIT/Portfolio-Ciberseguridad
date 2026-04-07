## **🚩 Ejercicio Práctico: ¿Detectas la Amenaza?**

**Contexto:** Imagina que recibes el siguiente correo un martes por la mañana. Parece provenir del Departamento de Recursos Humanos o Finanzas.

### **El Correo Sospechoso**

**De:** Nómina Empresa \<no-reply@empręsa.com\> **Asunto:** ACTUALIZACIÓN OBLIGATORIA: Nueva Política de Retribución Flexible 2026

**Estimado empleado,**

Tras la reciente auditoría bajo el marco ISO 27001, hemos actualizado el portal de beneficios y nóminas. Para asegurar que tu próximo pago de enero se procese correctamente con las nuevas deducciones fiscales, es **imprescindible** que valides tus datos bancarios en las próximas 24 horas.

De lo contrario, tu pago podría quedar retenido hasta el próximo ciclo de facturación.

Puedes acceder al portal seguro aquí: [👉 ACCEDER AL PORTAL DE EMPLEADO](https://www.google.com/search?q=https://nomina-empresa-security-portal.net/login)

Atentamente, **Departamento de Recursos Humanos y Gestión de Talento.** *Este es un mensaje automático, por favor no responda.*

---

### **🔍 Solución del Ejercicio: Las 4 Banderas Rojas**

Si usas este ejemplo en tu presentación, destaca estos puntos clave para entrenar el ojo del equipo:

1. **El Dominio "Cousin Domain":** Fíjate bien en el emisor: `empręsa.com`. Esa **"ę"** (e con colita) es un carácter especial. A simple vista parece el correo oficial, pero redirige a un servidor del atacante.  
2. **Urgencia y Amenaza:** El mensaje utiliza una técnica de ingeniería social clásica: *"Tu pago podría quedar retenido"*. El miedo bloquea el pensamiento crítico y empuja a hacer clic rápido.  
3. **Enlace Engañoso:** Si pasas el ratón (hover) sobre el botón, verás que la URL real es `nomina-empresa-security-portal.net`. Las empresas suelen usar subdominios de su web oficial (ej. `beneficios.empresa.com`), no dominios nuevos terminados en `.net` o `.org`.  
4. **Falta de Personalización Real:** Aunque está bien escrito (gracias a la IA), el correo es genérico ("Estimado empleado"). Un cambio tan crítico en la nómina normalmente vendría precedido por un anuncio oficial en la intranet o una reunión de departamento.

---

### **💡 Consejo Pro para tu Guía:**

Diles que apliquen la **Regla de los 3 Segundos**: Antes de hacer clic, respira, mira el remitente letra por letra y pasa el ratón sobre el enlace. Si algo se siente "raro", es probable que lo sea.

