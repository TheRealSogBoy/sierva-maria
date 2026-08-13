import React, { useState } from 'react';
import { SiervaMariaLogo } from './SiervaMariaLogo';
import { downloadLogoAsPng } from '../utils/downloadLogoPng';
import { Download, Sparkles, Check, AlertCircle, Eye, Settings2, Sliders, ShieldCheck } from 'lucide-react';

export const LogoGeneratorSection = ({ showToast }) => {
  const [downloadingId, setDownloadingId] = useState(null);
  const [resolution, setResolution] = useState(1600);
  const [transparentBg, setTransparentBg] = useState(true);

  const logoVariants = [
    {
      id: 'nude',
      name: 'Versión Nude Cálido',
      subtitle: 'Identidad Principal — Sierva María',
      hex: '#C4A882',
      bgClass: 'bg-[#FDF6EE]',
      borderClass: 'border-[#C4A882]/40',
      description: 'Ideal para uso sobre fondos crema/marfil en papelería, feed principal de Instagram y piezas editoriales.',
      isPrimary: true
    },
    {
      id: 'navy',
      name: 'Versión Navy Profundo',
      subtitle: 'Contraste & Documentos Médicos',
      hex: '#1A1A2E',
      bgClass: 'bg-[#FDF6EE]',
      borderClass: 'border-[#1A1A2E]/30',
      description: 'Recomendado para consentimientos informados, membretes oficiales, recetas médicas y empaques sobrios.',
      isPrimary: false
    },
    {
      id: 'gold',
      name: 'Versión Aurea Gold',
      subtitle: 'Edición Elevada — Expansión Premium',
      hex: '#B8963E',
      bgClass: 'bg-[#FDF6EE]',
      borderClass: 'border-[#B8963E]/40',
      description: 'Exclusiva para la extensión Aurea by Sierva María en Sabana Centro, tarjetas VIP y tratamientos high-end.',
      isPrimary: false
    },
    {
      id: 'dark-reversed',
      name: 'Versión Invertida (Dark)',
      subtitle: 'Fondo Navy para Aplicaciones Especiales',
      hex: '#C4A882',
      customLogoHex: '#C4A882',
      bgClass: 'bg-[#1A1A2E]',
      borderClass: 'border-[#C4A882]/30',
      textWhite: true,
      description: 'Uso en portadas oscuras, firmas de correo en modo oscuro y empaques de lujo de edición nocturna.',
      isPrimary: false
    }
  ];

  const handleDownload = async (variant) => {
    setDownloadingId(variant.id);
    try {
      const colorToUse = variant.customLogoHex || variant.hex;
      await downloadLogoAsPng({
        colorHex: colorToUse,
        colorName: variant.id.toUpperCase(),
        size: resolution,
        transparent: transparentBg,
        bgColor: '#FDF6EE'
      });
      showToast(`¡Logo ${variant.name} descargado en formato PNG (${resolution}x${resolution}px)!`);
    } catch (err) {
      console.error('Error generando el PNG:', err);
      showToast('Ocurrió un error al generar la imagen. Inténtalo de nuevo.');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="logo" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sistema Visual & Generador PNG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Monograma Editorial "SM"
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            El imagotipo oficial de la marca consiste en una curva orgánica envoledora que entrelaza las iniciales <strong>SM</strong>. 
            Modificado con código vectorial <code>fill="currentColor"</code> para adaptarse a cualquier paleta oficial. 
            Haz clic en <strong>"Descargar PNG"</strong> para exportar una versión de alta resolución con fondo transparente.
          </p>
        </div>

        {/* Interactive Controls Bar */}
        <div className="mb-8 p-4 rounded-2xl bg-[#FAF1E6] border border-[#C4A882]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#1A1A2E]">
            <Sliders className="w-4 h-4 text-[#C4A882]" />
            <span>Ajustes del Generador de Descarga:</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#1A1A2E]">
            {/* Resolution Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[#1A1A2E]/70 uppercase tracking-wider font-sans text-[11px]">Resolución:</span>
              <div className="inline-flex rounded-lg bg-[#FDF6EE] p-1 border border-[#C4A882]/20">
                {[1024, 1600, 2400].map((res) => (
                  <button
                    key={res}
                    onClick={() => setResolution(res)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                      resolution === res
                        ? 'bg-[#1A1A2E] text-[#FDF6EE] shadow-xs'
                        : 'text-[#1A1A2E]/70 hover:text-[#1A1A2E]'
                    }`}
                  >
                    {res}px
                  </button>
                ))}
              </div>
            </div>

            {/* Background Transparency Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[#1A1A2E]/70 uppercase tracking-wider font-sans text-[11px]">Fondo:</span>
              <button
                onClick={() => setTransparentBg(!transparentBg)}
                className={`px-3 py-1 rounded-lg text-[11px] font-medium border transition-all ${
                  transparentBg
                    ? 'bg-[#1A1A2E] text-[#FDF6EE] border-[#1A1A2E]'
                    : 'bg-[#FDF6EE] text-[#1A1A2E] border-[#C4A882]/40'
                }`}
              >
                {transparentBg ? 'Transparente (PNG Alpha)' : 'Sólido Crema (#FDF6EE)'}
              </button>
            </div>
          </div>
        </div>

        {/* 3 Main Logo Variants Grid on #FDF6EE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {logoVariants.map((variant) => (
            <div
              key={variant.id}
              className={`p-6 rounded-2xl border ${variant.borderClass} ${variant.bgClass} shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group`}
            >
              {variant.isPrimary && (
                <div className="absolute top-4 right-4 bg-[#C4A882] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs">
                  Principal
                </div>
              )}

              {/* Logo Preview Container */}
              <div className="space-y-4">
                <div className="w-full h-44 rounded-xl flex items-center justify-center p-6 bg-white/40 backdrop-blur-xs border border-black/5 shadow-inner">
                  <SiervaMariaLogo 
                    className="w-32 h-32 transition-transform duration-300 group-hover:scale-110"
                    color={variant.customLogoHex || variant.hex}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-serif text-lg font-bold ${variant.textWhite ? 'text-white' : 'text-[#1A1A2E]'}`}>
                      {variant.name}
                    </h3>
                    <span 
                      className="w-4 h-4 rounded-full border border-black/20 shrink-0 shadow-xs" 
                      style={{ backgroundColor: variant.customLogoHex || variant.hex }} 
                    />
                  </div>
                  <div className={`text-xs font-sans tracking-wider uppercase mt-0.5 ${variant.textWhite ? 'text-[#C4A882]' : 'text-[#C4A882]'}`}>
                    {variant.subtitle} ({variant.customLogoHex || variant.hex})
                  </div>
                  <p className={`text-xs mt-2.5 leading-relaxed font-light ${variant.textWhite ? 'text-white/80' : 'text-[#1A1A2E]/75'}`}>
                    {variant.description}
                  </p>
                </div>
              </div>

              {/* Download PNG Functional Button */}
              <div className="mt-6 pt-4 border-t border-black/10">
                <button
                  onClick={() => handleDownload(variant)}
                  disabled={downloadingId === variant.id}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                    variant.textWhite 
                      ? 'bg-[#C4A882] text-[#1A1A2E] hover:bg-white' 
                      : 'bg-[#1A1A2E] text-[#FDF6EE] hover:bg-[#C4A882]'
                  }`}
                >
                  {downloadingId === variant.id ? (
                    <span>Generando Canvas...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Descargar PNG</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Strict Logo Usage Rules & Normative Guidelines */}
        <div className="mt-12 bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1A1A2E] text-[#C4A882]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A2E]">
                Normativa & Reglas de Uso del Logo
              </h3>
              <p className="text-xs text-[#1A1A2E]/70 uppercase tracking-widest">
                Garantizando cumplimiento normativo médico e inclusividad universal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="p-5 rounded-2xl bg-[#FDF6EE] border border-[#C4A882]/20 space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-[#C4A882] flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Monograma SM Editorial
              </div>
              <p className="text-xs text-[#1A1A2E]/80 leading-relaxed font-light">
                Curva orgánica envolviendo las letras abstractas "SM". Transmite movimiento sutil, sofisticación y la fluidez natural del cuerpo humano.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDF6EE] border border-[#C4A882]/20 space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-[#1A1A2E] flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Cero Elementos Médicos
              </div>
              <p className="text-xs text-[#1A1A2E]/80 leading-relaxed font-light">
                Estrictamente <strong>sin jeringas, agujas ni bisturís</strong>. Se evita la frialdad hospitalaria para proyectar bienestar, ciencia y estética humana.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDF6EE] border border-[#C4A882]/20 space-y-2">
              <div className="text-xs uppercase font-bold tracking-widest text-[#B8963E] flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Cero Rostros de Género
              </div>
              <p className="text-xs text-[#1A1A2E]/80 leading-relaxed font-light">
                Sin siluetas ni perfiles femeninos. Mantiene la marca totalmente inclusiva para hombres, mujeres y comunidad LGBTQ+.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
