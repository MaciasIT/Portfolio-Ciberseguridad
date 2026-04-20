import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { skills, certifications } from '../data/skills';
import { FiAward, FiCode, FiMail, FiGithub } from 'react-icons/fi';

const About = () => {
    console.log('[PORTFOLIO] Renderizando About...');
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                const basePath = import.meta.env.BASE_URL || '/';
                const fileUrl = `${basePath}portfolio_content/curriculum/Declaración.md`;
                const response = await fetch(fileUrl);
                if (!response.ok) throw new Error('Failed to load declaration');
                const text = await response.text();
                setMarkdown(text);
            } catch (err) {
                console.error('Error loading markdown:', err);
                setMarkdown('# Error\nNo se pudo cargar la declaración profesional.');
            } finally {
                setLoading(false);
            }
        };
        loadMarkdown();
    }, []);

    return (
        <div className="min-h-screen py-32 bg-[#000000]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header with Profile Image */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center mb-24 text-center"
                >
                    <div className="relative mb-10">
                        <div className="absolute -inset-4 bg-[#3b82f6]/10 rounded-full blur-2xl opacity-50"></div>
                        <img
                            src="/Portfolio-Ciberseguridad/perfil.jpg"
                            alt="Michel Macías"
                            className="relative w-40 h-40 object-cover rounded-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">SOBRE MÍ</h1>
                    <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto font-light">
                        Trayectoria de gestión senior aplicada con rigor a la ciberseguridad técnica.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="p-10 bg-[#09090b] border border-[#27272a] rounded-2xl">
                            {loading ? (
                                <div className="text-center py-12">
                                    <div className="animate-pulse text-[#52525b] font-mono uppercase tracking-widest">
                                        [CARGANDO_BITACORA...]
                                    </div>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:tracking-tight prose-p:text-[#d4d4d8] prose-p:text-lg prose-p:leading-relaxed prose-strong:text-[#3b82f6] prose-li:text-[#d4d4d8] prose-li:text-lg">
                                    <ReactMarkdown>{markdown}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Certifications */}
                        <div className="p-8 bg-[#09090b] border border-[#27272a] rounded-2xl">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
                                <FiAward className="text-[#3b82f6]" />
                                CERTIFICACIONES
                            </h3>
                            <div className="space-y-8">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="group">
                                        <h4 className="font-bold text-base text-white/90 mb-2 group-hover:text-[#3b82f6] transition-colors">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-[#a1a1aa] mb-4">{cert.issuer}</p>
                                        <div className="flex items-center justify-between">
                                            <span className={`px-3 py-1 text-xs font-mono rounded border ${cert.status === 'En progreso'
                                                ? 'border-[#f59e0b]/20 text-[#f59e0b] bg-[#f59e0b]/5'
                                                : 'border-[#3b82f6]/20 text-[#3b82f6] bg-[#3b82f6]/5'
                                                }`}>
                                                {cert.status.toUpperCase()}
                                            </span>
                                            <span className="text-xs font-mono text-[#52525b]">{cert.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Summary */}
                        <div className="p-8 bg-[#09090b] border border-[#27272a] rounded-2xl">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
                                <FiCode className="text-[#3b82f6]" />
                                HABILIDADES
                            </h3>
                            <div className="space-y-8">
                                {skills.map((category, index) => (
                                    <div key={index}>
                                        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#52525b] mb-4">
                                            {category.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {category.items.slice(0, 3).map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 text-xs font-mono rounded bg-white/5 text-[#d4d4d8] border border-white/5"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
