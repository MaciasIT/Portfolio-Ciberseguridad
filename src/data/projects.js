// Metadata de proyectos y scripts de ciberseguridad

export const projects = [
    {
        id: 'hostel-english-audit',
        title: 'Auditoría Técnica 360°: HostelEnglishPWA',
        description: 'Análisis integral de seguridad, arquitectura y calidad de código de una aplicación PWA real. Evaluación de vulnerabilidades OWASP, cumplimiento de estándares y plan de remediación técnica detallado.',
        category: 'Auditoría',
        technologies: ['Security Audit', 'OWASP', 'React', 'PWA', 'Static Analysis'],
        repoUrl: 'https://github.com/MaciasIT/HostelEnglishPWA',
        featured: true,
        status: 'COMPLETADO',
        lab: {
            objective: "Evaluar la madurez técnica y la postura de seguridad de una aplicación web moderna (PWA) en un entorno de producción simulado.",
            methodology: "Análisis estático de código, auditoría de dependencias (npm audit), revisión de arquitectura SOLID y evaluación de cumplimiento de seguridad (CSP, Anti-Clickjacking).",
            learning: "La seguridad no es un parche, es un proceso que debe integrarse desde la arquitectura base y el pipeline de CI/CD."
        },
        highlights: [
            'Análisis de Arquitectura SOLID',
            'Auditoría de Seguridad OWASP',
            'Plan de Remediación Priorizado',
            'Evaluación de Madurez Técnica'
        ]
    },
    {
        id: 'vuln-red-cisco',
        title: 'Auditoría de Vulnerabilidades de Red',
        description: 'Análisis técnico detallado sobre vulnerabilidades de red basado en el marco de Cisco Ethical Hacker. Incluye auditorías de Active Directory, SMB, DNS Poisoning, Pass-the-Hash, Kerberoasting y SSL Stripping.',
        category: 'Security Research',
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
        category: 'Security Research',
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
    },
    {
        id: 'python-cyber',
        title: 'Automatización con Python',
        description: 'Biblioteca de herramientas para la automatización de tareas de seguridad. Detección de IoCs, análisis de logs y scripts defensivos.',
        category: 'Herramientas',
        technologies: ['Python', 'Jupyter', 'Security Automation'],
        repoUrl: 'https://github.com/MaciasIT/Python-Ciberseguridad',
        featured: false,
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
        featured: false,
        highlights: [
            'Multi-Agent System',
            'Integración Gemini AI',
            'Automatización de Reportes',
            'Interfaz Profesional'
        ]
    },
    {
        id: 'optitech-v2',
        title: 'OptiTech: Optimización de Sistemas',
        description: 'Suite de optimización para entornos Windows corporativos. Automatización de limpieza, gestión de servicios y ajustes de rendimiento.',
        category: 'IT Ops',
        technologies: ['Python', 'PowerShell', 'Windows Internals'],
        repoUrl: 'https://github.com/Michel-Macias/OptiTech-System-Optimizer-V2',
        featured: false,
        highlights: [
            'Optimización de Sistemas',
            'Gestión de Servicios',
            'Ajustes de Registro',
            'Interfaz Modular'
        ]
    },
    {
        id: 'malware-intro',
        title: 'Análisis de Malware: Fundamentos',
        description: 'Guía técnica estructurada sobre el análisis de malware. Metodología de estudio basada en el marco de Cisco Ethical Hacker.',
        category: 'Security Research',
        technologies: ['Malware Analysis', 'Documentation', 'Cyber Training'],
        repoUrl: 'https://github.com/Michel-Macias/Iniciacion-al-analisis-de-malware',
        featured: false,
        highlights: [
            'Metodología de Análisis',
            'Guía de Herramientas',
            'Resúmenes Técnicos',
            'Plan de Estudio'
        ]
    },
    {
        id: 'sql-linux-security-hub',
        title: 'SQL & Linux Security Hub',
        description: 'Recursos técnicos para auditoría forense mediante SQL y hardening de Linux. Incluye análisis de inyecciones SQL y permisos avanzados.',
        category: 'Security Research',
        technologies: ['SQL Injection Prevention', 'Log Analysis', 'Linux Hardening', 'Digital Forensics'],
        filePath: '/portfolio_content/documentos_portafolio/SQL_Linux/SQL_and_Linux_Cheatsheet.md',
        language: 'markdown',
        featured: false,
        highlights: [
            'Consultas de Seguridad',
            'Análisis Forense SQL',
            'Linux Hardening',
            'Cheat Sheets Técnicos'
        ]
    }
];

export const projectCategories = [
    { id: 'all', name: 'Todos', icon: 'grid' },
    { id: 'Auditoría', name: 'Auditoría', icon: 'clipboard' },
    { id: 'Security Research', name: 'Security Research', icon: 'book' },
    { id: 'Seguridad Defensiva', name: 'Seguridad Defensiva', icon: 'shield' },
    { id: 'Hardening', name: 'Hardening', icon: 'shield' },
    { id: 'Herramientas', name: 'Herramientas', icon: 'tool' },
    { id: 'IA & Ops', name: 'IA & Ops', icon: 'cpu' },
    { id: 'IT Ops', name: 'IT Ops', icon: 'settings' }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
    category === 'all' ? projects : projects.filter(p => p.category === category);
export const getProjectById = (id) => projects.find(p => p.id === id);
