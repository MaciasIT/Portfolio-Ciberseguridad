import React from "react";
import { motion } from "framer-motion";

const BackgroundBeams = () => {
  console.log('[PORTFOLIO] Renderizando BackgroundBeams...');
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
      
      {/* Animated Beams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            x: ["0%", "120%"],
            y: ["0%", "120%"]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3
          }}
          className="absolute h-[2px] w-[300px] bg-gradient-to-r from-transparent via-sky-400 to-transparent rotate-45 blur-[1px]"
        />
      ))}

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
    </div>
  );
};

export default BackgroundBeams;
