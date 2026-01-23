import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiExternalLink, FiCpu, FiShield } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    const getTechColor = (tech) => {
        const colors = {
            'Python': 'text-blue-400 border-blue-500/50 hover:bg-blue-500/10',
            'Bash': 'text-green-400 border-green-500/50 hover:bg-green-500/10',
            'PowerShell': 'text-purple-400 border-purple-500/50 hover:bg-purple-500/10',
            'Linux': 'text-yellow-400 border-yellow-500/50 hover:bg-yellow-500/10',
            'Windows': 'text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/10',
            'Security': 'text-red-400 border-red-500/50 hover:bg-red-500/10'
        };
        return colors[tech] || 'text-[var(--color-text-secondary)] border-[var(--color-border)] hover:bg-[var(--color-bg-tertiary)]';
    };

    return (
        <div className="group relative transition-all duration-300">
            {/* Holographic Border/Glow Container */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-xl opacity-20 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>

            {/* Main Card Content */}
            <div className="relative h-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 rounded-xl flex flex-col clip-path-cyber hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden">

                {/* Background Grid Pattern Subtle */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 rounded bg-[rgba(0,255,136,0.1)] text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/40">
                            {project.category.toLowerCase().includes('auditoria') || project.category.toLowerCase().includes('security') ? <FiShield size={20} /> : <FiCode size={20} />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-mono tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                                {project.title}
                            </h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
                                :: {project.category}
                            </span>
                        </div>
                    </div>
                    {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 text-[10px] uppercase font-bold text-[var(--color-accent)] border border-[var(--color-accent)]/50 rounded bg-[var(--color-accent)]/10 animate-pulse">
                            <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                            Destacado
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="relative z-10 text-[var(--color-text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed border-l-2 border-[var(--color-border)] pl-3 group-hover:border-[var(--color-primary)] transition-colors">
                    {project.description}
                </p>

                {/* Tech Stack - Scrollable horizontally if needed, but flex wrap is better */}
                <div className="relative z-10 flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-1 text-[10px] font-mono border rounded transition-colors uppercase ${getTechColor(tech)}`}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-muted)] rounded">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Reveal Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-[var(--color-bg-elevated)]/95 backdrop-blur-sm border-t border-[var(--color-primary)]/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-3">
                    <Link
                        to={`/projects/${project.id}`}
                        className="flex-1 py-2 rounded bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-bold text-center text-sm font-mono hover:bg-[var(--color-primary-light)] transition-colors shadow-[0_0_10px_rgba(0,255,136,0.3)]"
                    >
                        ACCEDER_SISTEMA
                    </Link>
                    <a
                        href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/main${project.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-primary)] transition-colors bg-[var(--color-bg-tertiary)]"
                        title="Ver Código Fuente"
                    >
                        <FiExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
