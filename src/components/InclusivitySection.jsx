import React, { useState } from 'react';
import { Users, Shield, CheckCircle2, Sparkles, Hash, Instagram, Copy, Heart, User, Sparkle } from 'lucide-react';

export const InclusivitySection = ({ showToast }) => {
  const [copiedBio, setCopiedBio] = useState(false);

  const bioText = 'Medicina estética seria para todas las personas. Cajicá. 📍 Sabana Park Torre 2, Cons. 623';

  const principles = [
    {
      icon: <User className="w-6 h-6 text-[#C4A882]" />,
      title: 'Lenguaje Neutro en Género',
      rule: 'Utilizar siempre expresiones inclusivas como "tu piel", "cada persona", "tu resultado".',
      forbidden: 'Nunca dirigirse exclusivamente con "ella" o "tu paciente femenina".',
      badge: 'Universal'
    },
    {
      icon: <Users className="w-6 h-6 text-[#C4A882]" />,
      title: 'Diversidad Visual Natural',
      rule: 'Integrar casos masculinos y diversidad de género de forma orgánica en la grilla y web.',
      forbidden: 'No tratar a los pacientes hombres como una "excepción" o nota al pie aislada.',
      badge: 'Representación'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#C4A882]" />,
      title: 'Identidad Visual Unificada',
      rule: 'Tono diferenciado por segmento económico (Sierva María vs. Aurea) manteniendo la esencia estética.',
      forbidden: 'No romper los tokens ni la tipografía serif al cambiar de audiencia.',
      badge: 'Coherencia'
    },
    {
      icon: <Hash className="w-6 h-6 text-[#C4A882]" />,
      title: 'Hashtags Inclusivos',
      rule: 'Etiquetas estratégicas: #medicinaestetica + #botoxhombres + #armonizacionfacial',
      forbidden: 'Aplicables a todos los géneros sin estereotipos restrictivos.',
      badge: 'Estrategia SEO'
    }
  ];

  const handleCopyBio = () => {
    navigator.clipboard.writeText(bioText);
    setCopiedBio(true);
    showToast('¡Bio de Instagram copiada al portapapeles!');
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <section id="inclusivity" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Principios de Inclusividad Universal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Belleza Sin Estereotipos Ni Moldes
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            Inspirados en la figura literaria de Sierva María de Todos los Ángeles, rompemos los convencionalismos de la belleza tradicional para ofrecer cuidado médico estético genuino para mujeres, hombres y la comunidad LGBTQ+.
          </p>
        </div>

        {/* 4 Inclusivity Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {principles.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/30 shadow-sm space-y-4 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#1A1A2E] shadow-sm">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#C4A882]/20 text-[#1A1A2E]">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                {item.title}
              </h3>

              <div className="space-y-2 text-xs text-[#1A1A2E]/80 leading-relaxed font-light">
                <div className="p-3 rounded-xl bg-[#FDF6EE] border border-emerald-600/20 text-emerald-950 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Norma Aprobada:</strong> {item.rule}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FDF6EE] border border-rose-600/20 text-rose-950 flex items-start gap-2">
                  <span className="text-rose-600 font-bold shrink-0">✕</span>
                  <span><strong>Restricción:</strong> {item.forbidden}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Suggested Instagram Bio & Copy Component */}
        <div className="bg-[#1A1A2E] p-8 sm:p-10 rounded-3xl text-[#FDF6EE] border border-[#C4A882]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C4A882]">
              <Instagram className="w-4 h-4" />
              <span>Bio Oficial Sugerida para Instagram</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              "Medicina estética seria para todas las personas. Cajicá."
            </h3>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              Resumen conciso del posicionamiento de la marca madre: rigor científico, inclusividad completa y anclaje geográfico estratégico en Sabana Park.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/15 space-y-4">
            <div className="text-xs uppercase font-semibold text-[#C4A882] tracking-wider">
              Vista Previa & Copia Rápida
            </div>

            <div className="bg-[#0D0D1E] p-4 rounded-xl font-sans text-xs text-white/90 leading-relaxed border border-white/10">
              {bioText}
            </div>

            <button
              onClick={handleCopyBio}
              className="w-full py-2.5 px-4 rounded-xl bg-[#C4A882] text-[#1A1A2E] text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
            >
              {copiedBio ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>¡Bio Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Texto Bio IG</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
