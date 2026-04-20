// Metadata de proyectos y scripts de ciberseguridad

export const projects = [
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
        id: 'centinela-qr',
        title: 'CentinelaQR: Protección Quishing',
        description: 'PWA avanzada para la mitigación de ataques de Quishing. Analiza URLs de códigos QR mediante la API de VirusTotal para detectar amenazas en tiempo real.',
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
        id: 'vuln-red-cisco',
        title: 'Auditoría de Vulnerabilidades de Red',
        description: 'Análisis técnico sobre vulnerabilidades de red basado en el marco de Cisco Ethical Hacker. Auditorías de Active Directory, SMB y protocolos inseguros.',
        category: 'Security Research',
        technologies: ['Kali Linux', 'Active Directory', 'Wireshark', 'Metasploit'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-red',
        featured: false,
        status: 'DOCUMENTADO',
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
        description: 'Evaluación de seguridad en aplicaciones web siguiendo la metodología OWASP Top 10. Pruebas de penetración y análisis de sesiones.',
        category: 'Security Research',
        technologies: ['Kali Linux', 'Docker', 'Burp Suite', 'Nikto', 'GVM'],
        repoUrl: 'https://github.com/Michel-Macias/Vulnerabilidades-basadas-en-aplicaciones',
        featured: false,
        status: 'DOCUMENTADO',
        highlights: [
            'Metodología OWASP Top 10',
            'Escaneo de Vulnerabilidades',
            'Análisis de Sesiones Web',
            'Informe Técnico de Pentesting'
        ]
    },
    {
        id: 'python-cyber',
        title: 'Automatización con Python',
        description: 'Biblioteca de herramientas para la automatización de tareas de seguridad. Detección de IoCs y análisis de logs.',
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
        description: 'Sistema multi-agente de IA para la generación de documentación técnica profesional.',
        category: 'Otros Intereses',
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
        description: 'Suite de optimización para entornos Windows corporativos. Automatización de limpieza y gestión de servicios.',
        category: 'Otros Intereses',
        technologies: ['Python', 'PowerShell', 'Windows Internals'],
        repoUrl: 'https://github.com/Michel-Macias/OptiTech-System-Optimizer-V2',
        featured: false,
        highlights: [
            'Optimización de Sistemas',
            'Gestión de Servicios',
            'Ajustes de Registro',
            'Interfaz Modular'
        ]
    }
];

export const projectCategories = [
    { id: 'all', name: 'Todos', icon: 'grid' },
    { id: 'Seguridad Defensiva', name: 'Seguridad Defensiva', icon: 'shield' },
    { id: 'Hardening', name: 'Hardening', icon: 'shield' },
    { id: 'Security Research', name: 'Security Research', icon: 'book' },
    { id: 'Herramientas', name: 'Herramientas', icon: 'tool' },
    { id: 'Otros Intereses', name: 'Otros Intereses', icon: 'star' }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
    category === 'all' ? projects : projects.filter(p => p.category === category);
export const getProjectById = (id) => projects.find(p => p.id === id);
