import React, { useState, useEffect } from 'react';
import { FiTerminal, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = 'Estudiante de Ciberseguridad';

    const stats = [
        { value: '5+', label: 'Proyectos' },
        { value: '20+', label: 'Documentos' },
        { value: '4', label: 'Scripts' },
        { value: '100%', label: 'Dedicación' }
    ];

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-fadeIn">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                            <FiTerminal className="text-[var(--color-primary)] text-4xl" />
                            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                                Michel Macías
                            </h1>
                        </div>

                        <div className="mb-8">
                            <p className="text-2xl md:text-3xl text-[var(--color-text-secondary)] mb-2">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </p>
                            <p className="text-lg text-[var(--color-text-muted)]">
                                Transformando la seguridad digital con código y análisis
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                            <Link
                                to="/projects"
                                className="px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/50 transition-all duration-300 flex items-center gap-2"
                            >
                                <FiCode size={20} />
                                Ver Proyectos
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded-lg glass border border-[var(--color-primary)]/30 text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                            >
                                Contactar
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-lg p-4 text-center hover:glow-primary transition-all duration-300"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-3xl font-bold gradient-text mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-text-muted)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image - Small avatar size */}
                    <div className="flex-shrink-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <div className="relative" style={{ width: '120px', height: '120px' }}>
                            <img
                                src="/Portfolio-Ciberseguridad/perfil.jpg?v=2"
                                alt="Michel Macías"
                                className="w-full h-full object-cover rounded-full border-2 border-[var(--color-primary)]/20 shadow-md"
                                style={{ width: '120px', height: '120px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
