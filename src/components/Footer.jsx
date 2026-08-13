import React from 'react';
import { SiervaMariaLogo } from './SiervaMariaLogo';
import { Sparkles, MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

export const Footer = ({ currentTheme }) => {
  return (
    <footer className="bg-[#1A1A2E] text-[#FDF6EE] py-16 border-t border-[#C4A882]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C4A882] flex items-center justify-center p-1.5 shadow-md">
                <SiervaMariaLogo className="w-full h-full text-[#1A1A2E]" />
              </div>
              <div>
                <div className="font-serif text-xl font-bold tracking-wide text-white">
                  Sierva María <span className="font-sans text-xs font-light tracking-widest text-[#C4A882] uppercase ml-1">Estética</span>
                </div>
                <div className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-sans">
                  Aurea by Sierva María — Brand Guidelines 2026
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 max-w-md leading-relaxed font-light">
              Guía única de referencia para diseño, contenido, tono de comunicación y estrategia comercial. 
              Fundada en la medicina estética seria, la historia literaria de Gabriel García Márquez y la inclusividad radical.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#C4A882] font-medium pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Sabana Park Torre 2, Cons. 623 · Cajicá
              </span>
            </div>
          </div>

          {/* Leadership & Medical Direction */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Dirección & Equipo
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li className="flex flex-col">
                <strong className="text-white font-medium">Dr. Steven Cuervo Parra</strong>
                <span className="text-[11px] text-[#C4A882]">Director Médico · Cirujano Juan N. Corpas</span>
              </li>
              <li className="flex flex-col pt-2 border-t border-white/10">
                <strong className="text-white font-medium">Yensi García</strong>
                <span className="text-[11px] text-[#C4A882]">Encargada Comercial & Pacientes</span>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Documentación
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-light">
              <li><a href="#adn" className="hover:text-[#C4A882] transition-colors">01. ADN & Origen Narrativo</a></li>
              <li><a href="#logo" className="hover:text-[#C4A882] transition-colors">02. Sistema de Logo & PNG</a></li>
              <li><a href="#colors" className="hover:text-[#C4A882] transition-colors">03. Paleta Cromática</a></li>
              <li><a href="#typography" className="hover:text-[#C4A882] transition-colors">04. Jerarquía Tipográfica</a></li>
              <li><a href="#tone" className="hover:text-[#C4A882] transition-colors">05. Tono de Voz Médico</a></li>
              <li><a href="#architecture" className="hover:text-[#C4A882] transition-colors">06. Sierva María vs Aurea</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <div>
            © 2026 Sierva María Estética & Aurea by Sierva María. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-1 text-[#C4A882]">
            <span>Medicina estética seria para todas las personas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
