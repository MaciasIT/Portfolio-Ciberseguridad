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

    // Estilos migrados a Tailwind para ser 100% responsive
    return (
        <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 md:gap-2 p-2 md:p-3 lg:p-4 rounded-full bg-[var(--color-bg-primary)]/90 backdrop-blur-xl border border-[var(--color-primary)]/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_60px_var(--color-primary-glow)] max-w-[95vw] overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-2 px-3 py-3 md:px-5 md:py-3 rounded-full font-mono text-xs md:text-sm font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${isActive
                                ? 'bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 text-[var(--color-primary)]'
                                : 'border border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5'
                            }`}
                    >
                        <span className="text-xl md:text-lg">{item.icon}</span>
                        <span className="hidden sm:inline">{item.label}</span>
                    </button>
                )
            })}
        </nav>
    );
};

export default FloatingNavbar;
