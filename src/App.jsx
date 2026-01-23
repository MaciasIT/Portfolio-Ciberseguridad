import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import { skills } from './data/skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">

        {/* Left Panel: Sidebar (Fixed on Desktop) */}
        <Sidebar />

        {/* Right Panel: Scrollable Content */}
        <main className="lg:ml-[33.333333%] w-full lg:w-2/3 p-8 lg:p-20 flex flex-col gap-32">

          {/* ABOUT SECTION */}
          <section id="about" className="animate-fadeIn">
            <h2 className="text-sm font-mono tracking-widest text-[var(--color-text-muted)] mb-8 uppercase">
              // 01. Sobre Mí
            </h2>
            <div className="prose prose-invert max-w-none text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p className="mb-6">
                <span className="text-[var(--color-primary)] font-bold">Hola, soy Michel.</span> Un apasionado de la ciberseguridad con un enfoque híbrido entre la ofensiva y la defensiva. Mi objetivo es desmitificar la seguridad informática y construir sistemas más resilientes.
              </p>
              <p>
                Actualmente me dedico a auditar sistemas, automatizar tareas de seguridad con Python y PowerShell, y documentar mis hallazgos para compartir conocimiento con la comunidad.
              </p>
            </div>

            {/* Skills Mini-Grid */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.flatMap(cat => cat.items).slice(0, 8).map(skill => (
                <div key={skill.name} className="flex items-center gap-2 text-sm font-mono text-[var(--color-text-muted)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                  {skill.name}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects">
            <h2 className="text-sm font-mono tracking-widest text-[var(--color-text-muted)] mb-12 uppercase flex items-center gap-4">
              // 02. Proyectos Destacados
              <span className="h-[1px] flex-1 bg-[var(--color-border)]"></span>
            </h2>
            <ProjectList />
          </section>

          {/* EXPERIENCE SECTION (Stub for now) */}
          <section id="experience">
            <h2 className="text-sm font-mono tracking-widest text-[var(--color-text-muted)] mb-12 uppercase">
              // 03. Experiencia & Formación
            </h2>
            <div className="space-y-12 border-l border-[var(--color-border)] ml-3 pl-8">
              <div className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg-primary)]"></span>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Freelance Security Researcher</h3>
                <p className="font-mono text-sm text-[var(--color-primary)] mb-4">2024 - Presente</p>
                <p className="text-[var(--color-text-secondary)]">Investigación de vulnerabilidades, auditorías de seguridad web y desarrollo de scripts de automatización.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-[var(--color-text-muted)] bg-[var(--color-bg-primary)]"></span>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Estudiante de Ciberseguridad</h3>
                <p className="font-mono text-sm text-[var(--color-text-muted)] mb-4">2023 - 2024</p>
                <p className="text-[var(--color-text-secondary)]">Formación intensiva en redes, sistemas operativos, pentesting y gestión de incidentes.</p>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="min-h-[50vh] flex flex-col justify-center">
            <h2 className="text-sm font-mono tracking-widest text-[var(--color-text-muted)] mb-8 uppercase">
              // 04. ¿Hablamos?
            </h2>
            <h3 className="text-4xl lg:text-6xl font-bold mb-8 text-[var(--color-text-primary)]">
              Iniciar <span className="text-[var(--color-primary)]">Handshake</span>
            </h3>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-xl mb-12">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o simplemente quieres saludar, mi bandeja de entrada está abierta.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-4 border border-[var(--color-primary)] text-[var(--color-primary)] font-mono text-lg hover:bg-[rgba(0,255,136,0.1)] transition-all w-max"
            >
              ENVIAR_MENSAJE()
            </a>
          </section>

          {/* Footer Minimal */}
          <footer className="py-8 text-center text-[var(--color-text-muted)] text-sm font-mono">
            <p>Designed & Built by Michel Macías</p>
            <p className="opacity-50">v2.0.0 Cyber-Minimalist</p>
          </footer>

        </main>
      </div>
    </Router>
  );
}

export default App;