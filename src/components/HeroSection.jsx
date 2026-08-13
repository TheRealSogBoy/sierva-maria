import React from 'react';
import { SiervaMariaLogo } from './SiervaMariaLogo';
import { BookOpen, Feather, Sparkles, Award, MapPin, HeartHandshake, UserCheck, Download } from 'lucide-react';

export const HeroSection = ({ currentTheme }) => {
  const isAurea = currentTheme === 'aurea';

  return (
    <section id="adn" className="relative py-16 md:py-24 overflow-hidden border-b border-[#C4A882]/20">
      
      {/* Background Subtle Editorial Decor */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#C4A882]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#B8963E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline & Meta Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-medium tracking-widest text-[#1A1A2E] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A882]" />
            <span>Guía de Identidad & Sistema de Marca 2026</span>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-wider text-[#1A1A2E]/70 uppercase font-sans">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C4A882]" /> Cajicá / Sabana Centro
            </span>
            <span className="text-[#C4A882]">|</span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[#C4A882]" /> Dr. Steven Cuervo Parra
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & Storytelling Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#C4A882]">
                {isAurea ? 'Extensión Premium — Sabana Centro' : 'Marca Madre — Cajicá'}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A2E] tracking-tight leading-[1.1]">
                Sierva María <br />
                <span className="italic font-normal text-[#C4A882] font-editorial">Estética & Aurea</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#1A1A2E]/80 font-light leading-relaxed tracking-wide">
              Documento base oficial para el desarrollo de diseño, tono de comunicación y estrategia digital.
              Fundamentado en la medicina estética seria, la inclusividad radical y la riqueza narrativa de la literatura colombiana.
            </p>

            <div className="pt-1">
              <a
                href="/Identidad-de-Marca-Sierva-Maria.pdf"
                download="Identidad_de_Marca_Sierva_Maria.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A1A2E] text-[#FDF6EE] text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-300 border border-[#C4A882]/30"
              >
                <Download className="w-4 h-4 text-[#C4A882]" />
                <span>Descargar Documento PDF Oficial</span>
              </a>
            </div>

            {/* Core Narrative Origin Box (García Márquez) */}
            <div className="bg-[#FAF1E6] p-6 sm:p-8 rounded-2xl border border-[#C4A882]/30 space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <BookOpen className="w-32 h-32 text-[#1A1A2E]" />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C4A882] uppercase">
                <Feather className="w-4 h-4" />
                <span>Origen Narrativo & Referente Literario</span>
              </div>

              <h2 className="text-xl font-serif text-[#1A1A2E] font-medium leading-snug">
                "Sierva María de Todos los Ángeles" — Gabriel García Márquez (1994)
              </h2>

              <p className="text-sm text-[#1A1A2E]/75 leading-relaxed font-light">
                Protagonista de <em>"Del amor y otros demonios"</em>: una joven de belleza libre que habla múltiples idiomas y desafía todas las categorías de su época. 
                Construida por García Márquez como símbolo de belleza sin estereotipos, identidad colombiana en su expresión más rica y transgresora.
              </p>

              <div className="pt-2 border-t border-[#C4A882]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1A1A2E]/70 font-sans">
                <span className="font-semibold text-[#1A1A2E]">Aurea completa el universo:</span>
                <span>La "aureola" de los santos es la luminosidad dorada que rodea a Sierva María.</span>
              </div>
            </div>

            {/* Core Philosophy Banner */}
            <div className="p-5 rounded-xl bg-[#1A1A2E] text-[#FDF6EE] border border-[#C4A882]/40 shadow-lg flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#C4A882]/20 text-[#C4A882] shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[#C4A882] font-semibold">
                  Filosofía Central de Marca
                </div>
                <div className="text-sm sm:text-base font-serif italic text-white mt-0.5">
                  "Nos importa que te veas bien. Nos importa más que estés seguro/a."
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Official Logo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="w-full bg-[#FAF1E6] p-8 sm:p-10 rounded-3xl border border-[#C4A882]/30 shadow-xl flex flex-col items-center text-center relative overflow-hidden group hover:border-[#C4A882]/60 transition-all duration-500">
              
              {/* Decorative Aureola Ring */}
              <div className="w-64 h-64 rounded-full border border-[#C4A882]/20 absolute -top-12 -right-12 animate-pulse-gold pointer-events-none" />

              <div className="w-40 h-40 rounded-2xl bg-[#1A1A2E] flex items-center justify-center p-4 shadow-2xl mb-6 relative group-hover:scale-105 transition-transform duration-500">
                <SiervaMariaLogo className="w-full h-full text-[#C4A882]" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1A1A2E] tracking-tight">
                Sierva María Estética
              </h3>

              <div className="text-xs font-sans tracking-[0.3em] uppercase text-[#C4A882] mt-1 font-semibold">
                Monograma Editorial "SM"
              </div>

              <div className="mt-6 pt-6 border-t border-[#C4A882]/20 w-full grid grid-cols-2 gap-4 text-left text-xs text-[#1A1A2E]/80">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#1A1A2E]/50">Director Médico</span>
                  <span className="font-semibold text-[#1A1A2E]">Dr. Steven Cuervo Parra</span>
                  <span className="block text-[10px] text-[#C4A882]">Médico Juan N. Corpas</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#1A1A2E]/50">Encargada Comercial</span>
                  <span className="font-semibold text-[#1A1A2E]">Yensi García</span>
                  <span className="block text-[10px] text-[#C4A882]">Atención Humana</span>
                </div>
              </div>

              <div className="mt-4 w-full bg-[#1A1A2E]/5 p-3 rounded-xl text-left text-[11px] text-[#1A1A2E]/70 space-y-1">
                <div className="flex items-center justify-between">
                  <span>Cero perfiles femeninos</span>
                  <span className="text-[#C4A882]">✓ Cumplido</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cero jeringas / elementos médicos</span>
                  <span className="text-[#C4A882]">✓ Cumplido</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
