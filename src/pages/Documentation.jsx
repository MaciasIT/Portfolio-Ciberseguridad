import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { documentation } from '../data/documentation';
import { FiBook, FiChevronRight } from 'react-icons/fi';

const Documentation = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <h1 className="text-5xl font-bold mb-4">Documentación</h1>
                    <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Biblioteca de documentación técnica sobre auditorías, evaluación de riesgos, y mejores prácticas de seguridad
                    </p>
                </div>

                {/* Documentation Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documentation.map((category, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-6 hover:bg-[var(--color-bg-elevated)] transition-all duration-300 hover:glow-primary group"
                        >
                            {/* Category Header */}
                            <div
                                className="flex items-center justify-between mb-4 cursor-pointer"
                                onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                        <FiBook className="w-6 h-6 text-[var(--color-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                                            {category.category}
                                        </h3>
                                        <span className="text-xs text-[var(--color-text-muted)]">
                                            {category.documents.length} documento{category.documents.length !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                </div>
                                <FiChevronRight
                                    className={`text-[var(--color-text-muted)] transition-transform ${selectedCategory === index ? 'rotate-90' : ''
                                        }`}
                                />
                            </div>

                            {/* Category Description */}
                            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                                {category.description}
                            </p>

                            {/* Documents List */}
                            {selectedCategory === index && (
                                <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-3 animate-fadeIn">
                                    {category.documents.map((doc, docIndex) => (
                                        <Link
                                            key={docIndex}
                                            to={`/docs/${doc.id}`}
                                            className="block p-3 rounded-lg bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                                        >
                                            <h4 className="font-semibold text-[var(--color-text-primary)] mb-1 hover:text-[var(--color-primary)] transition-colors">
                                                {doc.title}
                                            </h4>
                                            <p className="text-xs text-[var(--color-text-muted)]">
                                                {doc.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-12 glass rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Documentación Completa</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
                        Toda la documentación está basada en estándares de la industria como NIST, OWASP y mejores prácticas de ciberseguridad.
                        Incluye guías prácticas, análisis de casos reales y recomendaciones estratégicas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 rounded-lg bg-[var(--color-bg-tertiary)]">
                            <div className="text-2xl font-bold text-[var(--color-primary)]">
                                {documentation.reduce((acc, cat) => acc + cat.documents.length, 0)}
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)]">Documentos</div>
                        </div>
                        <div className="px-6 py-3 rounded-lg bg-[var(--color-bg-tertiary)]">
                            <div className="text-2xl font-bold text-[var(--color-secondary)]">
                                {documentation.length}
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)]">Categorías</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documentation;
