// src/components/sections/Hero.js
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu, Zap, Smartphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- 1. MATRIX RAIN EFFECT (OPTIMIZADO: Solo corre en Desktop) ---
const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // DETECTAR MÓVIL: Si es pantalla pequeña, no ejecutar el script
        if (window.innerWidth < 768) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const chars = '0101010101ABCDEF<>/\\{};+*&%$#@'.split('');
        const fontSize = 14;
        const columns = width / fontSize;
        
        const drops = [];
        for(let x = 0; x < columns; x++) drops[x] = 1;

        const draw = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#f97316'; 
            ctx.font = `${fontSize}px monospace`;
            
            for(let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if(drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); 

        const handleResize = () => {
            if (window.innerWidth < 768) return; // No redibujar en móvil
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // CSS: hidden md:block asegura que ni siquiera se pinte el elemento en móvil
    return (
        <canvas 
            ref={canvasRef} 
            className="hidden md:block absolute inset-0 w-full h-full opacity-20 mix-blend-screen pointer-events-none"
        />
    );
};

// --- 2. TEXT SCRAMBLE EFFECT (Sin cambios) ---
const ScrambleTitle = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
};

// --- 3. ANIMACIÓN FLOTANTE ---
const floatAnimation = (delay) => ({
    initial: { y: 0 },
    animate: {
        y: [-15, 15, -15],
        transition: { duration: 6, delay: delay, repeat: Infinity, ease: "easeInOut" }
    }
});

