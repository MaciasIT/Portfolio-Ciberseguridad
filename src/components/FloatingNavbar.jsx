import React, { useState, useEffect } from 'react';
import { FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

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

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full glass border border-[var(--color-border)] shadow-2xl flex items-center gap-8 md:bottom-auto md:top-6 md:gap-12 animate-fadeIn">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 group ${activeSection === item.id ? 'text-[var(--color-primary)] scale-110' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                        }`}
                >
                    <span className="text-xl md:text-2xl">{item.icon}</span>
                    <span className="text-[10px] uppercase tracking-tighter font-mono font-bold md:hidden">{item.label}</span>
                    {activeSection === item.id && (
                        <span className="absolute -bottom-1 w-1 h-1 bg-[var(--color-primary)] rounded-full glow-primary"></span>
                    )}
                </button>
            ))}
        </nav>
    );
};

export default FloatingNavbar;
