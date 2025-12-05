import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { skills, certifications } from '../data/skills';
import { FiAward, FiCode, FiMail, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cargar el archivo de declaración
        import('../portfolio_content/curriculum/Declaración.md?raw')
            .then(module => {
                setMarkdown(module.default);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading markdown:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Profile Image */}
                <div className="flex flex-col items-center justify-center mb-16 animate-fadeIn">
                    <div className="flex flex-col items-center mb-6">
                        {/* Profile Image - Smaller and more subtle */}
                        <div className="relative mb-6" style={{ width: '192px', height: '192px' }}>
                            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20"></div>
                            <img
                                src="/Portfolio-Ciberseguridad/perfil.jpg"
                                alt="Michel Macías"
                                className="relative w-full h-full object-cover rounded-full border-2 border-[var(--color-primary)]/20 shadow-md"
                            />
                        </div>
                        <h1 className="text-5xl font-bold mb-4">Sobre Mí</h1>
                    </div>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Conoce mi trayectoria, habilidades y pasión por la ciberseguridad
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="glass rounded-xl p-8">
                            {loading ? (
                                <div className="text-center py-12">
                                    <div className="animate-pulse text-[var(--color-text-muted)]">
                                        Cargando contenido...
                                    </div>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none">
                                    <ReactMarkdown>{markdown}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Certifications */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FiAward className="text-[var(--color-primary)]" />
                                Certificaciones
                            </h3>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                                    >
                                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-muted)]">{cert.issuer}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className={`px-2 py-1 text-xs rounded-full ${cert.status === 'En progreso'
                                                ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]'
                                                : 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                                                }`}>
                                                {cert.status}
                                            </span>
                                            <span className="text-xs text-[var(--color-text-muted)]">{cert.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Summary */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FiCode className="text-[var(--color-primary)]" />
                                Habilidades Clave
                            </h3>
                            <div className="space-y-3">
                                {skills.slice(0, 3).map((category, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">
                                            {category.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.slice(0, 3).map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 text-xs rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="glass rounded-xl p-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FiMail className="text-[var(--color-primary)]" />
                                Contacto
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="mailto:michelmacias.it@gmail.com"
                                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    <FiMail size={18} />
                                    <span className="text-sm">michelmacias.it@gmail.com</span>
                                </a>
                                <a
                                    href="https://github.com/MaciasIT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    <FiGithub size={18} />
                                    <span className="text-sm">@MaciasIT</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
