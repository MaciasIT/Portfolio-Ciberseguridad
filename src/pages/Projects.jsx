import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { FiFilter } from 'react-icons/fi';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen py-24 relative">
            <div className="absolute inset-0 bg-[var(--color-bg-primary)] -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with decoration */}
                <div className="text-center mb-16 animate-fadeIn relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent -z-10"></div>
                    <span className="inline-block px-4 bg-[var(--color-bg-primary)] text-[var(--color-primary)] font-mono text-sm mb-2">
                        System.ListProjects()
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text tracking-tight">
                        Módulos de Seguridad
                    </h1>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto font-light">
                        Arsenal de herramientas y documentación técnica desplegada
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-col items-center mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-muted)] text-sm font-mono uppercase tracking-widest">
                        <FiFilter /> Filtros de Categoría
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 p-2 rounded-xl bg-[var(--color-bg-secondary)]/50 backdrop-blur border border-[var(--color-border)]">
                        {projectCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2 rounded-lg font-mono text-sm transition-all duration-300 relative overflow-hidden group ${activeCategory === category.id
                                    ? 'bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]'
                                    }`}
                            >
                                {category.name}
                                {activeCategory === category.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-[var(--color-border)] rounded-xl bg-[var(--color-bg-secondary)]/30">
                        <p className="text-[var(--color-text-muted)] text-lg font-mono">
                            // Error: No modules found in this sector
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
