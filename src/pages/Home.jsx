import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { getFeaturedProjects } from '../data/projects';
import { skills } from '../data/skills';
import { FiShield, FiCode, FiServer, FiLock } from 'react-icons/fi';

const Home = () => {
    const featuredProjects = getFeaturedProjects();

    const highlights = [
        {
            icon: FiShield,
            title: 'Seguridad Ofensiva',
            description: 'Pentesting, análisis de vulnerabilidades y hacking ético'
        },
        {
            icon: FiLock,
            title: 'Seguridad Defensiva',
            description: 'Hardening de sistemas, auditorías y gestión de riesgos'
        },
        {
            icon: FiCode,
            title: 'Automatización',
            description: 'Scripts en Python, Bash y PowerShell para seguridad'
        },
        {
            icon: FiServer,
            title: 'Administración',
            description: 'Linux, Windows Server, Docker y configuración segura'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Highlights Section */}
            <section className="py-20 bg-[var(--color-bg-secondary)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Áreas de Estudio</h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            Aprendizaje en múltiples áreas de la ciberseguridad, desde la ofensiva hasta la defensiva
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="glass rounded-xl p-6 hover:bg-[var(--color-bg-elevated)] transition-all duration-300 hover:glow-primary group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                    <highlight.icon className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
                                    {highlight.title}
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-sm">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            Una selección de mis mejores trabajos en ciberseguridad y automatización
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Overview */}
            <section className="py-20 bg-[var(--color-bg-secondary)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                            Competencias desarrolladas a través de formación continua y experiencia práctica
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.slice(0, 3).map((skillCategory) => (
                            <div key={skillCategory.category} className="glass rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                                    {skillCategory.category}
                                </h3>
                                <div className="space-y-3">
                                    {skillCategory.items.slice(0, 4).map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-[var(--color-text-secondary)]">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-[var(--color-text-muted)]">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-[var(--color-bg-tertiary)] rounded-full h-2">
                                                <div
                                                    className="h-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
