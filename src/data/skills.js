// Habilidades técnicas organizadas por categorías

export const skills = [
    {
        category: 'Ciberseguridad',
        icon: 'shield',
        items: [
            { name: 'OWASP Top 10', level: 55 },
            { name: 'Análisis de Vulnerabilidades', level: 50 },
            { name: 'Auditoría de Seguridad', level: 45 },
            { name: 'Análisis de Malware (Básico)', level: 40 },
            { name: 'Gestión de Riesgos', level: 45 }
        ]
    },
    {
        category: 'Sistemas Operativos',
        icon: 'desktop',
        items: [
            { name: 'Linux (Ubuntu, Kali)', level: 60 },
            { name: 'Windows 10/11 & Server', level: 55 },
            { name: 'Hardening de Sistemas', level: 50 },
            { name: 'Active Directory', level: 45 }
        ]
    },
    {
        category: 'Programación',
        icon: 'code',
        items: [
            { name: 'Python', level: 55 },
            { name: 'Bash Scripting', level: 50 },
            { name: 'PowerShell', level: 50 },
            { name: 'SQL', level: 40 }
        ]
    },
    {
        category: 'Redes & Protocolos',
        icon: 'network',
        items: [
            { name: 'TCP/IP & DNS', level: 55 },
            { name: 'SMB & Kerberos', level: 45 },
            { name: 'Firewalls (UFW)', level: 50 },
            { name: 'Ataques de Red (MitM, DoS)', level: 40 }
        ]
    },
    {
        category: 'Herramientas',
        icon: 'tool',
        items: [
            { name: 'Burp Suite', level: 45 },
            { name: 'OWASP ZAP', level: 45 },
            { name: 'Nikto & Nmap', level: 50 },
            { name: 'Wireshark', level: 45 },
            { name: 'Chronicle SIEM (Google)', level: 40 },
            { name: 'Docker', level: 50 },
            { name: 'Git & GitHub', level: 60 }
        ]
    }
];

export const certifications = [
    {
        name: 'Google Cybersecurity Certificate',
        issuer: 'Google',
        status: 'En progreso',
        year: 2026
    },
    {
        name: 'Cisco Ethical Hacker',
        issuer: 'Cisco',
        status: 'En progreso',
        year: 2026
    }
];

export const getSkillsByCategory = (category) =>
    skills.find(s => s.category === category);

export const getAllSkills = () =>
    skills.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
