import React, { useState, useEffect, useRef } from 'react'
import {
  ShieldCheck, CreditCard, Calendar, Sparkles, Zap, Droplets,
  Layers, ArrowDown, ArrowRight, MapPin, Phone, Instagram,
  Menu, X, Star, Clock
} from 'lucide-react'

// ─── Scroll-reveal hook ──────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, v]
}

function Reveal({ children, delay = 0, from = 'bottom', className = '' }) {
  const [ref, v] = useInView()
  const translate = from === 'bottom' ? 'translate-y-10' : from === 'left' ? '-translate-x-10' : 'translate-x-10'
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${v ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translate}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── FLOATING PILL NAVBAR ────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Tratamientos', href: '#servicios' },
    { label: 'Origen', href: '#origen' },
    { label: 'Equipo', href: '#equipo' },
  ]

  return (
    <>
      {/* Desktop Floating Pill */}
      <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-6 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1A2E]/98 shadow-2xl shadow-black/30 px-6 py-3 rounded-full scale-100'
          : 'bg-[#1A1A2E]/85 backdrop-blur-xl px-6 py-3 rounded-full scale-100'
      }`}>
        {/* Logo mark */}
        <div className="flex items-center gap-3 pr-4 border-r border-white/10">
          <div className="w-8 h-8 border border-[#C4A882]/60 rounded-full flex items-center justify-center">
            <span className="font-serif text-[#C4A882] text-sm font-bold">SM</span>
          </div>
          <span className="font-sans text-[10px] uppercase tracking-widest text-white/70">
            Sierva María
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-medium text-white/60 hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA pill */}
        <a
          href="#contacto"
          className="ml-2 border border-[#C4A882] text-[#C4A882] font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-300"
        >
          Agendar
        </a>
      </div>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#1A1A2E]/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border border-[#C4A882]/60 rounded-full flex items-center justify-center">
            <span className="font-serif text-[#C4A882] text-xs font-bold">SM</span>
          </div>
          <span className="font-sans text-xs uppercase tracking-widest text-white/80">Sierva María</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`absolute top-14 left-4 right-4 bg-[#1A1A2E] rounded-2xl p-6 transition-all duration-300 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <nav className="flex flex-col gap-4 mb-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm font-medium text-white/70 hover:text-white py-1 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block border border-[#C4A882] text-[#C4A882] font-sans text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full text-center"
          >
            Agendar ahora
          </a>
        </div>
      </div>
    </>
  )
}

// ─── HERO FULL-SCREEN ────────────────────────────────────────────────────────
function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">

      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-[#1A1A2E]/65" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/noise.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Overline */}
        <div
          className={`transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#C4A882]/60" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#C4A882]">
              Medicina Estética Seria
            </span>
            <div className="h-px w-12 bg-[#C4A882]/60" />
          </div>
        </div>

        {/* Main title */}
        <div
          className={`transition-all duration-800 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDuration: '900ms', transitionDelay: '400ms' }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#FDF6EE] leading-[1.0] mb-8">
            Cuidado que<br />
            <em className="font-normal italic text-[#C4A882]">no sigue moldes.</em>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="font-sans text-base md:text-lg text-[#FDF6EE]/70 font-light leading-relaxed max-w-xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Criterio médico por encima de cualquier objetivo comercial. Cajicá.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '750ms' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="group bg-[#C4A882] text-[#1A1A2E] font-sans text-sm font-bold uppercase tracking-widest px-10 py-4 hover:bg-white transition-all duration-400 flex items-center gap-3 shadow-lg shadow-black/20"
            >
              Solicitar Valoración Gratuita
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="font-sans text-xs font-medium uppercase tracking-widest text-[#FDF6EE]/60 hover:text-[#C4A882] transition-colors border border-white/20 px-7 py-4 hover:border-[#C4A882]/40"
            >
              Ver tratamientos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-sans text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="animate-scroll-bounce">
          <ArrowDown size={16} className="text-[#C4A882]" />
        </div>
      </div>
    </section>
  )
}

