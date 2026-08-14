import React from 'react'
import { Sparkles, CheckCircle2, Clock, Check, ArrowRight } from 'lucide-react'

export function ArmonizacionPage({ onNavigate }) {
  return (
    <div className="pt-20">
      <section className="bg-[#1A1A2E] text-[#FDF6EE] py-20 md:py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#C4A882]/10 border border-[#C4A882]/30 px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-[#C4A882]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A882]">
              Medicina Estética & Rigor Clínico
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold text-[#FDF6EE] text-balance">
            Armonización Facial<br />
            <em className="font-normal italic text-[#C4A882]">e Inyectables</em>
          </h1>
          <p className="font-sans text-base md:text-lg text-[#FDF6EE]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Procedimientos médicos de alta precisión con Bótox, Ácido Hialurónico y Bioestimuladores de colágeno. Diseñados para restaurar estructura, devolver juventud y resaltar tu belleza natural sin transformar tus rasgos.
          </p>
        </div>
      </section>

      {/* A. Limpiezas y Cuidados Básicos */}
      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl font-semibold text-[#1A1A2E]">A. Limpiezas y Cuidados Básicos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#C4A882]/30 p-8 rounded-2xl text-center shadow-lg hover:border-[#C4A882] transition-colors">
              <h3 className="font-sans text-xl font-bold text-[#1A1A2E] mb-4">Limpieza Facial Basic</h3>
              <div className="font-serif text-4xl font-bold text-[#C4A882]">$50.000</div>
            </div>
            <div className="bg-white border border-[#C4A882]/30 p-8 rounded-2xl text-center shadow-lg hover:border-[#C4A882] transition-colors relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4A882] text-[#1A1A2E] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">Recomendado</span>
              <h3 className="font-sans text-xl font-bold text-[#1A1A2E] mb-4">Limpieza Facial Premium</h3>
              <div className="font-serif text-4xl font-bold text-[#C4A882]">$100.000</div>
            </div>
            <div className="bg-white border border-[#C4A882]/30 p-8 rounded-2xl text-center shadow-lg hover:border-[#C4A882] transition-colors">
              <h3 className="font-sans text-xl font-bold text-[#1A1A2E] mb-4">Plasma Facial (Solo)</h3>
              <div className="font-serif text-4xl font-bold text-[#C4A882]">$200.000</div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Procedimientos Individuales */}
      <section className="bg-[#FDF6EE] py-10 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl font-semibold text-[#1A1A2E]">B. Procedimientos Individuales (Base)</h2>
          </div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#C4A882]/30">
            <table className="w-full text-left border-collapse">
              <tbody>
                {[
                  { name: 'Bótox Full Face (50 Unidades)', price: '$700.000' },
                  { name: 'Rinoremodelación', desc: 'Según valoración', price: '$700.000 - $900.000' },
                  { name: 'Hidratación de labios', price: '$350.000 - $450.000' },
                  { name: 'Definición de labios', price: '$500.000 - $600.000' },
                  { name: 'Perfilación de labios', price: '$700.000 - $900.000' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-[#C4A882]/10 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-5 px-8 font-semibold text-[#1A1A2E]">
                      {item.name}
                      {item.desc && <div className="text-xs font-normal text-[#1A1A2E]/60 mt-1">({item.desc})</div>}
                    </td>
                    <td className="py-5 px-8 font-bold text-[#C4A882] text-right whitespace-nowrap text-lg">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* C. Combos Premium */}
      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12 border-t border-[#C4A882]/20 mt-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882] border border-[#C4A882]/30 px-4 py-1.5 rounded-full">
              Precios Actualizados
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E]">C. Combos Premium</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-bold text-[#1A1A2E] mb-4 pl-4 border-l-4 border-[#C4A882]">Combos Básicos</h3>
              {[
                { name: 'Plasma + Limpieza Premium', price: '$270.000' },
                { name: 'NCTF + Plasma', price: '$350.000' },
                { name: 'NCTF + Plasma + Bótox (50U)', price: '$850.000' },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-[#C4A882]/30 p-6 rounded-2xl flex justify-between items-center shadow-md">
                  <div className="font-semibold text-[#1A1A2E] text-lg">{c.name}</div>
                  <div className="font-bold text-[#C4A882] text-xl">{c.price}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-sans text-xl font-bold text-[#1A1A2E] mb-4 pl-4 border-l-4 border-[#C4A882]">Combos Full Face</h3>
              {[
                { name: 'Full Face 1ml AH + Bótox + Plasma', price: '$1.400.000' },
                { name: 'Full Face 2ml AH + Bótox + Plasma', price: '$1.300.000' },
                { name: 'Full Face 3ml AH + Bótox + Plasma', price: '$2.800.000' },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-[#C4A882]/30 p-6 rounded-2xl flex justify-between items-center shadow-md">
                  <div className="font-semibold text-[#1A1A2E] text-lg">{c.name}</div>
                  <div className="font-bold text-[#C4A882] text-xl">{c.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Combos con Profhilo',
                items: [
                  { name: 'Profhilo + Bótox (50U)', price: '$2.300.000' },
                  { name: 'Profhilo + Bótox + Ácido Hialurónico (1ml)', price: '$2.800.000' }
                ]
              },
              {
                title: 'Combos con Sculptra',
                items: [
                  { name: 'Sculptra + Bótox (50U)', price: '$2.700.000' },
                  { name: 'Sculptra + Bótox + Ácido Hialurónico (1ml)', price: '$3.200.000' }
                ]
              },
              {
                title: 'Combos con Harmonyca',
                items: [
                  { name: 'Harmonyca + Bótox (50U)', price: '$3.000.000' },
                  { name: 'Harmonyca + Bótox + Ácido Hialurónico (1ml)', price: '$3.500.000' }
                ]
              }
            ].map((group, i) => (
              <div key={i} className="bg-[#1A1A2E] border border-[#C4A882]/30 p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={60} /></div>
                <h3 className="font-sans text-xl font-bold text-[#FDF6EE] text-center border-b border-white/10 pb-4">{group.title}</h3>
                <div className="space-y-6">
                  {group.items.map((item, j) => (
                    <div key={j} className="flex flex-col gap-2">
                      <div className="text-sm text-[#FDF6EE]/90 leading-tight">{item.name}</div>
                      <div className="font-serif text-2xl font-bold text-[#C4A882]">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <a
              href="https://wa.me/573100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#C4A882] text-[#1A1A2E] font-sans text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-full hover:bg-[#1A1A2E] hover:text-[#C4A882] transition-colors shadow-2xl"
            >
              Agendar Combo Premium
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export function LaserPage({ onNavigate }) {
  return (
    <div className="pt-20">
      <section className="bg-[#1A1A2E] text-[#FDF6EE] py-20 md:py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#C4A882]/10 border border-[#C4A882]/30 px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-[#C4A882]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A882]">
              Tecnología Láser Avanzada
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold text-[#FDF6EE] text-balance">
            Depilación Láser<br />
            <em className="font-normal italic text-[#C4A882]">Definitiva</em>
          </h1>
          <p className="font-sans text-base md:text-lg text-[#FDF6EE]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Eliminación progresiva y definitiva del vello con tecnología de última generación. Protocolos seguros, rápidos y altamente efectivos para todo tipo de piel.
          </p>
        </div>
      </section>

      {/* A. Precios por Zona (Sesiones Individuales) */}
      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#1A1A2E] border border-[#1A1A2E]/30 px-4 py-1.5 rounded-full bg-white">
              Todos los paquetes incluyen rasuración GRATIS
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#1A1A2E] mt-6">A. Precios por Zona (Sesiones Individuales)</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[#C4A882]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { z: 'Rostro Completo', d: 'Frente, patilla, mentón, pómulos y bozo', p: '$630.000' },
                { z: 'Barbilla', p: '$550.000' },
                { z: 'Cuello', p: '$500.000' },
                { z: 'Hombros', p: '$650.000' },
                { z: 'Axilas', p: '$230.000' },
                { z: 'Pechos / Areola', p: '$700.000' },
                { z: 'Abdomen (Línea Alba)', p: '$330.000' },
                { z: 'Espalda', d: 'Alta ($450.000) / Baja ($450.000)', p: '$450.000' },
                { z: 'Brazos Completos', d: 'Por separado: Antebrazos $380k, Manos $380k', p: '$690.000' },
                { z: 'Pelvis', d: 'Bikini ($500.000) / Línea Perianal ($600.000)', p: 'Según zona' },
                { z: 'Glúteos', p: '$560.000' },
                { z: 'Piernas Completas', d: 'Por separado: Pierna $450k, Muslo $450k', p: '$780.000' },
                { z: 'Pies (Deditos)', p: '$320.000' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-[#C4A882]/20 pb-4 py-2 hover:bg-[#FDF6EE]/50 transition-colors px-2 rounded-lg">
                  <div>
                    <div className="font-semibold text-[#1A1A2E] text-base">{item.z}</div>
                    {item.d && <div className="text-xs text-[#1A1A2E]/60 mt-1">{item.d}</div>}
                  </div>
                  <div className="font-bold text-[#C4A882] text-right text-lg">{item.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B. PAQUETES DE 6 SESIONES (Alta Conversión) */}
      <section className="bg-[#1A1A2E] py-20 px-6 lg:px-12 text-[#FDF6EE]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FDF6EE]">B. Paquetes de 6 Sesiones</h2>
            <p className="font-sans text-[#C4A882] font-semibold tracking-widest uppercase text-sm">Alta Conversión</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 bg-gradient-to-r from-[#C4A882] to-[#E5D3B8] text-[#1A1A2E] rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.02] transition-transform relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-20 pointer-events-none">
                <Sparkles size={200} />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#C4A882] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
                  <Sparkles size={12} /> Recomendado para pauta
                </div>
                <h3 className="font-serif text-4xl font-bold">Super Combo Plus</h3>
                <p className="font-sans text-base font-semibold">4 zonas + 1 zona adicional GRATIS</p>
              </div>
              <div className="text-right flex flex-col items-center md:items-end relative z-10 mt-6 md:mt-0">
                <div className="font-serif text-5xl md:text-6xl font-bold mb-4">$1.000.000</div>
                <a href="https://wa.me/573100000000" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A2E] text-[#C4A882] text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-[#1A1A2E] transition-colors shadow-xl">Lo Quiero Ya</a>
              </div>
            </div>

            {[
              { z: 'Paquete 2 Zonas', p: '$900.000' },
              { z: 'Paquete 3 Zonas', p: '$1.050.000' },
              { z: 'Paquete 4 Zonas', p: '$1.300.000' },
              { z: 'Paquete 6 Zonas', p: '$1.500.000' },
              { z: 'Full Body', d: 'Cuerpo Completo - Zonas delimitadas', p: '$2.000.000' },
              { z: 'Full Body VIP', d: 'Zonas Ilimitadas', p: '$2.500.000' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-[#C4A882]/30 p-8 rounded-2xl text-center hover:bg-white/10 hover:border-[#C4A882] transition-colors flex flex-col justify-between h-full shadow-lg">
                <h3 className="font-sans text-xl font-bold text-[#FDF6EE] mb-2">{item.z}</h3>
                {item.d && <div className="text-sm text-[#FDF6EE]/60 mb-6">{item.d}</div>}
                {!item.d && <div className="mb-6"></div>}
                <div className="font-serif text-4xl font-bold text-[#C4A882]">{item.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha Técnica Comercial */}
      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12 border-t border-[#C4A882]/20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#C4A882]/30 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">Ficha Técnica Comercial</span>
              <h2 className="font-serif text-4xl font-semibold text-[#1A1A2E]">NewAge Fénix EV 2025N</h2>
              <p className="font-sans text-sm md:text-base text-[#1A1A2E]/80 leading-relaxed">
                "En Sierva María utilizamos tecnología de vanguardia con la plataforma <strong>NewAge Fénix Evolution 2025N</strong>. Este no es un láser tradicional; es un equipo médico de diodo de última generación diseñado para garantizar máxima eficacia y confort."
              </p>
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#C4A882]/20 p-3 rounded-full text-[#C4A882] shrink-0"><Sparkles size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-lg mb-1">Tecnología Indolora</h4>
                  <p className="text-sm text-[#1A1A2E]/70 leading-relaxed">Su sistema de refrigeración avanzado protege la piel y hace que la sesión sea altamente tolerable y sin tiempo de recuperación.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-[#C4A882]/20 p-3 rounded-full text-[#C4A882] shrink-0"><CheckCircle2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-lg mb-1">Precisión en Todo Tipo de Piel</h4>
                  <p className="text-sm text-[#1A1A2E]/70 leading-relaxed">Ajuste de fototipos que permite tratar desde vellos finos y claros hasta vellos gruesos en pieles bronceadas.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-[#C4A882]/20 p-3 rounded-full text-[#C4A882] shrink-0"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-lg mb-1">Sesiones Rápidas</h4>
                  <p className="text-sm text-[#1A1A2E]/70 leading-relaxed">Su cabezal de alta frecuencia reduce drásticamente el tiempo en camilla, entregando resultados definitivos desde las primeras sesiones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
