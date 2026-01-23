import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShield, FiTerminal } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'INICIO' },
    { path: '/about', label: 'SOBRE_MÍ' },
    { path: '/projects', label: 'PROYECTOS' },
    { path: '/docs', label: 'DOCS' },
    { path: '/contact', label: 'CONTACTO' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'glass-strong border-[var(--color-border)] py-2'
          : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-[var(--color-primary)] opacity-20 group-hover:opacity-40 rounded-full blur transition-opacity"></div>
              <FiShield className="text-[var(--color-primary)] text-2xl relative z-10" />
              {/* Online Status Dot */}
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border border-[var(--color-bg-primary)] shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider font-mono text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                MACIAS<span className="text-[var(--color-primary)]">.IT</span>
              </span>
              <span className="text-[10px] text-[var(--color-text-muted)] font-mono tracking-widest uppercase hidden sm:block">
                Cybersecurity Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-mono text-sm tracking-wide transition-all group overflow-hidden ${isActive(item.path)
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
              >
                {/* Hover bracket effect */}
                <span className={`absolute left-0 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[var(--color-primary)] font-bold ${isActive(item.path) ? 'opacity-100 translate-x-0' : ''}`}>
                  &lt;
                </span>

                <span className={`relative z-10 ${isActive(item.path) ? 'mx-2' : ''} group-hover:mx-2 transition-all duration-300`}>
                  {item.label}
                </span>

                <span className={`absolute right-0 opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[var(--color-primary)] font-bold ${isActive(item.path) ? 'opacity-100 translate-x-0' : ''}`}>
                  /&gt;
                </span>

                {/* Active scanline bottom */}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"></span>
                )}
              </Link>
            ))}

            {/* Terminal/Command Button */}
            <button className="ml-4 p-2 text-[var(--color-primary)] border border-[var(--color-primary)] rounded hover:bg-[rgba(0,255,136,0.1)] transition-colors" aria-label="Open Terminal">
              <FiTerminal size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--color-primary)] hover:bg-[rgba(0,255,136,0.1)] rounded transition-all"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--color-border)] animate-fadeIn glass-strong absolute left-0 right-0 top-full">
            <div className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded border-l-2 font-mono text-sm tracking-widest transition-all ${isActive(item.path)
                      ? 'border-[var(--color-primary)] bg-[rgba(0,255,136,0.05)] text-[var(--color-primary)]'
                      : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-muted)]'
                    }`}
                >
                  <span className="mr-2">
                    {isActive(item.path) ? '>' : '#'}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;