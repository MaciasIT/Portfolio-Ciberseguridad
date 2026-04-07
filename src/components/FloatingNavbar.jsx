import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingNavbar = () => {
    console.log('[PORTFOLIO] Renderizando FloatingNavbar...');
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'about', label: 'Perfil' },
        { id: 'bitacora', label: 'Bitácora' },
        { id: 'bridge', label: 'Puente' },
        { id: 'labs', label: 'Laboratorios' },
        { id: 'contact', label: 'Contacto' },
    ];

    const handleNavClick = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Esperar a que la navegación ocurra antes de hacer scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (location.pathname === '/') {
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
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-[90] px-6 py-8 pointer-events-none flex justify-center"
        >
            <div className={`
                flex items-center gap-1 p-1 rounded-full border transition-all duration-500 pointer-events-auto
                ${isScrolled 
                    ? 'bg-black/80 backdrop-blur-xl border-[#27272a] shadow-2xl' 
                    : 'bg-transparent border-transparent'
                }
            `}>
                {navItems.map((item) => {
                    const isActive = location.pathname === '/' && activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`
                                relative px-5 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300
                                ${isActive
                                    ? 'text-white'
                                    : 'text-[#52525b] hover:text-[#a1a1aa]'
                                }
                            `}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-[#18181b] rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

export default FloatingNavbar;
