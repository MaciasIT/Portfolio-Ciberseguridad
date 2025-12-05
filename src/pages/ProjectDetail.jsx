import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiArrowLeft, FiDownload, FiGithub } from 'react-icons/fi';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = getProjectById(projectId);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (project) {
            // Cargar el archivo del proyecto
            const loadCode = async () => {
                try {
                    // Convertir la ruta del proyecto a ruta importable
                    const filePath = project.filePath.replace('/src/', '../');
                    const module = await import(`${filePath}?raw`);
                    setCode(module.default);
                } catch (error) {
                    console.error('Error loading code:', error);
                    setCode('// Error al cargar el archivo');
                } finally {
                    setLoading(false);
                }
            };
            loadCode();
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
                    <Link to="/projects" className="text-[var(--color-primary)] hover:underline">
                        Volver a Proyectos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors mb-8"
                >
                    <FiArrowLeft />
                    Volver a Proyectos
                </Link>

                {/* Project Header */}
                <div className="glass rounded-xl p-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                            <p className="text-[var(--color-text-secondary)] text-lg">
                                {project.description}
                            </p>
                        </div>
                        {project.featured && (
                            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30 w-fit">
                                Destacado
                            </span>
                        )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] text-sm border border-[var(--color-border)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Highlights */}
                    {project.highlights && (
                        <div>
                            <h3 className="text-xl font-bold mb-3">Características Principales</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-[var(--color-text-secondary)]"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mr-3"></span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Code Section */}
                <div className="glass rounded-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Código Fuente</h2>
                        <div className="flex gap-3">
                            <a
                                href={`https://github.com/MaciasIT/Portfolio-Ciberseguridad/blob/main${project.filePath}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-elevated)] transition-all flex items-center gap-2"
                            >
                                <FiGithub size={18} />
                                Ver en GitHub
                            </a>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-pulse text-[var(--color-text-muted)]">
                                Cargando código...
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-lg overflow-hidden">
                            <SyntaxHighlighter
                                language={project.language}
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1.5rem',
                                    background: 'var(--color-bg-tertiary)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.6'
                                }}
                                showLineNumbers
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
