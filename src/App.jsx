import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import MatrixBackground from './components/MatrixBackground';
import IntroTerminal from './components/IntroTerminal';
import { skills } from './data/skills';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiShield, FiCpu, FiTerminal, FiDatabase, FiCode, FiLock } from 'react-icons/fi';
import './App.css';

function App() {
  const [showTerminal, setShowTerminal] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    if (showTerminal) return;

    // Scroll automático al hero después de la intro
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showTerminal]);

  const handleTerminalComplete = useCallback(() => {
    setShowTerminal(false);
  }, []);

  if (showTerminal) {
    return <IntroTerminal onComplete={handleTerminalComplete} />;
  }

  return (
    <Router>
      <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] selection:bg-[var(--color-primary)] selection:text-black min-h-screen">

        {/* BACKGROUND LAYER */}
        <div className="fixed inset-0 z-0 opacity-25">
          <MatrixBackground />
        </div>

        {/* FLOATING NAVIGATION */}
        <FloatingNavbar />

        {/* MAIN SCROLL CONTAINER */}
        <main className="relative z-10">

          {/* ===== HERO SECTION - CENTERED ===== */}
          <section ref={heroRef} id="about" className="min-h-screen flex flex-col items-center justify-center relative px-8 md:px-16 lg:px-24">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,var(--color-primary-glow),transparent_50%)] opacity-10 blur-3xl pointer-events-none"></div>

            <div className="text-center max-w-4xl mx-auto animate-fadeIn">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 mb-10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
                </span>
                <span className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-widest">
                  Disponible para proyectos
                </span>
              </div>

              {/* Name */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
                <span className="text-[var(--color-text-primary)]">MICHEL</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
                  MACÍAS
                </span>
              </h1>

              {/* Role */}
              <p className="text-xl md:text-2xl font-mono text-[var(--color-text-secondary)] mb-10">
                Cybersecurity Specialist & Developer
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed mb-14">
                Especialista en <span className="text-[var(--color-primary)] font-medium">seguridad ofensiva</span>,
                <span className="text-[var(--color-secondary)] font-medium"> auditorías</span> y
                <span className="text-[var(--color-accent)] font-medium"> automatización</span>.
                Transformo vulnerabilidades en fortalezas.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mb-14">
                <a
                  href="#projects"
                  className="group relative px-10 py-5 bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-bold font-mono text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,157,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FiCode size={18} /> Ver Proyectos
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                <a
                  href="mailto:michelmacias.it@gmail.com"
                  className="px-10 py-5 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-sm uppercase tracking-wider hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <FiMail size={18} /> Contactar
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-8">
                <a href="https://github.com/MaciasIT" target="_blank" rel="noopener noreferrer"
                  className="p-4 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-[0_0_25px_rgba(0,255,157,0.2)] transition-all duration-300">
                  <FiGithub size={22} />
                </a>
                <a href="https://linkedin.com/in/michelmaciasgonzalez" target="_blank" rel="noopener noreferrer"
                  className="p-4 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] hover:shadow-[0_0_25px_rgba(0,212,255,0.2)] transition-all duration-300">
                  <FiLinkedin size={22} />
                </a>
                <a href="mailto:michelmacias.it@gmail.com"
                  className="p-4 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_25px_rgba(255,0,123,0.2)] transition-all duration-300">
                  <FiMail size={22} />
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
                <FiMapPin className="text-[var(--color-primary)]" />
                <span className="font-mono">Bizkaia, España</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
              <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest">Scroll</span>
              <div className="w-7 h-12 border-2 border-[var(--color-primary)]/40 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* ===== SKILLS SECTION ===== */}
          <section id="skills" className="py-40 px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-block px-5 py-2.5 mb-6 text-xs font-mono font-bold text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 uppercase tracking-[0.3em]">
                  Tech Stack
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8">
                  Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Habilidades</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
                  Herramientas y conocimientos para proteger, analizar y construir sistemas seguros.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((category, index) => {
                  const icons = {
                    'shield': <FiShield className="text-2xl" />,
                    'desktop': <FiCpu className="text-2xl" />,
                    'code': <FiTerminal className="text-2xl" />,
                    'network': <FiDatabase className="text-2xl" />,
                    'tool': <FiLock className="text-2xl" />
                  };

                  return (
                    <div
                      key={category.category}
                      className="group relative p-8 bg-[var(--color-bg-secondary)]/40 backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all duration-500 overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                          <div className="p-4 border border-[var(--color-border)] text-[var(--color-primary)] group-hover:border-[var(--color-primary)]/50 group-hover:shadow-[0_0_25px_rgba(0,255,157,0.1)] transition-all duration-300">
                            {icons[category.icon] || <FiShield className="text-2xl" />}
                          </div>
                          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{category.category}</h3>
                        </div>

                        <div className="space-y-5">
                          {category.items.slice(0, 4).map(skill => (
                            <div key={skill.name}>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
                                <span className="text-[var(--color-text-muted)] font-mono">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-[var(--color-bg-tertiary)] overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-1000"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ===== PROJECTS SECTION ===== */}
          <section id="projects" className="py-40 px-8 md:px-16 lg:px-24 bg-[var(--color-bg-secondary)]/20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-block px-5 py-2.5 mb-6 text-xs font-mono font-bold text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 uppercase tracking-[0.3em]">
                  Proyectos
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8">
                  Misiones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)]">Completadas</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
                  Cada proyecto es una misión. De scripts defensivos a plataformas completas.
                </p>
              </div>

              <ProjectList />
            </div>
          </section>

          {/* ===== EXPERIENCE SECTION ===== */}
          <section id="experience" className="py-40 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-block px-5 py-2.5 mb-6 text-xs font-mono font-bold text-[var(--color-primary)] border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 uppercase tracking-[0.3em]">
                  Trayectoria
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8">
                  Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Path</span>
                </h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]"></div>

                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* Item 1 */}
                  <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <span className="text-sm font-mono text-[var(--color-primary)]">2024 - Presente</span>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_25px_var(--color-primary-glow)] transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-16 pl-12">
                      <div className="p-8 bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Formación en Ciberseguridad</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          Certificación Google Cybersecurity. Proyectos de seguridad ofensiva y defensiva. Automatización con Python y Bash.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/2 md:text-right md:pr-16 md:order-1">
                      <div className="p-8 bg-[var(--color-bg-secondary)]/40 border border-[var(--color-border)] hover:border-[var(--color-secondary)]/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Desarrollo Full-Stack</h3>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          Desarrollo web y móvil. Implementación de soluciones seguras y escalables. Gestión de infraestructura y DevOps.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_25px_var(--color-secondary-glow)] transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-16 md:order-2 pl-12">
                      <span className="text-sm font-mono text-[var(--color-secondary)]">2020 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section id="contact" className="py-40 px-8 md:px-16 lg:px-24 bg-[var(--color-bg-secondary)]/20">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-5 py-2.5 mb-6 text-xs font-mono font-bold text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 uppercase tracking-[0.3em]">
                Contacto
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8">
                ¿Conectamos?
              </h2>
              <p className="text-xl text-[var(--color-text-muted)] max-w-xl mx-auto mb-14 leading-relaxed">
                ¿Buscas un perfil técnico comprometido con la seguridad? Mi terminal siempre responde.
              </p>
              <a
                href="mailto:michelmacias.it@gmail.com"
                className="group inline-flex items-center gap-4 px-14 py-6 bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-mono text-lg font-bold transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,255,157,0.4)] hover:scale-105"
              >
                <FiMail className="text-xl" />
                ESTABLECER_CONEXIÓN()
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 text-center border-t border-[var(--color-border)]">
            <p className="text-[var(--color-text-muted)] text-xs font-mono uppercase tracking-[0.3em]">
              Michel Macías © 2026 // Portfolio v3.0
            </p>
          </footer>

        </main>
      </div>
    </Router>
  );
}

export default App;