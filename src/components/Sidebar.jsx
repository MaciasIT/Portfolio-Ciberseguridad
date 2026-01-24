import React from 'react';
import MatrixBackground from './MatrixBackground';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const Sidebar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="lg:fixed lg:w-1/3 w-full lg:h-screen h-auto bg-[var(--color-bg-primary)] text-white flex flex-col relative overflow-hidden border-r border-[var(--color-border)] shadow-2xl z-20">

            {/* Matrix Background scoped to Sidebar */}
            <div className="absolute inset-0 z-0">
                <MatrixBackground />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] opacity-90"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full p-8 lg:p-12 justify-between">

                {/* Header / Identity */}
                <div>
                    <h1 className="text-5xl lg:text-7xl font-bold font-mono tracking-tighter mb-2">
                        <span className="block text-[var(--color-text-primary)]">MICHEL</span>
                        <span className="block text-[var(--color-primary)] glitch-text" data-text="MACÍAS">MACÍAS</span>
                    </h1>
                    <h2 className="text-xl lg:text-2xl text-[var(--color-text-secondary)] font-mono mt-4 flex items-center gap-2">
                        <span className="animate-pulse text-[var(--color-primary)]">&gt;</span>
                        Ciberseguridad & IT Ops
                    </h2>
                    <p className="mt-6 text-[var(--color-text-muted)] max-w-sm leading-relaxed">
                        Profesional en transición a la ciberseguridad, con enfoque en seguridad técnica, automatización y contenedores.
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-sm text-[var(--color-text-muted)]">
                        <FiMapPin /> España
                    </div>
                </div>

                {/* Navigation (Desktop) */}
                <nav className="hidden lg:flex flex-col space-y-4 my-12">
                    {['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="group flex items-center gap-4 text-sm font-mono tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all w-max"
                        >
                            <span className="w-8 h-[1px] bg-[var(--color-text-muted)] group-hover:w-16 group-hover:bg-[var(--color-primary)] transition-all"></span>
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a href="https://github.com/MaciasIT" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                        <FiGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-mac%C3%ADas-vargas-87902990/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                        <FiLinkedin size={24} />
                    </a>
                    <a href="mailto:michelmacias.it@gmail.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors transform hover:scale-110">
                        <FiMail size={24} />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
