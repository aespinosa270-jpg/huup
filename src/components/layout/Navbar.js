// src/components/layout/Navbar.js
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, User, LogIn, UserPlus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Para el menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Para el dropdown de escritorio
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null); // Referencia para detectar clicks fuera

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // --- NAVLINKS ---
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Portafolio", href: "/#portafolio" },
    { name: "Blog", href: "/blog" },
    { name: "Foro", href: "/foro" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/20" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* 1. LOGO */}
          <Link href="/" className="group text-5xl font-black tracking-tighter text-white z-50 relative flex items-end">
            huup
            <span className="text-brand-primary transform group-hover:scale-125 transition-transform duration-300 origin-bottom mb-1">.</span>
          </Link>

          {/* 2. ISLA DE NAVEGACIÓN (Escritorio) */}
          <div className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
            scrolled 
              ? "bg-white/5 border border-white/10" 
              : "bg-transparent border-transparent"
          }`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-primary shadow-[0_0_10px_#f97316] group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* 3. ÁREA DE ACCESO (Escritorio) + HAMBURGUESA (Móvil) */}
          <div className="flex items-center gap-4">
            
            {/* --- DROPDOWN DE ACCESO (Escritorio) --- */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              
              {/* ✅ BOTÓN MEJORADO (CON EFECTO ONLINE) */}
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-full transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group"
              >
                {/* Efecto de brillo al pasar el mouse */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                
                <div className="relative z-10 flex items-center gap-2">
                    <User size={18} />
                    <span>Acceso</span>
                    {/* Indicador de Status "Online" */}
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                </div>
                
                <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Menú Desplegable Animado */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.2)] overflow-hidden p-2 z-50"
                  >
                    <div className="px-4 py-2 text-xs font-mono text-gray-500 uppercase tracking-wider border-b border-white/5 mb-2">
                      // User.Auth
                    </div>
                    <Link 
                      href="/login" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                    >
                      <LogIn size={18} className="text-brand-primary group-hover:scale-110 transition-transform" />
                      Iniciar Sesión
                    </Link>
                    <Link 
                      href="/register" 
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group mt-1"
                    >
                      <UserPlus size={18} className="text-brand-primary group-hover:scale-110 transition-transform" />
                      Crear Cuenta
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* --------------------------------------- */}

            {/* Hamburguesa (Móvil) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors active:scale-95 z-50 relative"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* 5. MENÚ MÓVIL (Cyber Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Enlaces Principales Móvil */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-brand-primary transition-all"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Botones de Acceso Móvil */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6"
            >
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <LogIn size={20} className="text-brand-primary" /> Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-brand-primary text-white text-lg font-bold rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <UserPlus size={20} /> Crear Cuenta
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}