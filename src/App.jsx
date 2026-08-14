import React, { useState, useEffect, useRef } from 'react'
import {
  ShieldCheck, CheckCircle2, CreditCard, MapPin, Phone,
  Instagram, Menu, X, ArrowRight, ArrowDown, Sparkles, Zap,
  Droplets, BadgeCheck, Calendar, FileText, Star, Clock,
  AlertTriangle, Check, HeartHandshake, UserCheck, MessageSquare,
  Navigation, Award, ChevronRight, Info, Layers, Flame, Tag,
  HelpCircle, Activity, Sparkle
} from 'lucide-react'

import doctorImg from './assets/doctor-steven.webp'
import armonizacionImg from './assets/armonizacion-facial.webp'
import laserImg from './assets/depilacion-laser.webp'

// ══════════════════════════════════════════════════════════════════════════════
// LOGO SVG — Monograma "SM" Oficial de la marca con fill="currentColor"
// ══════════════════════════════════════════════════════════════════════════════
function SiervaLogo({ size = 40, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1254 1254"
      width={size}
      height={size}
      className={className}
      aria-label="Sierva María - Belleza y Armonización Facial"
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
// ICONO SVG — Monograma SM limpio
// ══════════════════════════════════════════════════════════════════════════════
function SiervaIcon({ size = 40, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 583 638"
      width={size}
      height={size}
      className={className}
      aria-label="Sierva María"
      role="img"
    >
      <g transform="translate(0,638) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M2675 6274 c-648 -63 -1215 -358 -1528 -795 -71 -99 -172 -293 -205 -394 -46 -137 -76 -352 -67 -465 42 -505 245 -813 825 -1249 470 -354 712 -618 886 -964 131 -260 184 -480 184 -765 0 -313 -57 -559 -195 -849 -35 -73 -60 -133 -55 -133 4 0 33 31 64 69 266 325 415 787 376 1171 -19 195 -58 350 -133 527 -145 342 -419 678 -807 988 -285 227 -402 327 -500 426 -299 301 -432 652 -391 1031 39 359 238 694 571 959 181 144 475 282 740 348 361 88 831 76 1153 -30 82 -27 94 -22 17 7 -170 66 -308 97 -522 119 -172 18 -224 17 -413 -1z"/>
        <path d="M5437 4268 c-16 -26 -180 -313 -318 -558 -233 -414 -534 -949 -649 -1156 -37 -66 -101 -179 -142 -250 -41 -71 -107 -187 -146 -259 -40 -71 -80 -141 -91 -154 l-18 -24 -80 154 c-44 85 -160 312 -258 504 -304 599 -486 956 -543 1065 -166 319 -322 472 -547 537 -60 17 -335 30 -320 15 6 -5 28 -15 50 -22 145 -46 329 -189 449 -350 109 -147 157 -232 428 -768 121 -240 328 -647 460 -904 213 -417 237 -470 227 -490 -20 -37 -158 -237 -233 -338 -404 -542 -884 -889 -1423 -1030 -178 -47 -324 -64 -528 -64 -306 1 -534 52 -780 174 -277 137 -471 321 -586 557 -73 151 -92 230 -92 393 -1 148 12 218 64 355 98 256 304 478 549 593 149 69 219 84 420 90 173 5 182 6 135 18 -124 30 -364 9 -529 -48 -310 -106 -577 -354 -693 -643 -212 -527 35 -1068 623 -1366 112 -57 283 -122 377 -143 176 -40 268 -50 487 -50 202 0 239 3 360 27 134 26 306 75 408 116 85 34 291 138 361 181 34 22 64 40 66 40 6 0 106 69 167 116 271 209 511 471 770 840 20 28 71 107 114 175 73 117 116 190 322 554 76 134 148 261 222 390 29 52 166 292 195 344 12 20 33 56 47 81 38 67 276 485 297 524 11 18 40 67 65 109 25 41 46 79 46 82 0 4 15 30 32 57 30 45 33 48 38 26 3 -12 3 -574 0 -1248 -5 -1151 -6 -1227 -23 -1265 -10 -22 -28 -51 -40 -64 -27 -29 -92 -60 -132 -62 -18 -1 -9 -5 25 -9 73 -10 579 -11 605 -1 15 6 9 10 -30 15 -94 15 -140 57 -169 156 -15 50 -17 195 -17 1528 0 809 -2 1472 -5 1472 -2 0 -10 -10 -17 -22z"/>
      </g>
    </svg>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// Scroll Reveal Hook
// ══════════════════════════════════════════════════════════════════════════════
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

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, v] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// FLOATING NAVBAR (Multipágina con navegación fluida)
// ══════════════════════════════════════════════════════════════════════════════
function Navbar({ activeRoute, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navItems = [
    { key: 'home', label: 'Inicio', target: 'home' },
    { key: 'armonizacion', label: 'Armonización Facial', target: 'armonizacion' },
    { key: 'laser', label: 'Depilación Láser', target: 'laser' },
    { key: 'nosotros', label: 'Nosotros', target: 'nosotros' },
    { key: 'contacto', label: 'Contacto', target: 'contacto' },
  ]

  const handleNavClick = (item, e) => {
    e.preventDefault()
    setMobileOpen(false)
    if (item.target === 'armonizacion' || item.target === 'laser' || item.target === 'home') {
      onNavigate(item.target)
    } else if (item.target === 'nosotros' || item.target === 'contacto') {
      if (activeRoute !== 'home') {
        onNavigate('home', item.target)
      } else {
        const el = document.getElementById(item.target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-7 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1A2E]/98 shadow-2xl shadow-black/30 px-7 py-3 rounded-full border border-white/10 scale-100'
          : 'bg-[#1A1A2E]/90 backdrop-blur-xl px-7 py-3.5 rounded-full border border-white/10 scale-100'
      }`}>
        {/* Brand Logo */}
        <button
          onClick={(e) => handleNavClick({ target: 'home' }, e)}
          className="flex items-center gap-3 pr-5 border-r border-white/10 group text-left"
        >
          <SiervaIcon size={44} className="text-[#C4A882] group-hover:text-white transition-colors duration-300" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-sm font-semibold text-white tracking-wide">Sierva María</span>
            <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-[#C4A882] mt-0.5">Belleza y Armonización Facial</span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navItems.map(item => {
            const isActive = activeRoute === item.key
            return (
              <a
                key={item.key}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`font-sans text-xs font-medium transition-colors tracking-wide relative group py-1 ${
                  isActive ? 'text-[#C4A882] font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-px bg-[#C4A882] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            )
          })}
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/573100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 border border-[#C4A882] text-[#C4A882] font-sans text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all duration-300"
        >
          Agendar
        </a>
      </div>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-[#1A1A2E]/95 backdrop-blur-md px-5 py-3.5 flex items-center justify-between border-b border-white/10">
        <button onClick={(e) => handleNavClick({ target: 'home' }, e)} className="flex items-center gap-2.5 text-left">
          <SiervaIcon size={38} className="text-[#C4A882]" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xs font-semibold text-white">Sierva María</span>
            <span className="font-sans text-[8px] uppercase tracking-widest text-[#C4A882]">Belleza y Armonización Facial</span>
          </div>
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-1"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className="absolute top-16 left-4 right-4 bg-[#1A1A2E] border border-[#C4A882]/30 rounded-2xl p-6 shadow-2xl space-y-4">
          <nav className="flex flex-col gap-3 pb-4 border-b border-white/10">
            {navItems.map(item => (
              <a
                key={item.key}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(item, e)}
                className={`font-sans text-sm font-medium transition-colors py-1 ${
                  activeRoute === item.key ? 'text-[#C4A882] font-semibold' : 'text-white/80 hover:text-[#C4A882]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/573100000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block w-full border border-[#C4A882] text-[#C4A882] font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full text-center hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// FOOTER COMPONENT (Compartido en todas las vistas)
// ══════════════════════════════════════════════════════════════════════════════
function Footer({ onNavigate }) {
  return (
    <footer id="contacto" className="bg-[#1A1A2E] text-[#FDF6EE] py-24 px-6 lg:px-12 border-t border-[#C4A882]/20 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-24 -right-24 text-white/5 pointer-events-none">
        <SiervaLogo size={600} />
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* CTA Banner */}
        <Reveal>
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-10 sm:p-16 rounded-3xl border border-[#C4A882]/30 text-center space-y-8 backdrop-blur-sm">
            <div className="inline-flex items-center gap-3">
              <Sparkles size={20} className="text-[#C4A882]" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">
                Reserva tu Cita de Valoración
              </span>
              <Sparkles size={20} className="text-[#C4A882]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#FDF6EE]">
              Da el primer paso hacia<br />
              <em className="font-normal italic text-[#C4A882]">tu mejor versión.</em>
            </h2>

            <p className="font-sans text-base text-[#FDF6EE]/75 max-w-xl mx-auto font-light">
              Tu rostro es tu identidad. Confíalo a profesionales.
            </p>

            <a
              href="https://wa.me/573100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#C4A882] text-[#1A1A2E] font-sans text-sm font-bold uppercase tracking-widest px-12 py-5 rounded-full hover:bg-white transition-all duration-300 shadow-2xl shadow-[#C4A882]/20 group"
            >
              Agendar Valoración Gratuita (WhatsApp)
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          {/* Brand Logo & NAP */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <SiervaIcon size={40} className="text-[#FDF6EE]" />
              <div>
                <div className="font-serif text-xl font-semibold text-[#FDF6EE] tracking-wide">
                  Sierva María
                </div>
                <div className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C4A882]">
                  Belleza y Armonización Facial
                </div>
              </div>
            </div>

            <div className="space-y-3 font-sans text-xs text-[#FDF6EE]/70 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C4A882] shrink-0 mt-0.5" />
                <span>
                  <strong>Sede Principal:</strong> Sabana Park Torre 2, Consultorio 623. Cajicá, Cundinamarca.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-[#C4A882] shrink-0" />
                <span>
                  <strong>Agendamiento:</strong> Confirmación 100% digital vía WhatsApp (Sin cobro de abono previo).
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={15} className="text-[#C4A882] shrink-0" />
                <span>@siervamariastetica</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#C4A882]">
              Navegación
            </div>
            <ul className="space-y-2.5 font-sans text-xs text-[#FDF6EE]/60 font-light">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#C4A882] transition-colors text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armonizacion')} className="hover:text-[#C4A882] transition-colors text-left">
                  Armonización Facial e Inyectables
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('laser')} className="hover:text-[#C4A882] transition-colors text-left">
                  Depilación Láser Definitiva
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'nosotros')} className="hover:text-[#C4A882] transition-colors text-left">
                  Sobre Nosotros & Historia
                </button>
              </li>
            </ul>
          </div>

          {/* Director Credentials */}
          <div className="md:col-span-3 space-y-4">
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#C4A882]">
              Dirección Médica
            </div>
            <div className="font-sans text-xs text-[#FDF6EE]/70 space-y-1 font-light">
              <div className="font-semibold text-[#FDF6EE]">Dr. Steven Cuervo Parra</div>
              <div>Médico y Cirujano General</div>
              <div className="text-[#C4A882] font-medium">RETHUS: 1012356273</div>
            </div>
          </div>

        </div>

        {/* Legal / Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-[10px] uppercase tracking-widest text-[#FDF6EE]/40">
          <div className="space-y-1 text-center md:text-left">
            <div>© 2026 Sierva María - Belleza y Armonización Facial. Todos los derechos reservados.</div>
            <div>Sin pérdida de abono por reagendamiento (aviso previo requerido).</div>
          </div>
          <div className="text-center md:text-right text-[#C4A882]/70">
            Cumplimiento estricto de Habeas Data y tratamiento seguro de tu información clínica.
          </div>
        </div>

      </div>
    </footer>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// VISTA 1: HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════
function HomePage({ onNavigate }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[640px] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#1A1A2E]/60" />
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/noise.png)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#C4A882]/70" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#C4A882]">
                Medicina Estética Clínica en Cajicá
              </span>
              <div className="h-px w-10 bg-[#C4A882]/70" />
            </div>
          </div>

          <div className={`transition-all duration-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#FDF6EE] leading-[1.0] mb-8 text-balance">
              Belleza que no cabe<br />
              <em className="font-normal italic text-[#C4A882]">en ningún molde.</em>
            </h1>
          </div>

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '450ms' }}>
            <p className="font-sans text-base md:text-lg text-[#FDF6EE]/80 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Tratamientos de armonización facial e inyectables con estricto rigor médico. Resultados naturales que respetan tu identidad.
            </p>
          </div>

          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#C4A882] text-[#1A1A2E] font-sans text-sm font-bold uppercase tracking-widest px-9 py-4 hover:bg-white transition-all duration-300 flex items-center gap-3 shadow-xl shadow-black/25"
              >
                Agenda tu Valoración Gratuita
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => onNavigate('armonizacion')}
                className="font-sans text-xs font-semibold uppercase tracking-widest text-[#FDF6EE]/85 hover:text-[#C4A882] transition-colors border border-white/20 px-8 py-4 hover:border-[#C4A882]/50"
              >
                Ver Catálogo de Servicios
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium">Scroll</span>
          <div className="animate-scroll-bounce">
            <ArrowDown size={15} className="text-[#C4A882]" />
          </div>
        </div>
      </section>

      {/* Filosofía & Origen */}
      <section id="nosotros" className="bg-[#FDF6EE] py-24 md:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-[#C4A882]" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">
                  Nuestra Filosofía
                </span>
                <div className="h-px w-10 bg-[#C4A882]" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1A1A2E] leading-tight text-balance">
                Nos importa que te veas bien.<br />
                <em className="font-normal italic text-[#C4A882]">Nos importa más que estés seguro/a.</em>
              </h2>

              <p className="font-sans text-base md:text-lg text-[#1A1A2E]/75 font-light leading-relaxed max-w-3xl mx-auto">
                La medicina estética no se trata de transformar tu rostro para encajar en un estándar. Se trata de devolver lo que el tiempo llevó, con criterio médico y sin exagerar. En Sierva María - Belleza y Armonización Facial, la ciencia y la naturalidad son el único estándar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[#1A1A2E] text-[#FDF6EE] rounded-3xl p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-white/5">
              <div className="absolute -bottom-16 -right-16 text-white/5 pointer-events-none">
                <SiervaLogo size={420} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C4A882] rounded-full" />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">
                      El Origen
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FDF6EE] leading-tight">
                    ¿Por qué nos llamamos<br />
                    <em className="font-normal italic text-[#C4A882]">Sierva María?</em>
                  </h2>

                  <p className="font-sans text-base text-[#FDF6EE]/80 font-light leading-relaxed">
                    Inspirados en el universo literario de Gabriel García Márquez y la protagonista de <em>Del amor y otros demonios</em>, Sierva María representa una belleza excepcional y libre, una identidad que no pide permiso y que desafía todas las categorías.
                  </p>

                  <p className="font-sans text-sm text-[#FDF6EE]/65 font-light leading-relaxed">
                    En la medicina estética moderna, esa es nuestra visión: belleza sin estereotipos, cuidado que no sigue moldes y respeto absoluto por la diversidad. Atendemos a todas las personas garantizando un espacio seguro, ético e inclusivo.
                  </p>

                  <div className="pt-4 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C4A882]" />
                      <span className="font-sans text-xs uppercase tracking-wider text-[#FDF6EE]/70">Espacio Inclusivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#C4A882]" />
                      <span className="font-sans text-xs uppercase tracking-wider text-[#FDF6EE]/70">Ética Sin Moldes</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C4A882]/30">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
                      alt="Clínica Sierva María"
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <blockquote className="font-serif text-lg italic text-[#FDF6EE]">
                        "Belleza sin estereotipos, cuidado que no sigue moldes."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resumen de Servicios con enlaces directos */}
      <section id="servicios" className="bg-[#FDF6EE] py-24 md:py-36 px-6 lg:px-12 border-t border-[#C4A882]/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <Reveal>
            <div className="text-center space-y-4">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882]">
                Especialidades Clínicas
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E]">
                Tratamientos Médicos Estéticos
              </h2>
              <p className="font-sans text-sm text-[#1A1A2E]/70 max-w-xl mx-auto font-light">
                Procedimientos mínimamente invasivos realizados exclusivamente por personal médico calificado.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Card 1: Armonización Facial */}
            <Reveal delay={100}>
              <div className="bg-[#1A1A2E] text-[#FDF6EE] rounded-3xl flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-500 shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="relative overflow-hidden h-56 rounded-t-3xl">
                  <img
                    src={armonizacionImg}
                    alt="Armonización Facial con ácido hialurónico"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A2E]/90" />
                  <span className="absolute top-4 left-4 font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#C4A882] bg-[#1A1A2E]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C4A882]/30">
                    Especialidad Principal
                  </span>
                </div>

                <div className="p-8 sm:p-10 lg:p-12 pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="w-12 h-1 bg-[#C4A882] mb-6 group-hover:w-20 transition-all duration-500" />
                    <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FDF6EE] mb-4">
                      Armonización Facial e Inyectables
                    </h3>
                    <p className="font-sans text-sm text-[#FDF6EE]/75 font-light leading-relaxed mb-6">
                      Devolvemos la luminosidad, estructura y tensión a tu piel mediante Bótox, Ácido Hialurónico y Bioestimuladores de última generación.
                    </p>
                    <div className="space-y-2 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-[#FDF6EE]/80 font-light">
                      <div className="flex items-center gap-2 text-[#C4A882] font-semibold uppercase tracking-wider mb-1">
                        <CheckCircle2 size={14} /> Protocolos Incluidos:
                      </div>
                      <div>• Toxina Botulínica (Allergan, Dysport, Xeomin)</div>
                      <div>• Ácido Hialurónico (Juvederm, Restylane, Teosyal)</div>
                      <div>• Bioestimuladores (Radiesse, Sculptra, HarmonyCa, Profhilo)</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('armonizacion')}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#C4A882] text-[#1A1A2E] font-sans text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    Ver Catálogo y Precios de Inyectables
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Depilación Láser */}
            <Reveal delay={250}>
              <div className="bg-[#1A1A2E] text-[#FDF6EE] rounded-3xl flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-500 shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="relative overflow-hidden h-56 rounded-t-3xl">
                  <img
                    src={laserImg}
                    alt="Depilación Láser Especializada"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A2E]/90" />
                  <span className="absolute top-4 left-4 font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#C4A882] bg-[#1A1A2E]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C4A882]/30">
                    Tecnología de Precisión
                  </span>
                </div>

                <div className="p-8 sm:p-10 lg:p-12 pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="w-12 h-1 bg-[#C4A882] mb-6 group-hover:w-20 transition-all duration-500" />
                    <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FDF6EE] mb-4">
                      Depilación Láser Definitiva
                    </h3>
                    <p className="font-sans text-sm text-[#FDF6EE]/75 font-light leading-relaxed mb-6">
                      Tecnología NewAge Fenix EV 2025N para reducción definitiva del vello. Sesiones seguras, indoloras y aptas para todo fototipo.
                    </p>
                    <div className="bg-[#C4A882]/15 border border-[#C4A882]/30 p-4 rounded-2xl mb-8 space-y-1">
                      <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C4A882]">
                        <Sparkles size={14} /> Bono Exclusivo Incluido:
                      </div>
                      <p className="font-sans text-xs text-[#FDF6EE]/80 font-light">
                        Al iniciar tu paquete de Láser, accedes a un bono regalo para tu valoración de Armonización Facial.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('laser')}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#C4A882] text-[#1A1A2E] font-sans text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                  >
                    Ver Tarifario y Paquetes Láser
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Perfil del Director Médico */}
      <section className="bg-[#FDF6EE] py-24 md:py-36 px-6 lg:px-12 border-t border-[#C4A882]/20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F7EEE3] border border-[#C4A882]/30 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-[#C4A882]/40 rounded-2xl" />
                  <img
                    src={doctorImg}
                    alt="Dr. Steven Cuervo Parra — Director Médico de Sierva María"
                    className="w-full h-[460px] object-cover object-center rounded-2xl relative z-10 shadow-lg"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#1A1A2E]/95 backdrop-blur-md p-4 rounded-xl z-20 text-center">
                    <div className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#C4A882] mb-0.5">
                      RETHUS 1012356273
                    </div>
                    <div className="font-serif text-base font-semibold text-[#FDF6EE]">
                      Dr. Steven Cuervo Parra
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-7 space-y-8">
                <Reveal delay={100}>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882] block mb-2">
                      Dirección Médica
                    </span>
                    <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#1A1A2E] mb-2">
                      Dr. Steven Cuervo Parra
                    </h2>
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-[#C4A882] mb-6">
                      Excelencia Clínica y Humanización
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="space-y-4 font-sans text-sm text-[#1A1A2E]/80 font-light leading-relaxed">
                    <div className="flex items-start gap-3">
                      <Award size={18} className="text-[#C4A882] shrink-0 mt-1" />
                      <span><strong>Médico y Cirujano General</strong> — Fundación Universitaria Juan N. Corpas.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck size={18} className="text-[#C4A882] shrink-0 mt-1" />
                      <span><strong>Diplomado en Sustancias Modelantes</strong> e Inyectables de Alta Gama.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <UserCheck size={18} className="text-[#C4A882] shrink-0 mt-1" />
                      <span><strong>Transparencia Radical:</strong> Si un tratamiento no es seguro o necesario para ti, te lo diremos.</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={300}>
                  <blockquote className="border-l-2 border-[#C4A882] pl-6 font-serif text-lg italic text-[#1A1A2E]">
                    "El paciente elige a personas, no a consultorios. Nuestra prioridad es la transparencia radical y la ética médica antes que cualquier resultado comercial."
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// VISTA 2: PÁGINA DE ARMONIZACIÓN FACIAL E INYECTABLES (/armonizacion)
// ══════════════════════════════════════════════════════════════════════════════
function ArmonizacionPage({ onNavigate }) {
  return (
    <div className="pt-20">
      {/* Hero Banner Navy */}
      <section className="bg-[#1A1A2E] text-[#FDF6EE] py-20 md:py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <SiervaLogo size={500} />
        </div>
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

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-sans">
            <a
              href="https://wa.me/573100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4A882] text-[#1A1A2E] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-xl"
            >
              Agendar Valoración Gratuita
            </a>
            <a
              href="#combos"
              className="border border-[#C4A882] text-[#C4A882] font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all"
            >
              Ver Combos Promocionales
            </a>
          </div>
        </div>
      </section>

      {/* Contenido Informativo + Tarifario */}
      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12 space-y-24 max-w-7xl mx-auto">

        {/* 1. TOXINA BOTULÍNICA (BÓTOX) */}
        <Reveal>
          <div className="space-y-8">
            <div className="border-b border-[#C4A882]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882] block mb-2">
                  01. Neuromoduladores
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1A1A2E]">
                  Toxina Botulínica (Bótox®)
                </h2>
              </div>
              <div className="font-sans text-xs text-[#1A1A2E]/60 max-w-md font-light">
                Relajación muscular selectiva para prevenir y suavizar arrugas dinámicas de expresión sin perder gestualidad natural.
              </div>
            </div>

            {/* Brands Authorized */}
            <div className="bg-[#F7EEE3] border border-[#C4A882]/30 p-4 rounded-2xl flex flex-wrap items-center gap-4 text-xs font-sans">
              <span className="font-bold text-[#C4A882] uppercase tracking-wider flex items-center gap-1.5">
                <BadgeCheck size={16} /> Marcas Autorizadas:
              </span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Botox® (Allergan)</span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Dysport®</span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Xeomin®</span>
            </div>

            {/* Table Tailwind */}
            <div className="overflow-x-auto bg-white rounded-3xl border border-[#C4A882]/20 shadow-sm">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#1A1A2E] text-[#FDF6EE] text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Procedimiento / Zona</th>
                    <th className="py-4 px-6 font-semibold">Detalles Técnicos & Alcance</th>
                    <th className="py-4 px-6 font-semibold text-right">Tarifa (COP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C4A882]/15 text-[#1A1A2E]">
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      1 Zona Específica
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(Frente, Entrecejo o Patas de Gallo)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Aplicación localizada por zona muscular. Marcación de prevención de arrugas dinámicas.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $350.000 – $400.000
                    </td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Tercio Superior Completo
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(Full Face Superior: Frente + Entrecejo + Patas de Gallo)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Ajuste completo de expresión sin perder naturalidad. Incluye cita de control y retoque a los 12-15 días.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $650.000 – $750.000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Bótox Nefertiti / Cuello
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(Nefertiti Lift & Bandas Platismales)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Definición del óvalo facial y relajación de bandas platismales del cuello.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $550.000 – $650.000
                    </td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Bótox Maseteros
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(Bruxismo / Perfilamiento Facial Inferior)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Tratamiento funcional para bruxismo y afinamiento del tercio inferior del rostro.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $500.000 – $700.000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Bótox Hiperhidrosis
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(Axilar o Palmar)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Bloqueo de sudoración excesiva en axilas o palmas de las manos. Duración 6-9 meses.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $900.000 – $1.200.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* 2. ÁCIDO HIALURÓNICO */}
        <Reveal>
          <div className="space-y-8">
            <div className="border-b border-[#C4A882]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882] block mb-2">
                  02. Rellenos & Perfilamiento
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1A1A2E]">
                  Ácido Hialurónico
                </h2>
              </div>
              <div className="font-sans text-xs text-[#1A1A2E]/60 max-w-md font-light">
                Aporta soporte estructural, volumen donde se ha perdido e hidratación profunda con resultados inmediatos.
              </div>
            </div>

            {/* Brands Authorized */}
            <div className="bg-[#F7EEE3] border border-[#C4A882]/30 p-4 rounded-2xl flex flex-wrap items-center gap-4 text-xs font-sans">
              <span className="font-bold text-[#C4A882] uppercase tracking-wider flex items-center gap-1.5">
                <BadgeCheck size={16} /> Marcas de Referencia:
              </span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Juvederm® (Volift, Voluma, Volbella)</span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Restylane®</span>
              <span className="text-[#1A1A2E]/80 bg-white/70 px-3 py-1 rounded-md font-medium">Teosyal®</span>
            </div>

            {/* Table Tailwind */}
            <div className="overflow-x-auto bg-white rounded-3xl border border-[#C4A882]/20 shadow-sm">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#1A1A2E] text-[#FDF6EE] text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Procedimiento / Zona</th>
                    <th className="py-4 px-6 font-semibold">Detalles Técnicos</th>
                    <th className="py-4 px-6 font-semibold text-right">Tarifa (COP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C4A882]/15 text-[#1A1A2E]">
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Hidratación & Relleno de Labios
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Jeringa)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Técnica de eversión, perfilado de borde labial e hidratación profunda con volumen natural.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $650.000 – $800.000
                    </td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Relleno de Ojeras
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Fosa Lacrimal)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Corrección de hundimiento de fosa lacrimal mediante cánula médica de alta precisión.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $750.000 – $850.000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Rinomodelación
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Corrección Nasal)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Levantamiento de punta nasal y rectificación de giba o dorso. Resultado inmediato sin cirugía.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $700.000 – $850.000
                    </td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Proyección de Mentón
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Perfilamiento)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Proyección estructural del tercio inferior para lograr simetría de perfil.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $650.000 – $750.000
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Definición de Pómulos / Arco Cigomático
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Soporte Facial)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Reposicionamiento de tercios faciales y soporte estructural medio.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $650.000 – $750.000
                    </td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      Marcaje Mandibular
                      <div className="text-xs font-normal text-[#1A1A2E]/60">(1 ml / Ángulo Mandibular)</div>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Definición de bordes y ángulos mandibulares para masculinización o perfilado femenino.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">
                      $650.000 – $750.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* 3. BIOESTIMULADORES DE COLÁGENO Y TRATAMIENTOS COMPLEMENTARIOS */}
        <Reveal>
          <div className="space-y-8">
            <div className="border-b border-[#C4A882]/30 pb-6">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882] block mb-2">
                03. Firmeza & Calidad de Piel
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1A1A2E]">
                Bioestimuladores de Colágeno & Tratamientos Faciales
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Radiesse®',
                  desc: 'Inducción de colágeno tipo I y III (Hidroxiapatita Cálcica). Tensa la piel, combate flacidez y recupera densidad.',
                  price: '$1.200.000 – $1.400.000',
                  badge: '1 Vial'
                },
                {
                  title: 'Sculptra®',
                  desc: 'Bioestimulador neocollagenéico progresivo (Ácido Poli-L-Láctico). Ideal para pérdida de volumen severa y firmeza.',
                  price: '$1.500.000 – $1.800.000',
                  badge: '1 Vial'
                },
                {
                  title: 'HarmonyCa®',
                  desc: 'Efecto lifting inmediato por ácido hialurónico + estimulación sostenida por hidroxiapatita cálcica.',
                  price: '$1.600.000 – $1.900.000',
                  badge: '1 Vial Híbrido'
                },
                {
                  title: 'Profhilo®',
                  desc: 'Ácido hialurónico ultrapuro de alta concentración. Bioremodelación celular sin aportar volumen.',
                  price: '$1.100.000 – $1.300.000',
                  badge: '2 ml Bioremodelador'
                },
                {
                  title: 'Dermapen + NCTF 135HA',
                  desc: 'Microneedling médico con cóctel de polirevitalización Filorga/NCTF para luminosidad y poros.',
                  price: '$250.000 – $350.000',
                  badge: 'Cóctel Activo'
                },
                {
                  title: 'Lipopapa Enzimática',
                  desc: 'Enzimas recombinantes PBSerum (Lipasa, Colagenasa, Hialuronidasa) para reducción de grasa submentoniana.',
                  price: '$180.000 – $250.000 / sesión',
                  badge: 'Pack 3: $450k – $600k'
                },
                {
                  title: 'Hilos Tensores / Espiculados',
                  desc: 'Tracción y lifting mecánico no quirúrgico para definición de mejillas y tercio inferior.',
                  price: '$150.000 – $200.000 / hilo',
                  badge: 'Lifting Mecánico'
                },
                {
                  title: 'HydraFacial / Peeling Médico',
                  desc: 'Microdermoabrasión con sueros médicos o renovación celular profunda con ácidos estéticos.',
                  price: '$200.000 – $280.000',
                  badge: 'Renovación Celular'
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#C4A882]/25 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-semibold text-[#1A1A2E]">{item.title}</h3>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#C4A882] bg-[#F7EEE3] px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#1A1A2E]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#C4A882]/15 flex items-center justify-between">
                    <span className="font-sans text-xs text-[#1A1A2E]/50 uppercase tracking-wider">Tarifa Estimada</span>
                    <span className="font-sans text-sm font-bold text-[#C4A882]">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4. COMBOS PROMOCIONALES (TABLA AZUL / HIGH CONVERSION) */}
        <Reveal>
          <div id="combos" className="bg-[#1A1A2E] text-[#FDF6EE] rounded-3xl p-8 sm:p-12 lg:p-16 space-y-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <SiervaLogo size={400} />
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#C4A882] border border-[#C4A882]/30 px-4 py-1.5 rounded-full">
                Menú de Alta Conversión
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FDF6EE]">
                Combos Premium & Paquetes de Armonización
              </h2>
              <p className="font-sans text-sm text-[#FDF6EE]/75 font-light">
                Tratamientos combinados para un resultado integral con descuento exclusivo por paquete.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {[
                {
                  name: 'Combo Glow Facial',
                  price: '$320.000 COP',
                  includes: [
                    'Limpieza Facial Profunda',
                    'Dermapen con NCTF 135HA (Polirevitalización)',
                    'Peeling Médico Renovador'
                  ],
                  highlight: 'Ideal para eventos o revitalización rápida'
                },
                {
                  name: 'Combo Rejuvenecimiento Tercio Superior',
                  price: '$1.250.000 – $1.400.000 COP',
                  includes: [
                    'Toxina Botulínica Tercio Superior Completo (Frente + Entrecejo + Patas de Gallo)',
                    '1 ml Ácido Hialurónico (Labios u Ojeras)'
                  ],
                  highlight: 'Rejuvenecimiento expresivo completo'
                },
                {
                  name: 'Combo Perfilamiento Facial',
                  price: '$1.300.000 COP',
                  includes: [
                    'Rinomodelación con Ácido Hialurónico',
                    'Proyección Estructural de Mentón (1 ml)'
                  ],
                  highlight: 'Estructuración del perfil y simetría'
                },
                {
                  name: 'Combo Armonización Full Face',
                  price: '$2.400.000 – $2.800.000 COP',
                  includes: [
                    'Bótox Tercio Superior Completo',
                    '3 ml Ácido Hialurónico a distribuir (Labios, Mentón, Pómulos)'
                  ],
                  highlight: 'Transformación armónica integral'
                },
              ].map((combo, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-[#C4A882]/40 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-[#C4A882] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-[#FDF6EE]">{combo.name}</h3>
                        <span className="font-sans text-[10px] text-[#C4A882] font-semibold uppercase tracking-wider">
                          {combo.highlight}
                        </span>
                      </div>
                    </div>

                    <div className="font-serif text-2xl font-bold text-[#C4A882]">
                      {combo.price}
                    </div>

                    <ul className="space-y-2.5 font-sans text-xs text-[#FDF6EE]/80 font-light border-t border-white/10 pt-4">
                      {combo.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <CheckCircle2 size={15} className="text-[#C4A882] shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/573100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#C4A882] text-[#1A1A2E] font-sans text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full hover:bg-white transition-all shadow-lg"
                  >
                    Agendar Combo
                    <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// VISTA 3: PÁGINA DE DEPILACIÓN LÁSER AVANZADA (/laser)
// ══════════════════════════════════════════════════════════════════════════════
function LaserPage({ onNavigate }) {
  return (
    <div className="pt-20">
      {/* Hero Banner Navy */}
      <section className="bg-[#1A1A2E] text-[#FDF6EE] py-20 md:py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <SiervaLogo size={500} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#C4A882]/10 border border-[#C4A882]/30 px-4 py-1.5 rounded-full">
            <Zap size={14} className="text-[#C4A882]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#C4A882]">
              Tecnología Médica de Precisión
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold text-[#FDF6EE] text-balance">
            Depilación Láser Definitiva<br />
            <em className="font-normal italic text-[#C4A882]">Tecnología NewAge Fenix EV 2025N</em>
          </h1>

          <p className="font-sans text-base md:text-lg text-[#FDF6EE]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Eliminación progresiva e indolora del vello facial y corporal. Sistema de diodo de alta potencia apto para todos los fototipos de piel con máxima protección cutánea.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-sans">
            <a
              href="https://wa.me/573100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C4A882] text-[#1A1A2E] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-xl"
            >
              Agendar Valoración Láser
            </a>
            <a
              href="#paquetes-laser"
              className="border border-[#C4A882] text-[#C4A882] font-semibold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-[#C4A882] hover:text-[#1A1A2E] transition-all"
            >
              Ver Paquetes de 6 Sesiones
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#FDF6EE] py-20 px-6 lg:px-12 space-y-24 max-w-7xl mx-auto">

        {/* TRUST BUILDING: FICHA TÉCNICA DEL EQUIPO FENIX EV 2025N */}
        <Reveal>
          <div className="bg-[#F7EEE3] border border-[#C4A882]/30 rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882]">
                Autoridad en Tecnología Médica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
                Equipo de Alta Gama: NewAge Fenix EV 2025N
              </h2>
              <p className="font-sans text-xs text-[#1A1A2E]/70 font-light">
                Plataforma médica de láser de diodo de última generación diseñada para la máxima comodidad del paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              <div className="bg-white p-6 rounded-2xl border border-[#C4A882]/20 space-y-3 shadow-sm">
                <div className="w-10 h-10 bg-[#1A1A2E] text-[#C4A882] rounded-xl flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold text-sm text-[#1A1A2E]">Tecnología Indolora</h3>
                <p className="text-xs text-[#1A1A2E]/70 font-light leading-relaxed">
                  Sistema Sapphire Chill Technology que enfrió la piel por contacto durante el pulso anestesiando la zona.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#C4A882]/20 space-y-3 shadow-sm">
                <div className="w-10 h-10 bg-[#1A1A2E] text-[#C4A882] rounded-xl flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <h3 className="font-semibold text-sm text-[#1A1A2E]">Sesiones Ultra Rápidas</h3>
                <p className="text-xs text-[#1A1A2E]/70 font-light leading-relaxed">
                  Disparo de alta frecuencia (Modo In-Motion) que reduce los tiempos de sesión a minutos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#C4A882]/20 space-y-3 shadow-sm">
                <div className="w-10 h-10 bg-[#1A1A2E] text-[#C4A882] rounded-xl flex items-center justify-center">
                  <UserCheck size={20} />
                </div>
                <h3 className="font-semibold text-sm text-[#1A1A2E]">Todo Fototipo de Piel</h3>
                <p className="text-xs text-[#1A1A2E]/70 font-light leading-relaxed">
                  Eficaz e inofensivo en pieles claras, morenas o bronceadas (Fototipos I a VI).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#C4A882]/20 space-y-3 shadow-sm">
                <div className="w-10 h-10 bg-[#1A1A2E] text-[#C4A882] rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-semibold text-sm text-[#1A1A2E]">Rasuración Gratis</h3>
                <p className="text-xs text-[#1A1A2E]/70 font-light leading-relaxed">
                  Todas tus sesiones incluyen la preparación y rasuración clínica en cabina sin costo adicional.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TARIFARIO POR ZONAS (INDIVIDUAL & PAQUETES DE 6 SESIONES) */}
        <Reveal>
          <div className="space-y-8">
            <div className="border-b border-[#C4A882]/30 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882] block mb-2">
                  Tarifario Transparente
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1A1A2E]">
                  Precios por Zonas Corporales
                </h2>
              </div>
              <div className="font-sans text-xs text-[#1A1A2E]/60 max-w-md font-light">
                Puedes pagar sesión a sesión o adquirir tu paquete de 6 sesiones con descuento garantizado.
              </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl border border-[#C4A882]/20 shadow-sm">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#1A1A2E] text-[#FDF6EE] text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Categoría de Zona</th>
                    <th className="py-4 px-6 font-semibold">Zonas Incluidas</th>
                    <th className="py-4 px-6 font-semibold">Sesión Individual</th>
                    <th className="py-4 px-6 font-semibold text-right">Paquete (6 Sesiones)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C4A882]/15 text-[#1A1A2E]">
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Zona Pequeña</td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Axilas, Bozo, Mentón, Patillas, Línea de Alba o Patillas.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1A1A2E]">$40.000 – $60.000</td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">$200.000 – $280.000</td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Zona Mediana</td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Bikini Parcial, Media Pierna, Brazos Completos o Rostro Completo.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1A1A2E]">$70.000 – $100.000</td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">$350.000 – $450.000</td>
                  </tr>
                  <tr className="hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Zona Grande</td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Piernas Completas, Bikini Completo + Espalda o Pecho.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1A1A2E]">$120.000 – $160.000</td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">$600.000 – $750.000</td>
                  </tr>
                  <tr className="bg-[#F7EEE3]/30 hover:bg-[#FDF6EE]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">Cuerpo Completo (Full Body)</td>
                    <td className="py-4 px-6 text-xs text-[#1A1A2E]/75 font-light">
                      Combinación de 3 o más zonas corporales completas.
                    </td>
                    <td className="py-4 px-6 font-bold text-[#1A1A2E]">$250.000 – $350.000</td>
                    <td className="py-4 px-6 font-bold text-[#C4A882] text-right whitespace-nowrap">$1.200.000 – $1.500.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* PAQUETES DESTACADOS & SUPER COMBO PLUS */}
        <Reveal>
          <div id="paquetes-laser" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#C4A882]">
                Oportunidades Especiales
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
                Paquetes de Alta Conversión
              </h2>
            </div>

            {/* SUPER COMBO PLUS DESTACADO */}
            <div className="bg-[#1A1A2E] text-[#FDF6EE] rounded-3xl p-8 sm:p-12 border-2 border-[#C4A882] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] bg-[#C4A882] text-[#1A1A2E] px-3.5 py-1 rounded-full inline-block">
                  ★ Combo Más Popular (Super Combo Plus)
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FDF6EE]">
                  Paquete Full Body (6 Sesiones)
                </h3>
                <p className="font-sans text-sm text-[#FDF6EE]/80 font-light leading-relaxed">
                  Eliminación integral del vello en 3 o más zonas corporales completas durante 6 sesiones programadas. Incluye valoración clínica, rasuración previa gratis y bono regalo para armonización facial.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-sans text-[#C4A882]">
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={15} /> 6 Sesiones Garantizadas</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={15} /> Sin cobro de abono previo</div>
                </div>
              </div>

              <div className="text-center lg:text-right space-y-4 shrink-0 bg-white/5 p-8 rounded-2xl border border-white/10 w-full lg:w-auto">
                <div className="font-sans text-xs uppercase tracking-wider text-[#FDF6EE]/60">Precio Especial Paquete</div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#C4A882]">
                  $1.000.000 COP
                </div>
                <a
                  href="https://wa.me/573100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#C4A882] text-[#1A1A2E] font-sans text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-full hover:bg-white transition-all shadow-xl text-center"
                >
                  Agendar Super Combo
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// BOTÓN FLOTANTE WHATSAPP
// ══════════════════════════════════════════════════════════════════════════════
function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/573100000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageSquare size={24} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-sans text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-2">
        Agendar Cita
      </span>
    </a>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN APP COMPONENT & ROUTER
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '')
    if (hash === 'armonizacion' || hash === 'laser') return hash
    const path = window.location.pathname
    if (path.includes('armonizacion')) return 'armonizacion'
    if (path.includes('laser')) return 'laser'
    return 'home'
  })

  // Handle route changes and scroll top
  const handleNavigate = (targetRoute, scrollToId = null) => {
    setRoute(targetRoute)
    window.location.hash = targetRoute === 'home' ? '/' : `/${targetRoute}`
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  // Sync document title and meta description dynamically
  useEffect(() => {
    if (route === 'armonizacion') {
      document.title = 'Armonización Facial e Inyectables en Cajicá | Sierva María'
    } else if (route === 'laser') {
      document.title = 'Depilación Láser Definitiva en Cajicá | Sierva María'
    } else {
      document.title = 'Sierva María — Belleza y Armonización Facial'
    }
  }, [route])

  // Listen to hash updates (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '')
      if (hash === 'armonizacion' || hash === 'laser') {
        setRoute(hash)
      } else if (hash === 'home' || hash === '' || hash === '/') {
        setRoute('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="bg-[#FDF6EE] text-[#1A1A2E] min-h-screen overflow-x-hidden">
      <Navbar activeRoute={route} onNavigate={handleNavigate} />

      <main>
        {route === 'home' && <HomePage onNavigate={handleNavigate} />}
        {route === 'armonizacion' && <ArmonizacionPage onNavigate={handleNavigate} />}
        {route === 'laser' && <LaserPage onNavigate={handleNavigate} />}
      </main>

      <WhatsAppFloating />
    </div>
  )
}
