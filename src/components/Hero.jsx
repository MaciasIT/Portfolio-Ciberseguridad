import React, { useState, useEffect } from 'react';
import { FiTerminal, FiCode, FiCpu, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = '> Inicializando protocolo de seguridad...';

    // Stats data
    const stats = [
        { value: '5+', label: 'Proyectos Activos', icon: <FiCode /> },
        { value: '20+', label: 'Docs de Auditoría', icon: <FiShield /> },
        { value: '100%', label: 'Uptime del Sistema', icon: <FiCpu /> },
    ];

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]">

            {/* Background Details - Hex Grid or specialized graphic */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-[var(--color-primary)] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-[var(--color-secondary)] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Terminal Header */}
                        <div className="inline-block mb-4 px-3 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)] rounded font-mono text-sm text-[var(--color-primary)] animate-fadeIn">
                            <span className="animate-pulse mr-2">●</span>SYSTEM_READY
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-mono)' }}>
                            <div className="glitch-text" data-text="MICHEL">MICHEL</div>
                            <div className="text-[var(--color-text-secondary)] text-5xl md:text-7xl mt-2">MACÍAS</div>
                        </h1>

                        <div className="h-16 mb-8 font-mono text-xl md:text-2xl text-[var(--color-primary)]">
                            {displayText}
                            <span className="animate-pulse">_</span>
                        </div>

                        <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto lg:mx-0 border-l-4 border-[var(--color-secondary)] pl-4">
                            Especialista en Ciberseguridad enfocado en protección de infraestructuras,
                            auditoría de sistemas y desarrollo de soluciones seguras.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16">
                            <Link
                                to="/projects"
                                className="group relative px-8 py-4 bg-[var(--color-primary)] text-white font-bold font-mono overflow-hidden transition-all hover:shadow-[0_0_20px_var(--color-primary-glow)]"
                            >
                                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    <FiTerminal /> EJECUTAR_PROYECTOS.EXE
                                </span>
                            </Link>

                            <Link
                                to="/contact"
                                className="group px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] font-mono font-bold hover:bg-[var(--color-primary)]/10 transition-all"
                            >
                                <span className="flex items-center gap-2">
                                    CONTACTAR_ROOT
                                </span>
                            </Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-4 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm hover:border-[var(--color-primary)] transition-colors group"
                                >
                                    <div className="text-[var(--color-primary)] mb-2 group-hover:scale-110 transition-transform origin-left">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold font-mono text-[var(--color-text-primary)]">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Element / Avatar */}
                    <div className="hidden lg:block relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                        <div className="relative w-80 h-80">
                            {/* Rotating rings */}
                            <div className="absolute inset-0 border-2 border-[var(--color-primary)]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border-2 border-dashed border-[var(--color-secondary)]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                            {/* Profile Image with Glitch/Cyber effects */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-[var(--color-bg-elevated)] shadow-[0_0_30px_var(--color-primary-glow)]">
                                <img
                                    src="/Portfolio-Ciberseguridad/perfil.jpg?v=2"
                                    alt="Michel Macías"
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent opacity-60"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 px-3 py-1 bg-[var(--color-bg-elevated)] border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-mono">
                                ADMIN
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
