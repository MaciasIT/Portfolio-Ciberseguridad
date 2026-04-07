import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectDetail = () => {
    console.log('[PORTFOLIO] Renderizando ProjectDetail...');
    const { projectId } = useParams();
    const project = getProjectById(projectId);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (project && project.filePath) {
            const loadContent = async () => {
                try {
                    const basePath = import.meta.env.BASE_URL || '/';
                    const fileUrl = `${basePath}${project.filePath.startsWith('/') ? project.filePath.slice(1) : project.filePath}`;
                    console.log(`[PORTFOLIO] Intentando cargar: ${fileUrl}`);

                    const response = await fetch(fileUrl);
                    if (!response.ok) throw new Error('Failed to load file');
                    const text = await response.text();
                    setContent(text || '// El archivo está vacío');
                } catch (error) {
                    console.error('Error loading content:', error);
                    setContent('# Error\nNo se pudo cargar el contenido del archivo. Por favor, inténtalo de nuevo o consulta el repositorio en GitHub.');
                } finally {
                    setLoading(false);
                }
            };
            loadContent();
        }
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-6 tracking-tighter">PROYECTO_NO_ENCONTRADO</h1>
                    <Link to="/" className="text-[#3b82f6] hover:underline font-mono uppercase tracking-widest">
                        Volver_al_Inicio();
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-32 bg-[#000000]">
            <div className="max-w-5xl mx-auto px-6">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[#52525b] hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
                >
                    <FiArrowLeft /> Volver_a_Laboratorios();
                </Link>

                {/* Project Header */}
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <span className="text-[10px] font-mono text-[#3b82f6] uppercase tracking-[0.3em] block mb-4">
                                // {project.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
                                {project.title.toUpperCase()}
                            </h1>
                        </div>
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#3b82f6] hover:text-white transition-all flex items-center gap-2"
                            >
                                <FiGithub size={16} /> Repositorio_GitHub
                            </a>
                        )}
                    </div>
                    
                    <p className="text-xl text-[#a1a1aa] leading-relaxed font-light mb-10">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 text-xs font-mono rounded border border-[#27272a] text-[#a1a1aa] uppercase tracking-wider bg-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-1 md:p-12 bg-[#09090b] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl">
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="animate-pulse text-[#52525b] font-mono uppercase tracking-widest">
                                [CARGANDO_CONTENIDO...]
                            </div>
                        </div>
                    ) : (
                        <div className="w-full">
                            {project.language === 'markdown' ? (
                                <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:tracking-tight prose-p:text-[#d4d4d8] prose-p:text-lg prose-p:leading-relaxed prose-strong:text-[#3b82f6] prose-li:text-[#d4d4d8] prose-li:text-lg prose-img:rounded-xl prose-img:border prose-img:border-[#27272a]">
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </div>
                            ) : (
                                <div className="rounded-xl overflow-hidden border border-[#27272a]">
                                    <SyntaxHighlighter
                                        language={project.language}
                                        style={vscDarkPlus}
                                        customStyle={{
                                            margin: 0,
                                            padding: '2.5rem',
                                            background: '#000000',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.8',
                                            fontFamily: 'JetBrains Mono, monospace'
                                        }}
                                        showLineNumbers
                                    >
                                        {content}
                                    </SyntaxHighlighter>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
