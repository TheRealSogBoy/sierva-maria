import React, { useState, useEffect, useRef } from 'react'
import {
  Sparkles, Feather, Zap, Droplets, ArrowRight, MapPin,
  Phone, Instagram, Menu, X, ChevronDown, ShieldCheck,
  CreditCard, Star
} from 'lucide-react'

// ─── Hook: scroll-triggered visibility ───────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ─── Animated Section wrapper ────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// ─── NAVBAR ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'El Origen', href: '#origen' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Nuestro Equipo', href: '#equipo' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-[#FDF6EE]/80 border-b border-[#C4A882]/20 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl font-semibold tracking-widest text-navy hover:text-nude transition-colors">
          SIERVA MARÍA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-medium tracking-widest uppercase text-navy/70 hover:text-navy transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-nude group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            className="bg-nude text-navy text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-sm hover:bg-nude-dark transition-all duration-300"
          >
            Valoración Gratuita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-navy p-2"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-[#FDF6EE] border-t border-[#C4A882]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-navy/80 hover:text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-nude text-navy text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-sm text-center"
          >
            Valoración Gratuita
          </a>
        </div>
      </div>
    </header>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-cream flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[80vh]">

          {/* Left: Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div
              className="animate-fade-up"
              style={{ animationFillMode: 'both', animationDelay: '100ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-nude" />
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-nude">
                  Medicina Estética
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-navy leading-[1.05] text-balance">
                Belleza libre,<br />
                <em className="font-normal text-nude">identidad</em> que<br />
                no pide permiso.
              </h1>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationFillMode: 'both', animationDelay: '300ms' }}
            >
              <p className="font-sans text-base text-navy/70 font-light leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Criterio médico. Seguridad ante todo.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up"
              style={{ animationFillMode: 'both', animationDelay: '500ms' }}
            >
              <a
                href="#contacto"
                className="group bg-navy text-cream text-xs font-semibold uppercase tracking-widest px-8 py-4 hover:bg-nude hover:text-navy transition-all duration-500 flex items-center gap-3"
              >
                Agenda en Cajicá
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#origen"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-navy/60 hover:text-nude transition-colors duration-300 flex items-center gap-2 group"
              >
                Conoce nuestro origen
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-6 pt-4 border-t border-[#C4A882]/20 animate-fade-up"
              style={{ animationFillMode: 'both', animationDelay: '700ms' }}
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-navy">+500</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-navy/50">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-navy">100%</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-navy/50">Certificado</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl font-bold text-navy">0</div>
                <div className="font-sans text-[10px] uppercase tracking-widest text-navy/50">Reserva previa</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="lg:col-span-6 relative animate-fade-in"
            style={{ animationFillMode: 'both', animationDelay: '200ms' }}
          >
            {/* Accent block */}
            <div className="absolute -top-8 -right-4 w-72 h-72 bg-nude/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-4 w-48 h-48 bg-navy/5 rounded-full blur-2xl pointer-events-none" />

            {/* Main image frame */}
            <div className="relative">
              <div className="absolute inset-0 border border-nude/30 translate-x-3 translate-y-3 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                alt="Clínica minimalista"
                className="w-full h-[540px] lg:h-[620px] object-cover rounded-sm relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-cream/95 backdrop-blur-sm border border-nude/20 px-5 py-4 z-20 max-w-[200px] shadow-sm">
                <div className="font-sans text-[10px] uppercase tracking-widest text-nude font-semibold mb-1">Director Médico</div>
                <div className="font-serif text-sm font-semibold text-navy">Dr. Steven Cuervo Parra</div>
                <div className="font-sans text-[10px] text-navy/60 mt-0.5">Medicina Cirugía — Juan N. Corpas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ORIGEN ─────────────────────────────────────────────────────────────────
function Origen() {
  return (
    <section id="origen" className="bg-cream py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <Reveal>
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-3">
              <Feather size={16} className="text-nude" />
              <div className="h-14 w-px bg-gradient-to-b from-nude to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-nude block mb-6">
            El Origen
          </span>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-navy leading-tight mb-10 text-balance">
            Del amor y<br />
            <em className="font-normal italic text-nude">otros demonios.</em>
          </h2>
        </Reveal>

        <Reveal delay={350}>
          <div className="max-w-2xl mx-auto space-y-5">
            <p className="font-sans text-lg text-navy/80 font-light leading-relaxed">
              Inspirados en la obra de García Márquez. No creemos en los moldes convencionales, creemos en tu versión más auténtica.
            </p>
            <p className="font-sans text-base text-navy/60 font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-14 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-nude/40" />
            <span className="font-serif text-sm italic text-navy/50">Cajicá, Sabana Centro</span>
            <div className="h-px w-16 bg-nude/40" />
          </div>
        </Reveal>

      </div>
    </section>
  )
}

