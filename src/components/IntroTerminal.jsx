import React, { useState, useEffect } from 'react';

const sequence = [
    { text: "> INICIANDO PROTOCOLO DE ACCESO...", delay: 400 },
    { text: "> CARGANDO MÓDULOS DE SEGURIDAD...", delay: 600 },
    { text: "[OK] FIREWALL ACTIVO", delay: 300 },
    { text: "[OK] ENCRIPTACIÓN AES-256 LISTA", delay: 300 },
    { text: "> VERIFICANDO IDENTIDAD: MICHEL_MACIAS", delay: 800 },
    { text: "[SUCCESS] IDENTIDAD CONFIRMADA", delay: 400 },
    { text: "> BIENVENIDO AL PORTFOLIO V3.0", delay: 500 },
    { text: "> READY TO DEPLOY.", delay: 500 },
];

const IntroTerminal = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        let mounted = true;
        let currentIdx = 0;
        let timer;

        const processSequence = () => {
            if (!mounted) return;

            if (currentIdx < sequence.length) {
                const item = sequence[currentIdx];
                if (item && item.text) {
                    setLines(prev => [...prev, item.text]);
                    currentIdx++;
                    timer = setTimeout(processSequence, item.delay || 500);
                } else {
                    currentIdx++;
                    processSequence();
                }
            } else {
                // Terminado el texto, esperar un poco y salir
                timer = setTimeout(() => {
                    if (mounted) {
                        setIsExiting(true);
                        timer = setTimeout(() => {
                            if (mounted && typeof onComplete === 'function') {
                                onComplete();
                            }
                        }, 1000);
                    }
                }, 1000);
            }
        };

        timer = setTimeout(processSequence, 500);

        return () => {
            mounted = false;
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050810] transition-all duration-1000 ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            <div className="w-full max-w-2xl p-8 font-mono text-sm md:text-lg">
                <div className="flex flex-col gap-2">
                    {lines.map((line, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="text-slate-500 select-none">[{new Date().toLocaleTimeString()}]</span>
                            <span className={line && (line.includes('[OK]') || line.includes('[SUCCESS]')) ? 'text-[#00ff9d]' : 'text-slate-100'}>
                                {line}
                            </span>
                        </div>
                    ))}
                    <span className="inline-block w-2 h-5 bg-[#00ff9d] animate-pulse ml-1 align-middle"></span>
                </div>
            </div>

            {/* Simple scanline effect to reduce JS load */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
        </div>
    );
};

export default IntroTerminal;
