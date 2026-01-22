"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion"; 
import { Menu, X, Terminal, ArrowRight } from "lucide-react";

// --- LINKS ACTUALIZADOS ---
const navLinks = [
  // AHORA APUNTA A LA PÁGINA /work EN LUGAR DE LA SECCIÓN /#work
  { name: "Proyectos", href: "/work", number: "01" }, 
  { name: "Servicios", href: "/#services", number: "02" },
  { name: "Método", href: "/#process", number: "03" },
  { name: "Nosotros", href: "/about", number: "04" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variantes de animación para el menú móvil
  const menuVars: Variants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1, 
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } 
    },
    exit: { 
      scaleY: 0, 
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  const mobileLinkVars: Variants = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          relative mx-6 w-full max-w-7xl rounded-xl border border-white/5 
          transition-all duration-300 
          ${scrolled ? "bg-black/80 backdrop-blur-xl py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-black/40 backdrop-blur-md py-4"}
          px-6 md:px-8
        `}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO + VERSIÓN */}
          <Link href="/" className="group flex items-end gap-3">
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-none transition-transform group-hover:scale-[1.02]">
              huup<span className="text-primary">.</span>
            </span>
            
            <div className="hidden md:flex items-center gap-2 rounded bg-white/5 px-2 py-1 border border-white/5 mb-1">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none">v16.0</span>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 -z-10 scale-90 rounded bg-white/5 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden group relative overflow-hidden bg-white px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-zinc-200 md:flex items-center gap-2 rounded-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
              <span>Agendar</span>
              <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:rotate-0" />
            </Link>

            <button 
              className="z-50 flex h-10 w-10 items-center justify-center rounded bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 origin-top bg-[#050505] px-6 py-24 md:hidden"
          >
            {/* Fondo con Ruido */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link) => (
                  <div key={link.name} className="overflow-hidden border-b border-white/10 pb-4">
                    <motion.div variants={mobileLinkVars}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline justify-between"
                      >
                        <span className="text-4xl font-black text-white transition-colors group-hover:text-primary tracking-tighter uppercase">
                          {link.name}
                        </span>
                        <span className="font-mono text-xs text-white/30 group-hover:text-primary">
                          /{link.number}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              <div className="space-y-6">
                 <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-white/30">
                    <Terminal size={12} />
                    <span>Navegación del sistema // activa</span>
                 </div>

                 <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-3 rounded bg-primary py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform active:scale-95"
                  >
                    Iniciar Proyecto
                    <ArrowRight size={16} />
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}