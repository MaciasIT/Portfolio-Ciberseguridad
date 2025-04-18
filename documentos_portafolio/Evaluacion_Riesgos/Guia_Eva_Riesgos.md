# NIST SP 800-30 Rev. 1

## Guía para la evaluación de riesgos

**NIST SP 800-30** es una publicación que ofrece orientación sobre la realización de evaluaciones de riesgos. Describe estrategias para identificar, analizar y remediar riesgos. Las organizaciones utilizan NIST SP 800-30 para comprender la **probabilidad** y la **gravedad** de los riesgos, lo que les ayuda a tomar decisiones informadas sobre la asignación de recursos, la implementación de controles y la priorización de las medidas de remediación.

Este documento de cuatro páginas es una adaptación de **NIST SP 800-30 Rev. 1**. El término *"Rev. 1"* significa que es la primera versión actualizada de esta publicación. El NIST revisa ocasionalmente sus documentos para incorporar nueva información, reflejar cambios en la tecnología y los requisitos regulatorios, o atender comentarios.

> **Nota:** El Centro de Recursos de Seguridad Informática del NIST contiene más información sobre SP 800-30 Rev. 1.

---

## Fuentes de amenazas

La norma NIST SP 800-30 define y clasifica las **fuentes de amenazas** como entidades o circunstancias que pueden afectar negativamente a los sistemas de información de una organización. Esta información es útil para identificar y evaluar riesgos potenciales. Al consultarla, considere la **intención** y las **capacidades** de las fuentes de amenazas internas y externas.

> **Nota:** La siguiente tabla enumera algunas posibles fuentes de amenazas que podrían comprometer un servidor de base de datos de acceso público.

| Tipo              | Ejemplos                    | Descripción |
|-------------------|-----------------------------|-------------|
| Usuario estándar  | Empleado, Cliente            | Amenazas derivadas de individuos o grupos que podrían explotar recursos cibernéticos, ya sea intencional o accidentalmente. Por ejemplo, podrían alterar datos o robar información. |
| Usuario privilegiado | Administrador del sistema |  |
| Grupo             | Competidor, Proveedor, Socio comercial |  |
| Estado-nación     |                              |  |
| Foráneo           | Hacker, Hacktivista, APT     |  |
| Hardware          | Almacenamiento, Procesamiento, Comunicaciones | Amenazas que se originan por factores no humanos, como fallas de equipos. |
| Software          | Sistemas operativos, Redes, Malware |  |
| Entorno operativo | Control de temperatura, humedad, alimentación | Amenazas derivadas de factores accidentales y no humanos. |
| Riesgos naturales | Cortes de energía, Clima extremo |  |

---

## Eventos de amenaza

La norma NIST SP 800-30 define y categoriza los **eventos de amenaza** como instancias reales en las que una fuente de amenaza explota una vulnerabilidad y causa daños o perjuicios a los sistemas de información de una organización. Esta información es útil para comprender mejor los tipos de riesgos a los que se enfrentan los activos.

> **Nota:** La siguiente tabla enumera solo algunos posibles eventos de amenaza que podrían comprometer un servidor de base de datos de acceso público.

| Ejemplo | Descripción |
|---------|-------------|
| Realizar reconocimiento y vigilancia de la organización | Uso de herramientas como escaneo o vigilancia física para evaluar vulnerabilidades. |
| Obtener información sensible mediante exfiltración | Instalación de malware para adquirir datos confidenciales. |
| Modificar o eliminar información crítica | Alteración de datos clave para las operaciones. |
| Falsificación de certificados | Compromiso de una CA para hacer conexiones aparentes legítimas. |
| Instalar rastreadores de red persistentes | Software espía que rastrea el tráfico durante largos períodos. |
| Ataques de denegación de servicio (DoS) | Saturación del sistema mediante solicitudes automatizadas. |
| Interrupción de operaciones críticas | Compromiso de la integridad de la información empresarial. |
| Ofuscación de ataques futuros | Ocultamiento de actividades maliciosas ante sistemas de monitoreo. |
| Ataques de tipo "hombre en el medio" | Intercepción de comunicaciones entre sistemas internos y externos. |

---

## Probabilidad de un evento de amenaza

En general, la **probabilidad** de un evento de amenaza debe calcularse como una puntuación basada en una combinación de factores: evidencia disponible, experiencia previa y juicio experto. Se deben considerar la intención y las capacidades de la fuente de amenaza, así como los eventos potenciales.

| Valor cualitativo | Valor cuantitativo | Descripción |
|-------------------|--------------------|-------------|
| Alta              | 3                  | Es casi seguro que ocurra un evento con efectos graves o catastróficos. |
| Moderada          | 2                  | Probable que ocurra, con efectos significativos. |
| Baja              | 1                  | Muy improbable, con efectos mínimos. |

---

## Gravedad de un evento de amenaza

La **gravedad** mide el impacto potencial de un evento en las operaciones comerciales. Por ejemplo:

- ¿Podría detener completamente una función crítica?
- ¿Podría pasar desapercibido pero interrumpir procesos?

Se debe evaluar el **impacto comercial** para generar una puntuación adecuada de gravedad.

---

