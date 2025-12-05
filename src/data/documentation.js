// Índice de documentación técnica

export const documentation = [
    {
        category: 'Auditoría',
        icon: 'clipboard',
        description: 'Informes de auditoría y evaluación de controles de seguridad',
        documents: [
            {
                id: 'auditoria-seguridad',
                title: 'Auditoría de Seguridad',
                description: 'Controles de seguridad administrativos, técnicos y físicos',
                path: '/src/portfolio_content/documentos_portafolio/Auditoria/Auditoria_Seguridad.md'
            },
            {
                id: 'botium-toys',
                title: 'Botium Toys - Alcance e Informe',
                description: 'Análisis completo de riesgos y recomendaciones',
                path: '/src/portfolio_content/documentos_portafolio/Auditoria/Botium_Toys_Alcance_objetivos_e_informe.md'
            }
        ]
    },
    {
        category: 'Evaluación de Riesgos',
        icon: 'alert',
        description: 'Metodologías y guías para evaluación de riesgos',
        documents: [
            {
                id: 'guia-evaluacion-riesgos',
                title: 'Guía de Evaluación de Riesgos',
                description: 'Basada en NIST SP 800-30 Rev. 1',
                path: '/src/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Guia_Eva_Riesgos.md'
            },
            {
                id: 'principios-contrasenas',
                title: 'Principios de Creación de Contraseñas',
                description: 'Mejores prácticas para contraseñas seguras',
                path: '/src/portfolio_content/documentos_portafolio/Evaluacion_Riesgos/Principios_de_creacion_de_contraseñas.md'
            }
        ]
    },
    {
        category: 'SQL & Linux',
        icon: 'terminal',
        description: 'Consultas SQL y gestión de sistemas Linux',
        documents: [
            {
                id: 'sql-linux',
                title: 'SQL & Linux',
                description: 'Consultas, permisos y ejercicios prácticos',
                path: '/src/portfolio_content/documentos_portafolio/SQL&LINUX/README.md'
            }
        ]
    },
    {
        category: 'Vulnerabilidades',
        icon: 'bug',
        description: 'OWASP Top 10 y vectores de ataque',
        documents: [
            {
                id: 'vulnerabilidades',
                title: 'Vulnerabilidades - OWASP Top 10',
                description: 'Las 10 vulnerabilidades más críticas en aplicaciones web',
                path: '/src/portfolio_content/documentos_portafolio/Vulnerabilidades/README.md'
            }
        ]
    },
    {
        category: 'Herramientas SIEM',
        icon: 'monitor',
        description: 'Documentación sobre herramientas SIEM',
        documents: [
            {
                id: 'herramientas-siem',
                title: 'Herramientas SIEM',
                description: 'Splunk, IBM QRadar, Elastic Security',
                path: '/src/portfolio_content/herramientas_ciberseguridad/SIEM/Herramientas_SIEM.md'
            }
        ]
    }
];

export const getDocumentsByCategory = (category) =>
    documentation.find(d => d.category === category);

export const getAllDocuments = () =>
    documentation.flatMap(cat => cat.documents);

export const getDocumentById = (id) =>
    getAllDocuments().find(doc => doc.id === id);
