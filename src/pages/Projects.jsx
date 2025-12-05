import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/projects';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold mb-4">Proyectos</h1>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Scripts, herramientas y proyectos de ciberseguridad desarrollados para automatización y análisis de seguridad
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category.id
                                    ? 'bg-[var(--color-primary)] text-[var(--color-bg-primary)] glow-primary'
                                    : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-elevated)]'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-[var(--color-text-muted)] text-lg">
                            No hay proyectos en esta categoría
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
