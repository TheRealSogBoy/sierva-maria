import React, { useState, useEffect, useRef } from 'react'
import {
  ShieldCheck, CheckCircle2, CreditCard, MapPin, Phone,
  Instagram, Menu, X, ArrowRight, Sparkles, Zap, Droplets,
  BadgeCheck, Calendar, FileText, Star, ChevronRight, Clock
} from 'lucide-react'

// ══════════════════════════════════════════════════════════════════════════════
// LOGO SVG — Real brand mark, currentColor for dynamic theming
// ══════════════════════════════════════════════════════════════════════════════
function SiervaLogo({ size = 36, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1254 1254"
      width={size}
      height={size}
      className={className}
      aria-label="Sierva María Estética"
      role="img"
    >
      <g transform="translate(0,1254) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M6285 10704 c-648 -63 -1215 -358 -1528 -795 -71 -99 -172 -293 -205 -394 -46 -137 -76 -352 -67 -465 42 -505 245 -813 825 -1249 470 -354 712 -618 886 -964 131 -260 184 -480 184 -765 0 -313 -57 -559 -195 -849 -35 -73 -60 -133 -55 -133 4 0 33 31 64 69 266 325 415 787 376 1171 -19 195 -58 350 -133 527 -145 342 -419 678 -807 988 -285 227 -402 327 -500 426 -299 301 -432 652 -391 1031 39 359 238 694 571 959 181 144 475 282 740 348 361 88 831 76 1153 -30 82 -27 94 -22 17 7 -170 66 -308 97 -522 119 -172 18 -224 17 -413 -1z"/>
        <path d="M9047 8698 c-16 -26 -180 -313 -318 -558 -233 -414 -534 -949 -649 -1156 -37 -66 -101 -179 -142 -250 -41 -71 -107 -187 -146 -259 -40 -71 -80 -141 -91 -154 l-18 -24 -80 154 c-44 85 -160 312 -258 504 -304 599 -486 956 -543 1065 -166 319 -322 472 -547 537 -60 17 -335 30 -320 15 6 -5 28 -15 50 -22 145 -46 329 -189 449 -350 109 -147 157 -232 428 -768 121 -240 328 -647 460 -904 213 -417 237 -470 227 -490 -20 -37 -158 -237 -233 -338 -404 -542 -884 -889 -1423 -1030 -178 -47 -324 -64 -528 -64 -306 1 -534 52 -780 174 -277 137 -471 321 -586 557 -73 151 -92 230 -92 393 -1 148 12 218 64 355 98 256 304 478 549 593 149 69 219 84 420 90 173 5 182 6 135 18 -124 30 -364 9 -529 -48 -310 -106 -577 -354 -693 -643 -212 -527 35 -1068 623 -1366 112 -57 283 -122 377 -143 176 -40 268 -50 487 -50 202 0 239 3 360 27 134 26 306 75 408 116 85 34 291 138 361 181 34 22 64 40 66 40 6 0 106 69 167 116 271 209 511 471 770 840 20 28 71 107 114 175 73 117 116 190 322 554 76 134 148 261 222 390 29 52 166 292 195 344 12 20 33 56 47 81 38 67 276 485 297 524 11 18 40 67 65 109 25 41 46 79 46 82 0 4 15 30 32 57 30 45 33 48 38 26 3 -12 3 -574 0 -1248 -5 -1151 -6 -1227 -23 -1265 -10 -22 -28 -51 -40 -64 -27 -29 -92 -60 -132 -62 -18 -1 -9 -5 25 -9 73 -10 579 -11 605 -1 15 6 9 10 -30 15 -94 15 -140 57 -169 156 -15 50 -17 195 -17 1528 0 809 -2 1472 -5 1472 -2 0 -10 -10 -17 -22z"/>
        <path d="M1159 3766 c-103 -22 -169 -97 -169 -192 0 -102 54 -160 235 -252 58 -30 117 -69 140 -92 39 -40 40 -43 40 -110 0 -61 -3 -72 -30 -106 -40 -48 -92 -67 -171 -61 -96 7 -177 65 -216 154 -12 26 -13 24 -16 -37 -4 -74 -1 -78 85 -110 80 -30 239 -28 300 2 126 63 168 199 94 308 -32 48 -80 82 -211 150 -124 64 -171 111 -178 178 -9 102 50 162 160 162 47 0 71 -6 103 -24 40 -24 95 -89 95 -113 0 -7 5 -15 10 -18 6 -4 10 16 10 54 0 57 -2 61 -31 76 -26 14 -167 47 -187 44 -4 0 -32 -6 -63 -13z"/>
        <path d="M1938 3763 c-21 -5 -23 -14 -7 -30 9 -9 12 -117 13 -376 1 -346 0 -366 -18 -386 l-19 -21 78 0 c75 0 77 1 61 18 -14 17 -16 59 -18 387 -1 366 -1 368 20 386 12 9 22 20 22 23 0 7 -106 6 -132 -1z"/>
        <path d="M2582 3762 c-23 -4 -23 -4 -5 -24 17 -19 18 -45 18 -385 l0 -365 -24 -19 c-23 -19 -20 -19 257 -19 l281 0 7 38 c3 20 10 55 14 77 5 22 8 41 6 42 -1 1 -18 -21 -37 -49 -52 -79 -86 -92 -250 -96 -117 -4 -138 -2 -152 13 -15 14 -17 41 -17 200 0 137 3 185 13 189 10 5 10 7 0 12 -10 4 -13 52 -13 190 l0 184 118 0 c64 0 135 -5 157 -11 41 -12 105 -69 105 -95 0 -8 4 -13 9 -10 9 6 3 107 -8 117 -7 8 -442 17 -479 11z"/>
        <path d="M3608 3763 c-15 -4 -15 -7 -2 -39 12 -29 14 -96 12 -384 -3 -326 -4 -349 -22 -369 l-19 -21 76 0 76 0 -15 28 c-10 20 -14 69 -14 195 l0 167 69 0 c51 0 74 -4 89 -17 10 -10 57 -79 103 -153 129 -208 162 -236 274 -228 l50 3 -45 21 c-52 24 -91 65 -157 167 -26 40 -69 102 -95 140 -26 37 -48 71 -48 77 0 5 18 14 40 20 104 28 168 155 129 257 -25 67 -108 122 -193 129 -90 6 -290 11 -308 7z m319 -41 c114 -59 129 -238 28 -332 -24 -23 -35 -25 -141 -29 l-114 -3 0 197 0 197 93 -4 c69 -3 103 -10 134 -26z"/>
        <path d="M4532 3763 l-43 -4 36 -41 c19 -23 35 -45 35 -50 0 -5 16 -43 34 -86 19 -42 78 -176 130 -297 135 -314 145 -335 155 -335 4 0 30 51 56 113 26 61 58 135 71 164 13 28 24 55 24 59 0 4 9 25 20 48 31 65 80 184 80 193 0 4 7 22 16 38 9 17 25 53 35 82 12 30 35 65 55 82 l35 31 -60 0 -59 0 14 -30 c14 -28 13 -35 -30 -142 -46 -114 -80 -197 -137 -330 -17 -40 -37 -94 -45 -120 -13 -41 -39 -78 -47 -67 -2 2 -16 33 -31 69 -16 36 -37 83 -46 105 -111 250 -190 446 -190 467 0 15 5 30 12 34 8 5 6 10 -8 15 -20 8 -39 8 -112 2z"/>
        <path d="M7751 3757 c-6 -7 -78 -161 -160 -342 -82 -181 -153 -331 -158 -332 -5 -2 -49 81 -98 184 -49 104 -121 257 -161 341 l-73 152 -62 0 -62 0 24 -26 24 -26 0 -336 c0 -359 -4 -388 -48 -410 -17 -8 -5 -11 58 -11 62 0 75 3 59 11 -12 5 -27 21 -33 34 -14 33 -27 654 -13 654 14 0 31 -30 101 -185 35 -77 99 -213 142 -302 42 -89 80 -171 84 -183 15 -48 30 -24 146 235 131 293 207 455 214 455 3 0 5 -151 5 -335 l0 -336 -25 -24 -24 -25 97 1 c64 0 90 3 76 9 -40 16 -44 56 -44 402 0 275 2 334 15 358 9 17 20 30 26 30 6 0 7 5 4 10 -9 15 -101 12 -114 -3z"/>
        <path d="M9342 3762 c-31 -3 -32 -4 -17 -25 13 -18 15 -76 15 -382 0 -372 -1 -384 -40 -398 -8 -3 25 -6 74 -6 84 -1 88 0 74 17 -12 13 -17 55 -21 179 -4 90 -4 170 -1 178 5 11 23 15 75 15 80 0 69 10 193 -187 111 -176 167 -220 271 -211 l40 3 -46 21 c-25 12 -61 41 -81 65 -40 50 -218 313 -218 322 0 3 19 12 43 18 131 38 182 214 90 312 -44 46 -100 70 -173 73 -129 7 -246 9 -278 6z m308 -38 c19 -11 48 -39 65 -63 27 -38 30 -51 30 -114 0 -62 -4 -78 -27 -110 -42 -62 -60 -70 -177 -77 -58 -3 -108 -5 -110 -4 -6 5 -10 377 -4 387 3 5 46 8 97 5 69 -3 101 -9 126 -24z"/>
        <path d="M10418 3763 c-25 -4 -26 -5 -12 -31 11 -22 14 -95 14 -372 0 -190 -3 -355 -6 -366 -3 -12 -15 -26 -27 -32 -17 -8 -4 -11 61 -11 l83 -1 -15 22 c-23 33 -24 714 -1 758 13 25 13 29 -1 34 -16 6 -50 6 -96 -1z"/>
        <path d="M11262 3758 c-6 -6 -12 -16 -12 -20 0 -8 -241 -577 -287 -678 -28 -62 -49 -89 -78 -101 -13 -5 5 -8 53 -8 l72 -1 -21 21 c-15 15 -19 28 -15 47 10 40 98 246 108 250 4 2 8 12 8 22 0 23 124 323 142 344 11 13 34 -20 48 -69 6 -22 34 -91 61 -154 27 -63 48 -119 46 -125 -2 -6 2 -15 8 -21 11 -9 93 -198 109 -252 5 -15 1 -28 -13 -42 l-21 -21 98 0 c90 1 95 2 71 15 -26 14 -104 187 -275 605 -66 161 -88 202 -102 188z"/>
        <path d="M5750 3613 c-34 -81 -93 -222 -131 -313 -124 -296 -138 -321 -184 -340 -13 -6 6 -9 55 -9 56 0 70 2 58 10 -35 20 -16 100 61 264 16 33 51 119 79 190 66 169 91 225 101 225 5 0 19 -26 31 -57 13 -32 45 -111 72 -176 28 -65 47 -121 44 -124 -3 -3 0 -11 8 -17 8 -6 25 -40 39 -76 14 -36 35 -85 46 -110 26 -56 27 -105 4 -119 -13 -8 9 -10 82 -10 75 0 95 3 79 10 -11 6 -33 34 -47 63 -27 53 -158 360 -202 471 -45 115 -112 259 -122 262 -6 2 -39 -63 -73 -144z"/>
        <path d="M8544 3684 c-19 -41 -34 -78 -34 -81 0 -3 -16 -42 -36 -87 -37 -85 -54 -125 -102 -241 -117 -281 -121 -288 -161 -310 -25 -13 -22 -14 43 -15 66 0 68 1 53 18 -10 10 -17 25 -17 33 0 17 30 98 72 197 27 63 34 72 57 73 25 0 25 1 4 9 -26 10 -25 14 42 170 20 47 45 109 56 138 11 28 24 52 28 52 9 0 29 -44 101 -217 27 -68 50 -129 50 -137 0 -8 4 -16 8 -18 10 -4 112 -248 112 -267 0 -8 -7 -23 -17 -33 -15 -17 -13 -18 74 -18 l90 0 -33 36 c-19 19 -34 39 -34 44 0 7 -182 446 -282 683 -12 26 -25 47 -30 47 -5 0 -25 -34 -44 -76z"/>
      </g>
    </svg>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// Scroll-reveal hook
// ══════════════════════════════════════════════════════════════════════════════
function useInView(threshold = 0.1) {
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

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, v] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// A. HEADER INSTITUCIONAL
// ══════════════════════════════════════════════════════════════════════════════
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Inicio', 'Tratamientos', 'Director Médico', 'Valoración']
  const hrefs = ['#inicio', '#tratamientos', '#director', '#contacto']

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#FDF6EE] transition-all duration-300 ${scrolled ? 'border-b border-[#C4A882]/30 shadow-sm' : 'border-b border-[#C4A882]/15'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <SiervaLogo
            size={34}
            className="text-[#1A1A2E] group-hover:text-[#C4A882] transition-colors duration-400"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-[15px] font-semibold text-[#1A1A2E] tracking-wide">Sierva María</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#C4A882] mt-0.5">Estética</span>
          </div>
        </a>

        {/* Desktop Nav — Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l, i) => (
            <a
              key={l}
              href={hrefs[i]}
              className="font-sans text-[11px] font-medium uppercase tracking-widest text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors duration-200 relative group pb-0.5"
            >
              {l}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C4A882] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="bg-[#C4A882] text-[#1A1A2E] font-sans text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-[#b3956e] transition-colors duration-300"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#1A1A2E] p-1" aria-label="Menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="border-t border-[#C4A882]/20 px-6 py-5 bg-[#FDF6EE] space-y-3.5">
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} onClick={() => setOpen(false)}
              className="block font-sans text-[11px] uppercase tracking-widest text-[#1A1A2E]/70 hover:text-[#1A1A2E] py-1">
              {l}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="block bg-[#C4A882] text-[#1A1A2E] text-[11px] font-bold uppercase tracking-widest px-5 py-3 text-center">
            Agendar Cita
          </a>
        </div>
      </div>
    </header>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// B. HERO — Confianza Médica
// ══════════════════════════════════════════════════════════════════════════════
function Hero() {
  const [ready, setReady] = useState(false)
  useEffect(() => { setTimeout(() => setReady(true), 100) }, [])

  return (
    <section id="inicio" className="pt-16 bg-[#FDF6EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[92vh] items-stretch">

          {/* Left — Copy */}
          <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16 border-r-0 lg:border-r border-[#C4A882]/15">

            <div className={`transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-[#C4A882] rounded-full" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-[#C4A882]">
                  Medicina Estética Seria y Segura
                </span>
              </div>
            </div>

            <div className={`transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '250ms' }}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A1A2E] leading-[1.1] mb-7 text-balance">
                Resultados naturales<br />basados en criterio<br />
                <em className="font-normal italic text-[#C4A882]">médico.</em>
              </h1>
            </div>

            <div className={`transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '400ms' }}>
              <p className="font-sans text-base text-[#1A1A2E]/65 font-light leading-relaxed mb-10 max-w-md">
                En Sierva María Estética nos importa que te veas bien, pero nos importa más que estés seguro. Atención clínica especializada en Cajicá.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '550ms' }}>
              <a href="#contacto"
                className="group bg-[#1A1A2E] text-[#FDF6EE] font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-400 flex items-center justify-center gap-3">
                Valoración Médica Gratuita
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#tratamientos"
                className="border border-[#C4A882] text-[#C4A882] font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-400 text-center">
                Conoce los tratamientos
              </a>
            </div>

            {/* Mini trust strip */}
            <div className={`flex flex-wrap gap-6 mt-12 pt-8 border-t border-[#C4A882]/20 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
              {[
                { icon: <ShieldCheck size={14} strokeWidth={1.5} />, label: 'Médico certificado' },
                { icon: <CheckCircle2 size={14} strokeWidth={1.5} />, label: 'Control a los 15 días' },
                { icon: <Star size={14} strokeWidth={1.5} />, label: 'Valoración sin costo' },
              ].map(t => (
                <div key={t.label} className="flex items-center gap-2">
                  <span className="text-[#C4A882]">{t.icon}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A2E]/55">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className={`relative hidden lg:block transition-all duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85&auto=format&fit=crop"
              alt="Clínica Sierva María Estética"
              className="w-full h-full object-cover"
              style={{ minHeight: '92vh' }}
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6EE]/30 to-transparent pointer-events-none" />
            {/* Floating credential chip */}
            <div className="absolute top-10 right-10 bg-[#FDF6EE]/95 backdrop-blur-sm border border-[#C4A882]/25 px-5 py-3.5 shadow-sm">
              <div className="font-sans text-[9px] uppercase tracking-widest text-[#C4A882] mb-0.5">Registro RETHUS</div>
              <div className="font-serif text-sm font-semibold text-[#1A1A2E]">1012356273</div>
            </div>
            {/* Bottom info chip */}
            <div className="absolute bottom-10 left-10 right-10 bg-[#1A1A2E]/90 backdrop-blur-sm px-6 py-4">
              <div className="flex items-center gap-4">
                <ShieldCheck size={18} strokeWidth={1.5} className="text-[#C4A882] shrink-0" />
                <div>
                  <div className="font-serif text-sm font-semibold text-[#FDF6EE]">Procedimientos con consentimiento informado</div>
                  <div className="font-sans text-[10px] text-[#FDF6EE]/55 mt-0.5 uppercase tracking-wider">Seguridad médica ante todo</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// C. AUTORIDAD MÉDICA — Dr. Steven Cuervo Parra
// ══════════════════════════════════════════════════════════════════════════════
function DirectorMedico() {
  const credentials = [
    { icon: <BadgeCheck size={16} strokeWidth={1.5} />, text: 'Médico y Cirujano General', sub: 'Universidad Juan N. Corpas' },
    { icon: <FileText size={16} strokeWidth={1.5} />, text: 'Registro RETHUS: 1012356273', sub: 'Certificado ante el Ministerio de Salud' },
    { icon: <ShieldCheck size={16} strokeWidth={1.5} />, text: 'Diplomado en Sustancias Modelantes', sub: 'Aplicación de inyectables con criterio clínico' },
    { icon: <CheckCircle2 size={16} strokeWidth={1.5} />, text: 'Control post-procedimiento incluido', sub: 'Seguimiento médico a los 15 días' },
  ]

  return (
    <section id="director" className="bg-[#F7EEE3] py-24 md:py-32 px-6 lg:px-10 border-y border-[#C4A882]/15">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-10 bg-[#C4A882]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882]">Autoridad Médica</span>
            <div className="h-px flex-1 bg-[#C4A882]/20" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Photo */}
          <Reveal className="lg:col-span-4" delay={0}>
            <div className="relative">
              {/* Decorative offset border */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C4A882]/30 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop"
                alt="Dr. Steven Cuervo Parra"
                className="w-full object-cover relative z-10"
                style={{ height: '480px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#1A1A2E] px-6 py-4">
                <div className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#C4A882] mb-0.5">Director Médico</div>
                <div className="font-serif text-base font-semibold text-[#FDF6EE]">Dr. Steven Cuervo Parra</div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal delay={100}>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#C4A882] block mb-3">
                  Director Médico
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E] leading-tight mb-5">
                  Dr. Steven<br />Cuervo Parra
                </h2>
                <p className="font-sans text-base text-[#1A1A2E]/65 font-light leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Médico con formación clínica sólida y profundo compromiso ético con cada paciente. Su criterio médico está siempre por encima de cualquier objetivo comercial.
                </p>
              </div>
            </Reveal>

            {/* Credentials */}
            <Reveal delay={200}>
              <div className="space-y-4">
                <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-5">
                  Credenciales y Certificaciones
                </div>
                {credentials.map((c, i) => (
                  <div key={i} className="credential-bar pl-5 flex items-start gap-4 py-1">
                    <span className="text-[#C4A882] mt-0.5 shrink-0">{c.icon}</span>
                    <div>
                      <div className="font-sans text-sm font-semibold text-[#1A1A2E]">{c.text}</div>
                      <div className="font-sans text-xs text-[#1A1A2E]/50 font-light mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="pt-6 border-t border-[#C4A882]/20">
                <blockquote className="font-serif text-xl italic text-[#1A1A2E]/80 leading-relaxed">
                  "La transparencia es parte del protocolo. Si un procedimiento no es indicado para ti, te lo decimos."
                </blockquote>
                <div className="mt-3 font-sans text-[10px] uppercase tracking-widest text-[#C4A882]">
                  — Dr. Cuervo Parra, Director Médico
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// D. TRATAMIENTOS — Grid simétrico 3 columnas
// ══════════════════════════════════════════════════════════════════════════════
const tratamientos = [
  {
    number: '01',
    icon: <Sparkles size={24} strokeWidth={1} />,
    title: 'Armonización Facial',
    tag: 'Inyectables',
    items: [
      'Evaluación facial previa obligatoria',
      'Productos con registro Invima',
      'Control médico a los 15 días incluido',
      'Protocolo de seguridad estricto',
    ],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Equilibrio natural del rostro bajo supervisión clínica certificada.',
  },
  {
    number: '02',
    icon: <Zap size={24} strokeWidth={1} />,
    title: 'Depilación Láser',
    tag: 'Tecnología Avanzada',
    items: [
      'Todos los fototipos de piel',
      'Equipos certificados y seguros',
      'Protocolo personalizado por zona',
      'Seguimiento post-sesión',
    ],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecnología de punta con criterio médico en cada sesión.',
  },
  {
    number: '03',
    icon: <Droplets size={24} strokeWidth={1} />,
    title: 'Cuidado Preventivo',
    tag: 'Dejuvent',
    items: [
      'Hidratación profunda certificada',
      'Tratamiento regenerador',
      'Protocolos anti-envejecimiento',
      'Diagnóstico de piel incluido',
    ],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prevención y cuidado a largo plazo de tu piel.',
  },
]

function Tratamientos() {
  return (
    <section id="tratamientos" className="bg-[#1A1A2E] py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
            <div>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882] block mb-3">
                Protocolos y Tratamientos
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FDF6EE] leading-tight">
                Nuestra práctica<br />
                <em className="font-normal text-[#C4A882]">médica.</em>
              </h2>
            </div>
            <p className="font-sans text-sm text-[#FDF6EE]/45 font-light max-w-xs leading-relaxed">
              Cada procedimiento respaldado por criterio clínico y consentimiento informado.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {tratamientos.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group bg-[#1A1A2E] border border-white/8 p-8 lg:p-10 flex flex-col h-full hover:bg-[#1e1e38] transition-colors duration-400 hover:border-[#C4A882]/30">

                {/* Number + icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-sans text-4xl font-bold text-white/8 leading-none select-none">{t.number}</span>
                  <span className="text-[#C4A882] group-hover:scale-110 transition-transform duration-300">{t.icon}</span>
                </div>

                {/* Tag */}
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882]/70 border border-[#C4A882]/25 px-3 py-1 self-start mb-5">
                  {t.tag}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-[#FDF6EE] mb-4">{t.title}</h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#FDF6EE]/50 font-light leading-relaxed mb-7">{t.desc}</p>

                {/* Protocol items */}
                <div className="mt-auto space-y-2.5 pt-7 border-t border-white/8">
                  {t.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={13} strokeWidth={1.5} className="text-[#C4A882] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-[#FDF6EE]/55 font-light">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#contacto"
                  className="mt-8 flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-[#C4A882] group-hover:gap-3 transition-all duration-300">
                  Agendar
                  <ArrowRight size={12} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// E. TRUST BADGES — Transparencia y Accesibilidad
// ══════════════════════════════════════════════════════════════════════════════
function TrustBadges() {
  const badges = [
    {
      icon: <MapPin size={22} strokeWidth={1.2} />,
      title: 'Ubicación Premium',
      desc: 'Sabana Park Torre 2, Consultorio 623',
      detail: 'Cajicá, Cundinamarca',
    },
    {
      icon: <CreditCard size={22} strokeWidth={1.2} />,
      title: 'Múltiples medios de pago',
      desc: 'Efectivo, Nequi, Bancolombia, Tarjeta',
      detail: 'Sin recargos adicionales',
    },
    {
      icon: <ShieldCheck size={22} strokeWidth={1.2} />,
      title: 'Financiación disponible',
      desc: 'Addi y Sistecrédito',
      detail: 'Aprobación en minutos',
    },
    {
      icon: <Calendar size={22} strokeWidth={1.2} />,
      title: 'Control post-procedimiento',
      desc: 'Revisión médica a los 15 días',
      detail: 'Sin costo adicional',
    },
  ]

  return (
    <section className="bg-[#FDF6EE] py-20 md:py-24 px-6 lg:px-10 border-t border-[#C4A882]/15">
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="text-center mb-14">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882] block mb-3">
              Transparencia y Accesibilidad
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
              Todo lo que necesitas saber antes de tu cita.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C4A882]/15">
          {badges.map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-[#FDF6EE] p-8 text-center group hover:bg-[#F7EEE3] transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1A1A2E] text-[#C4A882] mb-5 group-hover:bg-[#C4A882] group-hover:text-[#1A1A2E] transition-all duration-300">
                  {b.icon}
                </div>
                <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#C4A882] mb-2">{b.title}</div>
                <div className="font-serif text-base font-semibold text-[#1A1A2E] mb-1">{b.desc}</div>
                <div className="font-sans text-xs text-[#1A1A2E]/45 font-light">{b.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTACTO
// ══════════════════════════════════════════════════════════════════════════════
function Contacto() {
  return (
    <section id="contacto" className="bg-[#F7EEE3] py-24 md:py-32 px-6 lg:px-10 border-t border-[#C4A882]/15">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-8">
            <Reveal>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4A882] block mb-4">
                  Agenda tu valoración
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E] leading-tight mb-5">
                  Valoración médica<br />
                  <em className="font-normal text-[#C4A882]">100% gratuita.</em>
                </h2>
                <p className="font-sans text-base text-[#1A1A2E]/65 font-light leading-relaxed max-w-sm">
                  Sin reserva económica previa. Sin compromiso. Una conversación honesta sobre lo que necesitas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-4 pt-4 border-t border-[#C4A882]/20">
                {[
                  { icon: <MapPin size={14} />, label: 'Sabana Park Torre 2, Cons. 623 — Cajicá' },
                  { icon: <Phone size={14} />, label: 'WhatsApp: Yensi García — +57 310 000 0000' },
                  { icon: <Instagram size={14} />, label: '@siervamariastetica' },
                  { icon: <Clock size={14} />, label: 'Lun – Sáb: 8:00 am – 6:00 pm' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-sans text-sm text-[#1A1A2E]/65 font-light">
                    <span className="text-[#C4A882] shrink-0">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={250}>
              <a href="https://wa.me/573100000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1A1A2E] text-[#FDF6EE] font-sans text-[11px] font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-400 group">
                Escribir por WhatsApp
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={200}>
            <form onSubmit={e => e.preventDefault()} className="space-y-4 bg-[#FDF6EE] border border-[#C4A882]/20 p-8">

              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A2E]/40 pb-4 border-b border-[#C4A882]/15">
                Formulario de valoración gratuita
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[['Nombre completo', 'text', 'Tu nombre'], ['Teléfono / WhatsApp', 'tel', '+57']].map(([lbl, t, ph]) => (
                  <div key={lbl}>
                    <label className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A2E]/50 block mb-1.5">{lbl}</label>
                    <input type={t} placeholder={ph}
                      className="w-full bg-[#F7EEE3] border border-[#C4A882]/25 px-4 py-3 font-sans text-sm text-[#1A1A2E] placeholder:text-[#1A1A2E]/25 focus:outline-none focus:border-[#C4A882] transition-colors" />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A2E]/50 block mb-1.5">Tratamiento de interés</label>
                <select className="w-full bg-[#F7EEE3] border border-[#C4A882]/25 px-4 py-3 font-sans text-sm text-[#1A1A2E] focus:outline-none focus:border-[#C4A882] transition-colors appearance-none">
                  <option value="">Selecciona un tratamiento</option>
                  <option>Armonización Facial</option>
                  <option>Depilación Láser</option>
                  <option>Cuidado Preventivo / Dejuvent</option>
                  <option>Otro / Consulta General</option>
                </select>
              </div>

              <div>
                <label className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A2E]/50 block mb-1.5">Motivo de consulta</label>
                <textarea rows={4} placeholder="Cuéntanos brevemente qué resultado esperas..."
                  className="w-full bg-[#F7EEE3] border border-[#C4A882]/25 px-4 py-3 font-sans text-sm text-[#1A1A2E] placeholder:text-[#1A1A2E]/25 focus:outline-none focus:border-[#C4A882] transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-[#1A1A2E] text-[#FDF6EE] font-sans text-[11px] font-bold uppercase tracking-widest py-4 hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-400">
                Solicitar Valoración Gratuita
              </button>

              <p className="font-sans text-[10px] text-[#1A1A2E]/35 text-center leading-relaxed pt-1">
                Datos protegidos conforme a Ley 1581 de 2012 (Habeas Data).
              </p>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// F. FOOTER CORPORATIVO — 4 columnas
// ══════════════════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-[#1A1A2E] px-6 lg:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Col 1 — Brand + Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <SiervaLogo size={38} className="text-[#FDF6EE]" />
              <div>
                <div className="font-serif text-base font-semibold text-[#FDF6EE] tracking-wide">Sierva María</div>
                <div className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#C4A882] mt-0.5">Estética</div>
              </div>
            </div>
            <p className="font-sans text-xs text-[#FDF6EE]/40 font-light leading-relaxed">
              Medicina estética seria para todas las personas. Cajicá, Cundinamarca.
            </p>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882]/70 border border-[#C4A882]/25 px-3 py-1.5 inline-block">
              RETHUS: 1012356273
            </div>
          </div>

          {/* Col 2 — Navegación */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-6 pb-3 border-b border-white/8">
              Navegación
            </div>
            <ul className="space-y-3 font-sans text-xs text-[#FDF6EE]/45 font-light">
              {['Inicio', 'Tratamientos', 'Director Médico', 'Valoración Gratuita', 'Habeas Data', 'Política de Datos'].map(l => (
                <li key={l}>
                  <a href="#" className="hover:text-[#C4A882] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-6 pb-3 border-b border-white/8">
              Contacto
            </div>
            <div className="space-y-4 font-sans text-xs text-[#FDF6EE]/45 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin size={11} className="text-[#C4A882] shrink-0 mt-0.5" />
                <span>Sabana Park Torre 2, Cons. 623<br />Cajicá, Cundinamarca</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={11} className="text-[#C4A882] shrink-0" />
                <span>Yensi García — +57 310 000 0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram size={11} className="text-[#C4A882] shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#C4A882] transition-colors">
                  @siervamariastetica
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 — Pagos */}
          <div>
            <div className="font-sans text-[10px] uppercase tracking-widest text-[#C4A882] mb-6 pb-3 border-b border-white/8">
              Formas de Pago
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {['Addi', 'Sistecrédito', 'Nequi', 'Bancolombia', 'Bre-B', 'Efectivo', 'Tarjeta'].map(m => (
                <span key={m}
                  className="font-sans text-[10px] uppercase tracking-wider text-[#FDF6EE]/40 border border-white/10 px-2.5 py-1 hover:border-[#C4A882]/40 hover:text-[#C4A882] transition-colors cursor-default">
                  {m}
                </span>
              ))}
            </div>
            <a href="#contacto"
              className="flex items-center gap-2 bg-[#C4A882] text-[#1A1A2E] font-sans text-[10px] font-bold uppercase tracking-widest px-5 py-3 hover:bg-white transition-colors duration-300 group w-full justify-center mt-4">
              Agendar ahora
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-sans uppercase tracking-widest">
          <span className="text-[#FDF6EE]/20">© 2026 Sierva María Estética — Cajicá, Colombia</span>
          <div className="flex items-center gap-5 text-[#FDF6EE]/20">
            <a href="#" className="hover:text-[#C4A882] transition-colors">Habeas Data</a>
            <a href="#" className="hover:text-[#C4A882] transition-colors">Política de Privacidad</a>
            <span className="text-[#C4A882]/30">Prototipo 3 — Institucional</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  return (
    <div className="bg-[#FDF6EE] text-[#1A1A2E] overflow-x-hidden">
      <Header />
      <Hero />
      <DirectorMedico />
      <Tratamientos />
      <TrustBadges />
      <Contacto />
      <Footer />
    </div>
  )
}
