import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Sparkles, Check, Info, Sun, Moon, Layers, Contrast } from 'lucide-react';

export const ColorPaletteSection = ({ showToast }) => {
  const [copiedHex, setCopiedHex] = useState(null);

  const colorsSierva = [
    {
      name: 'Nude Cálido',
      role: 'Primary / Identidad Marca Madre',
      hex: '#C4A882',
      rgb: 'RGB(196, 168, 130)',
      cmyk: 'CMYK(20, 30, 50, 5)',
      hsl: 'HSL(35, 36%, 64%)',
      description: 'El alma de Sierva María. Warm nude que proyectar calidez humana, elegancia artesanal y sutileza clínica.',
      usage: 'Logotipo principal, acentos editoriales, botones de acción secundaria, bordes sutiles.',
      textColor: 'text-[#1A1A2E]',
      badgeColor: 'bg-[#1A1A2E] text-[#FDF6EE]'
    },
    {
      name: 'Crema / Marfil Base',
      role: 'Background Principal (NUNCA Blanco Puro)',
      hex: '#FDF6EE',
      rgb: 'RGB(253, 246, 238)',
      cmyk: 'CMYK(0, 3, 6, 1)',
      hsl: 'HSL(32, 75%, 96%)',
      description: 'Fondo institucional obligado de toda la experiencia web y digital. Elimina la frialdad estéril del blanco.',
      usage: 'Fondo de la aplicación, tarjetas, papelería impresa, feed de redes sociales.',
      textColor: 'text-[#1A1A2E]',
      badgeColor: 'bg-[#C4A882] text-white'
    },
    {
      name: 'Navy Profundo',
      role: 'Text & High-Contrast Accent',
      hex: '#1A1A2E',
      rgb: 'RGB(26, 26, 46)',
      cmyk: 'CMYK(80, 75, 40, 60)',
      hsl: 'HSL(240, 28%, 14%)',
      description: 'Tono azul marino intenso que otorga peso médico, autoridad, legibilidad impecable y carácter editorial.',
      usage: 'Títulos principales, cuerpo de texto, iconos, tarjetas de contraste y versión de logo en alta visibilidad.',
      textColor: 'text-[#FDF6EE]',
      badgeColor: 'bg-[#C4A882] text-[#1A1A2E]'
    }
  ];

  const colorsAurea = [
    {
      name: 'Aurea Gold Saturado',
      role: 'Sede 2 — Expansión Premium',
      hex: '#B8963E',
      rgb: 'RGB(184, 150, 62)',
      cmyk: 'CMYK(25, 35, 85, 10)',
      hsl: 'HSL(43, 50%, 48%)',
      description: 'Representa la "aureola" de los santos en García Márquez. Oro saturado y luminoso para la fase de lujo.',
      usage: 'Extensiones de marca Aurea, detalles VIP, empaques premium y certificaciones médicas.',
      textColor: 'text-white',
      badgeColor: 'bg-[#0D0D1E] text-[#B8963E]'
    },
    {
      name: 'Navy Oscuro Ultra',
      role: 'Aurea Deep Background',
      hex: '#0D0D1E',
      rgb: 'RGB(13, 13, 30)',
      cmyk: 'CMYK(85, 80, 45, 75)',
      hsl: 'HSL(240, 40%, 8%)',
      description: 'Navy aún más profundo para la sede de Sabana Centro. Máxima precisión visual y contraste exclusivo.',
      usage: 'Fondos nocturnos, packaging de lujo Aurea y piezas de alta gama.',
      textColor: 'text-[#FAFAFA]',
      badgeColor: 'bg-[#B8963E] text-[#0D0D1E]'
    },
    {
      name: 'Blanco Clínico Sutil',
      role: 'Aurea Light Contrast',
      hex: '#FAFAFA',
      rgb: 'RGB(250, 250, 250)',
      cmyk: 'CMYK(0, 0, 0, 2)',
      hsl: 'HSL(0, 0%, 98%)',
      description: 'Blanco luminoso depurado que aporta ligereza y limpieza clínica a la identidad de Aurea.',
      usage: 'Superficies quirúrgicas, empaques secundarios y tarjetas clínicas.',
      textColor: 'text-[#0D0D1E]',
      badgeColor: 'bg-[#0D0D1E] text-[#FAFAFA]'
    }
  ];

  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color.hex);
    setCopiedHex(color.hex);

    // Fire celebratory confetti!
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: [color.hex, '#C4A882', '#B8963E', '#1A1A2E']
    });

    showToast(`¡Código HEX ${color.hex} (${color.name}) copiado al portapapeles!`);
    
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <section id="colors" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paleta de Color Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Armonía Cromática & Design Tokens
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            Haz clic en cualquier tarjeta de color para copiar instantáneamente el código <strong>HEX</strong> al portapapeles. 
            El fondo principal debe mantenerse siempre en <strong>#FDF6EE (Crema/Marfil)</strong> para preservar la calidez humana.
          </p>
        </div>

        {/* Section 1: Marca Madre (Sierva María) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest uppercase text-[#1A1A2E]">
            <Layers className="w-4 h-4 text-[#C4A882]" />
            <span>1. Paleta Marca Madre — Sierva María Estética (Cajicá)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colorsSierva.map((color) => (
              <div
                key={color.hex}
                onClick={() => handleCopyColor(color)}
                className="group relative bg-[#FAF1E6] rounded-3xl border border-[#C4A882]/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
              >
                {/* Large Color Swatch Box */}
                <div 
                  className="h-48 w-full relative flex items-end justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs ${color.badgeColor}`}>
                    {color.hex}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    {copiedHex === color.hex ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </div>
                </div>

                {/* Color Details Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                      {color.name}
                    </h3>
                    <div className="text-xs uppercase font-sans tracking-widest text-[#C4A882] font-semibold mt-0.5">
                      {color.role}
                    </div>
                  </div>

                  <p className="text-xs text-[#1A1A2E]/75 leading-relaxed font-light">
                    {color.description}
                  </p>

                  <div className="pt-3 border-t border-[#C4A882]/20 grid grid-cols-2 gap-2 text-[11px] font-mono text-[#1A1A2E]/70">
                    <div>{color.rgb}</div>
                    <div>{color.cmyk}</div>
                  </div>

                  <div className="bg-[#FDF6EE] p-3 rounded-xl border border-[#C4A882]/20 text-[11px] text-[#1A1A2E]/80">
                    <strong className="text-[#1A1A2E] block uppercase tracking-wider text-[9px] mb-0.5">Aplicación Sugerida:</strong>
                    {color.usage}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Extensión Premium (Aurea by Sierva María) */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest uppercase text-[#B8963E]">
            <Sparkles className="w-4 h-4 text-[#B8963E]" />
            <span>2. Evolución Cromática — Aurea by Sierva María (Fase Expansión)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colorsAurea.map((color) => (
              <div
                key={color.hex}
                onClick={() => handleCopyColor(color)}
                className="group relative bg-[#0D0D1E] rounded-3xl border border-[#B8963E]/40 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5 text-white"
              >
                {/* Large Color Swatch Box */}
                <div 
                  className="h-48 w-full relative flex items-end justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs ${color.badgeColor}`}>
                    {color.hex}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    {copiedHex === color.hex ? <Check className="w-5 h-5 text-[#B8963E]" /> : <Copy className="w-5 h-5" />}
                  </div>
                </div>

                {/* Color Details Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {color.name}
                    </h3>
                    <div className="text-xs uppercase font-sans tracking-widest text-[#B8963E] font-semibold mt-0.5">
                      {color.role}
                    </div>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {color.description}
                  </p>

                  <div className="pt-3 border-t border-[#B8963E]/20 grid grid-cols-2 gap-2 text-[11px] font-mono text-white/60">
                    <div>{color.rgb}</div>
                    <div>{color.cmyk}</div>
                  </div>

                  <div className="bg-[#1A1A2E] p-3 rounded-xl border border-[#B8963E]/30 text-[11px] text-white/80">
                    <strong className="text-[#B8963E] block uppercase tracking-wider text-[9px] mb-0.5">Uso Exclusivo Aurea:</strong>
                    {color.usage}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
