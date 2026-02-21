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

    // Rediseño a Command Bar Superior (Premium SOC Style)
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

                {/* Brand / Logo Area */}
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-[var(--color-bg-secondary)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-sm">
                    <div className="w-2 h-2 bg-[var(--color-primary)] animate-pulse rounded-full"></div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[var(--color-text-primary)] uppercase">
                        Operator: <span className="text-[var(--color-primary)]">MACIAS.IT</span>
                    </span>
                </div>

                {/* Main Navigation - Integrated Command Center */}
                <div className="flex items-center gap-1 p-1 bg-[var(--color-bg-secondary)]/90 backdrop-blur-xl border border-[var(--color-border)] rounded-md shadow-2xl">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    relative flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-sm font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all
                                    ${isActive
                                        ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/5'
                                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5'
                                    }
                                `}
                            >
                                <span className={`${isActive ? 'opacity-100' : 'opacity-50'}`}>{item.icon}</span>
                                <span className="hidden sm:inline">{item.label}</span>
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]"></span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* System Status - Right Side (Desktop) */}
                <div className="hidden lg:flex items-center gap-6 px-4 py-2 bg-[var(--color-bg-secondary)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-sm">
                    <div className="flex flex-col items-end">
                        <span className="font-mono text-[9px] text-[var(--color-text-muted)] leading-none uppercase tracking-tighter">System_Status</span>
                        <span className="font-mono text-[10px] text-[var(--color-secondary)] leading-none font-bold uppercase tracking-widest mt-1">Operational</span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default FloatingNavbar;
