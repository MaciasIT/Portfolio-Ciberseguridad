import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Configura el tamaño del canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Caracteres para la lluvia (mix de katakana y números)
        const chars = 'ABCDEF0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const charArray = chars.split('');

        const fontSize = 16;
        const columns = Math.ceil(canvas.width / fontSize);
        const drops = [];
        const speeds = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
            speeds[i] = 1 + Math.random() * 2;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 12, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px var(--font-mono)`;

            for (let i = 0; i < drops.length; i++) {
                const isHead = Math.random() > 0.98;
                ctx.fillStyle = isHead ? '#fff' : 'rgba(255, 62, 62, 0.35)';

                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }

                drops[i] += speeds[i] * 0.5;
            }
        };

        const interval = setInterval(draw, 30);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.3, backgroundColor: 'transparent' }}
        />
    );
};

export default MatrixBackground;
