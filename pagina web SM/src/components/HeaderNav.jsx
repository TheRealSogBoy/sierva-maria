import React, { useState, useEffect } from 'react';
import { SiervaMariaLogo } from './SiervaMariaLogo';
import { Menu, X, Sparkles, Download, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export const HeaderNav = ({ activeSection, setActiveSection, currentTheme, setCurrentTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'adn', label: 'ADN & Origen' },
    { id: 'logo', label: 'Sistema de Logo' },
    { id: 'colors', label: 'Paleta de Color' },
    { id: 'typography', label: 'Tipografía' },
    { id: 'tone', label: 'Tono de Voz' },
    { id: 'inclusivity', label: 'Inclusividad' },
    { id: 'architecture', label: 'Arquitectura SM vs Aurea' },
    { id: 'strategy', label: 'Estrategia & Onboarding' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-editorial shadow-sm py-3 border-b border-[#C4A882]/20' : 'bg-[#FDF6EE]/90 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollToSection('adn')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1A1A2E] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <SiervaMariaLogo className="w-full h-full text-[#C4A882]" />
            </div>
            <div>
              <div className="font-serif text-lg font-semibold tracking-wide text-[#1A1A2E] leading-none group-hover:text-[#C4A882] transition-colors">
                Sierva María <span className="font-sans text-xs font-light tracking-widest text-[#C4A882] uppercase ml-1">Estética</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#1A1A2E]/60 uppercase font-sans mt-0.5">
                Manual de Marca Interactivo
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FAF1E6] p-1.5 rounded-full border border-[#C4A882]/20 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#1A1A2E] text-[#FDF6EE] shadow-sm'
                    : 'text-[#1A1A2E]/70 hover:text-[#1A1A2E] hover:bg-[#C4A882]/15'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Badge / Quick Links */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                const nextTheme = currentTheme === 'sierva' ? 'aurea' : 'sierva';
                setCurrentTheme(nextTheme);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 border ${
                currentTheme === 'aurea'
                  ? 'bg-[#0D0D1E] text-[#B8963E] border-[#B8963E]/40 shadow-md'
                  : 'bg-[#1A1A2E] text-[#C4A882] border-[#C4A882]/30 hover:bg-[#1A1A2E]/90'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentTheme === 'aurea' ? 'Vista: Aurea Gold' : 'Vista: Sierva María'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1A1A2E] hover:bg-[#C4A882]/15 transition-colors"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDF6EE] border-b border-[#C4A882]/30 px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 text-xs font-medium tracking-widest uppercase rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1A1A2E] text-[#FDF6EE]'
                    : 'text-[#1A1A2E]/80 hover:bg-[#C4A882]/15'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-[#C4A882]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setCurrentTheme(currentTheme === 'sierva' ? 'aurea' : 'sierva');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs tracking-widest uppercase font-semibold rounded-lg bg-[#0D0D1E] text-[#B8963E] border border-[#B8963E]/40"
              >
                Cambiar Vista ({currentTheme === 'aurea' ? 'Aurea Gold' : 'Sierva María'})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
