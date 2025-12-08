// Metadata de proyectos y scripts de ciberseguridad

export const projects = [
    {
        id: 'port-scanner',
        title: 'Port Scanner en Python',
        description: 'Escáner de puertos TCP con interfaz CLI. Permite escanear rangos de puertos personalizados con timeout configurable y manejo robusto de errores.',
        category: 'Herramientas',
        technologies: ['Python', 'Socket Programming', 'CLI'],
        filePath: '/src/portfolio_content/programacion/port_scanner.py',
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
        filePath: '/src/portfolio_content/programacion/log_analyzer.py',
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
        filePath: '/src/portfolio_content/programacion/harden_linux.sh',
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
        filePath: '/src/portfolio_content/programacion/harden_windows.ps1',
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
    }
];

export const projectCategories = [
    { id: 'all', name: 'Todos', icon: 'grid' },
    { id: 'Herramientas', name: 'Herramientas', icon: 'tool' },
    { id: 'Hardening', name: 'Hardening', icon: 'shield' },
    { id: 'Auditoría', name: 'Auditoría', icon: 'clipboard' }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
    category === 'all' ? projects : projects.filter(p => p.category === category);
export const getProjectById = (id) => projects.find(p => p.id === id);
