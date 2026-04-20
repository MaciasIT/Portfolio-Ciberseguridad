import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    console.log('[PORTFOLIO] Renderizando ProjectList...');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="flex flex-col gap-16 w-full items-center">
            {/* Category Filter */}
            <div className="w-full flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md shadow-2xl">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                                relative px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300
                                ${activeCategory === category.id
                                    ? 'text-white'
                                    : 'text-white/40 hover:text-white/80'
                                }
                            `}
                        >
                            {activeCategory === category.id && (
                                <motion.div 
                                    layoutId="active-cat"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State Message */}
            {filteredProjects.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 opacity-30"
                >
                    <FiFilter className="mx-auto text-4xl mb-4" />
                    <p className="font-mono text-sm uppercase tracking-widest">No se encontraron laboratorios en esta categoría.</p>
                </motion.div>
            )}
        </div>
    );
};

export default ProjectList;
