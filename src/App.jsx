import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import MatrixBackground from './components/MatrixBackground';
import IntroTerminal from './components/IntroTerminal';
import { skills } from './data/skills';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiChevronDown, FiShield, FiCpu, FiTerminal, FiDatabase } from 'react-icons/fi';
import './App.css';

function App() {
  // Volver a activar terminal para funcionamiento normal
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

  const handleTerminalComplete = useCallback(() => {
    setShowTerminal(false);
  }, []);

  if (showTerminal) {
    return <IntroTerminal onComplete={handleTerminalComplete} />;
  }

  // Renderizar el contenido del portfolio
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
        <main className="relative z-10">

          {/* ===== HERO SECTION ===== */}
          <section id="about" className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 snap-start">
            {/* Cyber Glowing Orb - Simple Gradient */}
            <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-primary-glow),transparent_70%)] opacity-20 blur-3xl pointer-events-none"></div>

            <div className="text-center max-w-5xl reveal">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--color-primary)] mb-8 px-4 py-2 rounded-full glass border border-[var(--color-primary)]/20 animate-fadeIn uppercase tracking-[0.3em]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                SECURITY SPECIALIST // FULL-STACK
              </span>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[var(--color-text-primary)] leading-[0.9] tracking-tighter mb-8">
                MICHEL <br />
                <span className="gradient-text">MACÍAS</span>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                Especialista en <span className="text-[var(--color-primary)] font-semibold">ciberseguridad</span> y desarrollo.
                Auditorías de seguridad, pentesting y automatización de infraestructuras.
                Protegiendo sistemas, un vulnerability a la vez.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <a href="https://github.com/MaciasIT" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300 group">
                  <FiGithub className="text-xl group-hover:rotate-12 transition-transform" />
                  <span className="font-mono text-sm">GITHUB</span>
                </a>
                <a href="https://linkedin.com/in/michelmaciasgonzalez" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all duration-300 group">
                  <FiLinkedin className="text-xl group-hover:rotate-12 transition-transform" />
                  <span className="font-mono text-sm">LINKEDIN</span>
                </a>
                <a href="mailto:michelmacias.it@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 group">
                  <FiMail className="text-xl group-hover:rotate-12 transition-transform" />
                  <span className="font-mono text-sm">EMAIL</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[var(--color-text-muted)] font-mono text-sm">
                <FiMapPin className="text-[var(--color-primary)]" />
                <span>Bizkaia, España</span>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
              <FiChevronDown className="text-3xl text-[var(--color-primary)]" />
            </div>
          </section>

          {/* ===== SKILLS SECTION - BENTO GRID ===== */}
          <section id="skills" className="min-h-screen py-32 px-6 snap-start">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 reveal">
                <span className="text-xs font-mono font-bold text-[var(--color-secondary)] tracking-[0.3em] uppercase mb-4 block">TECH_STACK</span>
                <h2 className="text-5xl md:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Arsenal de <span className="gradient-text">Habilidades</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Herramientas y conocimientos que utilizo para proteger, analizar y construir sistemas seguros.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="bento-grid reveal">
                {skills.map((category, index) => {
                  const icons = {
                    'shield': <FiShield className="text-3xl text-[var(--color-primary)]" />,
                    'desktop': <FiCpu className="text-3xl text-[var(--color-secondary)]" />,
                    'code': <FiTerminal className="text-3xl text-[var(--color-accent)]" />,
                    'network': <FiDatabase className="text-3xl text-[var(--color-primary)]" />,
                    'tool': <FiCpu className="text-3xl text-[var(--color-secondary)]" />
                  };
                  const isLarge = index === 0;

                  return (
                    <div
                      key={category.category}
                      className={`bento-item ${isLarge ? 'bento-large' : index % 3 === 1 ? 'bento-wide' : ''}`}
                    >
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--color-primary)] opacity-5 blur-[60px] group-hover:opacity-10 transition-opacity"></div>

                      <div className="flex items-center gap-4 mb-6">
                        {icons[category.icon] || <FiShield className="text-3xl text-[var(--color-primary)]" />}
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{category.category}</h3>
                      </div>

                      <div className="space-y-3">
                        {category.items.slice(0, isLarge ? 6 : 4).map(skill => (
                          <div key={skill.name} className="group/skill">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
                              <span className="text-[var(--color-text-muted)] font-mono text-xs">{skill.level}%</span>
                            </div>
                            <div className="h-1 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full transition-all duration-1000 group-hover/skill:shadow-[0_0_10px_var(--color-primary-glow)]"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ===== PROJECTS SECTION ===== */}
          <section id="projects" className="min-h-screen py-32 px-6 snap-start">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 reveal">
                <span className="text-xs font-mono font-bold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 block">MISSION_LOG</span>
                <h2 className="text-5xl md:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Proyectos <span className="gradient-text">Destacados</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Cada proyecto es una misión completada. De scripts a plataformas completas.
                </p>
              </div>

              <div className="reveal">
                <ProjectList />
              </div>
            </div>
          </section>

          {/* ===== EXPERIENCE SECTION ===== */}
          <section id="experience" className="min-h-screen py-32 px-6 snap-start">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20 reveal">
                <span className="text-xs font-mono font-bold text-[var(--color-primary)] tracking-[0.3em] uppercase mb-4 block">CAREER_PATH</span>
                <h2 className="text-5xl md:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Trayectoria <span className="gradient-text">Profesional</span>
                </h2>
              </div>

              <div className="relative reveal">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]"></div>

                <div className="space-y-16">
                  <div className="relative pl-20">
                    <div className="absolute left-6 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_20px_var(--color-primary-glow)]"></div>
                    <div className="glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-500">
                      <span className="text-xs font-mono text-[var(--color-primary)] mb-2 block">2024 - PRESENTE</span>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">Formación en Ciberseguridad</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Certificación Google Cybersecurity en progreso. Desarrollo de proyectos prácticos de
                        seguridad ofensiva y defensiva. Automatización de auditorías con Python y Bash.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-6 w-5 h-5 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_20px_var(--color-secondary-glow)]"></div>
                    <div className="glass p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-secondary)]/30 transition-all duration-500">
                      <span className="text-xs font-mono text-[var(--color-secondary)] mb-2 block">2020 - 2024</span>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">Desarrollo Full-Stack</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        Experiencia en desarrollo web y móvil. Implementación de soluciones seguras
                        y escalables. Gestión de infraestructura y DevOps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-32 px-6 snap-start">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--color-accent-glow),transparent_70%)] opacity-10 blur-3xl pointer-events-none"></div>

            <span className="text-xs font-mono font-bold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 block reveal">INIT_CONNECTION</span>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--color-text-primary)] mb-8 text-center reveal">
              ¿Conectamos?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-12 leading-relaxed text-center reveal">
              ¿Buscas un perfil técnico comprometido con la seguridad y la eficiencia? Mi terminal siempre responde a peticiones legítimas.
            </p>
            <a
              href="mailto:michelmacias.it@gmail.com"
              className="group relative inline-flex items-center gap-4 px-16 py-6 bg-[var(--color-primary)] text-black font-mono text-2xl font-black rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,255,157,0.3)] hover:rotate-1 reveal"
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