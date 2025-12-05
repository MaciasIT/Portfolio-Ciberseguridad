import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: FiGithub,
            href: 'https://github.com/MaciasIT',
            label: 'GitHub'
        },
        {
            icon: FiLinkedin,
            href: 'https://linkedin.com/in/tu-perfil',
            label: 'LinkedIn'
        },
        {
            icon: FiMail,
            href: 'mailto:michelmacias.it@gmail.com',
            label: 'Email'
        }
    ];

    const quickLinks = [
        { to: '/', label: 'Inicio' },
        { to: '/about', label: 'Sobre Mí' },
        { to: '/projects', label: 'Proyectos' },
        { to: '/docs', label: 'Documentación' },
        { to: '/contact', label: 'Contacto' }
    ];

    return (
        <footer className="glass-strong border-t border-[var(--color-border)] mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 gradient-text">
                            Michel Macías
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-sm">
                            Profesional de ciberseguridad especializado en seguridad ofensiva y defensiva,
                            hacking ético y automatización de procesos de seguridad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-text-primary)]">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-text-primary)]">
                            Conecta Conmigo
                        </h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-elevated)] transition-all hover:glow-primary"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center">
                    <p className="text-[var(--color-text-muted)] text-sm flex items-center justify-center gap-2">
                        © {currentYear} Michel Macías. Hecho con{' '}
                        <FiHeart className="text-[var(--color-accent)] inline" size={16} />{' '}
                        y mucha cafeína ☕
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
