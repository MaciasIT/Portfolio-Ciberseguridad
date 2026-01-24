import React, { useState, useEffect } from 'react';

const IntroTerminal = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [isExiting, setIsExiting] = useState(false);

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

    useEffect(() => {
        let currentLine = 0;
        const addLine = () => {
            if (currentLine < sequence.length) {
                setLines(prev => [...prev, sequence[currentLine].text]);
                setTimeout(addLine, sequence[currentLine].delay);
                currentLine++;
            } else {
                setTimeout(() => {
                    setIsExiting(true);
                    setTimeout(onComplete, 800);
                }, 1000);
            }
        };

        addLine();
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg-primary)] transition-all duration-1000 ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            <div className="w-full max-w-2xl p-8 font-mono text-sm md:text-lg">
                <div className="flex flex-col gap-2">
                    {lines.map((line, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="text-[var(--color-text-muted)] select-none">[{new Date().toLocaleTimeString()}]</span>
                            <span className={line.includes('[OK]') || line.includes('[SUCCESS]') ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-primary)]'}>
                                {line}
                            </span>
                        </div>
                    ))}
                    <span className="inline-block w-2 h-5 bg-[var(--color-primary)] animate-pulse ml-1 align-middle"></span>
                </div>
            </div>

            {/* Scanline Effect Overlay for Terminal */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,255,0,0.06))] bg-[length:100%_4px,3px_100%]"></div>
        </div>
    );
};

export default IntroTerminal;
