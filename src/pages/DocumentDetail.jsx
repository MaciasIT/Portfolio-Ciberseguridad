import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getDocumentById } from '../data/documentation';
import { FiArrowLeft, FiBook } from 'react-icons/fi';

const DocumentDetail = () => {
    const { documentId } = useParams();
    const document = getDocumentById(documentId);
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document) {
            // Cargar el archivo Markdown
            const loadMarkdown = async () => {
                try {
                    // Convertir la ruta del documento a ruta importable
                    const filePath = document.path.replace('/src/', '../');
                    const module = await import(`${filePath}?raw`);
                    setMarkdown(module.default);
                } catch (error) {
                    console.error('Error loading markdown:', error);
                    setMarkdown('# Error al cargar el documento\n\nNo se pudo cargar el contenido del documento.');
                } finally {
                    setLoading(false);
                }
            };
            loadMarkdown();
        }
    }, [document]);

    if (!document) {
        return (
            <div className="min-h-screen py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Documento no encontrado</h1>
                    <Link to="/docs" className="text-[var(--color-primary)] hover:underline">
                        Volver a Documentación
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
                    to="/docs"
                    className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors mb-8"
                >
                    <FiArrowLeft />
                    Volver a Documentación
                </Link>

                {/* Document Header */}
                <div className="glass rounded-xl p-8 mb-8">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-[var(--color-primary)]/10">
                            <FiBook className="w-8 h-8 text-[var(--color-primary)]" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">{document.title}</h1>
                            <p className="text-[var(--color-text-secondary)] text-lg">
                                {document.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Document Content */}
                <div className="glass rounded-xl p-8">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-pulse text-[var(--color-text-muted)]">
                                Cargando documento...
                            </div>
                        </div>
                    ) : (
                        <div className="prose prose-invert max-w-none">
                            <ReactMarkdown
                                components={{
                                    a: ({ node, children, href, ...props }) => {
                                        // Si el enlace es a un PDF, abrirlo en nueva pestaña
                                        if (href && href.endsWith('.pdf')) {
                                            return (
                                                <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                                                    {children}
                                                </a>
                                            );
                                        }
                                        // Para otros enlaces, comportamiento normal
                                        return <a href={href} {...props}>{children}</a>;
                                    }
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocumentDetail;