// ─── TRUST BANNER ────────────────────────────────────────────────────────────
function TrustBanner() {
  const items = [
    {
      icon: <ShieldCheck size={22} strokeWidth={1.5} className="text-[#C4A882]" />,
      title: 'Dirigido por médico certificado',
      desc: 'MD. Steven Cuervo Parra — Medicina Cirugía, Juan N. Corpas',
    },
    {
      icon: <CreditCard size={22} strokeWidth={1.5} className="text-[#C4A882]" />,
      title: 'Financiación disponible',
      desc: 'Addi, Sistecrédito, Nequi, Bre-B y tarjetas de crédito',
    },
    {
      icon: <Calendar size={22} strokeWidth={1.5} className="text-[#C4A882]" />,
      title: 'Control a los 15 días incluido',
      desc: 'Seguimiento médico de cortesía con cada procedimiento',
    },
  ]

  return (
    <section className="bg-[#FDF6EE] border-b border-[#C4A882]/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C4A882]/15">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="flex items-start gap-5 py-8 px-6 md:px-10 group">
                <div className="p-3 bg-[#1A1A2E] rounded-sm shrink-0 group-hover:bg-[#C4A882] transition-colors duration-300">
                  {React.cloneElement(item.icon, { className: 'text-[#C4A882] group-hover:text-[#1A1A2E]' })}
                </div>
                <div>
                  <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#1A1A2E] mb-1">{item.title}</div>
                  <div className="font-sans text-xs text-[#1A1A2E]/60 font-light leading-relaxed">{item.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SERVICIOS ───────────────────────────────────────────────────────────────
const servicios = [
  {
    icon: <Sparkles size={28} strokeWidth={1} />,
    tag: 'Inyectables',
    title: 'Armonización Facial',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recupera el equilibrio natural de tu rostro con criterio médico serio y productos certificados.',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <Zap size={28} strokeWidth={1} />,
    tag: 'Tecnología Avanzada',
    title: 'Depilación Láser',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecnología de punta con protocolo de seguridad riguroso para todos los fototipos de piel.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <Droplets size={28} strokeWidth={1} />,
    tag: 'Cuidado Preventivo',
    title: 'Dejuvent / Skin Care',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tratamientos para hidratar, regenerar y proteger tu piel a largo plazo.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
  },
  {
    icon: <Layers size={28} strokeWidth={1} />,
    tag: 'Diagnóstico',
    title: 'Valoración Gratuita',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin costo, sin compromiso. El punto de partida para conocer tu caso con honestidad.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
  },
]

function Servicios() {
  const [active, setActive] = useState(null)

  return (
    <section id="servicios" className="bg-[#FDF6EE] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#C4A882] block mb-3">
                Lo que hacemos
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1A1A2E] leading-tight">
                Nuestra Práctica<br />
                <em className="font-normal text-[#C4A882]">Médica.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-sans text-sm text-[#1A1A2E]/60 font-light max-w-xs leading-relaxed">
              Cada tratamiento con protocolo médico certificado y consentimiento informado.
            </p>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {servicios.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className={`group relative overflow-hidden bg-[#1A1A2E] cursor-pointer transition-all duration-500 ${
                  active === i ? 'ring-1 ring-[#C4A882]/60' : ''
                }`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{ minHeight: '280px' }}
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-0 group-hover:opacity-20"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="absolute inset-0 bg-[#1A1A2E]/90 group-hover:bg-[#1A1A2E]/75 transition-colors duration-500" />

                {/* Shine sweep */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-[#C4A882]/8 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-full" style={{ minHeight: '280px' }}>
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-[#C4A882] transition-transform duration-300 group-hover:scale-110 block">
                        {s.icon}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882]/60 border border-[#C4A882]/25 px-2.5 py-1">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FDF6EE] mb-3">
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm text-[#FDF6EE]/55 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href="#contacto"
                      className="group/btn bg-[#C4A882] text-[#1A1A2E] font-sans text-xs font-bold uppercase tracking-widest px-6 py-2.5 hover:bg-white transition-all duration-300 flex items-center gap-2"
                    >
                      Explorar
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <span className="font-sans text-xs text-[#FDF6EE]/30 font-light">
                      Sin reserva previa
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── STORYTELLING BOX ────────────────────────────────────────────────────────
function Storytelling() {
  return (
    <section id="origen" className="bg-[#FDF6EE] py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="bg-[#C4A882] rounded-2xl md:rounded-3xl p-12 md:p-16 lg:p-20 relative overflow-hidden">

            {/* Decorative large letter */}
            <div className="absolute top-0 right-0 font-serif text-[220px] font-bold text-[#1A1A2E]/8 leading-none pointer-events-none select-none translate-x-8 -translate-y-8">
              S
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#1A1A2E]/30" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#1A1A2E]/60">
                  Nuestro origen literario
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1A1A2E] leading-[1.05] mb-8">
                El origen de<br />
                nuestro nombre.
              </h2>

              <p className="font-sans text-lg text-[#1A1A2E]/80 font-light leading-relaxed mb-6">
                Inspirados en <em>'Del amor y otros demonios'</em> de Gabriel García Márquez. Creemos en una identidad libre que no pide permiso.
              </p>

              <p className="font-sans text-sm text-[#1A1A2E]/65 font-light leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>

              <a
                href="#equipo"
                className="inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest text-[#1A1A2E] border border-[#1A1A2E]/40 px-7 py-3.5 hover:bg-[#1A1A2E] hover:text-[#C4A882] transition-all duration-500 group"
              >
                Conocer el equipo
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── EQUIPO ──────────────────────────────────────────────────────────────────
function Equipo() {
  return (
    <section id="equipo" className="bg-[#FDF6EE] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <Reveal from="left">
            <div className="space-y-6">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">
                Nuestro Equipo
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E] leading-tight">
                Personas antes<br />que procedimientos.
              </h2>
              <p className="font-sans text-base text-[#1A1A2E]/65 font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. La atención personalizada es la base de nuestra práctica.
              </p>

              <div className="space-y-5 pt-4">
                {[
                  { name: 'Dr. Steven Cuervo Parra', role: 'Director Médico', detail: 'Médico Cirujano — Juan N. Corpas' },
                  { name: 'Yensi García', role: 'Encargada Comercial', detail: 'Atención y agendamiento de pacientes' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 border border-[#C4A882]/20 hover:border-[#C4A882]/50 transition-colors">
                    <div className="w-12 h-12 bg-[#1A1A2E] rounded-full flex items-center justify-center shrink-0">
                      <span className="font-serif text-[#C4A882] text-lg font-bold">{p.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold text-[#1A1A2E]">{p.name}</div>
                      <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mt-0.5">{p.role}</div>
                      <div className="font-sans text-xs text-[#1A1A2E]/50 mt-0.5">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-3 mt-4 bg-[#1A1A2E] text-[#FDF6EE] font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-500 group"
              >
                Agendar valoración gratuita
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>

          <Reveal from="right" delay={150}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#C4A882]/20 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop"
                alt="Equipo médico"
                className="w-full h-[480px] object-cover rounded-sm relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent p-6 z-20 rounded-b-sm">
                <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-1">Sede Principal</div>
                <div className="font-sans text-sm text-white font-light flex items-center gap-2">
                  <MapPin size={12} className="text-[#C4A882]" />
                  Sabana Park Torre 2, Cons. 623 — Cajicá
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

// ─── CONVERSION FOOTER ───────────────────────────────────────────────────────
function ConversionFooter() {
  return (
    <section id="contacto" className="bg-[#1A1A2E] py-24 md:py-36 px-6 relative overflow-hidden">

      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C4A882]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <span className="font-sans text-xs font-bold uppercase tracking-[0.35em] text-[#C4A882] block mb-8">
            Cajicá — Sabana Centro
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#FDF6EE] leading-[1.0] mb-10 text-balance">
            Empieza tu<br />
            <em className="font-normal italic text-[#C4A882]">historia hoy.</em>
          </h2>
          <p className="font-sans text-base text-[#FDF6EE]/55 font-light max-w-lg mx-auto leading-relaxed mb-12">
            Sin reserva económica previa. Sin compromiso. Solo una conversación honesta sobre lo que necesitas.
          </p>
          <a
            href="https://wa.me/573100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#C4A882] text-[#1A1A2E] font-sans text-sm font-bold uppercase tracking-widest px-12 py-5 hover:bg-white transition-all duration-400 shadow-2xl shadow-[#C4A882]/20 group"
          >
            Agenda tu cita en Cajicá
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Trust micro-pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {['Valoración gratuita', 'Sin reserva previa', 'Control a 15 días', 'Financiación disponible'].map(t => (
              <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-[#FDF6EE]/35 border border-white/10 px-4 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C4A882]/40 rounded-full flex items-center justify-center">
                <span className="font-serif text-[#C4A882] font-bold">SM</span>
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FDF6EE]/60">Sierva María Estética</span>
            </div>
            <p className="font-sans text-xs text-[#FDF6EE]/40 font-light leading-relaxed">
              Medicina estética seria para todas las personas.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FDF6EE]/40">
              <MapPin size={11} className="text-[#C4A882]" />
              <span>Sabana Park Torre 2, Cons. 623, Cajicá</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-5">Navegación</div>
            <ul className="space-y-2 text-xs text-[#FDF6EE]/45 font-sans font-light">
              {['Inicio', 'Tratamientos', 'Nuestro Origen', 'El Equipo', 'Tratamiento de Datos'].map(l => (
                <li key={l}><a href="#" className="hover:text-[#C4A882] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Payments */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-5">Pagamos contigo</div>
            <div className="flex flex-wrap gap-2">
              {['Addi', 'Sistecrédito', 'Nequi', 'Bancolombia', 'Bre-B', 'Efectivo', 'Tarjeta'].map(m => (
                <span key={m} className="text-[10px] uppercase tracking-wider text-[#FDF6EE]/40 border border-white/10 px-3 py-1 hover:border-[#C4A882]/50 hover:text-[#C4A882] transition-colors cursor-default">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#FDF6EE]/40">
              <Instagram size={12} className="text-[#C4A882]" />
              <span>@siervamariastetica</span>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-[10px] font-sans uppercase tracking-widest text-[#FDF6EE]/25">
          <span>© 2026 Sierva María Estética — Cajicá</span>
          <span className="text-[#C4A882]/50">Prototipo 2 — Clinical Luxury & Alta Conversión</span>
        </div>
      </div>
    </section>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#FDF6EE] text-[#1A1A2E] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBanner />
      <Servicios />
      <Storytelling />
      <Equipo />
      <ConversionFooter />
    </div>
  )
}
