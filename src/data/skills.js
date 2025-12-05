// Habilidades técnicas organizadas por categorías

export const skills = [
    {
        category: 'Ciberseguridad',
        icon: 'shield',
        items: [
            { name: 'Hacking Ético', level: 70 },
            { name: 'Pentesting', level: 65 },
            { name: 'Análisis de Vulnerabilidades', level: 70 },
            { name: 'OWASP Top 10', level: 75 },
            { name: 'Gestión de Riesgos', level: 70 },
            { name: 'Auditoría de Seguridad', level: 65 }
        ]
    },
    {
        category: 'Sistemas Operativos',
        icon: 'desktop',
        items: [
            { name: 'Linux (Ubuntu, Kali)', level: 75 },
            { name: 'Windows Server', level: 60 },
            { name: 'Hardening de Sistemas', level: 70 },
            { name: 'Gestión de Permisos', level: 75 }
        ]
    },
    {
        category: 'Programación',
        icon: 'code',
        items: [
            { name: 'Python', level: 70 },
            { name: 'Bash Scripting', level: 75 },
            { name: 'PowerShell', level: 65 },
            { name: 'SQL', level: 60 }
        ]
    },
    {
        category: 'Redes',
        icon: 'network',
        items: [
            { name: 'TCP/IP', level: 70 },
            { name: 'Firewalls (UFW, iptables)', level: 65 },
            { name: 'VPN', level: 60 },
            { name: 'Nmap', level: 70 },
            { name: 'Wireshark', level: 60 }
        ]
    },
    {
        category: 'Herramientas',
        icon: 'tool',
        items: [
            { name: 'Docker', level: 65 },
            { name: 'Git & GitHub', level: 70 },
            { name: 'SIEM (Splunk, QRadar)', level: 55 },
            { name: 'Burp Suite', level: 60 }
        ]
    }
];

export const certifications = [
    {
        name: 'Google Cybersecurity Certificate',
        issuer: 'Google',
        status: 'En progreso',
        year: 2024
    },
    {
        name: 'CompTIA Security+',
        issuer: 'CompTIA',
        status: 'Objetivo',
        year: 2025
    }
];

export const getSkillsByCategory = (category) =>
    skills.find(s => s.category === category);

export const getAllSkills = () =>
    skills.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
