import React, { useState } from 'react';
import { Type, Sparkles, Sliders, CheckCircle2, AlertTriangle, CaseSensitive } from 'lucide-react';

export const TypographySection = () => {
  const [sampleText, setSampleText] = useState('Sierva María Estética — Medicina médica seria para todas las personas.');
  const [fontSize, setFontSize] = useState(36);
  const [textCase, setTextCase] = useState('none'); // 'uppercase', 'lowercase', 'capitalize', 'none'
  const [fontWeight, setFontWeight] = useState('font-normal');

  const serifLetters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';

  return (
    <section id="typography" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jerarquía Tipográfica Editorial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Tipografía & Expresión Textual
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            Combinación deliberada entre la elegancia literaria de la fuente <strong>Serif (Cormorant Garamond / Playfair Display)</strong> para títulos principales y la claridad de la <strong>Sans-Serif espaciada (Montserrat / Inter)</strong> para subtítulos.
          </p>
        </div>

        {/* Interactive Type Tester Controls */}
        <div className="bg-[#FAF1E6] p-6 sm:p-8 rounded-3xl border border-[#C4A882]/30 space-y-6 mb-12 shadow-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C4A882]/20 pb-4">
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#1A1A2E]">
              <Sliders className="w-4 h-4 text-[#C4A882]" />
              <span>Probador Interactivo de Fuente</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              {/* Size Slider */}
              <div className="flex items-center gap-2">
                <span className="text-[#1A1A2E]/70 font-medium">Tamaño ({fontSize}px):</span>
                <input
                  type="range"
                  min="16"
                  max="72"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-32 accent-[#C4A882] cursor-pointer"
                />
              </div>

              {/* Case Buttons */}
              <div className="flex items-center gap-1 bg-[#FDF6EE] p-1 rounded-lg border border-[#C4A882]/20">
                <button
                  onClick={() => setTextCase('uppercase')}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase transition-all ${
                    textCase === 'uppercase' ? 'bg-[#1A1A2E] text-[#FDF6EE]' : 'text-[#1A1A2E]/70'
                  }`}
                >
                  MAYÚSCULAS
                </button>
                <button
                  onClick={() => setTextCase('none')}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all ${
                    textCase === 'none' ? 'bg-[#1A1A2E] text-[#FDF6EE]' : 'text-[#1A1A2E]/70'
                  }`}
                >
                  Normal
                </button>
              </div>

              {/* Weight Selector */}
              <select
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                className="bg-[#FDF6EE] px-3 py-1 rounded-lg text-xs border border-[#C4A882]/30 text-[#1A1A2E] font-medium"
              >
                <option value="font-light">Ligera (300)</option>
                <option value="font-normal">Regular (400)</option>
                <option value="font-semibold">Semibold (600)</option>
                <option value="font-bold">Bold (700)</option>
              </select>
            </div>
          </div>

          {/* Custom Input Field */}
          <div>
            <label className="block text-xs uppercase font-semibold text-[#1A1A2E]/60 tracking-wider mb-2">
              Escribe tu propio texto de prueba:
            </label>
            <input
              type="text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              className="w-full bg-[#FDF6EE] px-4 py-3 rounded-xl border border-[#C4A882]/40 text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#C4A882] text-sm font-sans"
            />
          </div>

          {/* Live Preview Display Box */}
          <div className="p-8 rounded-2xl bg-[#FDF6EE] border border-[#C4A882]/30 space-y-6">
            
            {/* Serif Preview */}
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C4A882] block mb-1">
                Fuente Primaria (Serif) — Títulos Principales & Logo
              </span>
              <p
                style={{ fontSize: `${fontSize}px` }}
                className={`font-serif text-[#1A1A2E] leading-tight transition-all duration-200 ${fontWeight} ${
                  textCase === 'uppercase' ? 'uppercase tracking-wider' : ''
                }`}
              >
                {sampleText}
              </p>
            </div>

            {/* Sans-Serif Tracked Preview */}
            <div className="pt-6 border-t border-[#C4A882]/20">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1A1A2E]/60 block mb-1">
                Fuente Secundaria (Sans-Serif Espaciada) — Subtítulos & Taglines
              </span>
              <p
                style={{ fontSize: `${Math.max(14, Math.round(fontSize * 0.55))}px` }}
                className={`font-sans tracking-[0.35em] uppercase text-[#1A1A2E] leading-relaxed transition-all duration-200 ${fontWeight}`}
              >
                {sampleText}
              </p>
            </div>

          </div>

        </div>

        {/* Font Spec Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Serif Spec */}
          <div className="bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C4A882]">Tipografía Principal</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#C4A882]/20 text-[#1A1A2E] font-medium">Serif Clásica</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#1A1A2E]">
              Playfair Display / Cormorant Garamond
            </h3>

            <p className="text-xs text-[#1A1A2E]/75 leading-relaxed font-light">
              Utilizada exclusivamente para la marca nominal <strong>"SIERVA MARÍA"</strong>, títulos de sección y citas literarias. Otorga nobleza, elegancia de alta costura y vinculación inmediata con la literatura colombiana.
            </p>

            <div className="bg-[#FDF6EE] p-4 rounded-xl border border-[#C4A882]/20 font-serif text-sm tracking-widest text-[#1A1A2E] leading-relaxed">
              {serifLetters}
            </div>
          </div>

          {/* Card 2: Sans-Serif Spec */}
          <div className="bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-bold text-[#1A1A2E]">Tipografía Secundaria</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#1A1A2E]/10 text-[#1A1A2E] font-medium">Sans-Serif Espaciada</span>
            </div>

            <h3 className="font-sans text-2xl font-bold text-[#1A1A2E] tracking-widest uppercase">
              Plus Jakarta Sans / Montserrat
            </h3>

            <p className="text-xs text-[#1A1A2E]/75 leading-relaxed font-light">
              Implementada con alto 'tracking' (espaciado entre letras) para la palabra <strong>"ESTÉTICA"</strong> y todos los subtítulos. Garantiza legibilidad impecable en pantallas retina y piezas digitales.
            </p>

            <div className="bg-[#FDF6EE] p-4 rounded-xl border border-[#C4A882]/20 font-sans text-xs tracking-[0.25em] uppercase text-[#1A1A2E] leading-relaxed">
              {serifLetters}
            </div>
          </div>

        </div>

        {/* Mandatory Word Replacement Guideline from PDF */}
        <div className="bg-[#1A1A2E] p-6 sm:p-8 rounded-3xl text-[#FDF6EE] border border-[#C4A882]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-[#C4A882]/20 text-[#C4A882] shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-[#C4A882]">
                Regla Tipográfica Obligatoria
              </div>
              <div className="text-sm font-sans text-white/90 mt-1 leading-relaxed">
                La palabra secundaria <strong>"ESTÉTICA"</strong> reemplaza cualquier término agresivo o comercial como <em>"INYECTABLES"</em> o <em>"ARMONIZACIÓN"</em> en la tipografía principal del logotipo.
              </div>
            </div>
          </div>

          <div className="bg-white/10 px-5 py-3 rounded-xl border border-white/20 text-center shrink-0">
            <span className="block text-[10px] uppercase tracking-widest text-[#C4A882]">Uso Correcto</span>
            <span className="font-serif text-lg font-bold text-white tracking-wide">Sierva María <span className="font-sans text-xs tracking-[0.3em] font-light text-[#C4A882]">ESTÉTICA</span></span>
          </div>
        </div>

      </div>
    </section>
  );
};
