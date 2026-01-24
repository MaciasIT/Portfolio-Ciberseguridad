import React from 'react';
import { FiCode, FiExternalLink, FiShield } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectList = () => {
    return (
        <div className="flex flex-col gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group relative border-l-2 border-[var(--color-border)] hover:border-[var(--color-primary)] pl-6 py-2 transition-all duration-300"
                >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-r-xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono text-[var(--color-primary)] border border-[var(--color-primary)]/30 px-2 py-0.5 rounded">
                                {project.category.toUpperCase()}
                            </span>
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                                {project.title}
                            </h3>
                            {project.featured && (
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
                            )}
                        </div>

                        <p className="text-[var(--color-text-secondary)] mb-4 max-w-2xl leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors">
                            {project.description}
                        </p>

                        {/* Tech Stack Minimal */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm font-mono text-[var(--color-text-muted)]">
                            {project.technologies.slice(0, 5).map(tech => (
                                <span key={tech} className="hover:text-[var(--color-primary)] cursor-default transition-colors">
                                    # {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            {project.repoUrl ? (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:underline"
                                >
                                    <FiCode /> GITHUB_REPO
                                </a>
                            ) : (
                                <a
                                    href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/master${project.filePath}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] hover:underline"
                                >
                                    <FiCode /> VIEW_SOURCE
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
