// Metadata de proyectos y scripts de ciberseguridad

export const projects = [
    {
        id: 'vuln-red-cisco',
        title: 'Vulnerabilidades Basadas en Red',
        description: 'Guía de estudio del módulo Cisco Ethical Hacker sobre vulnerabilidades de red. Laboratorios de Active Directory, SMB, DNS Poisoning, Pass-the-Hash, Kerberoasting, SSL Stripping y ataques DoS.',
        category: 'Formación',
        technologies: ['Kali Linux', 'Active Directory', 'Wireshark', 'Metasploit'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-red',
        featured: true,
        highlights: [
            'Lab Active Directory',
            'Kerberoasting y Pass-the-Hash',
            'DNS Poisoning y SSL Strip',
            'Ataques de Capa 2 y 3'
        ]
    },
    {
        id: 'vuln-apps-cisco',
        title: 'Vulnerabilidades en Aplicaciones Web',
        description: 'Guía de estudio y laboratorios prácticos del módulo Cisco Ethical Hacker. Incluye ejercicios de OWASP Top 10, escaneo con Nikto/GVM, ataques a autenticación y sesiones web con Burp Suite.',
        category: 'Formación',
        technologies: ['Kali Linux', 'Docker', 'Burp Suite', 'Nikto', 'GVM'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-aplicaciones',
        featured: true,
        highlights: [
            'Laboratorios OWASP Top 10',
            'Escaneo con Nikto y GVM',
            'Ataques a Sesiones Web',
            'Guía de Pentesting Profesional'
        ]
    },
    {
        id: 'auditoria-seguridad-controls',
        title: 'Controles de Seguridad (Administrative, Technical, Physical)',
        description: 'Guía de referencia sobre la implementación de controles de seguridad en capas. Define y categoriza controles administrativos, técnicos y físicos para una defensa en profundidad.',
        category: 'Auditoría',
        technologies: ['Security Controls', 'Defense in Depth', 'Access Control', 'Physical Security'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/Auditoria_Seguridad.md',
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
        title: 'Web Vulnerability Scanner',
        description: 'Escáner de vulnerabilidades web profesional con motor inteligente, crawler asíncrono, modo sigilo para evasión de WAF, y dashboard con reportes PDF. Detecta SQLi, XSS, Command Injection y más.',
        category: 'Ciberseguridad',
        technologies: ['Python', 'Playwright', 'Streamlit', 'aiohttp', 'Asyncio'],
        repoUrl: 'https://github.com/Michel-Macias/Escaner-de-vulnerabilidades-web',
        featured: true,
        highlights: [
            'Motor Headless (Playwright)',
            'Evasión de WAF (Stealth Mode)',
            'Reportes PDF Ejecutivos',
            'Detección SQLi, XSS, RCE'
        ]
    },
    {
        id: 'port-scanner',
        title: 'Port Scanner en Python',
        description: 'Escáner de puertos TCP con interfaz CLI. Permite escanear rangos de puertos personalizados con timeout configurable y manejo robusto de errores.',
        category: 'Herramientas',
        technologies: ['Python', 'Socket Programming', 'CLI'],
        filePath: '/code/programacion/port_scanner.py',
        language: 'python',
        featured: true,
        highlights: [
            'Escaneo de puertos TCP',
            'CLI con argparse',
            'Timeout configurable',
            'Manejo de errores robusto'
        ]
    },
    {
        id: 'log-analyzer',
        title: 'Analizador de Logs',
        description: 'Herramienta de análisis de logs de servidores web para detectar patrones de ataque comunes como SQLi, XSS, escaneo de directorios e inyección de comandos.',
        category: 'Herramientas',
        technologies: ['Python', 'Regex', 'Security Analysis'],
        filePath: '/code/programacion/log_analyzer.py',
        language: 'python',
        featured: true,
        highlights: [
            'Detección de SQLi y XSS',
            'Análisis de logs Apache/Nginx',
            'Expresiones regulares',
            'Reporte detallado de amenazas'
        ]
    },
    {
        id: 'harden-linux',
        title: 'Script de Hardening para Linux',
        description: 'Script de Bash para automatizar la securización de servidores Debian/Ubuntu. Implementa actualizaciones automáticas, configuración SSH segura, gestión de usuarios y firewall UFW.',
        category: 'Hardening',
        technologies: ['Bash', 'Linux', 'SSH', 'UFW'],
        filePath: '/code/programacion/harden_linux.sh',
        language: 'bash',
        featured: true,
        highlights: [
            'Actualizaciones automáticas',
            'Configuración SSH segura',
            'Gestión de usuarios',
            'Firewall UFW'
        ]
    },
    {
        id: 'harden-windows',
        title: 'Script de Hardening para Windows',
        description: 'Script de PowerShell para verificar y aplicar configuraciones de seguridad en Windows 10/11 y Server 2016+. Incluye firewall, antivirus, UAC y deshabilitación de SMBv1.',
        category: 'Hardening',
        technologies: ['PowerShell', 'Windows', 'Security'],
        filePath: '/code/programacion/harden_windows.ps1',
        language: 'powershell',
        featured: true,
        highlights: [
            'Firewall de Defender',
            'Control de UAC',
            'Deshabilitación de SMBv1',
            'Política de ejecución'
        ]
    },
    {
        id: 'botium-toys',
        title: 'Auditoría de Seguridad - Botium Toys',
        description: 'Análisis completo de riesgos y auditoría de seguridad para Botium Toys. Incluye evaluación de controles, análisis de cumplimiento y recomendaciones de mejora.',
        category: 'Auditoría',
        technologies: ['Risk Assessment', 'Compliance', 'Security Controls'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/Botium_Toys_Alcance_objetivos_e_informe.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Evaluación de riesgos',
            'Análisis de cumplimiento',
            'Controles de seguridad',
            'Recomendaciones estratégicas'
        ]
    },
    {
        id: 'pentest-planning-bundle',
        title: 'Kit de Planificación de Pentesting',
        description: 'Documentación esencial para la fase de pre-compromiso de un test de penetración. Incluye plantillas de Acuerdo de Pentesting y Planificación de Alcance (Scope).',
        category: 'Auditoría',
        technologies: ['Pentesting', 'Legal & Compliance', 'Scope Definition', 'Rules of Engagement'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/Pre_Engagement_Scope_Planning.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Acuerdos Legales',
            'Definición de Alcance',
            'Reglas de Compromiso',
            'Planificación Previa'
        ]
    },
    {
        id: 'incident-response-journal',
        title: 'Diario de Respuesta a Incidentes',
        description: 'Bitácora detallada de gestión de incidentes de seguridad simulados y reales. Documentación de detección, contención y erradicación siguiendo el marco de trabajo del NIST. Casos de Ransomware, Phishing y Análisis de Tráfico.',
        category: 'Auditoría',
        technologies: ['NIST Framework', 'Incident Response', 'Digital Forensics', 'Wazuh', 'Wireshark'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/Incident_Response_Journal.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Ciclo de Vida NIST',
            'Análisis de Ransomware',
            'Investigación de Phishing',
            'Análisis de Tráfico de Red'
        ]
    },
    {
        id: 'scantxungo-qr',
        title: 'ScanTxungoQR',
        description: 'PWA diseñada para combatir el "Quishing". Analiza URLs de códigos QR mediante la API de VirusTotal para detectar amenazas antes de acceder a ellas.',
        category: 'Herramientas',
        technologies: ['JavaScript', 'PWA', 'Cloudflare Workers', 'VirusTotal API'],
        repoUrl: 'https://github.com/MaciasIT/ScanTxungoQR-PWA-Project',
        featured: true,
        highlights: [
            'Protección contra Quishing',
            'Integración con VirusTotal',
            'Arquitectura Serverless',
            'Modo Offline (PWA)'
        ]
    },
    {
        id: 'nist-risk-assessment',
        title: 'Guía de Evaluación de Riesgos (NIST SP 800-30)',
        description: 'Documentación técnica basada en NIST SP 800-30 Rev. 1. Incluye identificación de fuentes de amenaza, eventos, cálculo de probabilidad e impacto, y estrategias de mitigación.',
        category: 'Auditoría',
        technologies: ['NIST SP 800-30', 'Risk Management', 'GRC', 'Threat Modeling'],
        filePath: '/src/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/NIST_Risk_Assessment_Guide.md',
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
        title: 'Registro de Riesgos (Risk Register)',
        description: 'Ejemplo real de un Registro de Riesgos para la gestión de activos y vulnerabilidades. Documento clave para el cumplimiento normativo y la priorización de remediaciones.',
        category: 'Auditoría',
        technologies: ['Risk Assessment', 'Asset Management', 'Compliance', 'ISO 27001'],
        filePath: '/src/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Risk_Register.pdf',
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
        title: 'Principios de Seguridad de Contraseñas',
        description: 'Guía de concienciación sobre mejores prácticas en gestión de identidades. Comparativa técnica entre gestores de contraseñas (LastPass vs 1Password) y principios de entropía.',
        category: 'Formación',
        technologies: ['Security Awareness', 'Identity Management', 'Password Managers', 'Entropy'],
        filePath: '/src/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Password_Security_Principles.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Gestión de Identidades',
            'Análisis de Entropía',
            'LastPass vs 1Password',
            'Linux Hardening',
            'Digital Forensics'
        ]
    },
    {
        id: 'linux-offensive-defensive',
        title: 'Linux: Ofensiva y Defensiva',
        description: 'Colección de guías técnicas sobre seguridad en Linux. Cubre desde la gestión crítica de permisos de archivos hasta técnicas avanzadas de escalada de privilegios y vectores de ataque.',
        category: 'Hardening',
        technologies: ['Privilege Escalation', 'File Permissions', 'SUID/SGID', 'Linux Security'],
        filePath: '/src/portfolio_content/documentos_portafolio/portfolio/Linux_Privilege_Escalation.pdf',
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
        description: 'Investigación sobre la seguridad física y los riesgos asociados a dispositivos USB. Identificación de vectores de ataque como BadUSB y estrategias de mitigación.',
        category: 'Auditoría',
        technologies: ['Physical Security', 'BadUSB', 'Social Engineering', 'Hardware Hacking'],
        filePath: '/src/portfolio_content/documentos_portafolio/portfolio/USB_Attack_Vectors.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Seguridad Física',
            'Ataques HID',
            'Mitigación de Riesgos',
            'Concienciación'
        ]
    },
    {
        id: 'hacker-ethics-code',
        title: 'Código de Ética Profesional',
        description: 'Declaración personal de principios éticos para el hacking. Establece el marco de responsabilidad, integridad y legalidad bajo el cual se realizan todas las pruebas de seguridad.',
        category: 'Formación',
        technologies: ['Ethical Hacking', 'Compliance', 'Professional Integrity', 'Legal Framework'],
        filePath: '/src/portfolio_content/documentos_portafolio/portfolio/Hacker_Code_of_Ethics.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Responsabilidad',
            'Integridad Profesional',
            'Marco Legal',

            'Buenas Prácticas'
        ]
    },
    {
        id: 'nmap-scan-techniques',
        title: 'Técnicas de Escaneo con NMAP',
        description: 'Guía avanzada sobre los diferentes tipos de análisis de red utilizando NMAP. Detalla técnicas de descubrimiento de hosts, escaneo de puertos, detección de versiones y evasión de firewalls.',
        category: 'Herramientas',
        technologies: ['NMAP', 'Network Scanning', 'Reconnaissance', 'Firewall Evasion'],
        filePath: '/src/portfolio_content/documentos_portafolio/Herramientas/NMAP_Scan_Techniques.pdf',
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
        title: 'Guía Nacional de Notificación de Incidentes (INCIBE)',
        description: 'Marco de referencia para la gestión y notificación de ciberincidentes según el INCIBE. Protocolos de actuación, clasificación de incidentes y obligaciones legales de reporte.',
        category: 'Auditoría',
        technologies: ['Incident Response', 'Compliance', 'INCIBE', 'Legal Framework'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/INCIBE_Incident_Notification_Guide.pdf',
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
        title: 'Etapas de la Gestión de Riesgos',
        description: 'Visualización y explicación detallada de las etapas del ciclo de vida de la gestión de riesgos. Complemento visual para la planificación y ejecución de análisis de riesgos.',
        category: 'Auditoría',
        technologies: ['Risk Management', 'Lifecycle', 'Analysis', 'Mitigation'],
        filePath: '/src/portfolio_content/documentos_portafolio/Auditoria/Risk_Management_Stages.pdf',
        language: 'pdf',
        featured: false,
        highlights: [
            'Ciclo de Vida del Riesgo',
            'Identificación y Análisis',
            'Tratamiento de Riesgos',
            'Monitoreo Continuo'
        ]
    },
    {
        id: 'security-domains-overview',
        title: 'Dominios de Seguridad - Visión General',
        description: 'Mapa conceptual de los dominios clave de la seguridad de la información. Recurso educativo para comprender la amplitud del campo y las interrelaciones entre áreas.',
        category: 'Formación',
        technologies: ['Security Domains', 'CISSP', 'InfoSec Overview', 'Education'],
        filePath: '/src/portfolio_content/documentos_portafolio/Formacion/Security_Domains_Overview.pdf',
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
        title: 'Panorama de Herramientas SIEM',
        description: 'Análisis comparativo de las principales soluciones SIEM del mercado (Splunk, QRadar, Elastic, etc.). Guía para seleccionar la herramienta adecuada según las necesidades organizacionales.',
        category: 'Herramientas',
        technologies: ['SIEM', 'Splunk', 'QRadar', 'Elastic Stack', 'Log Analysis'],
        filePath: '/src/portfolio_content/documentos_portafolio/Herramientas/SIEM_Tools_Overview.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Comparativa de Herramientas',
            'Casos de Uso',
            'Splunk vs ELK',
            'Estrategias de Monitoreo'
        ]
    },
    {
        id: 'sql-linux-security-hub',
        title: 'SQL & Linux Security Hub',
        description: 'Centro de recursos técnicos que combina consultas SQL para Ciberseguridad y Hardening de Linux. Incluye PDFs sobre inyecciones SQL, análisis de logs y permisos avanzados.',
        category: 'Formación',
        technologies: ['SQL Injection Prevention', 'Log Analysis', 'Linux Hardening', 'Digital Forensics'],
        filePath: '/src/portfolio_content/documentos_portafolio/SQL_Linux/SQL_and_Linux_Cheatsheet.md',
        language: 'markdown',
        featured: true,
        highlights: [
            'Consultas de Seguridad',
            'Análisis Forense con SQL',
            'Linux Hardening',
            'Cheat Sheets'
        ]
    },
    {
        id: 'python-cyber',
        title: 'Python para Ciberseguridad',
        description: 'Biblioteca de herramientas de automatización para tareas de seguridad. Incluye detección de IoCs, análisis de logs y scripts defensivos en Jupyter Notebooks.',
        category: 'Herramientas',
        technologies: ['Python', 'Jupyter', 'Security Automation'],
        repoUrl: 'https://github.com/MaciasIT/Python-Ciberseguridad',
        featured: true,
        highlights: [
            'Scripts interactivos',
            'Análisis de IoCs',
            'Automatización defensiva',
            'Documentación integrada'
        ]
    },
    {
        id: 'doc-squad-ai',
        title: 'Doc Squad AI',
        description: 'Sistema multi-agente de IA para la generación automática de documentación técnica profesional a partir de fuentes multimedia.',
        category: 'IA & Ops',
        technologies: ['Python', 'Gemini AI', 'Streamlit', 'FastAPI'],
        repoUrl: 'https://github.com/MaciasIT/Proyecto_Final_Kagle_5_Days_IA',
        featured: true,
        highlights: [
            'Multi-Agent System',
            'Google Gemini Integration',
            'Automatización de Docs',
            'Interfaz Streamlit'
        ]
    },
    {
        id: 'shapeshifter',
        title: 'Shapeshifter Detector',
        description: 'Inspector de archivos binarios que utiliza Magic Numbers para detectar archivos maliciosos o con extensiones falsificadas (Masquerade detection).',
        category: 'Ciberseguridad',
        technologies: ['Python', 'Forense', 'Binary Analysis'],
        repoUrl: 'https://github.com/Michel-Macias/Shapeshifter-Detector',
        featured: true,
        highlights: [
            'Detección por Magic Numbers',
            'Análisis Forense Digital',
            'Prevención de Malware',
            'Identificación de Extensiones'
        ]
    },
    {
        id: 'optitech-v2',
        title: 'OptiTech System Optimizer',
        description: 'Suite integral de optimización para Windows 11. Automatiza limpieza, gestión de servicios y ajustes de rendimiento en entornos profesionales.',
        category: 'IT Ops',
        technologies: ['Python', 'PowerShell', 'Windows Internals'],
        repoUrl: 'https://github.com/Michel-Macias/OptiTech-System-Optimizer-V2',
        featured: true,
        highlights: [
            'Optimización de Rendimiento',
            'Gestión de Servicios Críticos',
            'Ajustes de Registro Seguros',
            'Interfaz Modular'
        ]
    },
    {
        id: 'malware-intro',
        title: 'Manual: Iniciación al Análisis de Malware',
        description: 'Guía técnica y plan de estudio estructurado sobre los fundamentos del análisis de malware, basada en el curso Hacker Ético de Cisco.',
        category: 'Formación',
        technologies: ['Malware Analysis', 'Documentation', 'Cyber Training'],
        repoUrl: 'https://github.com/Michel-Macias/Iniciacion-al-analisis-de-malware',
        featured: true,
        highlights: [
            'Fundamentos de Análisis',
            'Metodología Estructurada',
            'Guía de Herramientas',
            'Resúmenes Técnicos'
        ]
    },
    {
        id: 'lynis-hardening',
        title: 'Hardening con Lynis',
        description: 'Ciclo completo de auditoría y hardening en sistemas Linux. Automatización de reportes Lynis y aplicación de remediaciones en SSH, Kernel y políticas PAM.',
        category: 'Hardening',
        technologies: ['Lynis', 'Bash', 'Fail2Ban', 'Security Policy'],
        repoUrl: 'https://github.com/Michel-Macias/lynis',
        featured: true,
        highlights: [
            'Automatización de Auditorías',
            'Remediación de Vulnerabilidades',
            'Hardening de Kernel y SSH',
            'Mejora de Índice de Seguridad'
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
    { id: 'Formación', name: 'Formación', icon: 'book' }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
    category === 'all' ? projects : projects.filter(p => p.category === category);
export const getProjectById = (id) => projects.find(p => p.id === id);
