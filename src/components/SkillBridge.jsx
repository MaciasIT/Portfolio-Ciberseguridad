import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const skillMappings = [
    {
        management: "Gestión de Crisis",
        technical: "Respuesta a Incidentes",
        description: "Calma y método bajo presión extrema."
    },
    {
        management: "Logística y Planificación",
        technical: "Operaciones de Seguridad",
        description: "Continuidad operativa y procesos."
    },
    {
        management: "Liderazgo de Equipos",
        technical: "Colaboración en SOC",
        description: "Coordinación y reporte a stakeholders."
    },
    {
        management: "Atención al Cliente",
        technical: "Concienciación de Riesgos",
        description: "Traducción técnica para el negocio."
    }
];

const SkillBridge = () => {
    console.log('[PORTFOLIO] Renderizando SkillBridge...');
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillMappings.map((mapping, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 bg-[#09090b] border border-[#27272a] hover:border-[#22c55e]/30 transition-all duration-500 group"
                    >
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-[0.2em] mb-3">Gestión Senior</span>
                                    <span className="text-xl font-bold text-white">{mapping.management}</span>
                                </div>
                                <div className="text-[#22c55e] group-hover:translate-x-2 transition-transform duration-500">
                                    <FiArrowRight size={28} />
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs font-mono text-[#22c55e] uppercase tracking-[0.2em] mb-3">Seguridad Técnica</span>
                                    <span className="text-xl font-bold text-[#22c55e]">{mapping.technical}</span>
                                </div>
                            </div>
                            <p className="text-base text-[#a1a1aa] italic text-center group-hover:text-white transition-colors leading-relaxed">
                                "{mapping.description}"
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillBridge;