// --- 4. HUUP ISOMETRIC ECOSYSTEM (Solo visible en Desktop) ---
const HuupIsometricEcosystem = () => {
    return (
        <div className="relative w-[600px] h-[600px] flex items-center justify-center perspective-[2000px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-primary/20 blur-[100px] rounded-full animate-pulse" />
            <motion.div 
                className="relative w-[450px] h-[400px] preserve-3d"
                style={{ transformStyle: "preserve-3d", transform: "rotateX(55deg) rotateZ(45deg) scale(0.9)" }}
            >
                {/* SOMBRA OPTIMIZADA */}
                <div className="absolute inset-0 bg-black blur-xl opacity-50 transform translate-z-[-50px] scale-90" />

                {/* DESKTOP UI */}
                <div className="absolute inset-0 bg-[#050505]/90 border border-white/10 rounded-xl backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col group hover:border-brand-primary/50 transition-colors duration-500">
                    <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-6 flex flex-col gap-4 flex-1 relative">
                        <motion.div 
                            animate={{ top: ["-20%", "120%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent z-10 pointer-events-none"
                        />
                        <div className="flex gap-4 h-32">
                            <div className="flex-1 bg-white/5 rounded border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-black select-none">HUUP</div>
                            </div>
                            <div className="w-1/3 flex flex-col gap-2">
                                <div className="h-2 w-full bg-brand-primary/20 rounded" />
                                <div className="h-2 w-2/3 bg-brand-primary/10 rounded" />
                                <div className="h-8 w-full bg-brand-primary rounded mt-auto flex items-center justify-center text-[10px] font-bold text-black">DEPLOY</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-auto h-20">
                            {[1,2,3].map(i => <div key={i} className="bg-white/5 rounded border border-white/5" />)}
                        </div>
                    </div>
                </div>

                {/* CÓDIGO FLOTANTE */}
                <motion.div 
                    variants={floatAnimation(0)}
                    initial="initial"
                    animate="animate"
                    className="absolute -right-12 -top-12 w-48 h-32 bg-[#0a0a0a] border border-brand-primary/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-3 flex flex-col gap-2 transform translate-z-[40px]"
                    style={{ transform: "translateZ(60px)" }}
                >
                    <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-white/10 pb-1 mb-1 font-mono">
                        <span>server.js</span>
                        <Code2 size={10} />
                    </div>
                    <div className="space-y-1">
                        <div className="h-1 w-3/4 bg-green-500/50 rounded" />
                        <div className="h-1 w-1/2 bg-purple-500/50 rounded pl-2" />
                        <div className="h-1 w-2/3 bg-blue-500/50 rounded pl-2" />
                    </div>
                    <div className="mt-auto text-[8px] font-mono text-green-400 animate-pulse">&gt; Compiled successfully</div>
                </motion.div>

                {/* MÓVIL */}
                <motion.div 
                    variants={floatAnimation(1.5)}
                    initial="initial"
                    animate="animate"
                    className="absolute -left-8 bottom-12 w-20 h-40 bg-[#0a0a0a] border-2 border-white/20 rounded-[1rem] shadow-[0_0_40px_rgba(249,115,22,0.3)] p-1 flex flex-col transform translate-z-[80px]"
                    style={{ transform: "translateZ(100px)" }}
                >
                    <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-2 mt-1" />
                    <div className="flex-1 bg-brand-primary/10 rounded border border-brand-primary/20 flex flex-col items-center justify-center gap-2">
                        <Smartphone size={16} className="text-brand-primary" />
                    </div>
                    <div className="h-6 w-full bg-brand-primary mt-1 rounded-b-[0.8rem]" />
                </motion.div>

                {/* BADGE */}
                <motion.div 
                    animate={{ z: [120, 140, 120], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 left-10 px-4 py-1.5 bg-brand-primary text-black text-[10px] font-black uppercase tracking-wider rounded-full shadow-[0_0_20px_#f97316] flex items-center gap-1 transform translate-z-[120px]"
                    style={{ transform: "translateZ(150px) rotateX(-20deg)" }}
                >
                    <Zap size={10} fill="currentColor" /> 100% Speed
                </motion.div>
            </motion.div>
        </div>
    );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden pt-20 md:pt-0">
      
      {/* 0. MATRIX RAIN: Solo visible en desktop (hidden md:block) */}
      <div className="absolute inset-0 z-0">
          <MatrixRain />
      </div>

      {/* 1. FONDO GRID: Plano en móvil, 3D en Desktop */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none perspective-1000">
         {/* En móvil quitamos el rotateX y scale para ahorrar GPU */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] md:[transform:rotateX(60deg)scale(2)] origin-top opacity-20 md:opacity-30"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </motion.div>

      {/* Spotlights: Simplificados en móvil */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === COLUMNA IZQUIERDA: Texto === */}
          <div className="text-left relative z-20 pt-10 md:pt-0">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
            >
              <Terminal size={12} /> System.Root // v2.0
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
              <div className="flex flex-col">
                 <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                 >
                    INGENIERÍA
                 </motion.span>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-primary bg-300% animate-gradient">
                    <ScrambleTitle text="DIGITAL" />
                 </span>
              </div>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light border-l-2 border-brand-primary/30 pl-6 leading-relaxed"
            >
              Arquitectura de software de alto rendimiento. Sin plantillas. 
              Creamos ecosistemas escalables diseñados para dominar el mercado.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="#contacto" 
                className="group relative px-8 py-4 bg-brand-primary text-black font-bold text-sm uppercase tracking-widest rounded-sm hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                    INICIALIZAR <ArrowRight size={16} />
                </span>
              </Link>
              
              <Link 
                href="#portafolio" 
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white/5 hover:border-white transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Code2 size={16} className="text-gray-500" /> SISTEMAS
              </Link>
            </motion.div>

            {/* Stats Rápidos */}
            <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1 }}
                 className="mt-12 flex gap-8 border-t border-white/5 pt-6"
            >
                <div>
                    <div className="text-2xl font-bold text-white font-mono flex items-center gap-1">
                        +50 <span className="text-brand-primary text-sm">PROYECTOS</span>
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase">Desplegados</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white font-mono flex items-center gap-1">
                        99.9% <span className="text-green-500 text-sm">UPTIME</span>
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase">Garantizado</div>
                </div>
            </motion.div>
          </div>

          {/* === COLUMNA DERECHA: OCULTA EN MÓVIL PARA RENDIMIENTO === */}
          <div className="relative w-full h-full hidden lg:flex items-center justify-center pointer-events-none">
             <HuupIsometricEcosystem />
          </div>

      </div>
    </section>
  );
}