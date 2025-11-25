// src/components/layout/Navbar.js
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, User, LogIn, UserPlus, ChevronDown, Lock, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- UTILIDAD: EFECTO DE TEXTO SCRAMBLE (DESENCRIPTADO) ---
const ScrambleText = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} className={className}>
      {display}
    </span>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const navLinks = [
    { name: "Servicios", href: "/#servicios" },
    { name: "Sistemas", href: "/#portafolio" },
    { name: "Bitácora", href: "/blog" },
    { name: "Comunidad", href: "/foro" },
    { name: "Protocolo", href: "/#contacto" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-[#050505]/80 backdrop-blur-md border-white/10 py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        {/* PROGRESS BAR (Línea naranja inferior) */}
        <motion.div 
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-primary origin-left z-50 shadow-[0_0_10px_#f97316]"
            style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* 1. LOGO MINIMALISTA (huup.) */}
          <div className="flex items-center gap-6">
            <Link href="/" className="group flex flex-col justify-center relative z-50">
                <div className="flex items-baseline leading-none">
                    <span className="text-6xl font-black tracking-tighter text-white group-hover:text-gray-200 transition-colors">
                        huup
                    </span>
                    <span className="text-4xl font-black leading-none text-brand-primary group-hover:animate-pulse">
                        .
                    </span>
                </div>
            </Link>
          </div>

          {/* 2. ISLA DE NAVEGACIÓN (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 px-2 py-1 rounded-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest group overflow-hidden rounded-sm ${
                    link.name === "Protocolo" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Indicador especial para Protocolo (Contacto) */}
                {link.name === "Protocolo" && (
                    <span className="absolute right-2 top-2 w-1 h-1 bg-brand-primary rounded-full animate-pulse" />
                )}

                {/* Background Hover Effect */}
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
                
                {/* Text Scramble Effect */}
                <span className="relative z-10 flex items-center gap-1">
                    <ScrambleText text={link.name} className="group-hover:text-brand-primary transition-colors" />
                </span>
                
                {/* Corner Accents */}
                <span className="absolute top-0 left-0 w-1.5 h-1.5 border-l border-t border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-r border-b border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* 3. ÁREA DE ACCESO */}
          <div className="flex items-center gap-4">
            
            {/* --- DROPDOWN TÉCNICO --- */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-black text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all group hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] active:scale-95 border border-transparent hover:border-white/20"
              >
                {/* EFECTO DE BARRIDO (ENERGY SWEEP) */}
                <div className="absolute inset-0 bg-white/40 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                
                {/* CONTENIDO DEL BOTÓN */}
                <Lock size={12} className="relative z-10" />
                <span className="relative z-10">ACCESO_SYS</span>
                <ChevronDown size={12} className={`relative z-10 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-[#0a0a0a] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] p-1 z-50 overflow-hidden"
                  >
                    {/* Decorative Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="px-3 py-2 text-[9px] font-mono text-gray-500 uppercase border-b border-white/10 mb-1 flex justify-between">
                        <span>// Auth.Protocol</span>
                        <span className="text-green-500">SECURE</span>
                        </div>
                        <Link 
                        href="/login" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors group border-l-2 border-transparent hover:border-brand-primary"
                        >
                        <div className="p-1.5 bg-white/5 rounded text-brand-primary group-hover:scale-110 transition-transform">
                            <LogIn size={14} /> 
                        </div>
                        <div>
                            <div className="font-bold">Iniciar Sesión</div>
                            <div className="text-[9px] text-gray-600">Credenciales requeridas</div>
                        </div>
                        </Link>
                        <Link 
                        href="/register" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors group border-l-2 border-transparent hover:border-brand-primary"
                        >
                        <div className="p-1.5 bg-white/5 rounded text-brand-primary group-hover:scale-110 transition-transform">
                            <UserPlus size={14} /> 
                        </div>
                        <div>
                            <div className="font-bold">Nueva Cuenta</div>
                            <div className="text-[9px] text-gray-600">Registro de usuario</div>
                        </div>
                        </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburguesa (Móvil) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 border border-white/10 bg-white/5 rounded-sm active:scale-95 z-50 relative hover:bg-brand-primary hover:text-black transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* 5. MENÚ MÓVIL (Full Screen Terminal) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col pt-24 pb-8 px-6"
          >
             {/* Background Noise/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="font-mono text-xs text-brand-primary mb-6 border-b border-brand-primary/30 pb-2">
                    // SYSTEM_NAVIGATION_DIRECTORY
                </div>
                
                <div className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, type: "spring" }}
                    >
                        <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block group"
                        >
                            <div className="flex items-end gap-3 py-3 border-b border-white/5 group-hover:border-brand-primary/50 transition-colors">
                                <span className="text-xs font-mono text-gray-600 group-hover:text-brand-primary transition-colors">0{i+1}</span>
                                <span className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-orange-500 transition-all">
                                    {link.name}
                                </span>
                                <ArrowUpRight className="ml-auto text-gray-600 group-hover:text-brand-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </motion.div>
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-auto"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col items-center justify-center gap-2 py-6 border border-white/10 bg-white/5 hover:border-brand-primary hover:bg-brand-primary/10 transition-colors rounded-sm"
                        >
                            <LogIn size={20} className="text-brand-primary" />
                            <span className="text-xs font-mono text-white uppercase font-bold">Iniciar Sesión</span>
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col items-center justify-center gap-2 py-6 bg-brand-primary text-black hover:bg-orange-400 transition-colors rounded-sm shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        >
                            <UserPlus size={20} />
                            <span className="text-xs font-mono text-black uppercase font-bold">Crear Cuenta</span>
                        </Link>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-gray-600">
                        <span>HUUP SYSTEMS v1.0</span>
                        <span>MX CITY SERVERS</span>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}