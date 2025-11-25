// src/components/sections/Hero.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Layout, Server, Zap, Smartphone, Code2, Database } from "lucide-react";

const floatAnimation = (delay) => ({
  initial: { y: 0 },
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 6,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-[#050505] perspective-[2000px]">
      
      {/* 1. FONDO (Grid Técnico Ultra-Sutil) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#050505_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === COLUMNA IZQUIERDA: Texto === */}
          <div className="text-left relative z-20">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6"
            >
              <Terminal size={12} /> Ingeniería de Software
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]"
            >
              ARQUITECTURA <br />
              DIGITAL <br />
              {/* CORRECCIÓN: Copy agresivo y técnico */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500 drop-shadow-[0_0_35px_rgba(249,115,22,0.4)]">
                DE ALTO RENDIMIENTO
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 max-w-xl mb-10 font-light border-l-2 border-brand-primary/30 pl-6"
            >
              Trascendemos el código convencional. Creamos ecosistemas digitales escalables y experiencias inmersivas, diseñadas hoy para dominar el internet de mañana.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="#contacto" 
                className="group relative px-8 py-4 bg-brand-primary text-white font-bold text-lg rounded hover:bg-brand-secondary transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
              >
                Iniciar Proyecto <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="#portafolio" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md"
              >
                Ver Casos de Éxito
              </Link>
            </motion.div>
          </div>

          {/* === COLUMNA DERECHA: ECOSISTEMA 3D (Sin cambios, ya está perfecto) === */}
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-1000">
            
            {/* Luz ambiental trasera (Naranja puro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />

            {/* CONTENEDOR 3D */}
            <motion.div
               className="relative w-[450px] h-[450px]"
               style={{ 
                 transformStyle: "preserve-3d", 
                 transform: "rotateX(55deg) rotateZ(45deg) scale(0.85)", 
               }}
            >
              
              {/* CAPA BASE: Grid de suelo */}
              <div 
                className="absolute inset-0 border border-brand-primary/20 bg-brand-primary/5 rounded-xl grid grid-cols-6 grid-rows-6"
                style={{ transform: "translateZ(-80px)" }}
              >
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="border border-brand-primary/5" />
                ))}
              </div>

              {/* --- ELEMENTO 1: SERVIDOR (BACKEND) --- */}
              <motion.div 
                variants={floatAnimation(0)}
                initial="initial"
                animate="animate"
                className="absolute top-0 right-0 w-48 h-64 bg-[#0a0a0a] border-2 border-brand-primary/30 rounded-lg shadow-2xl flex flex-col p-4 gap-3"
                style={{ transform: "translateZ(0px) translate(20px, -20px)" }}
              >
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-2 w-full bg-white/5 rounded-full flex gap-1 overflow-hidden">
                        <div className="w-10 h-full bg-brand-primary/50 animate-pulse" />
                    </div>
                ))}
                <div className="mt-auto flex items-center gap-2 text-brand-primary/50">
                    <Database size={20} />
                    <span className="text-[10px] font-mono">DATA_CENTER</span>
                </div>
              </motion.div>

              {/* --- ELEMENTO 2: EDITOR DE CÓDIGO --- */}
              <motion.div 
                variants={floatAnimation(1)}
                initial="initial"
                animate="animate"
                className="absolute top-10 right-20 w-64 h-48 bg-[#0a0a0a]/90 border border-white/20 rounded-lg shadow-xl backdrop-blur-sm flex flex-col p-4 gap-2"
                style={{ transform: "translateZ(40px)" }}
              >
                <div className="flex justify-between border-b border-white/10 pb-2 mb-1">
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <Code2 size={12} className="text-gray-500" />
                </div>
                <div className="space-y-2 opacity-60">
                    <div className="h-2 w-3/4 bg-brand-primary/40 rounded" />
                    <div className="h-2 w-1/2 bg-white/40 rounded" />
                    <div className="h-2 w-full bg-white/20 rounded" />
                    <div className="h-2 w-2/3 bg-brand-primary/20 rounded" />
                </div>
              </motion.div>

              {/* --- ELEMENTO 3: INTERFAZ WEB (FRONTEND) --- */}
              <motion.div 
                variants={floatAnimation(2)}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-[#0a0a0a]/95 border-2 border-brand-primary rounded-xl shadow-[0_0_60px_rgba(249,115,22,0.2)] p-5 flex flex-col gap-4"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="flex justify-between items-center">
                    <div className="h-8 w-8 border border-brand-primary rounded flex items-center justify-center bg-brand-primary/10">
                        <Layout size={16} className="text-brand-primary" />
                    </div>
                    <div className="h-2 w-32 bg-brand-primary/20 rounded" />
                </div>
                
                <div className="flex gap-4 h-32">
                    <div className="flex-1 border border-dashed border-brand-primary/30 rounded bg-brand-primary/5 flex items-center justify-center relative overflow-hidden">
                        <motion.div 
                           animate={{ top: ["-100%", "200%"] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                           className="absolute w-full h-[20%] bg-brand-primary/20 blur-md"
                        />
                        <div className="text-brand-primary text-xs tracking-widest">IMG</div>
                    </div>
                    <div className="flex-1 space-y-2 pt-4">
                        <div className="h-4 w-full bg-brand-primary/40 rounded" />
                        <div className="h-2 w-full bg-brand-primary/20 rounded" />
                        <div className="h-2 w-2/3 bg-brand-primary/20 rounded" />
                        <div className="mt-4 h-8 w-24 border border-brand-primary rounded bg-brand-primary/10 flex items-center justify-center">
                            <div className="h-1 w-10 bg-brand-primary" />
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="h-16 border border-brand-primary/20 rounded bg-white/5" />
                    <div className="h-16 border border-brand-primary/20 rounded bg-white/5" />
                    <div className="h-16 border border-brand-primary/20 rounded bg-white/5" />
                </div>
              </motion.div>

              {/* --- ELEMENTO 4: MÓVIL FLOTANTE --- */}
              <motion.div 
                variants={floatAnimation(1.5)}
                initial="initial"
                animate="animate"
                className="absolute -right-12 top-1/2 w-24 h-48 bg-[#0a0a0a] border-2 border-white/20 rounded-2xl p-2 shadow-2xl flex flex-col gap-2"
                style={{ transform: "translateZ(120px) translateY(-50%)" }}
              >
                 <div className="w-full h-1 bg-white/20 rounded-full mx-auto mb-2" />
                 <div className="flex-1 bg-white/5 rounded border border-dashed border-white/10 flex items-center justify-center">
                    <Smartphone size={20} className="text-brand-primary" />
                 </div>
                 <div className="h-8 w-full bg-brand-primary rounded" />
              </motion.div>

              {/* --- ELEMENTO 5: BADGE VELOCIDAD --- */}
              <motion.div 
                 animate={{ z: [130, 150, 130], scale: [1, 1.1, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute -top-6 left-10 px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-full shadow-[0_0_20px_#f97316] flex items-center gap-1"
                 style={{ transform: "translateZ(140px)" }}
              >
                <Zap size={12} fill="currentColor" /> 100% SPEED
              </motion.div>

              {/* CONEXIONES */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ transform: "translateZ(60px)" }}>
                <line x1="100%" y1="20%" x2="50%" y2="50%" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <line x1="80%" y1="80%" x2="110%" y2="50%" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <motion.circle r="3" fill="#f97316" animate={{ cx: ["100%", "50%"], cy: ["20%", "50%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
              </svg>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}