"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- MATRIZ DE NAVEGACIÓN ACTUALIZADA ---
// IMPORTANTE: Los href de Servicios y Metodología ahora apuntan a los IDs
const navLinks = [
  { name: "Proyectos", href: "/work", label: "01" }, // Asumo que esta sí es una página aparte
  { name: "Servicios", href: "/#servicios", label: "02" }, // Apunta a la sección ID
  { name: "Metodología", href: "/#metodologia", label: "03" }, // Apunta a la sección ID
  { name: "Nosotros", href: "/about", label: "04" },
  { name: "Bitácora", href: "/blog", label: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll suave si estamos en la home
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si el enlace es un ancla (empieza con /#)
    if (href.startsWith("/#")) {
      // Si ya estamos en la home, prevenimos la navegación normal y hacemos scroll
      if (window.location.pathname === "/") {
        e.preventDefault();
        const id = href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false); // Cerrar menú móvil si está abierto
        }
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled 
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 py-3" 
            : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="group relative z-50 flex items-baseline gap-1 leading-none" 
            onClick={() => setIsOpen(false)}
          >
            <span className="text-4xl md:text-7xl font-black text-white tracking-tighter mix-blend-difference lowercase hover:text-neutral-300 transition-colors">
              huup
            </span>
            <span className="w-3 h-3 bg-orange-600 rounded-sm mb-1 md:mb-2 group-hover:animate-pulse shadow-[0_0_15px_#ea580c] transition-all"></span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="group relative text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-orange-500 opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  //{link.label}
                </span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 border border-white/5 px-3 py-1 rounded-full bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              SYS_ONLINE
            </div>

            <Link 
              href="/contact" 
              className="group relative overflow-hidden bg-white text-black px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300 clip-path-button"
            >
              <div className="relative z-10 flex items-center gap-2">
                INICIAR PROYECTO 
                <Terminal size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden relative z-50 text-white hover:text-orange-500 transition-colors p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={36} strokeWidth={1.5} /> : <Menu size={36} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6 md:hidden"
          >
            {/* Fondo Técnico */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link 
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)} // Aplicado también en móvil
                    className="group flex items-baseline gap-4 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 hover:from-white hover:to-white transition-all uppercase tracking-tighter"
                  >
                    <span className="text-sm font-mono text-orange-600 font-normal">0{link.label}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 relative z-10"
            >
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full bg-orange-600 text-white p-6 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-lg"
              >
                Iniciar Proyecto
                <ArrowUpRight size={28} />
              </Link>
              
              <div className="mt-8 grid grid-cols-2 gap-4 text-neutral-600 font-mono text-xs border-t border-white/10 pt-6">
                <div>
                  <p className="text-neutral-400 mb-1">CONTACT</p>
                  <p>hello@huup.com.mx</p>
                </div>
                <div className="text-right">
                   <p className="text-neutral-400 mb-1">STATUS</p>
                   <p className="flex items-center justify-end gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> ONLINE</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}