// ─── SERVICIOS ───────────────────────────────────────────────────────────────
const servicios = [
  {
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    title: 'Armonización Facial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    tag: 'Tratamiento estrella',
  },
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: 'Depilación Láser',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    tag: 'Alta demanda',
  },
  {
    icon: <Droplets size={20} strokeWidth={1.5} />,
    title: 'Rejuvenecimiento & Skin Care',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    tag: 'Resultados visibles',
  },
]

function Servicios() {
  return (
    <section id="tratamientos" className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-nude block mb-3">
                Nuestros Tratamientos
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy leading-tight">
                Lo que hacemos,<br />lo hacemos bien.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#contacto"
              className="font-sans text-xs font-semibold uppercase tracking-widest text-nude hover:text-nude-dark transition-colors flex items-center gap-2 group"
            >
              Ver todos los tratamientos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-nude/20">
          {servicios.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group p-10 border-b md:border-b-0 md:border-r border-nude/20 last:border-0 hover:bg-nude/5 transition-all duration-500 cursor-pointer flex flex-col h-full">
                {/* Top accent */}
                <div className="w-8 h-px bg-nude mb-8 group-hover:w-16 transition-all duration-500" />

                <div className="text-nude mb-6">{s.icon}</div>

                <div className="flex-1 space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-navy">{s.title}</h3>
                  <span className="inline-block font-sans text-[10px] uppercase tracking-widest text-nude/80 border border-nude/30 px-2 py-0.5">
                    {s.tag}
                  </span>
                  <p className="font-sans text-sm text-navy/65 font-light leading-relaxed">{s.description}</p>
                </div>

                <div className="mt-8">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-navy/50 group-hover:text-nude transition-colors flex items-center gap-2">
                    Saber más
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1.5 transition-transform duration-300"
                    />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── TRANSPARENCIA BANNER ────────────────────────────────────────────────────
function Transparencia() {
  return (
    <section className="bg-navy py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <ShieldCheck size={20} strokeWidth={1.5} className="text-nude shrink-0" />
            <div className="h-px flex-1 bg-nude/20" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.05] text-balance mb-10">
            "Transparencia radical.<br />
            <em className="text-nude font-normal">Te decimos cuándo<br />NO aplicar</em> un procedimiento."
          </h2>
        </Reveal>

        <Reveal delay={350}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="h-px w-10 bg-nude mb-6" />
              <p className="font-sans text-sm text-cream/60 font-light leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuestro criterio médico está siempre por encima de cualquier objetivo comercial.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-serif text-base font-semibold text-cream">Dr. Steven Cuervo Parra</div>
              <div className="font-sans text-xs uppercase tracking-widest text-nude/80 mt-1">Director Médico — Sierva María Estética</div>
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
    <section id="equipo" className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-nude/20" />
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&auto=format&fit=crop"
                alt="Equipo médico"
                className="w-full h-[480px] object-cover relative z-10"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-nude">
                Nuestro Equipo
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy leading-tight">
                Personas antes<br />que procedimientos.
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="font-sans text-base text-navy/70 font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuestro equipo combina rigor científico con atención verdaderamente humana.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-nude/20">
                <div>
                  <div className="font-serif text-lg font-semibold text-navy">Dr. Steven Cuervo Parra</div>
                  <div className="font-sans text-xs uppercase tracking-widest text-nude mt-1">Director Médico</div>
                  <div className="font-sans text-xs text-navy/50 mt-1">Medicina Cirugía, Juan N. Corpas</div>
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold text-navy">Yensi García</div>
                  <div className="font-sans text-xs uppercase tracking-widest text-nude mt-1">Encargada Comercial</div>
                  <div className="font-sans text-xs text-navy/50 mt-1">Atención al paciente</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={450}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest text-navy border border-navy px-7 py-3.5 hover:bg-navy hover:text-cream transition-all duration-500 group"
              >
                Agenda tu valoración gratuita
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── CONTACTO ────────────────────────────────────────────────────────────────
function Contacto() {
  return (
    <section id="contacto" className="bg-[#F7EEE3] py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <Reveal>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-nude">Agenda Tu Cita</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy leading-tight">
                Valoración gratuita,<br /><em className="font-normal text-nude">sin compromiso.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-sans text-base text-navy/70 font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin reserva previa. Sin obligación de agendar después.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="space-y-3 text-sm text-navy/70 font-sans font-light">
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-nude shrink-0" />
                  <span>Sabana Park Torre 2, Consultorio 623 — Cajicá</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-nude shrink-0" />
                  <span>WhatsApp: +57 310 000 0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={14} className="text-nude shrink-0" />
                  <span>@siervamariastetica</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={200}>
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-widest text-navy/60 block mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-cream border border-nude/30 px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-nude transition-colors"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-widest text-navy/60 block mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+57"
                    className="w-full bg-cream border border-nude/30 px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-nude transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-[10px] uppercase tracking-widest text-navy/60 block mb-2">Tratamiento de interés</label>
                <select className="w-full bg-cream border border-nude/30 px-4 py-3 font-sans text-sm text-navy focus:outline-none focus:border-nude transition-colors appearance-none">
                  <option value="">Selecciona un tratamiento</option>
                  <option>Armonización Facial</option>
                  <option>Depilación Láser</option>
                  <option>Rejuvenecimiento & Skin Care</option>
                  <option>Otro / Consulta general</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-[10px] uppercase tracking-widest text-navy/60 block mb-2">Mensaje (opcional)</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos brevemente tu caso..."
                  className="w-full bg-cream border border-nude/30 px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-nude transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-cream font-sans text-xs font-semibold uppercase tracking-widest py-4 hover:bg-nude hover:text-navy transition-all duration-500"
              >
                Solicitar Valoración Gratuita
              </button>
              <p className="font-sans text-[10px] text-navy/40 text-center leading-relaxed">
                Al enviar, aceptas el tratamiento de datos personales. Sin reserva económica previa.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy text-cream px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-semibold tracking-widest">SIERVA MARÍA</div>
            <div className="w-10 h-10 border border-nude/40 flex items-center justify-center">
              <span className="font-serif text-nude font-bold text-lg">SM</span>
            </div>
            <p className="font-sans text-xs text-cream/50 font-light leading-relaxed">
              Medicina estética seria para todas las personas.
            </p>
            <div className="font-sans text-xs text-cream/50 flex items-start gap-2">
              <MapPin size={12} className="text-nude shrink-0 mt-0.5" />
              <span>Sabana Park Torre 2, Cons. 623<br />Cajicá, Cundinamarca</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-nude mb-6">Navegación</div>
            <ul className="space-y-3 text-xs text-cream/60 font-sans font-light">
              {['El Origen', 'Tratamientos', 'Nuestro Equipo', 'Valoración Gratuita', 'Tratamiento de Datos'].map(l => (
                <li key={l}>
                  <a href="#" className="hover:text-nude transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pagos */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-nude mb-6">Métodos de Pago</div>
            <div className="flex flex-wrap gap-2">
              {['Addi', 'Sistecrédito', 'Bancolombia', 'Nequi', 'Bre-B', 'Efectivo', 'Tarjeta'].map(m => (
                <span
                  key={m}
                  className="border border-white/15 px-3 py-1.5 font-sans text-[10px] uppercase tracking-wider text-cream/60 hover:border-nude/50 hover:text-nude transition-colors"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <div className="font-sans text-[10px] uppercase tracking-widest text-nude mb-3">Síguenos</div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/60 hover:text-nude transition-colors"
              >
                <Instagram size={14} strokeWidth={1.5} />
                <span className="font-sans text-xs">@siervamariastetica</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-cream/30 uppercase tracking-widest">
            © 2026 Sierva María Estética — Cajicá
          </p>
          <p className="font-sans text-[10px] text-nude/60 uppercase tracking-widest">
            Prototipo 1 — Editorial & Storytelling
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-cream text-navy overflow-x-hidden">
      <Navbar />
      <Hero />
      <Origen />
      <Servicios />
      <Transparencia />
      <Equipo />
      <Contacto />
      <Footer />
    </div>
  )
}
