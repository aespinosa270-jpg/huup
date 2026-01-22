"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { ArrowRight, Terminal, Activity, Cpu, Globe, Zap } from "lucide-react";

const CYBER_CHARS = "010101_█▓▒░<>/";
const ScrambleText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState(text.split("").map(() => "_").join(""));
  
  useEffect(() => {
    let iteration = 0;
    const startScramble = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          text.split("").map((char, index) => {
              if (index < iteration) return text[index];
              return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
            }).join("")
        );
        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(startScramble);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [5, -5]);
  const rotateY = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-5, 5]);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative flex min-h-[110vh] w-full items-center justify-center overflow-hidden bg-[#030303] px-6 py-20 md:px-12 selection:bg-primary/30 font-sans"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
      
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(255, 77, 0, 0.08), transparent 80%)`,
        }}
      />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-20 lg:grid-cols-2 items-center pt-10">
        
        <div className="flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
              System v2.0 // Online
            </span>
          </motion.div>

          <h1 className="text-6xl font-extrabold tracking-tighter text-white md:text-8xl lg:text-[7rem] leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              INGENIERÍA
            </span>
            <span className="block text-primary drop-shadow-[0_0_30px_rgba(255,77,0,0.3)]">
              <ScrambleText text="DIGITAL." delay={0.6} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 max-w-xl text-lg text-white/50 leading-relaxed font-light"
          >
            <span className="text-white/80 font-medium">No somos una agencia creativa.</span> Somos un laboratorio de arquitectura de software de alto rendimiento. Escalamos ecosistemas digitales donde otros fallan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 flex flex-col w-full sm:w-auto sm:flex-row gap-5"
          >
            <Link 
              href="/contact"
              className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded bg-white px-8 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
              <span>Iniciar Diagnóstico</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="#work" 
              className="group flex h-14 items-center justify-center gap-3 rounded border border-white/10 bg-white/[0.02] px-8 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-primary hover:border-primary hover:text-black hover:shadow-[0_0_20px_rgba(255,77,0,0.4)]"
            >
              <Terminal size={16} className="text-primary/70 transition-colors group-hover:text-black" />
              <span>Explorar Proyectos</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8 w-full"
          >
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">+50</p>
              <p className="text-[10px] font-mono uppercase text-white/30 tracking-widest mt-1">Deployments</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">99.9%</p>
              <p className="text-[10px] font-mono uppercase text-white/30 tracking-widest mt-1">Uptime SLA</p>
            </div>
             <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-2 opacity-50">
                <Cpu size={16} />
                <Globe size={16} />
                <Zap size={16} />
            </div>
          </motion.div>
        </div>


        <motion.div 
          className="relative hidden lg:block perspective-[2000px]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <div className="relative z-20 h-[600px] w-full rounded-2xl border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-xl shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 py-4">
               <div className="flex gap-2">
                 <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                 <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                 <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
               </div>
               <div className="flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 border border-white/5">
                 <Globe size={10} className="text-primary" />
                 <span className="font-mono text-[10px] text-white/40">huup.cloud // main</span>
               </div>
            </div>

            <div className="p-6 relative h-full">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-white/40 uppercase">Server Load</span>
                            <Activity size={12} className="text-green-500" />
                        </div>
                        <div className="text-2xl font-bold text-white">42%</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[42%] bg-green-500 rounded-full" />
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-white/40 uppercase">Requests/s</span>
                            <Zap size={12} className="text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-white">12.4k</div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-primary rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-xs text-white/60 space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                    <p><span className="text-primary">{">"}</span> initiating_sequence --force</p>
                    <p className="text-white/30">Loading modules...</p>
                    <p className="text-green-400">[SUCCESS] Next.js 16 (RC) Core Loaded</p>
                    <p className="text-green-400">[SUCCESS] Vercel Edge Connected</p>
                    <p><span className="text-primary">{">"}</span> rendering_ui...</p>
                    <motion.div 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="h-4 w-2 bg-primary inline-block align-middle ml-1"
                    />
                </div>

                 <div className="mt-4 h-32 w-full rounded-xl border border-white/5 bg-gradient-to-t from-primary/10 to-transparent relative overflow-hidden flex items-end px-1 gap-1">
                    {[30, 50, 45, 70, 60, 85, 90, 65, 50, 70, 95, 100].map((h, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1 }}
                            className="flex-1 bg-primary/30 hover:bg-primary transition-colors rounded-t-sm" 
                        />
                    ))}
                 </div>
            </div>
          </div>

          <div className="absolute -inset-10 bg-primary/20 blur-[80px] -z-10 rounded-full opacity-40" />
          
          <motion.div 
             className="absolute -right-10 top-20 z-30 h-40 w-64 rounded-xl border border-white/10 bg-[#111]/80 backdrop-blur-md shadow-2xl p-4 flex flex-col justify-between"
             style={{ x: useTransform(smoothX, [0, 1000], [-20, 20]) }}
          >
              <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center">
                      <Cpu size={16} className="text-white" />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-white">System Optimized</div>
                      <div className="text-[10px] text-white/40">Latency: 12ms</div>
                  </div>
              </div>
              <div className="text-[10px] font-mono text-green-400 bg-green-900/20 px-2 py-1 rounded w-fit">
                  STATUS: OPTIMAL
              </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}