import React from 'react';
import { SiervaMariaLogo } from './SiervaMariaLogo';
import { Split, Sparkles, MapPin, DollarSign, Users, Palette, ArrowRight, ShieldCheck } from 'lucide-react';

export const BrandArchitectureSection = ({ currentTheme, setCurrentTheme }) => {
  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Arquitectura Dual de Marca</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Sierva María vs. Aurea
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            Dos marcas pertenecientes al mismo ecosistema, diseñadas estratégicamente para distintas etapas, segmentos económicos y momentos del paciente. 
            El endoso <strong>"by Sierva María"</strong> funciona como puente narrativo y respaldo de confianza médica.
          </p>
        </div>

        {/* Strategic Bridge Narrative Box */}
        <div className="mb-12 bg-[#FAF1E6] p-6 sm:p-8 rounded-3xl border border-[#C4A882]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold tracking-widest text-[#C4A882]">
              El Puente de Respaldo: "By Sierva María"
            </div>
            <p className="text-sm text-[#1A1A2E]/80 leading-relaxed font-light">
              "Nunca compiten: son distintos momentos del mismo paciente o distintos segmentos que comparten valores. Quien descubre Aurea ve inmediatamente que hay una historia y un rigor médico detrás."
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentTheme('sierva')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentTheme === 'sierva' ? 'bg-[#1A1A2E] text-[#FDF6EE] shadow-md' : 'bg-[#FDF6EE] text-[#1A1A2E] border border-[#C4A882]/30'
              }`}
            >
              Ver Marca Madre
            </button>
            <button
              onClick={() => setCurrentTheme('aurea')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentTheme === 'aurea' ? 'bg-[#0D0D1E] text-[#B8963E] shadow-md border border-[#B8963E]/40' : 'bg-[#FDF6EE] text-[#1A1A2E] border border-[#C4A882]/30'
              }`}
            >
              Ver Aurea Gold
            </button>
          </div>
        </div>

        {/* Side-by-Side Split Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Column 1: Sierva María Estética (Mid-Market) */}
          <div className="bg-[#FAF1E6] rounded-3xl border-2 border-[#C4A882]/40 p-8 space-y-6 shadow-lg relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-[#C4A882]/20 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C4A882]">
                  Etapa 1 — Marca Madre
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1A1A2E]">
                  Sierva María Estética
                </h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1A1A2E] flex items-center justify-center p-2 shadow-md">
                <SiervaMariaLogo className="w-full h-full text-[#C4A882]" />
              </div>
            </div>

            <div className="space-y-4 text-xs text-[#1A1A2E]">
              
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20">
                <MapPin className="w-4 h-4 text-[#C4A882] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1A1A2E] uppercase text-[10px]">Ubicación & Momento:</strong>
                  <span>Piloto — Cajicá (Sabana Park Torre 2, Cons. 623)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20">
                <Sparkles className="w-4 h-4 text-[#C4A882] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1A1A2E] uppercase text-[10px]">Posicionamiento:</strong>
                  <span>Mid-market. Accesible, literario, inclusivo.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20">
                <DollarSign className="w-4 h-4 text-[#C4A882] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1A1A2E] uppercase text-[10px]">Ticket Promedio:</strong>
                  <span className="font-bold text-[#1A1A2E] text-sm">$700.000 – $1.200.000 COP</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20">
                <Users className="w-4 h-4 text-[#C4A882] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1A1A2E] uppercase text-[10px]">Paciente Objetivo:</strong>
                  <span>Amplio: mujeres, hombres, LGBTQ+, 22–55 años.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20">
                <Palette className="w-4 h-4 text-[#C4A882] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1A1A2E] uppercase text-[10px]">Paleta de Color:</strong>
                  <span>Nude cálido #C4A882, Crema #FDF6EE, Navy #1A1A2E</span>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#1A1A2E] text-[#FDF6EE] text-xs">
              <span className="text-[#C4A882] font-semibold block uppercase text-[10px] mb-1">Tono de Comunicación:</span>
              "Cercano, médico serio pero humano, amplio storytelling literario."
            </div>

          </div>

          {/* Column 2: Aurea by Sierva María (Premium Extension) */}
          <div className="bg-[#0D0D1E] rounded-3xl border-2 border-[#B8963E]/50 p-8 space-y-6 shadow-2xl relative overflow-hidden text-white">
            
            <div className="flex items-center justify-between border-b border-[#B8963E]/30 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#B8963E]">
                  Etapa 2 — Expansión High-End
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Aurea <span className="text-[#B8963E] italic text-xl font-editorial font-normal">by Sierva María</span>
                </h3>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#B8963E]/20 border border-[#B8963E]/40 flex items-center justify-center p-2 shadow-md">
                <SiervaMariaLogo className="w-full h-full text-[#B8963E]" />
              </div>
            </div>

            <div className="space-y-4 text-xs text-white/90">
              
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-[#B8963E]/20">
                <MapPin className="w-4 h-4 text-[#B8963E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#B8963E] uppercase text-[10px]">Ubicación & Momento:</strong>
                  <span>Expansión — Futura Sede 2 (Sabana Centro)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-[#B8963E]/20">
                <Sparkles className="w-4 h-4 text-[#B8963E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#B8963E] uppercase text-[10px]">Posicionamiento:</strong>
                  <span>Premium. Luminoso, clínico, elevado, haute couture.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-[#B8963E]/20">
                <DollarSign className="w-4 h-4 text-[#B8963E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#B8963E] uppercase text-[10px]">Ticket Promedio:</strong>
                  <span className="font-bold text-[#B8963E] text-sm">$1.200.000 – $3.500.000+ COP</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-[#B8963E]/20">
                <Users className="w-4 h-4 text-[#B8963E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#B8963E] uppercase text-[10px]">Paciente Objetivo:</strong>
                  <span>Paciente de mayor poder adquisitivo, muy exigente e informado.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-[#B8963E]/20">
                <Palette className="w-4 h-4 text-[#B8963E] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#B8963E] uppercase text-[10px]">Paleta de Color:</strong>
                  <span>Gold saturado #B8963E, Blanco clínico #FAFAFA, Navy oscuro #0D0D1E</span>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#B8963E]/20 border border-[#B8963E]/40 text-xs text-white/90">
              <span className="text-[#B8963E] font-semibold block uppercase text-[10px] mb-1">Tono de Comunicación:</span>
              "Sofisticado. Resultados impecables. Menos palabras, mayor precisión clínica."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
