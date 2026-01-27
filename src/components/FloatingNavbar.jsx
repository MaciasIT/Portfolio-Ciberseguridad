import React, { useState, useEffect } from 'react';
import { FiUser, FiCode, FiBriefcase, FiMail, FiShield } from 'react-icons/fi';

const FloatingNavbar = () => {
    const [activeSection, setActiveSection] = useState('about');

    const navItems = [
        { id: 'about', icon: <FiUser />, label: 'Perfil' },
        { id: 'skills', icon: <FiShield />, label: 'Stack' },
        { id: 'projects', icon: <FiCode />, label: 'Proyectos' },
        { id: 'experience', icon: <FiBriefcase />, label: 'Trayectoria' },
        { id: 'contact', icon: <FiMail />, label: 'Contacto' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        padding: '16px 32px',
        borderRadius: '9999px',
        background: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 255, 157, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 60px rgba(0, 255, 157, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    };

    const buttonStyle = (isActive) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        borderRadius: '9999px',
        background: isActive ? 'rgba(0, 255, 157, 0.15)' : 'transparent',
        border: isActive ? '1px solid rgba(0, 255, 157, 0.3)' : '1px solid transparent',
        color: isActive ? '#00ff9d' : '#94a3b8',
        fontFamily: 'monospace',
        fontSize: '13px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        whiteSpace: 'nowrap'
    });

    const iconStyle = {
        fontSize: '18px'
    };

    return (
        <nav style={navStyle}>
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={buttonStyle(activeSection === item.id)}
                    onMouseEnter={(e) => {
                        if (activeSection !== item.id) {
                            e.currentTarget.style.color = '#e2e8f0';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (activeSection !== item.id) {
                            e.currentTarget.style.color = '#94a3b8';
                            e.currentTarget.style.background = 'transparent';
                        }
                    }}
                >
                    <span style={iconStyle}>{item.icon}</span>
                    <span>{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default FloatingNavbar;
