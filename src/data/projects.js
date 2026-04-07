// Metadata de proyectos y scripts de ciberseguridad

export const projects = [
    {
        id: 'vuln-red-cisco',
        title: 'Auditoría de Vulnerabilidades de Red',
        description: 'Análisis técnico detallado sobre vulnerabilidades de red basado en el marco de Cisco Ethical Hacker. Incluye auditorías de Active Directory, SMB, DNS Poisoning, Pass-the-Hash, Kerberoasting y SSL Stripping.',
        category: 'Auditorías Técnicas',
        technologies: ['Kali Linux', 'Active Directory', 'Wireshark', 'Metasploit'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-red',
        featured: true,
        status: 'DOCUMENTADO',
        lab: {
            objective: "Comprender los vectores de ataque en entornos de red corporativos y la importancia de la segmentación.",
            methodology: "Simulación de entorno Active Directory, captura de tráfico con Wireshark y explotación controlada de protocolos inseguros.",
            learning: "La seguridad de red no es solo perimetral; la configuración interna de protocolos es el eslabón más crítico."
        },
        highlights: [
            'Auditoría Active Directory',
            'Análisis Kerberoasting',
            'Mitigación DNS Poisoning',
            'Seguridad en Capas 2 y 3'
        ]
    },
    {
        id: 'vuln-apps-cisco',
        title: 'Auditoría de Aplicaciones Web (OWASP)',
        description: 'Evaluación de seguridad en aplicaciones web siguiendo la metodología OWASP Top 10. Pruebas de penetración con Burp Suite, escaneo de vulnerabilidades con Nikto/GVM y análisis de sesiones.',
        category: 'Auditorías Técnicas',
        technologies: ['Kali Linux', 'Docker', 'Burp Suite', 'Nikto', 'GVM'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-aplicaciones',
        featured: true,
        status: 'DOCUMENTADO',
        lab: {
            objective: "Identificar y mitigar las 10 vulnerabilidades más críticas en aplicaciones web según el estándar OWASP.",
            methodology: "Uso de proxies de interceptación (Burp Suite) para manipular peticiones y análisis estático/dinámico de código.",
            learning: "La validación de entrada en el lado del servidor es la defensa más robusta contra inyecciones."
        },
        highlights: [
            'Metodología OWASP Top 10',
            'Escaneo de Vulnerabilidades',
            'Análisis de Sesiones Web',
            'Informe Técnico de Pentesting'
        ]
    },
    {
        id: 'cisco-lab-beef-xss',
        title: 'Análisis de Post-Explotación: Hooking BeEF',
        description: 'Laboratorio técnico sobre vectores de ataque XSS persistentes y control de navegadores mediante BeEF. Demostración de riesgos y estrategias de mitigación en entornos corporativos.',
        category: 'Auditorías Técnicas',
        technologies: ['BeEF', 'Kali Linux', 'XSS', 'Post-Exploitation'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Cisco_Labs/Memoria_Lab_4.4_BeEF_XSS_Hooking.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Análisis de Vectores XSS',
            'Control de Navegadores',
            'Riesgos de Post-Explotación',
            'Estrategias de Mitigación'
        ]
    },
    {
        id: 'cisco-lab-set-phishing',
        title: 'Auditoría de Ingeniería Social con SET',
        description: 'Simulación controlada de ataques de ingeniería social utilizando Social-Engineer Toolkit (SET). Evaluación de la concienciación del usuario y robustez de los controles de acceso.',
        category: 'Auditorías Técnicas',
        technologies: ['SET', 'Social Engineering', 'Credential Harvesting', 'Cloning'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Cisco_Labs/Memoria_Lab_4.3_SET_Credential_Harvester.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Social-Engineer Toolkit',
            'Análisis de Credenciales',
            'Simulación de Phishing',
            'Evaluación de Riesgos'
        ]
    },
    {
        id: 'cisco-lab-industrial-scanning',
        title: 'Auditoría de Sistemas Industriales (ICS/SCADA)',
        description: 'Evaluación de seguridad en infraestructuras críticas y sistemas de control industrial. Identificación de protocolos inseguros y vectores de ataque en redes SCADA.',
        category: 'Auditorías Técnicas',
        technologies: ['Nmap', 'ICS/SCADA', 'Vulnerability Scanning', 'Nessus'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Cisco_Labs/Memoria_Lab_3.3.1_Industrial_Scanning.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Seguridad en Redes ICS',
            'Protocolos Industriales',
            'Auditoría SCADA',
            'Análisis de Superficie de Ataque'
        ]
    },
    {
        id: 'cisco-lab-dns-recon',
        title: 'Reconocimiento y Enumeración DNS',
        description: 'Análisis técnico de infraestructura DNS. Uso de herramientas para la enumeración de registros y detección de configuraciones inseguras (transferencia de zona).',
        category: 'Auditorías Técnicas',
        technologies: ['DNSrecon', 'Dig', 'Nmap', 'Information Gathering'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Cisco_Labs/Memoria_Lab_3.1.2_DNS_Recon.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Enumeración de Registros',
            'Análisis de Transferencia de Zona',
            'Footprinting de Infraestructura',
            'Detección de Subdominios'
        ]
    },

    {
        id: 'auditoria-seguridad-controls',
        title: 'Marco de Controles de Seguridad',
        description: 'Guía técnica sobre la implementación de controles de seguridad en capas (Administrativos, Técnicos y Físicos) para una estrategia de defensa en profundidad.',
        category: 'Auditoría',
        technologies: ['Security Controls', 'Defense in Depth', 'Access Control', 'Physical Security'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/Auditoria_Seguridad.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Controles Administrativos',
            'Seguridad Física',
            'Defensa en Profundidad',
            'Gestión de Accesos'
        ]
    },
    {
        id: 'web-vuln-scanner',
        title: 'Analizador de Vulnerabilidades Web',
        description: 'Herramienta profesional de auditoría web con motor headless, crawler asíncrono y evasión de WAF. Genera reportes técnicos detallados sobre SQLi, XSS y RCE.',
        category: 'Seguridad Defensiva',
        technologies: ['Python', 'Playwright', 'Streamlit', 'aiohttp', 'Asyncio'],
        repoUrl: 'https://github.com/Michel-Macias/Escaner-de-vulnerabilidades-web',
        featured: true,
        highlights: [
            'Motor Headless (Playwright)',
            'Evasión de WAF (Stealth Mode)',
            'Reportes Técnicos PDF',
            'Detección de Vulnerabilidades Críticas'
        ]
    },
    {
        id: 'port-scanner',
        title: 'Escáner de Puertos Técnico',
        description: 'Herramienta de auditoría de red para el descubrimiento de servicios y puertos abiertos. Implementación robusta con manejo de timeouts y concurrencia.',
        category: 'Herramientas',
        technologies: ['Python', 'Socket Programming', 'CLI'],
        filePath: '/code/programacion/port_scanner.py',
        language: 'python',
        featured: true,
        highlights: [
            'Descubrimiento de Servicios',
            'CLI con argparse',
            'Optimización de Timeouts',
            'Manejo de Errores Robusto'
        ]
    },
    {
        id: 'log-analyzer',
        title: 'Analizador de Logs de Seguridad',
        description: 'Herramienta de análisis forense y detección de intrusiones basada en logs. Identifica patrones de ataque SQLi, XSS e inyección de comandos en servidores web.',
        category: 'Herramientas',
        technologies: ['Python', 'Regex', 'Security Analysis'],
        filePath: '/code/programacion/log_analyzer.py',
        language: 'python',
        featured: true,
        highlights: [
            'Detección de Amenazas Web',
            'Análisis Forense de Logs',
            'Expresiones Regulares Avanzadas',
            'Reporte de Incidentes'
        ]
    },
    {
        id: 'harden-linux',
        title: 'Automatización de Hardening Linux',
        description: 'Script profesional para la securización de servidores Debian/Ubuntu. Implementa actualizaciones críticas, configuración SSH endurecida y gestión de firewall.',
        category: 'Hardening',
        technologies: ['Bash', 'Linux', 'SSH', 'UFW'],
        filePath: '/code/programacion/harden_linux.sh',
        language: 'bash',
        featured: true,
        highlights: [
            'Securización de SSH',
            'Gestión de Firewall UFW',
            'Actualizaciones Automáticas',
            'Políticas de Usuarios'
        ]
    },
    {
        id: 'harden-windows',
        title: 'Automatización de Hardening Windows',
        description: 'Script de PowerShell para la auditoría y aplicación de configuraciones de seguridad en entornos Windows. Gestión de Defender, UAC y protocolos inseguros.',
        category: 'Hardening',
        technologies: ['PowerShell', 'Windows', 'Security'],
        filePath: '/code/programacion/harden_windows.ps1',
        language: 'powershell',
        featured: true,
        highlights: [
            'Configuración de Defender',
            'Control de Cuentas (UAC)',
            'Deshabilitación de SMBv1',
            'Auditoría de Políticas'
        ]
    },
    {
        id: 'botium-toys',
        title: 'Auditoría de Seguridad: Botium Toys',
        description: 'Análisis integral de riesgos y auditoría de cumplimiento para Botium Toys. Evaluación de controles de seguridad y recomendaciones estratégicas de mejora.',
        category: 'Auditoría',
        technologies: ['Risk Assessment', 'Compliance', 'Security Controls'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/Botium_Toys_Alcance_objetivos_e_informe.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Evaluación de Riesgos',
            'Análisis de Cumplimiento',
            'Controles de Seguridad',
            'Recomendaciones Estratégicas'
        ]
    },
    {
        id: 'pentest-planning-bundle',
        title: 'Kit de Planificación de Auditorías',
        description: 'Documentación técnica para la fase de pre-compromiso de auditorías de seguridad. Incluye plantillas de acuerdos legales y definición de alcance (Scope).',
        category: 'Auditoría',
        technologies: ['Pentesting', 'Legal & Compliance', 'Scope Definition', 'Rules of Engagement'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/Pre_Engagement_Scope_Planning.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Acuerdos Legales',
            'Definición de Alcance',
            'Reglas de Compromiso',
            'Planificación Técnica'
        ]
    },
    {
        id: 'incident-response-journal',
        title: 'Bitácora de Respuesta a Incidentes',
        description: 'Registro detallado de gestión de incidentes siguiendo el marco NIST. Casos prácticos de Ransomware, Phishing y análisis forense de tráfico de red.',
        category: 'Auditoría',
        technologies: ['NIST Framework', 'Incident Response', 'Digital Forensics', 'Wazuh', 'Wireshark'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/Incident_Response_Journal.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Ciclo de Vida NIST',
            'Análisis de Ransomware',
            'Investigación de Phishing',
            'Forense de Red'
        ]
    },
    {
        id: 'centinela-qr',
        title: 'CentinelaQR: Protección Quishing',
        description: 'Evolución de ScanTxungoQR. PWA avanzada para la mitigación de ataques de Quishing. Analiza URLs de códigos QR mediante la API de VirusTotal para detectar amenazas en tiempo real con una arquitectura más robusta.',
        category: 'Herramientas',
        technologies: ['JavaScript', 'PWA', 'Cloudflare Workers', 'VirusTotal API'],
        repoUrl: 'https://github.com/MaciasIT/Centinela_PWA',
        featured: true,
        status: 'ACTIVO',
        lab: {
            objective: "Mitigar el riesgo de acceso a URLs maliciosas camufladas en códigos QR (Quishing).",
            methodology: "Implementación de una PWA con integración de API de terceros y procesamiento serverless para análisis de reputación.",
            learning: "La seguridad en el punto de acceso (endpoint) es vital ante vectores de ataque físicos como el QR."
        },
        highlights: [
            'Mitigación de Quishing',
            'Integración VirusTotal',
            'Arquitectura Serverless',
            'Modo Offline (PWA)'
        ]
    },
    {
        id: 'nist-risk-assessment',
        title: 'Evaluación de Riesgos (NIST SP 800-30)',
        description: 'Guía técnica basada en el estándar NIST SP 800-30. Metodología para la identificación de amenazas, cálculo de impacto y estrategias de mitigación.',
        category: 'Auditoría',
        technologies: ['NIST SP 800-30', 'Risk Management', 'GRC', 'Threat Modeling'],
        filePath: '/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/NIST_Risk_Assessment_Guide.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Metodología NIST',
            'Cálculo de Riesgos',
            'Modelado de Amenazas',
            'Estrategias de Mitigación'
        ]
    },
    {
        id: 'risk-register-audit',
        title: 'Registro de Riesgos Corporativos',
        description: 'Ejemplo de gestión de activos y vulnerabilidades mediante un Registro de Riesgos. Documento clave para el cumplimiento normativo ISO 27001.',
        category: 'Auditoría',
        technologies: ['Risk Assessment', 'Asset Management', 'Compliance', 'ISO 27001'],
        filePath: '/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Risk_Register.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Gestión de Activos',
            'Priorización de Riesgos',
            'Cumplimiento Normativo',
            'Plan de Remediación'
        ]
    },
    {
        id: 'password-security-principles',
        title: 'Gestión de Identidades y Contraseñas',
        description: 'Análisis técnico sobre mejores prácticas en gestión de identidades. Comparativa de gestores de contraseñas y principios de entropía para la seguridad.',
        category: 'Auditorías Técnicas',
        technologies: ['Security Awareness', 'Identity Management', 'Password Managers', 'Entropy'],
        filePath: '/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Password_Security_Principles.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Gestión de Identidades',
            'Análisis de Entropía',
            'Comparativa Técnica',
            'Buenas Prácticas'
        ]
    },
    {
        id: 'linux-offensive-defensive',
        title: 'Seguridad en Linux: Ofensiva y Defensiva',
        description: 'Guía técnica sobre seguridad en Linux. Cubre desde la gestión de permisos hasta técnicas de escalada de privilegios y vectores de ataque comunes.',
        category: 'Hardening',
        technologies: ['Privilege Escalation', 'File Permissions', 'SUID/SGID', 'Linux Security'],
        filePath: '/portfolio_content/documentos_portafolio/portfolio/Linux_Privilege_Escalation.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Escalada de Privilegios',
            'Permisos Avanzados',
            'Hardening de Sistema',
            'Vectores de Ataque'
        ]
    },
    {
        id: 'usb-attack-vectors',
        title: 'Análisis de Vectores de Ataque USB',
        description: 'Investigación sobre riesgos asociados a dispositivos USB físicos. Identificación de ataques BadUSB y estrategias de mitigación técnica.',
        category: 'Auditoría',
        technologies: ['Physical Security', 'BadUSB', 'Social Engineering', 'Hardware Hacking'],
        filePath: '/portfolio_content/documentos_portafolio/portfolio/USB_Attack_Vectors.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Seguridad Física',
            'Ataques HID',
            'Mitigación de Riesgos',
            'Análisis de Hardware'
        ]
    },
    {
        id: 'hacker-ethics-code',
        title: 'Código de Ética Profesional',
        description: 'Declaración de principios éticos para la práctica de la ciberseguridad. Marco de responsabilidad, integridad y legalidad en auditorías técnicas.',
        category: 'Auditorías Técnicas',
        technologies: ['Ethical Hacking', 'Compliance', 'Professional Integrity', 'Legal Framework'],
        filePath: '/portfolio_content/documentos_portafolio/portfolio/Hacker_Code_of_Ethics.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Responsabilidad Profesional',
            'Integridad Técnica',
            'Marco Legal',
            'Buenas Prácticas'
        ]
    },
    {
        id: 'nmap-scan-techniques',
        title: 'Técnicas Avanzadas de Escaneo (NMAP)',
        description: 'Guía técnica sobre análisis de red con NMAP. Técnicas de descubrimiento, detección de versiones y evasión de firewalls para auditorías de red.',
        category: 'Herramientas',
        technologies: ['NMAP', 'Network Scanning', 'Reconnaissance', 'Firewall Evasion'],
        filePath: '/portfolio_content/documentos_portafolio/Herramientas/NMAP_Scan_Techniques.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Escaneo de Puertos',
            'Detección de OS',
            'Scripts NSE',
            'Optimización de Escaneos'
        ]
    },
    {
        id: 'incibe-incident-guide',
        title: 'Guía de Notificación de Incidentes (INCIBE)',
        description: 'Marco de referencia para la gestión y notificación de ciberincidentes según protocolos nacionales. Clasificación y obligaciones legales de reporte.',
        category: 'Auditoría',
        technologies: ['Incident Response', 'Compliance', 'INCIBE', 'Legal Framework'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/INCIBE_Incident_Notification_Guide.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Protocolos de Notificación',
            'Clasificación de Incidentes',
            'Marco Legal Español',
            'Gestión de Crisis'
        ]
    },
    {
        id: 'risk-management-stages',
        title: 'Ciclo de Vida de Gestión de Riesgos',
        description: 'Análisis detallado de las etapas de gestión de riesgos. Recurso para la planificación y ejecución de análisis de riesgos en entornos corporativos.',
        category: 'Auditoría',
        technologies: ['Risk Management', 'Lifecycle', 'Analysis', 'Mitigation'],
        filePath: '/portfolio_content/documentos_portafolio/Auditoria/Risk_Management_Stages.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Ciclo del Riesgo',
            'Identificación y Análisis',
            'Tratamiento de Riesgos',
            'Monitoreo Continuo'
        ]
    },
    {
        id: 'security-domains-overview',
        title: 'Dominios de Seguridad: Visión Técnica',
        description: 'Mapa conceptual de los dominios clave de la seguridad de la información. Comprensión de las interrelaciones entre áreas de conocimiento CISSP.',
        category: 'Auditorías Técnicas',
        technologies: ['Security Domains', 'CISSP', 'InfoSec Overview', 'Education'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Security_Domains_Overview.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Mapa Conceptual',
            'Áreas de Conocimiento',
            'Fundamentos de InfoSec',
            'Estructura de Dominios'
        ]
    },
    {
        id: 'siem-tools-overview',
        title: 'Análisis de Soluciones SIEM',
        description: 'Comparativa técnica de herramientas SIEM (Splunk, QRadar, Elastic). Guía para la selección de plataformas de monitoreo de seguridad.',
        category: 'Herramientas',
        technologies: ['SIEM', 'Splunk', 'QRadar', 'Elastic Stack', 'Log Analysis'],
        filePath: '/portfolio_content/documentos_portafolio/Herramientas/SIEM_Tools_Overview.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Comparativa SIEM',
            'Casos de Uso SOC',
            'Splunk vs ELK',
            'Estrategias de Monitoreo'
        ]
    },
    {
        id: 'sql-linux-security-hub',
        title: 'SQL & Linux Security Hub',
        description: 'Recursos técnicos para auditoría forense mediante SQL y hardening de Linux. Incluye análisis de inyecciones SQL y permisos avanzados.',
        category: 'Auditorías Técnicas',
        technologies: ['SQL Injection Prevention', 'Log Analysis', 'Linux Hardening', 'Digital Forensics'],
        filePath: '/portfolio_content/documentos_portafolio/SQL_Linux/SQL_and_Linux_Cheatsheet.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Consultas de Seguridad',
            'Análisis Forense SQL',
            'Linux Hardening',
            'Cheat Sheets Técnicos'
        ]
    },
    {
        id: 'python-cyber',
        title: 'Automatización con Python',
        description: 'Biblioteca de herramientas para la automatización de tareas de seguridad. Detección de IoCs, análisis de logs y scripts defensivos.',
        category: 'Herramientas',
        technologies: ['Python', 'Jupyter', 'Security Automation'],
        repoUrl: 'https://github.com/MaciasIT/Python-Ciberseguridad',
        featured: true,
        highlights: [
            'Scripts Interactivos',
            'Análisis de IoCs',
            'Automatización Defensiva',
            'Documentación Técnica'
        ]
    },
    {
        id: 'doc-squad-ai',
        title: 'Doc Squad AI: Automatización de Docs',
        description: 'Sistema multi-agente de IA para la generación de documentación técnica profesional. Optimización de procesos de reporte mediante GenAI.',
        category: 'IA & Ops',
        technologies: ['Python', 'Gemini AI', 'Streamlit', 'FastAPI'],
        repoUrl: 'https://github.com/MaciasIT/Proyecto_Final_Kagle_5_Days_IA',
        featured: true,
        highlights: [
            'Multi-Agent System',
            'Integración Gemini AI',
            'Automatización de Reportes',
            'Interfaz Profesional'
        ]
    },
    {
        id: 'shapeshifter',
        title: 'Shapeshifter: Análisis Binario',
        description: 'Herramienta forense para la detección de archivos maliciosos mediante Magic Numbers. Identificación de técnicas de enmascaramiento de extensiones.',
        category: 'Seguridad Defensiva',
        technologies: ['Python', 'Forense', 'Binary Analysis'],
        repoUrl: 'https://github.com/Michel-Macias/Shapeshifter-Detector',
        featured: true,
        highlights: [
            'Detección Magic Numbers',
            'Análisis Forense Digital',
            'Prevención de Malware',
            'Identificación de Amenazas'
        ]
    },
    {
        id: 'optitech-v2',
        title: 'OptiTech: Optimización de Sistemas',
        description: 'Suite de optimización para entornos Windows corporativos. Automatización de limpieza, gestión de servicios y ajustes de rendimiento.',
        category: 'IT Ops',
        technologies: ['Python', 'PowerShell', 'Windows Internals'],
        repoUrl: 'https://github.com/Michel-Macias/OptiTech-System-Optimizer-V2',
        featured: true,
        highlights: [
            'Optimización de Sistemas',
            'Gestión de Servicios',
            'Ajustes de Registro',
            'Interfaz Modular'
        ]
    },
    {
        id: 'ai-cyber-ops-guide',
        title: 'IA en Operaciones de Ciberseguridad',
        description: 'Manual estratégico sobre la aplicación de GenAI en SOC. Frameworks de prompting y casos de uso en respuesta a incidentes y cumplimiento NIST.',
        category: 'IA & Ops',
        technologies: ['GenAI', 'Prompt Engineering', 'NIST Framework', 'SOC Automation'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/AI_Cybersecurity_Operational_Guide.pdf',
        language: 'pdf',
        featured: true,
        highlights: [
            'Prompt Engineering',
            'Automatización SOC',
            'Análisis de Vulnerabilidades',
            'Ética en IA'
        ]
    },
    {
        id: 'intro-ai-cyber',
        title: 'Fundamentos de IA en Ciberseguridad',
        description: 'Análisis técnico sobre la transformación de la detección de amenazas y gestión de riesgos mediante modelos de lenguaje (LLMs).',
        category: 'Auditorías Técnicas',
        technologies: ['Artificial Intelligence', 'LLMs', 'Threat Intelligence', 'Code Review'],
        filePath: '/portfolio_content/documentos_portafolio/Formacion/Intro_to_AI_in_Cybersecurity.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Fundamentos de IA',
            'IA Defensiva vs Ofensiva',
            'Casos de Uso SOC',
            'Riesgos de GenAI'
        ]
    },
    {
        id: 'malware-intro',
        title: 'Análisis de Malware: Fundamentos',
        description: 'Guía técnica estructurada sobre el análisis de malware. Metodología de estudio basada en el marco de Cisco Ethical Hacker.',
        category: 'Auditorías Técnicas',
        technologies: ['Malware Analysis', 'Documentation', 'Cyber Training'],
        repoUrl: 'https://github.com/Michel-Macias/Iniciacion-al-analisis-de-malware',
        featured: true,
        highlights: [
            'Metodología de Análisis',
            'Guía de Herramientas',
            'Resúmenes Técnicos',
            'Plan de Estudio'
        ]
    },
    {
        id: 'lynis-hardening',
        title: 'Auditoría y Hardening con Lynis',
        description: 'Ciclo completo de auditoría de seguridad en Linux. Automatización de reportes Lynis y aplicación de remediaciones críticas en el sistema.',
        category: 'Hardening',
        technologies: ['Lynis', 'Bash', 'Fail2Ban', 'Security Policy'],
        repoUrl: 'https://github.com/Michel-Macias/lynis',
        featured: true,
        highlights: [
            'Auditoría Automatizada',
            'Remediación de Vulnerabilidades',
            'Hardening de Kernel/SSH',
            'Índice de Seguridad'
        ]
    }
];

export const projectCategories = [
    { id: 'all', name: 'Todos', icon: 'grid' },
    { id: 'Herramientas', name: 'Herramientas', icon: 'tool' },
    { id: 'Hardening', name: 'Hardening', icon: 'shield' },
    { id: 'Auditoría', name: 'Auditoría', icon: 'clipboard' },
    { id: 'IA & Ops', name: 'IA & Ops', icon: 'cpu' },
    { id: 'IT Ops', name: 'IT Ops', icon: 'settings' },
    { id: 'Auditorías Técnicas', name: 'Auditorías Técnicas', icon: 'book' },
    { id: 'Seguridad Defensiva', name: 'Seguridad Defensiva', icon: 'shield' }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
    category === 'all' ? projects : projects.filter(p => p.category === category);
export const getProjectById = (id) => projects.find(p => p.id === id);
