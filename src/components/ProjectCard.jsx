import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    console.log(`[PORTFOLIO] Renderizando ProjectCard: ${project.title}`);
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="relative group h-full"
        >
            {/* Subtle Glow Background */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#27272a] to-transparent rounded-2xl opacity-50 group-hover:from-[#3b82f6] transition-all duration-500"></div>
            
            <div className="relative h-full bg-[#09090b] rounded-2xl overflow-hidden border border-[#27272a] group-hover:border-[#3b82f6]/50 flex flex-col transition-all duration-500">
                
                {/* Header */}
                <div className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-[0.2em]">
                            // {project.category}
                        </span>
                        {project.status && (
                            <span className="text-[10px] font-mono text-[#a1a1aa] border border-[#27272a] px-3 py-1 rounded uppercase bg-white/5">
                                {project.status}
                            </span>
                        )}
                    </div>
                    {project.language === 'pdf' || (!project.filePath && project.repoUrl) ? (
                        <a href={project.language === 'pdf' ? `${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}` : project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                                {project.title}
                            </h3>
                        </a>
                    ) : (
                        <Link to={`/project/${project.id}`}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                                {project.title}
                            </h3>
                        </Link>
                    )}
                    <p className="text-base text-[#d4d4d8] leading-relaxed line-clamp-3 font-light">
                        {project.description}
                    </p>
                </div>

                {/* Lab Details (Minimalist) */}
                {project.lab && (
                    <div className="px-8 py-4 space-y-4">
                        <div className="h-[1px] bg-[#27272a] w-full"></div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider opacity-60">Aprendizaje_Clave:</span>
                            <p className="text-sm text-[#fafafa] font-medium italic leading-relaxed">"{project.lab.learning}"</p>
                        </div>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="px-8 py-6 mt-auto">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="text-xs font-mono text-[#a1a1aa] group-hover:text-white transition-colors bg-white/5 px-2 py-1 rounded border border-white/5">
                                #{tech.replace(/\s+/g, '_')}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#27272a]">
                        <div className="flex gap-5">
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-white transition-colors">
                                    <FiGithub size={18} />
                                </a>
                            )}
                            {project.filePath && (
                                project.language === 'pdf' ? (
                                    <a href={`${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}`} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-white transition-colors">
                                        <FiFileText size={18} />
                                    </a>
                                ) : (
                                    <Link to={`/project/${project.id}`} className="text-[#52525b] hover:text-white transition-colors">
                                        <FiFileText size={18} />
                                    </Link>
                                )
                            )}
                        </div>
                    {project.language === 'pdf' || (!project.filePath && project.repoUrl) ? (
                        <a 
                            href={project.language === 'pdf' ? `${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}` : project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono text-[#3b82f6] hover:text-white flex items-center gap-2 uppercase tracking-widest transition-all"
                        >
                            {project.language === 'pdf' ? 'Abrir_PDF();' : 'Ver_Repositorio();'} <FiExternalLink size={12} />
                        </a>
                    ) : (
                        <Link 
                            to={`/project/${project.id}`} 
                            className="text-[10px] font-mono text-[#3b82f6] hover:text-white flex items-center gap-2 uppercase tracking-widest transition-all"
                        >
                            Acceder_Reporte(); <FiExternalLink size={12} />
                        </Link>
                    )}                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
