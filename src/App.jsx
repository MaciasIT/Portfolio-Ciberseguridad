import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import MatrixBackground from './components/MatrixBackground';
import IntroTerminal from './components/IntroTerminal';
import { skills } from './data/skills';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiChevronDown, FiShield, FiCpu, FiTerminal, FiDatabase, FiArrowDown, FiCode, FiLock } from 'react-icons/fi';
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

    // Forzar visibilidad de todos los elementos reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => el.classList.add('active'));
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
        <div className="fixed inset-0 z-0 opacity-30">
          <MatrixBackground />
        </div>

        {/* FLOATING NAVIGATION */}
        <FloatingNavbar />

        {/* MAIN SCROLL CONTAINER */}
        <main className="relative z-10">

          {/* ===== HERO SECTION - SPLIT LAYOUT ===== */}
          <section ref={heroRef} id="about" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-primary-glow),transparent_60%)] opacity-15 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-secondary-glow),transparent_60%)] opacity-10 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-24">

                {/* LEFT SIDE - TEXT CONTENT */}
                <div className="order-2 lg:order-1 animate-fadeIn">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-3 mb-8">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)]"></span>
                    </span>
                    <span className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-widest">
                      Disponible para proyectos
                    </span>
                  </div>

                  {/* Name */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6">
                    <span className="text-[var(--color-text-primary)]">MICHEL</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)]">
                      MACÍAS
                    </span>
                  </h1>

                  {/* Role */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[var(--color-primary)] to-transparent"></div>
                    <span className="text-lg sm:text-xl font-mono text-[var(--color-text-secondary)]">
                      Cybersecurity Specialist
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[var(--color-text-muted)] max-w-lg leading-relaxed mb-10">
                    Especialista en <span className="text-[var(--color-primary)] font-medium">seguridad ofensiva</span> y
                    <span className="text-[var(--color-secondary)] font-medium"> automatización</span>.
                    Transformo vulnerabilidades en fortalezas y código en escudos digitales.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mb-10">
                    <a
                      href="#projects"
                      className="group relative px-8 py-4 bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-bold font-mono text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,157,0.4)]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FiCode /> Ver Proyectos
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a
                      href="mailto:michelmacias.it@gmail.com"
                      className="px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-mono text-sm uppercase tracking-wider hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <FiMail /> Contactar
                      </span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-widest">Links:</span>
                    <div className="flex gap-4">
                      <a href="https://github.com/MaciasIT" target="_blank" rel="noopener noreferrer"
                        className="p-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,255,157,0.2)] transition-all duration-300">
                        <FiGithub size={20} />
                      </a>
                      <a href="https://linkedin.com/in/michelmaciasgonzalez" target="_blank" rel="noopener noreferrer"
                        className="p-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
                        <FiLinkedin size={20} />
                      </a>
                      <a href="mailto:michelmacias.it@gmail.com"
                        className="p-3 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(255,0,123,0.2)] transition-all duration-300">
                        <FiMail size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mt-8 text-sm text-[var(--color-text-muted)]">
                    <FiMapPin className="text-[var(--color-primary)]" />
                    <span className="font-mono">Bizkaia, España</span>
                  </div>
                </div>

                {/* RIGHT SIDE - VISUAL ELEMENT */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    {/* Terminal Window */}
                    <div className="relative bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                      {/* Terminal Header */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)]">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <span className="ml-4 text-xs font-mono text-[var(--color-text-muted)]">macias@kali:~</span>
                      </div>
                      {/* Terminal Content */}
                      <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
                        <div className="text-[var(--color-text-muted)]">$ whoami</div>
                        <div className="text-[var(--color-primary)]">michel_macias</div>
                        <div className="text-[var(--color-text-muted)] mt-4">$ cat skills.txt</div>
                        <div className="text-[var(--color-text-secondary)]">
                          <span className="text-[var(--color-secondary)]">[+]</span> Pentesting & Ethical Hacking<br />
                          <span className="text-[var(--color-secondary)]">[+]</span> Security Audits<br />
                          <span className="text-[var(--color-secondary)]">[+]</span> Python & Bash Automation<br />
                          <span className="text-[var(--color-secondary)]">[+]</span> Linux Hardening<br />
                          <span className="text-[var(--color-secondary)]">[+]</span> SIEM & Log Analysis
                        </div>
                        <div className="text-[var(--color-text-muted)] mt-4">$ status --availability</div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">●</span>
                          <span className="text-[var(--color-primary)]">READY_FOR_HIRE</span>
                        </div>
                        <div className="flex items-center gap-1 mt-4 text-[var(--color-text-muted)]">
                          <span>$</span>
                          <span className="w-2 h-4 bg-[var(--color-primary)] animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 border border-[var(--color-primary)]/30 rounded-lg"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-[var(--color-secondary)]/30 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 border-2 border-[var(--color-primary)]/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* ===== SKILLS SECTION ===== */}
          <section id="skills" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-xs font-mono font-bold text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 uppercase tracking-[0.3em]">
                  Tech Stack
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Habilidades</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                  Herramientas y conocimientos para proteger, analizar y construir sistemas seguros.
                </p>
              </div>

              {/* Skills Grid - Modern Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((category, index) => {
                  const icons = {
                    'shield': <FiShield className="text-2xl" />,
                    'desktop': <FiCpu className="text-2xl" />,
                    'code': <FiTerminal className="text-2xl" />,
                    'network': <FiDatabase className="text-2xl" />,
                    'tool': <FiLock className="text-2xl" />
                  };
                  const colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-accent)'];
                  const color = colors[index % 3];

                  return (
                    <div
                      key={category.category}
                      className="group relative p-6 bg-[var(--color-bg-secondary)]/50 backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-500 overflow-hidden"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 border border-[var(--color-border)] text-[var(--color-primary)] group-hover:border-[var(--color-primary)]/50 group-hover:shadow-[0_0_20px_rgba(0,255,157,0.1)] transition-all duration-300">
                            {icons[category.icon] || <FiShield className="text-2xl" />}
                          </div>
                          <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{category.category}</h3>
                        </div>

                        <div className="space-y-4">
                          {category.items.slice(0, 4).map(skill => (
                            <div key={skill.name}>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-[var(--color-text-secondary)]">{skill.name}</span>
                                <span className="text-[var(--color-text-muted)] font-mono">{skill.level}%</span>
                              </div>
                              <div className="h-1.5 bg-[var(--color-bg-tertiary)] overflow-hidden">
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
          <section id="projects" className="py-32 px-6 relative bg-[var(--color-bg-secondary)]/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-xs font-mono font-bold text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 uppercase tracking-[0.3em]">
                  Proyectos
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Misiones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)]">Completadas</span>
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                  Cada proyecto es una misión. De scripts defensivos a plataformas completas.
                </p>
              </div>

              <ProjectList />
            </div>
          </section>

          {/* ===== EXPERIENCE SECTION ===== */}
          <section id="experience" className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-xs font-mono font-bold text-[var(--color-primary)] border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 uppercase tracking-[0.3em]">
                  Trayectoria
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                  Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Path</span>
                </h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="relative flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <span className="text-sm font-mono text-[var(--color-primary)]">2024 - Presente</span>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_20px_var(--color-primary-glow)] transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="p-6 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Formación en Ciberseguridad</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          Certificación Google Cybersecurity. Proyectos de seguridad ofensiva y defensiva. Automatización con Python y Bash.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 md:text-right md:pr-12 md:order-1">
                      <div className="p-6 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] hover:border-[var(--color-secondary)]/30 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Desarrollo Full-Stack</h3>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                          Desarrollo web y móvil. Implementación de soluciones seguras y escalables. Gestión de infraestructura y DevOps.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-bg-primary)] shadow-[0_0_20px_var(--color-secondary-glow)] transform -translate-x-1/2"></div>
                    <div className="md:w-1/2 md:pl-12 md:order-2">
                      <span className="text-sm font-mono text-[var(--color-secondary)]">2020 - 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section id="contact" className="py-32 px-6 relative bg-[var(--color-bg-secondary)]/30">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent pointer-events-none"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="inline-block px-4 py-2 mb-4 text-xs font-mono font-bold text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 uppercase tracking-[0.3em]">
                Contacto
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6">
                ¿Conectamos?
              </h2>
              <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12">
                ¿Buscas un perfil técnico comprometido con la seguridad? Mi terminal siempre responde.
              </p>
              <a
                href="mailto:michelmacias.it@gmail.com"
                className="group inline-flex items-center gap-4 px-12 py-5 bg-[var(--color-primary)] text-[var(--color-bg-primary)] font-mono text-lg font-bold transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,255,157,0.4)] hover:scale-105"
              >
                <FiMail className="text-xl" />
                ESTABLECER_CONEXIÓN()
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 text-center border-t border-[var(--color-border)]">
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