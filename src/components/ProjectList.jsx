import { useState } from 'react';
import { FiCode, FiExternalLink, FiTerminal, FiShield, FiCpu, FiBook, FiLayout, FiFilter } from 'react-icons/fi';
import { SiPython, SiJavascript, SiGnubash, SiDocker, SiJupyter, SiGooglegemini, SiStreamlit, SiFastapi } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { projects, projectCategories } from '../data/projects';

const getTechIcon = (tech) => {
    const iconMap = {
        'Python': <SiPython />,
        'JavaScript': <SiJavascript />,
        'PowerShell': <VscTerminalPowershell />,
        'Bash': <SiGnubash />,
        'Docker': <SiDocker />,
        'Jupyter': <SiJupyter />,
        'Gemini AI': <SiGooglegemini />,
        'Streamlit': <SiStreamlit />,
        'FastAPI': <SiFastapi />,
    };
    return iconMap[tech] || null;
};

const ProjectList = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="flex flex-col gap-12">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4">
                {projectCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`
                            px-6 py-3 rounded-full font-mono text-sm font-bold tracking-wider transition-all duration-300 border
                            ${activeCategory === category.id
                                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary-glow)] transform scale-105'
                                : 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                            }
                        `}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_var(--color-primary-glow)]"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase glass px-3 py-1 rounded-full border 
                                    ${project.category === 'Auditoría' ? 'text-yellow-400 border-yellow-400/20' :
                                        project.category === 'Hardening' ? 'text-red-400 border-red-400/20' :
                                            'text-[var(--color-primary)] border-[var(--color-primary)]/20'
                                    }`}>
                                    {project.category}
                                </span>
                                {project.featured && (
                                    <div className="flex items-center gap-1.5 text-[var(--color-accent)] animate-pulse">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                                        <span className="text-[10px] font-bold font-mono">DESTACADO</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Icons Row */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {project.technologies.slice(0, 5).map(tech => (
                                    <div key={tech} className="flex items-center gap-2 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors bg-[#0f172a] px-3 py-1.5 rounded-lg border border-slate-800">
                                        <span className="text-xs font-mono">{tech}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Link */}
                            <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
                                {project.repoUrl ? (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[var(--color-primary)] hover:translate-x-2 transition-transform duration-300"
                                    >
                                        VER_REPOSITORIO <FiExternalLink />
                                    </a>
                                ) : (
                                    <a
                                        href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/master${project.filePath}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[var(--color-primary)] hover:translate-x-2 transition-transform duration-300"
                                    >
                                        LEER_DOCUMENTO <FiBook />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State Message */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 opacity-50">
                    <FiFilter className="mx-auto text-4xl mb-4" />
                    <p className="font-mono">No se encontraron proyectos en esta categoría.</p>
                </div>
            )}
        </div>
    );
};

export default ProjectList;

