import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock, FiUsers, FiExternalLink } from 'react-icons/fi';

const Contact = () => {
    const contactMethods = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'michelmacias.it@gmail.com',
            description: 'Respuesta en menos de 24 horas',
            href: 'mailto:michelmacias.it@gmail.com',
            external: false
        },
        {
            icon: FiGithub,
            label: 'GitHub',
            value: '@MaciasIT',
            description: 'Proyectos y código fuente',
            href: 'https://github.com/MaciasIT',
            external: true
        },
        {
            icon: FiLinkedin,
            label: 'LinkedIn',
            value: 'Michel Macías',
            description: 'Red profesional',
            href: 'https://linkedin.com/in/michelmacias',
            external: true
        }
    ];

    const areasOfInterest = [
        'Pentesting',
        'Auditoría de Seguridad',
        'Hardening de Sistemas',
        'Automatización',
        'Análisis de Vulnerabilidades',
        'Consultoría',
        'DevSecOps',
        'Cloud Security'
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Profile */}
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="flex flex-col items-center mb-6">
                        {/* Profile Image - Smaller and more subtle */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20"></div>
                            <img
                                src="/Portfolio-Ciberseguridad/perfil.jpg"
                                alt="Michel Macías"
                                className="relative w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-[var(--color-primary)]/20 shadow-md"
                            />
                        </div>
                        <h1 className="text-5xl font-bold mb-4">Contacto</h1>
                    </div>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        ¿Interesado en colaborar? Estoy disponible para proyectos de ciberseguridad, consultoría y oportunidades profesionales
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Methods */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6">Métodos de Contacto</h2>

                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.href}
                                target={method.external ? "_blank" : undefined}
                                rel={method.external ? "noopener noreferrer" : undefined}
                                className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-[var(--color-bg-elevated)] hover:glow-primary transition-all duration-300 group"
                            >
                                <div className="p-3 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                    <method.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                                        {method.label}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm mb-2">
                                        {method.value}
                                    </p>
                                    <p className="text-[var(--color-text-muted)] text-xs">
                                        {method.description}
                                    </p>
                                </div>
                                {method.external && (
                                    <FiExternalLink className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-6">
                        {/* Availability */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FiClock className="text-[var(--color-primary)]" />
                                Disponibilidad
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FiMapPin className="text-[var(--color-secondary)]" />
                                    <div>
                                        <p className="text-[var(--color-text-primary)] font-medium">Ubicación</p>
                                        <p className="text-sm text-[var(--color-text-muted)]">España (Remoto disponible)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiUsers className="text-[var(--color-secondary)]" />
                                    <div>
                                        <p className="text-[var(--color-text-primary)] font-medium">Tipo de Colaboración</p>
                                        <p className="text-sm text-[var(--color-text-muted)]">Tiempo completo, Freelance, Consultoría</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Areas of Interest */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4">Áreas de Interés</h3>
                            <div className="flex flex-wrap gap-2">
                                {areasOfInterest.map((area, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] text-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="glass rounded-xl p-6 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent border border-[var(--color-primary)]/30">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
                                <h4 className="font-semibold text-[var(--color-primary)]">Tiempo de Respuesta</h4>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Normalmente respondo en menos de 24 horas durante días laborables
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
