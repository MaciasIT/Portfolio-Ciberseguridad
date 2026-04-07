import React, { useState, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import IntroTerminal from './components/IntroTerminal';
import TransitionTimeline from './components/TransitionTimeline';
import SkillBridge from './components/SkillBridge';
import BackgroundBeams from './components/BackgroundBeams';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import { FiChevronDown } from 'react-icons/fi';
import './App.css';

function App() {
  console.log('[PORTFOLIO] Renderizando App...');
  const [showTerminal, setShowTerminal] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleTerminalComplete = useCallback(() => {
    setShowTerminal(false);
  }, []);

  if (showTerminal) {
    return <IntroTerminal onComplete={handleTerminalComplete} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-[#000000] text-[#fafafa] font-sans selection:bg-[#3b82f6] selection:text-black overflow-x-hidden">
        
        {/* Scroll Progress Bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#3b82f6] origin-left z-[100]" style={{ scaleX }} />

        {/* PREMIUM BACKGROUND */}
        <BackgroundBeams />

        {/* FLOATING NAVIGATION */}
        <FloatingNavbar />

        {/* MAIN CONTENT */}
        <main className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center w-full">
                {/* ===== HERO SECTION ===== */}
                <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center w-full max-w-5xl mx-auto"
                  >
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="font-mono text-[#3b82f6] text-base md:text-lg tracking-[0.3em] mb-6"
                    >
                      Iniciando_Conciencia();
                    </motion.span>

                    <motion.h1 
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ delay: 0.2, duration: 1 }}
                      className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 text-gradient"
                    >
                      MICHEL MACIAS
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="max-w-3xl"
                    >
                      <p className="text-xl md:text-3xl text-[#d4d4d8] leading-relaxed mb-16 font-light">
                        Fiabilidad forjada en <span className="text-white font-medium border-b border-[#3b82f6]/30">Gestión Senior</span>, aplicada con rigor a la <span className="text-[#3b82f6] font-medium">Ciberseguridad Técnica</span>.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="flex flex-wrap justify-center gap-6"
                    >
                      <a href="#labs" className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-[#3b82f6] hover:text-white transition-all duration-300">
                        Explorar Laboratorios
                      </a>
                      <a href="#contact" className="px-8 py-4 border border-[#27272a] text-white font-bold text-xs uppercase tracking-widest hover:border-white transition-all duration-300">
                        Contactar
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 opacity-20"
                  >
                    <FiChevronDown size={24} />
                  </motion.div>
                </section>

                {/* ===== BITÁCORA SECTION ===== */}
                <section id="bitacora" className="py-40 w-full">
                  <div className="section-container">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8 }}
                      className="mb-24 text-center md:text-left"
                    >
                      <span className="font-mono text-[#3b82f6] text-xs tracking-[0.2em] block mb-4 uppercase">&lt;Bitácora_de_Transición /&gt;</span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">El Viaje Profesional</h2>
                    </motion.div>
                    <TransitionTimeline />
                  </div>
                </section>

                {/* ===== BRIDGE SECTION ===== */}
                <section id="bridge" className="py-40 w-full border-y border-[#27272a] bg-[#09090b]">
                  <div className="section-container">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8 }}
                      className="mb-24 text-center"
                    >
                      <span className="font-mono text-[#22c55e] text-xs tracking-[0.2em] block mb-4 uppercase">&lt;Puente_de_Habilidades /&gt;</span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">Transferencia de Valor</h2>
                    </motion.div>
                    <SkillBridge />
                  </div>
                </section>

                {/* ===== LABS SECTION ===== */}
                <section id="labs" className="py-40 w-full">
                  <div className="section-container">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8 }}
                      className="mb-24 text-center md:text-left"
                    >
                      <span className="font-mono text-[#3b82f6] text-xs tracking-[0.2em] block mb-4 uppercase">&lt;Laboratorios_Activos /&gt;</span>
                      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">Investigación Técnica</h2>
                    </motion.div>
                    <ProjectList />
                  </div>
                </section>

                {/* ===== CONTACT SECTION ===== */}
                <section id="contact" className="py-60 w-full text-center">
                  <div className="section-container">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-gradient uppercase">¿Conectamos?</h2>
                      <p className="text-xl text-[#a1a1aa] mb-16 max-w-2xl mx-auto font-light">
                        Disponible para misiones de seguridad donde la madurez y el rigor técnico sean la prioridad.
                      </p>
                      <a href="mailto:michelmacias.it@gmail.com" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-lg uppercase tracking-widest hover:bg-[#3b82f6] hover:text-white transition-all duration-500">
                        Establecer_Conexión();
                      </a>
                    </motion.div>
                  </div>
                </section>
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>

          {/* Footer */}
          <footer className="py-20 w-full border-t border-[#27272a] text-center">
            <p className="font-mono text-[10px] text-[#52525b] uppercase tracking-[0.5em]">
              Michel Macías // M1TXEL SECURITY LAB // 2026
            </p>
          </footer>

        </main>
      </div>
    </Router>
  );
}

export default App;
