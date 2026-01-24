import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import MatrixBackground from './components/MatrixBackground';
import IntroTerminal from './components/IntroTerminal';
import { skills } from './data/skills';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiChevronDown, FiShield, FiCpu, FiTerminal, FiDatabase } from 'react-icons/fi';
import './App.css';

function App() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    if (showTerminal) return;

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [showTerminal]);

  if (showTerminal) {
    return <IntroTerminal onComplete={() => setShowTerminal(false)} />;
  }

  return (
    <Router>
      <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] selection:bg-[var(--color-primary)] selection:text-black">

        {/* BACKGROUND LAYER */}
        <div className="fixed inset-0 z-0 opacity-40">
          <MatrixBackground />
        </div>

        {/* FLOATING NAVIGATION */}
        <FloatingNavbar />

        {/* MAIN SCROLL CONTAINER */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* HERO SECTION */}
          <section id="about" className="min-h-screen flex flex-col justify-center items-start pt-20">
            <div className="reveal active">
              <span className="font-mono text-[var(--color-primary)] mb-4 block tracking-widest uppercase text-sm">
                // SESIÓN AUTORIZADA
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                MICHEL <br />
                <span className="glitch-text text-[var(--color-primary)]" data-text="MACÍAS">MACÍAS</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-[var(--color-text-secondary)] font-mono mb-8 flex items-center gap-3">
                <span className="animate-pulse text-[var(--color-primary)]">&gt;</span>
                Ciberseguridad & IT Ops
              </h2>
              <p className="max-w-2xl text-xl text-[var(--color-text-muted)] leading-relaxed mb-12">
                Experto en <span className="text-[var(--color-text-primary)] font-semibold">defensa proactiva</span>,
                <span className="text-[var(--color-text-primary)] font-semibold"> infraestructuras críticas</span> y <span className="text-[var(--color-text-primary)] font-semibold">automatización inteligente</span>.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex gap-4">
                  <a href="https://github.com/MaciasIT" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl glass border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all transform hover:-translate-y-1 shadow-xl">
                    <FiGithub size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-mac%C3%ADas-vargas-87902990/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl glass border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all transform hover:-translate-y-1 shadow-xl">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="mailto:michelmacias.it@gmail.com" className="p-4 rounded-2xl glass border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all transform hover:-translate-y-1 shadow-xl">
                    <FiMail size={24} />
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono font-bold text-[var(--color-text-primary)] glass px-6 py-3 rounded-full border border-[var(--color-border)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                  ESP - LIVE_FEED
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
              <FiChevronDown size={32} />
            </div>
          </section>

          {/* SKILLS BENTO SECTION */}
          <section id="skills" className="py-32">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[var(--color-text-muted)] mb-16 uppercase flex items-center gap-4 reveal">
              <span className="text-[var(--color-primary)]">01.</span> Stack Tecnológico
              <span className="h-[1px] flex-1 bg-[var(--color-border)]"></span>
            </h2>

            <div className="bento-grid reveal">
              <div className="bento-item bento-large group">
                <FiShield className="text-5xl text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Ciberseguridad</h3>
                <p className="text-[var(--color-text-secondary)]">Análisis de vulnerabilidades, auditorías bajo NIST SP 800-30 y protección de perímetros con hardening avanzado.</p>
                <div className="absolute -bottom-4 -right-4 text-9xl text-white/5 font-black">01</div>
              </div>

              <div className="bento-item bento-wide group">
                <FiTerminal className="text-4xl text-[var(--color-secondary)] mb-6 group-hover:translate-x-2 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Automatización (Python/Bash)</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Desarrollo de herramientas personalizadas para optimización y detección de amenazas en entornos Linux y Windows.</p>
              </div>

              <div className="bento-item group bento-tall flex flex-col justify-center items-center text-center">
                <FiCpu className="text-5xl text-[var(--color-accent)] mb-6" />
                <h4 className="text-xl font-bold">IT Ops</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-4">Docker, Virtualización, <br /> Monitorización Proactiva</p>
                <div className="mt-8 flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-40"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-10"></span>
                </div>
              </div>

              <div className="bento-item group flex flex-col justify-center items-center text-center border-dashed border-2 border-[var(--color-primary)]/30">
                <span className="text-4xl font-black text-[var(--color-primary)]">20+</span>
                <span className="text-[10px] font-mono uppercase tracking-widest mt-2">Herramientas & Scripts</span>
              </div>

              <div className="bento-item bento-wide group">
                <FiDatabase className="text-4xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Sistemas & Datos</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Administración avanzada de sistemas Linux/Windows y gestión segura de bases de datos relacionales.</p>
              </div>

              <div className="bento-item group flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent">
                <a href="#projects" className="text-sm font-bold hover:underline underline-offset-8 tracking-widest uppercase font-mono text-[var(--color-primary)]">Ver Proyectos &gt;</a>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="py-32">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[var(--color-text-muted)] mb-16 uppercase flex items-center gap-4 reveal">
              <span className="text-[var(--color-primary)]">02.</span> Showcase de Proyectos
              <span className="h-[1px] flex-1 bg-[var(--color-border)]"></span>
            </h2>
            <div className="reveal reveal-delay-1">
              <ProjectList />
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="py-32">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[var(--color-text-muted)] mb-16 uppercase flex items-center gap-4 reveal">
              <span className="text-[var(--color-primary)]">03.</span> Trayectoria Profesional
              <span className="h-[1px] flex-1 bg-[var(--color-border)]"></span>
            </h2>

            <div className="space-y-16 reveal">
              <div className="relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[var(--color-primary)] group">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--color-primary)] glow-primary transition-transform group-hover:scale-150"></div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Researcher de Seguridad Técnica</h3>
                <p className="text-[var(--color-primary)] font-mono text-sm mb-4">2024 - ACTUALIDAD</p>
                <div className="glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-colors">
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Centrado en la auditoría de activos críticos, desarrollo de scripts de automatización para endurecimiento de sistemas y análisis de vectores de ataque modernos.
                  </p>
                </div>
              </div>

              <div className="relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[var(--color-border)] group">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] transition-transform group-hover:bg-[var(--color-secondary)]"></div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Formación Especializada</h3>
                <p className="text-[var(--color-text-muted)] font-mono text-sm mb-4">2023 - 2024</p>
                <div className="glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-secondary)]/40 transition-colors">
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Especialización en redes, infraestructuras de contenedores y metodologías de gestión de riesgos NIST. Certificación Cisco "Hacker Ético".
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="py-48 flex flex-col justify-center items-center text-center reveal">
            <div className="inline-block px-6 py-2 glass rounded-full border border-[var(--color-primary)]/30 text-[var(--color-primary)] font-mono text-xs mb-12 animate-pulse">
              CONNECTION_STATUS: READY
            </div>
            <h3 className="text-6xl md:text-9xl font-black mb-8 text-[var(--color-text-primary)] tracking-tighter">
              DÉJAME UN <br /><span className="gradient-text italic">MENSAJE</span>
            </h3>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-12 leading-relaxed">
              ¿Buscas un perfil técnico comprometido con la seguridad y la eficiencia? Mi terminal siempre responde a peticiones legítimas.
            </p>
            <a
              href="mailto:michelmacias.it@gmail.com"
              className="group relative inline-flex items-center gap-4 px-16 py-6 bg-[var(--color-primary)] text-black font-mono text-2xl font-black rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,255,157,0.3)] hover:rotate-1"
            >
              ESTABLECER_CONEXIÓN();
              <span className="absolute inset-0 rounded-3xl border-4 border-white/20 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          </section>

          {/* Footer Minimal */}
          <footer className="py-20 text-center border-t border-[var(--color-border)] opacity-60">
            <p className="text-[var(--color-text-muted)] text-xs font-mono uppercase tracking-[0.5em]">
              MICHEL MACÍAS &copy; 2026 // PREMIUM PORTFOLIO v3.0 // CODED WITH PRIDE
            </p>
          </footer>

        </main>
      </div>
    </Router>
  );
}

export default App;