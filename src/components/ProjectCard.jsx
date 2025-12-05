import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const getTechColor = (tech) => {
        const colors = {
            'Python': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
            'Bash': 'bg-green-500/20 text-green-400 border-green-500/30',
            'PowerShell': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
            'Linux': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
            'Windows': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
            'Security': 'bg-red-500/20 text-red-400 border-red-500/30'
        };
        return colors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    };

    return (
        <div className="glass rounded-xl p-6 hover:bg-[var(--color-bg-elevated)] transition-all duration-300 hover:glow-primary group">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-primary)]">
                        <FiCode size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-sm text-[var(--color-text-muted)]">
                            {project.category}
                        </span>
                    </div>
                </div>
                {project.featured && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                        Destacado
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-3">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${getTechColor(tech)}`}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Highlights */}
            {project.highlights && (
                <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                        <li
                            key={index}
                            className="text-sm text-[var(--color-text-secondary)] flex items-center"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-2"></span>
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}

            {/* Actions */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--color-border)]">
                <Link
                    to={`/projects/${project.id}`}
                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-all font-medium text-sm flex items-center justify-center gap-2"
                >
                    <FiCode size={16} />
                    Ver Código
                </Link>
                <a
                    href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/main${project.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-elevated)] transition-all"
                >
                    <FiExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
