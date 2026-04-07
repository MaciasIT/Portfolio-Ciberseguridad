// Habilidades técnicas y de gestión organizadas por categorías

export const skills = [
    {
        category: 'Gestión Senior (Transferible)',
        icon: 'briefcase',
        items: [
            { name: 'Gestión de Crisis', level: 95 },
            { name: 'Liderazgo de Equipos', level: 90 },
            { name: 'Logística de Eventos', level: 90 },
            { name: 'Comunicación con Stakeholders', level: 85 },
            { name: 'Resolución de Problemas', level: 90 }
        ]
    },
    {
        category: 'Seguridad Defensiva',
        icon: 'shield',
        items: [
            { name: 'Análisis de Vulnerabilidades', level: 55 },
            { name: 'OWASP Top 10', level: 50 },
            { name: 'Hardening de Sistemas', level: 50 },
            { name: 'Monitoreo (SIEM)', level: 45 },
            { name: 'Gestión de Riesgos (NIST)', level: 50 }
        ]
    },
    {
        category: 'Sistemas y Redes',
        icon: 'desktop',
        items: [
            { name: 'Linux (Ubuntu, Kali)', level: 65 },
            { name: 'Windows Server & AD', level: 55 },
            { name: 'Docker & Contenedores', level: 50 },
            { name: 'TCP/IP & Networking', level: 60 },
            { name: 'Firewalls & VPNs', level: 55 }
        ]
    },
    {
        category: 'Automatización y Herramientas',
        icon: 'code',
        items: [
            { name: 'Python para Seguridad', level: 55 },
            { name: 'Bash & PowerShell', level: 55 },
            { name: 'Nmap & Wireshark', level: 60 },
            { name: 'Burp Suite', level: 45 },
            { name: 'Git & GitHub', level: 65 }
        ]
    }
];

export const certifications = [
    {
        name: 'Google Cybersecurity Professional',
        issuer: 'Google',
        status: 'Completado',
        year: 2025
    },
    {
        name: 'Google IT Support Professional',
        issuer: 'Google',
        status: 'Completado',
        year: 2023
    },
    {
        name: 'Cisco Ethical Hacker',
        issuer: 'Cisco',
        status: 'En progreso',
        year: 2026
    },
    {
        name: 'Cisco Networking & Endpoint Security',
        issuer: 'Cisco',
        status: 'Completado',
        year: 2025
    }
];

export const getSkillsByCategory = (category) =>
    skills.find(s => s.category === category);

export const getAllSkills = () =>
    skills.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
