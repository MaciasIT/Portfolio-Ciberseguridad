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

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Array para guardar la posición Y de cada columna
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            // Fondo semitransparente para el efecto de estela
            ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Color base verde matrix
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Color aleatorio sutil para variación
                const isHead = Math.random() > 0.975;
                ctx.fillStyle = isHead ? '#FFF' : '#00ff88'; // Cabeza blanca, cuerpo verde

                // Caracter aleatorio
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reiniciar caída aleatoriamente o si sale de la pantalla
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

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
