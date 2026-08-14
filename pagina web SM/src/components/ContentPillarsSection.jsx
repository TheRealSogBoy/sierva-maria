import React from 'react';
import { BookOpen, Stethoscope, HeartHandshake, EyeOff, Sparkles, CalendarCheck, MapPin, CreditCard, RefreshCw, Check, ArrowRight } from 'lucide-react';

export const ContentPillarsSection = () => {
  const pillars = [
    {
      num: '01',
      title: 'Educación Médica',
      icon: <Stethoscope className="w-5 h-5 text-[#C4A882]" />,
      summary: 'La ciencia detrás de cada procedimiento explicada en lenguaje claro y accesible.',
      example: 'Ejemplo: "¿Por qué la toxina botulínica se aplica en el músculo y no en la piel?" Genera autoridad científica sin frialdad.',
      impact: 'Autoridad & Confianza'
    },
    {
      num: '02',
      title: 'Humanización del Equipo',
      icon: <HeartHandshake className="w-5 h-5 text-[#C4A882]" />,
      summary: 'El Dr. Steven Cuervo Parra (Médico y Cirujano Juan N. Corpas) como Director Médico real y Yensi García como Encargada Comercial.',
      example: 'El paciente elige personas y relaciones de empatía médica, no instalaciones estériles.',
      impact: 'Conexión Humana'
    },
    {
      num: '03',
      title: 'Transparencia Radical',
      icon: <EyeOff className="w-5 h-5 text-[#C4A882]" />,
      summary: '"Te decimos cuándo NO aplicar un procedimiento".',
      example: 'Mostrar los límites reales de la medicina estética genera infinitamente más confianza que la venta vacía de resultados.',
      impact: 'Rigor & Ética'
    },
    {
      num: '04',
      title: 'El "Por Qué" Sierva María',
      icon: <BookOpen className="w-5 h-5 text-[#C4A882]" />,
      summary: 'Origen literario con Gabriel García Márquez ("Del amor y otros demonios").',
      example: 'El único consultorio en la Sabana de Bogotá con un Premio Nobel de Literatura en su ADN. Propiedad intelectual narrativa imbatible.',
      impact: 'Diferenciación Única'
    }
  ];

  const commercialSteps = [
    {
      title: '1. Captación & Cierre',
      desc: 'Consulta de Valoración GRATUITA. Sin exigencia de abono de reserva, solo confirmación por WhatsApp.',
      badge: 'Acceso Directo'
    },
    {
      title: '2. Onboarding Paciente',
      desc: 'Indicaciones previas, recordatorios 24h y 2h antes de la cita, tutorial de llegada a Sabana Park por Waze/Maps.',
      badge: 'Experiencia Calma'
    },
    {
      title: '3. Venta Cruzada',
      desc: 'Todo paciente de Depilación Láser recibe bono/descuento de valoración para Armonización Facial.',
      badge: 'Valor Agregado'
    },
    {
      title: '4. Facilidades de Pago',
      desc: 'Financiación flexible en sala con Addi, Sistecrédito, Nequi, Bancolombia, Bre-B y tarjetas.',
      badge: 'Accesibilidad'
    },
    {
      title: '5. Retención Médica',
      desc: 'Control médico obligatorio a los 15 días. Recordatorio automatizado Láser (30 días) y Toxina (6 meses).',
      badge: 'Seguridad 360°'
    }
  ];

  return (
    <section id="strategy" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrategia de Contenido & Operativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Los 4 Pilares & Onboarding
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            Todo contenido digital debe ser filtrado obligatoriamente a través de los cuatro pilares narrativos de la marca y coordinado con el protocolo de servicio al paciente.
          </p>
        </div>

        {/* 4 Content Pillars Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-sm font-semibold tracking-widest uppercase text-[#1A1A2E]">
            <BookOpen className="w-4 h-4 text-[#C4A882]" />
            <span>Pilares Editoriales de Contenido</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pilar) => (
              <div
                key={pilar.num}
                className="bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/30 shadow-sm space-y-4 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1A1A2E] flex items-center justify-center shadow-xs">
                      {pilar.icon}
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#C4A882]">
                      Pilar {pilar.num}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#1A1A2E] text-[#FDF6EE]">
                    {pilar.impact}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                  {pilar.title}
                </h3>

                <p className="text-xs text-[#1A1A2E]/80 leading-relaxed font-light">
                  {pilar.summary}
                </p>

                <div className="p-4 rounded-xl bg-[#FDF6EE] border border-[#C4A882]/20 text-xs text-[#1A1A2E]/85 leading-relaxed italic">
                  "{pilar.example}"
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Commercial & Operational Strategy Banner */}
        <div className="bg-[#1A1A2E] p-8 sm:p-10 rounded-3xl text-[#FDF6EE] border border-[#C4A882]/40 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#C4A882]/20 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A882]">
                Protocolo Comercial & Onboarding del Paciente
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-1">
                Estrategia de Operación & Servicio 2026
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-[#C4A882]/20 px-4 py-2 rounded-xl text-xs text-[#C4A882] border border-[#C4A882]/30 font-medium">
              <CalendarCheck className="w-4 h-4" />
              <span>Consulta de Valoración Gratuita</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commercialSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
              >
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C4A882] block">
                  {step.badge}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-white/75 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Payment Methods Badges */}
          <div className="pt-4 border-t border-[#C4A882]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#C4A882]" />
              <span className="font-medium text-white">Pasarelas & Alianzas de Pago:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Addi', 'Sistecrédito', 'Nequi', 'Bancolombia', 'Bre-B', 'Tarjetas Crédito / Débito', 'Efectivo'].map((method) => (
                <span key={method} className="px-3 py-1 rounded-lg bg-white/10 text-white text-[11px] font-semibold">
                  {method}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
