import { FiCode, FiExternalLink, FiTerminal, FiShield, FiCpu, FiBook, FiLayout } from 'react-icons/fi';
import { SiPython, SiJavascript, SiGnubash, SiDocker, SiJupyter, SiGooglegemini, SiStreamlit, SiFastapi } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { projects } from '../data/projects';

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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group relative glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 overflow-hidden flex flex-col h-full"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase glass px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
                                {project.category}
                            </span>
                            {project.featured && (
                                <div className="flex items-center gap-1.5 text-[var(--color-accent)] animate-pulse">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                                    <span className="text-[10px] font-bold font-mono">LIVE_V3</span>
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
                            {project.technologies.map(tech => (
                                <div key={tech} className="flex items-center gap-2 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                                    <span className="text-lg">
                                        {getTechIcon(tech) || <div className="w-1h-1 rounded-full bg-current opacity-40"></div>}
                                    </span>
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
                                    GET_CODE_REPOSITORY <FiExternalLink />
                                </a>
                            ) : (
                                <a
                                    href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/master${project.filePath}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[var(--color-primary)] hover:translate-x-2 transition-transform duration-300"
                                >
                                    VIEW_RESOURCE_MANUAL <FiCode />
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

