"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Target, Zap, Globe, Users, Award, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#020202] min-h-screen w-full relative selection:bg-primary/30">
      <Navbar />
      
      {/* --- HERO: MANIFIESTO --- */}
      <AboutHero />
      
      {/* --- STATS: NÚMEROS DE LA AGENCIA --- */}
      <AgencyStats />
      
      {/* --- PHILOSOPHY: VALORES NUCLEARES --- */}
      <PhilosophyGrid />
      
      {/* --- TEAM: SQUAD MODEL --- */}
      <SquadSection />
      
      {/* --- LOCATION: HQ --- */}
      <LocationSection />
      
      <Footer />
    </main>
  );
}

// --- SECCIÓN 1: HERO MANIFIESTO ---
function AboutHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-white/5 overflow-hidden">
       {/* Fondo Animado */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 rounded-full mb-8"
          >
             <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
             <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Identidad Corporativa</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
             No somos <br />
             <span className="text-white/20">Creativos.</span> <br />
             Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Ingenieros.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <p className="text-lg text-white/60 leading-relaxed">
                El diseño web tradicional murió. En la era de la IA y la velocidad, lo bonito no es suficiente. 
                <strong className="text-white"> Huup</strong> nació en la Ciudad de México con una sola misión: construir infraestructura digital que genere capital, no solo "likes".
             </p>
             <div className="font-mono text-xs text-white/40 space-y-4 border-l border-white/10 pl-6">
                <p>EST. 2025 — CDMX, MX</p>
                <p>STATUS: OPERATIONAL</p>
                <p>MISSION: DIGITAL DOMINANCE</p>
             </div>
          </div>
       </div>
    </section>
  );
}

// --- SECCIÓN 2: STATS ---
function AgencyStats() {
   const stats = [
      { label: "Proyectos Desplegados", value: "45+", icon: RocketIcon },
      { label: "Capital Generado (Clientes)", value: "$12M+", icon: ChartIcon },
      { label: "Lighthouse Score Promedio", value: "99.0", icon: SpeedIcon },
      { label: "Stack Tecnológico", value: "v2.0", icon: StackIcon },
   ];

   return (
      <section className="py-20 border-b border-white/5 bg-[#050505]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
               <div key={i} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono tracking-tighter">
                     {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono flex items-center justify-center md:justify-start gap-2">
                     <stat.icon /> {stat.label}
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

// --- SECCIÓN 3: FILOSOFÍA (GRID) ---
function PhilosophyGrid() {
   const values = [
      { title: "Rigor Matemático", desc: "No adivinamos. Usamos data y métricas para justificar cada píxel y cada línea de código." },
      { title: "Velocidad Extrema", desc: "La latencia es el enemigo. Optimizamos para milisegundos usando Vercel Edge y RSC." },
      { title: "Diseño Atómico", desc: "Sistemas escalables, no páginas sueltas. Construimos lenguajes visuales que crecen contigo." },
      { title: "Transparencia Radical", desc: "Sin cajas negras. Tienes acceso directo al repositorio, al roadmap y a los desarrolladores." },
   ];

   return (
      <section className="py-32 px-6 bg-[#030303] relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
         
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
               <h2 className="text-4xl font-black text-white uppercase tracking-tight">El Código <span className="text-primary">Huup</span>.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {values.map((val, i) => (
                  <div key={i} className="group p-8 border border-white/10 bg-[#0A0A0A] hover:bg-white/[0.02] transition-colors duration-300">
                     <div className="text-primary mb-4 font-mono text-xs">0{i + 1}</div>
                     <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{val.title}</h3>
                     <p className="text-sm text-white/50 leading-relaxed">{val.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

// --- SECCIÓN 4: EL EQUIPO (SQUAD MODEL) ---
function SquadSection() {
   return (
      <section className="py-32 px-6 border-y border-white/5 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <div className="inline-block px-3 py-1 bg-white/10 rounded text-[10px] font-mono text-white/60 mb-6">
                  ESTRUCTURA OPERATIVA
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                  Squads <br /> Dedicados.
               </h2>
               <p className="text-white/50 text-lg leading-relaxed mb-8">
                  No somos freelancers dispersos. Operamos como unidades tácticas (Squads). Cada proyecto recibe un equipo completo: Tech Lead, UI Engineer, Backend Architect y Growth Specialist.
               </p>
               
               <div className="space-y-4">
                  <RoleItem role="CEO / Tech Lead" tech="Vision & Architecture" />
                  <RoleItem role="Senior Frontend" tech="Next.js / WebGL / Motion" />
                  <RoleItem role="Backend Specialist" tech="Supabase / Python / SQL" />
                  <RoleItem role="Growth Engineer" tech="SEO / Analytics / CRO" />
               </div>
            </div>
            
            <div className="md:w-1/2 relative h-[500px] w-full bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center group">
               {/* Representación Abstracta del Equipo (Radar) */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
               <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="absolute top-0 w-2 h-2 bg-primary rounded-full blur-[2px]" />
                  <div className="w-48 h-48 border border-white/5 rounded-full" />
                  <div className="w-32 h-32 border border-white/5 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/20 to-transparent w-px h-full left-1/2 -translate-x-1/2 rotate-45" />
               </div>
               <div className="absolute bottom-8 left-8 font-mono text-xs text-white/40">
                  <p>ACTIVE AGENTS: 12</p>
                  <p>DEPLOYED UNITS: 4</p>
               </div>
            </div>
         </div>
      </section>
   )
}

// --- SECCIÓN 5: UBICACIÓN ---
function LocationSection() {
   return (
      <section className="h-[500px] relative w-full overflow-hidden flex items-center justify-center bg-[#080808]">
         {/* Mapa Estilizado (Abstracto con CSS) */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center filter grayscale invert contrast-150" />
         
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
         
         <div className="relative z-10 text-center">
             <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-6 animate-ping" />
             <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
             <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-2">Mexico City</h2>
             <p className="text-white/40 font-mono text-sm">19.4326° N, 99.1332° W</p>
             <p className="text-primary text-xs mt-4 font-mono border border-primary/30 bg-primary/10 px-4 py-2 rounded inline-block">
                HEADQUARTERS
             </p>
         </div>
      </section>
   )
}

// --- ICONOS & HELPERS ---
function RoleItem({ role, tech }: { role: string, tech: string }) {
   return (
      <div className="flex items-center justify-between border-b border-white/10 py-3 group hover:border-white/30 transition-colors">
         <span className="text-white font-bold">{role}</span>
         <span className="text-xs font-mono text-white/40 group-hover:text-primary transition-colors">{tech}</span>
      </div>
   )
}

function RocketIcon() { return <Rocket className="w-3 h-3 text-primary" size={12} /> } // Placeholder, usa iconos reales de lucide
function ChartIcon() { return <Target className="w-3 h-3 text-primary" size={12} /> }
function SpeedIcon() { return <Zap className="w-3 h-3 text-primary" size={12} /> }
function StackIcon() { return <Code2 className="w-3 h-3 text-primary" size={12} /> }

// Importación de iconos necesarios en el componente principal
import { Rocket } from "lucide-react";