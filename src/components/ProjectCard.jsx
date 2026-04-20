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
                <div className="p-10 pb-6">
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-sm font-mono text-[#3b82f6] uppercase tracking-[0.2em]">
                            // {project.category}
                        </span>
                        {project.status && (
                            <span className="text-xs font-mono text-[#a1a1aa] border border-[#27272a] px-4 py-1.5 rounded uppercase bg-white/5">
                                {project.status}
                            </span>
                        )}
                    </div>
                    {project.language === 'pdf' || (!project.filePath && project.repoUrl) ? (
                        <a href={project.language === 'pdf' ? `${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}` : project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                                {project.title}
                            </h3>
                        </a>
                    ) : (
                        <Link to={`/project/${project.id}`}>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                                {project.title}
                            </h3>
                        </Link>
                    )}
                    <p className="text-lg text-[#d4d4d8] leading-relaxed line-clamp-3 font-medium">
                        {project.description}
                    </p>
                </div>

                {/* Lab Details (Minimalist) */}
                {project.lab && (
                    <div className="px-10 py-6 space-y-6">
                        <div className="h-[1px] bg-[#27272a] w-full"></div>
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider opacity-60">Aprendizaje_Clave:</span>
                            <p className="text-base text-[#fafafa] font-semibold italic leading-relaxed">"{project.lab.learning}"</p>
                        </div>
                    </div>
                )}

                {/* Tech Stack */}
                <div className="px-10 py-8 mt-auto">
                    <div className="flex flex-wrap gap-4 mb-10">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="text-sm font-mono text-[#a1a1aa] group-hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded border border-white/5">
                                #{tech.replace(/\s+/g, '_')}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-8 border-t border-[#27272a]">
                        <div className="flex gap-6">
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-white transition-colors">
                                    <FiGithub size={22} />
                                </a>
                            )}
                            {project.filePath && (
                                project.language === 'pdf' ? (
                                    <a href={`${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}`} target="_blank" rel="noopener noreferrer" className="text-[#52525b] hover:text-white transition-colors">
                                        <FiFileText size={22} />
                                    </a>
                                ) : (
                                    <Link to={`/project/${project.id}`} className="text-[#52525b] hover:text-white transition-colors">
                                        <FiFileText size={22} />
                                    </Link>
                                )
                            )}
                        </div>
                    {project.language === 'pdf' || (!project.filePath && project.repoUrl) ? (
                        <a 
                            href={project.language === 'pdf' ? `${import.meta.env.BASE_URL || '/'}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}` : project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-[#3b82f6] hover:text-white flex items-center gap-2 uppercase tracking-widest transition-all"
                        >
                            {project.language === 'pdf' ? 'Abrir_PDF();' : 'Ver_Repositorio();'} <FiExternalLink size={14} />
                        </a>
                    ) : (
                        <Link 
                            to={`/project/${project.id}`} 
                            className="text-xs font-mono text-[#3b82f6] hover:text-white flex items-center gap-2 uppercase tracking-widest transition-all"
                        >
                            Acceder_Reporte(); <FiExternalLink size={14} />
                        </Link>
                    )}                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
