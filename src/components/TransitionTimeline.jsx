import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    {
        id: 1,
        title: "Gestión y Liderazgo Senior",
        period: "1994 - 2023",
        description: "Más de 30 años liderando equipos y logística en hostelería y eventos. Forjando la fiabilidad y gestión de crisis que hoy aplico a la seguridad.",
        skills: ["Gestión de Crisis", "Liderazgo", "Logística"]
    },
    {
        id: 2,
        title: "Transición Tecnológica",
        period: "2023 - 2024",
        description: "Inicio de formación en Administración de Sistemas (SMR). Construyendo la base técnica necesaria para la especialización.",
        skills: ["Sistemas", "Redes", "Hardware"]
    },
    {
        id: 3,
        title: "Especialización en Ciberseguridad",
        period: "2024 - Presente",
        description: "Enfoque en seguridad defensiva y análisis de vulnerabilidades. Certificaciones Google Cyber y Cisco en curso.",
        skills: ["Hacking Ético", "Defensa", "Hardening"]
    },
    {
        id: 4,
        title: "Analista Junior de Alta Fiabilidad",
        period: "Hoy",
        description: "Listo para aportar valor en SOC y operaciones de seguridad, combinando madurez de gestión con rigor técnico.",
        skills: ["Monitoreo", "IR", "Cumplimiento"]
    }
];

const TransitionTimeline = () => {
    console.log('[PORTFOLIO] Renderizando TransitionTimeline...');
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-0 h-full w-[1px] bg-[#27272a]"></div>

                <div className="space-y-20">
                    {milestones.map((milestone, index) => (
                        <motion.div 
                            key={milestone.id} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-16 group"
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#000000] border border-[#27272a] group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] transition-all duration-500 z-10"></div>

                            {/* Content */}
                            <div className="flex flex-col gap-3">
                                <span className="text-xs md:text-sm font-mono text-[#a1a1aa] uppercase tracking-[0.2em]">
                                    {milestone.period}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#3b82f6] transition-colors">
                                    {milestone.title}
                                </h3>
                                <p className="text-[#d4d4d8] text-base md:text-lg leading-relaxed max-w-2xl font-light">
                                    {milestone.description}
                                </p>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    {milestone.skills.map((skill, i) => (
                                        <span key={i} className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider bg-white/5 px-3 py-1 rounded border border-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransitionTimeline;
