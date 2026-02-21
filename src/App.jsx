import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectList from './components/ProjectList';
import MatrixBackground from './components/MatrixBackground';
import IntroTerminal from './components/IntroTerminal';
import { skills } from './data/skills';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiShield, FiCpu, FiTerminal, FiDatabase, FiCode, FiLock, FiChevronDown } from 'react-icons/fi';
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
      <div style={{
        backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}>

        {/* BACKGROUND LAYER */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.2 }}>
          <MatrixBackground />
        </div>

        {/* FLOATING NAVIGATION */}
        <FloatingNavbar />

        {/* MAIN CONTENT */}
        <main style={{ position: 'relative', zIndex: 10 }}>

          {/* ===== HERO SECTION ===== */}
          <section
            ref={heroRef}
            id="about"
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '80px 24px'
            }}
          >
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px'
            }}>
              <span style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                boxShadow: '0 0 20px var(--color-primary-glow)'
              }}></span>
              <span style={{
                fontSize: '14px',
                fontFamily: 'monospace',
                color: 'var(--color-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em'
              }}>
                Disponible para proyectos
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(42px, 10vw, 100px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-primary) 50%, var(--color-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Michel Macias
            </h1>

            {/* Role - English */}
            <p style={{
              fontSize: 'clamp(20px, 3.5vw, 32px)',
              fontFamily: 'monospace',
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px'
            }}>
              SysAdmin SecOps
            </p>

            {/* Role - Spanish */}
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              fontFamily: 'monospace',
              color: '#94a3b8',
              marginBottom: '40px'
            }}>
              Administrador de Sistemas | Operaciones de Seguridad
            </p>

            {/* Description */}
            <p style={{
              fontSize: '18px',
              color: '#64748b',
              maxWidth: '600px',
              lineHeight: 1.8,
              marginBottom: '48px'
            }}>
              Apasionado por la <span style={{ color: 'var(--color-primary)' }}>ciberseguridad</span> con base sólida en
              <span style={{ color: 'var(--color-secondary)' }}> administración de sistemas</span>. Formándome como
              <span style={{ color: 'var(--color-accent)' }}> Analista de Seguridad</span> para proteger infraestructuras digitales.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '48px'
            }}>
              <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 36px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                <FiCode size={18} /> Ver Proyectos
              </a>
              <a
                href="mailto:michelmacias.it@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 36px',
                  border: '2px solid #334155',
                  color: '#e2e8f0',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                <FiMail size={18} /> Contactar
              </a>
            </div>

            {/* Social Links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                { href: 'https://github.com/MaciasIT', icon: <FiGithub size={22} /> },
                { href: 'https://es.linkedin.com/in/miguel-%C3%A1ngel-mac%C3%ADas-vargas', icon: <FiLinkedin size={22} /> },
                { href: 'mailto:michelmacias.it@gmail.com', icon: <FiMail size={22} /> }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    padding: '16px',
                    border: '1px solid #334155',
                    color: '#94a3b8',
                    display: 'flex',
                    transition: 'all 0.3s'
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Location */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b',
              fontFamily: 'monospace'
            }}>
              <FiMapPin style={{ color: 'var(--color-primary)' }} />
              <span>Mendigorria, Navarra, España</span>
            </div>

            {/* Scroll Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              animation: 'bounce 2s infinite'
            }}>
              <span style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}>Scroll</span>
              <FiChevronDown style={{ color: 'var(--color-primary)', fontSize: '24px' }} />
            </div>
          </section>

          {/* ===== SKILLS SECTION ===== */}
          <section id="skills" style={{
            padding: '160px 24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <span style={{
                display: 'inline-block',
                padding: '12px 20px',
                marginBottom: '24px',
                fontSize: '12px',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'var(--color-secondary)',
                border: '1px solid var(--color-secondary-glow)',
                backgroundColor: 'rgba(255, 202, 40, 0.05)',
                textTransform: 'uppercase',
                letterSpacing: '0.3em'
              }}>
                Tech Stack
              </span>
              <h2 style={{
                fontSize: 'clamp(32px, 6vw, 56px)',
                fontWeight: 900,
                color: '#e2e8f0',
                marginBottom: '24px'
              }}>
                Arsenal de <span style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Habilidades</span>
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.7
              }}>
                Herramientas y conocimientos para proteger y construir sistemas seguros.
              </p>
            </div>

            {/* Skills Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}>
              {skills.map((category) => (
                <div
                  key={category.category}
                  style={{
                    padding: '32px',
                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                    border: '1px solid #334155',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '28px'
                  }}>
                    <div style={{
                      padding: '14px',
                      border: '1px solid #334155',
                      color: 'var(--color-primary)'
                    }}>
                      <FiShield size={24} />
                    </div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#e2e8f0'
                    }}>{category.category}</h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {category.items.slice(0, 4).map(skill => (
                      <div key={skill.name}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '14px',
                          marginBottom: '8px'
                        }}>
                          <span style={{ color: '#94a3b8' }}>{skill.name}</span>
                          <span style={{ color: '#64748b', fontFamily: 'monospace' }}>{skill.level}%</span>
                        </div>
                        <div style={{
                          height: '6px',
                          backgroundColor: '#1e293b',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
                          }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== PROJECTS SECTION ===== */}
          <section id="projects" style={{
            padding: '160px 24px',
            backgroundColor: 'rgba(30, 41, 59, 0.15)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  marginBottom: '24px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-accent-glow)',
                  backgroundColor: 'rgba(139, 0, 0, 0.1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em'
                }}>
                  Proyectos
                </span>
                <h2 style={{
                  fontSize: 'clamp(32px, 6vw, 56px)',
                  fontWeight: 900,
                  color: '#e2e8f0',
                  marginBottom: '24px'
                }}>
                  Misiones <span style={{
                    background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Completadas</span>
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#64748b',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.7
                }}>
                  Cada proyecto es una misión. De scripts defensivos a plataformas completas.
                </p>
              </div>

              <ProjectList />
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section id="contact" style={{
            padding: '160px 24px',
            textAlign: 'center'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '12px 20px',
              marginBottom: '24px',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'var(--color-accent)',
              border: '1px solid var(--color-accent-glow)',
              backgroundColor: 'rgba(139, 0, 0, 0.1)',
              textTransform: 'uppercase',
              letterSpacing: '0.3em'
            }}>
              Contacto
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 900,
              color: '#e2e8f0',
              marginBottom: '32px'
            }}>
              ¿Conectamos?
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#64748b',
              maxWidth: '500px',
              margin: '0 auto 48px auto',
              lineHeight: 1.7
            }}>
              ¿Buscas un perfil técnico comprometido con la seguridad? Mi terminal siempre responde.
            </p>
            <a
              href="mailto:michelmacias.it@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 48px',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                fontFamily: 'monospace',
                fontSize: '18px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              <FiMail size={22} />
              ESTABLECER_CONEXIÓN()
            </a>
          </section>

          {/* Footer */}
          <footer style={{
            padding: '64px 24px',
            textAlign: 'center',
            borderTop: '1px solid #1e293b'
          }}>
            <p style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.3em'
            }}>
              Michel Macías © 2026 // Portfolio v3.0
            </p>
          </footer>

        </main>
      </div>
    </Router >
  );
}

export default App;