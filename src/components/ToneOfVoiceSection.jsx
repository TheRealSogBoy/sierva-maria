import React from 'react';
import { MessageSquare, Check, X, Sparkles, ShieldCheck, FileText, HeartHandshake } from 'lucide-react';

export const ToneOfVoiceSection = () => {
  const toneScenarios = [
    {
      situation: 'Describir un procedimiento',
      correct: '"El ácido hialurónico devuelve lo que el tiempo llevó, con criterio médico y sin exagerar."',
      incorrect: '"¡Transforma tu cara con nuestro tratamiento estrella!"',
      rationale: 'Se enfatiza la restitución anatómica natural y el criterio científico, evitando falsas promesas milagrosas.'
    },
    {
      situation: 'Responder una duda en DMs / WhatsApp',
      correct: '"Hola [nombre], esa es una pregunta muy importante. Te explico con calma lo que aplica para tu caso."',
      incorrect: '"¡Claro! Te atendemos hoy mismo. ¡Agenda ya!"',
      rationale: 'Proyecta calma, escucha atenta y personalizado médico, rechazando el tono agresivo de venta inmediata.'
    },
    {
      situation: 'Publicar un resultado de tratamiento',
      correct: '"Resultado natural. 3 semanas post-procedimiento. Historia clínica completa. Consentimiento firmado."',
      incorrect: '"¡Mira qué cambio tan increíble!"',
      rationale: 'Respeta el rigor médico, detalla tiempos de evolución clínica y evidencia el consentimiento informado.'
    },
    {
      situation: 'Presentar el consultorio / marca',
      correct: '"Nos importa hacer bien las cosas desde el primer paciente."',
      incorrect: '"El mejor consultorio de inyectables de la Sabana."',
      rationale: 'Honestidad radical y compromiso ético sobre la ostentación y los superlativos vacíos de competencia.'
    }
  ];

  return (
    <section id="tone" className="py-16 md:py-24 border-b border-[#C4A882]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF1E6] border border-[#C4A882]/30 text-xs font-semibold uppercase tracking-widest text-[#C4A882]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tono de Comunicación & Reglas de Voz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A2E]">
            Cercano, Médico Serio & Humano
          </h2>
          <p className="text-base text-[#1A1A2E]/75 font-light leading-relaxed">
            La marca se expresa con autoridad médica sin caer en la frialdad estéril ni en la agresividad comercial. 
            Hablamos desde la empatía, el criterio científico y el respeto absoluto por el paciente.
          </p>
        </div>

        {/* Comparative Cards Grid: Correct vs Incorrect Tone */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {toneScenarios.map((scenario, index) => (
            <div 
              key={index}
              className="bg-[#FAF1E6] rounded-3xl border border-[#C4A882]/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Scenario Bar */}
              <div className="bg-[#1A1A2E] text-[#FDF6EE] px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#C4A882]">
                  <MessageSquare className="w-4 h-4 text-[#C4A882]" />
                  <span>Escenario {index + 1}: {scenario.situation}</span>
                </div>
                <span className="text-[10px] font-sans tracking-widest text-white/50 uppercase">
                  Regla de Tono #0{index + 1}
                </span>
              </div>

              {/* Side by Side Comparison Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Correct Tone Card */}
                <div className="p-6 rounded-2xl bg-[#FDF6EE] border border-emerald-600/30 space-y-3 relative shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <Check className="w-3.5 h-3.5" /> Tono Correcto (Aprobado)
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold uppercase">Ético & Serio</span>
                  </div>

                  <p className="font-serif text-lg font-medium text-[#1A1A2E] italic leading-snug pt-2">
                    {scenario.correct}
                  </p>

                  <div className="pt-3 border-t border-emerald-900/10 text-xs text-[#1A1A2E]/70 leading-relaxed">
                    <strong className="text-emerald-900 font-semibold block text-[10px] uppercase mb-0.5">Fundamento de Tono:</strong>
                    {scenario.rationale}
                  </div>
                </div>

                {/* Incorrect Tone Card */}
                <div className="p-6 rounded-2xl bg-[#FDF6EE] border border-rose-600/30 space-y-3 relative opacity-85 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
                      <X className="w-3.5 h-3.5" /> Tono Incorrecto (Prohibido)
                    </span>
                    <span className="text-[10px] text-rose-700 font-semibold uppercase">Comercial Agresivo</span>
                  </div>

                  <p className="font-serif text-lg font-medium text-[#1A1A2E]/80 line-through decoration-rose-400 italic leading-snug pt-2">
                    {scenario.incorrect}
                  </p>

                  <div className="pt-3 border-t border-rose-900/10 text-xs text-rose-950/70 leading-relaxed">
                    <strong className="text-rose-900 font-semibold block text-[10px] uppercase mb-0.5">Por qué se rechaza:</strong>
                    Exageración, urgencia engañosa, tono de venta agresiva y lenguaje desprovisto de criterio médico.
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Before/After Medical Context Mandatory Rule */}
        <div className="bg-[#FAF1E6] p-8 rounded-3xl border border-[#C4A882]/40 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1A1A2E] text-[#C4A882]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A2E]">
                Regla de Oro para Fotografías Antes / Después
              </h3>
              <span className="text-xs uppercase tracking-widest text-[#C4A882] font-semibold">
                Transparencia Radical & Consentimiento Clínico
              </span>
            </div>
          </div>

          <p className="text-sm text-[#1A1A2E]/85 leading-relaxed font-light">
            Cualquier imagen de resultado o comparación clínica <strong>debe ser siempre acompañada de su contexto completo</strong>: 
            procedimiento exacto realizado, producto médico certificado, tiempo de evolución post-tratamiento y cómo se siente el paciente. 
            <em>NUNCA se publicarán resultados sin el sustento del contexto médico.</em>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center text-xs font-semibold uppercase tracking-wider text-[#1A1A2E]">
            <div className="bg-[#FDF6EE] p-3 rounded-xl border border-[#C4A882]/20">1. ¿Qué se hizo?</div>
            <div className="bg-[#FDF6EE] p-3 rounded-xl border border-[#C4A882]/20">2. ¿Con qué producto?</div>
            <div className="bg-[#FDF6EE] p-3 rounded-xl border border-[#C4A882]/20">3. ¿Cuánto tiempo pasó?</div>
            <div className="bg-[#FDF6EE] p-3 rounded-xl border border-[#C4A882]/20">4. Sentir del paciente</div>
          </div>
        </div>

      </div>
    </section>
  );
};
