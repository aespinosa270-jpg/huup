// src/components/sections/Services.js
"use client";

import { motion } from "framer-motion";
import { Monitor, ShoppingBag, Database, ArrowUpRight, Terminal, GitMerge, Search, Layers, Rocket, Activity } from "lucide-react";

// --- VISUAL COMPONENTS (ANIMACIONES INTACTAS) ---

const WebVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-sm bg-black/40 p-3 flex flex-col gap-2 group-hover:border-brand-primary/50 transition-colors overflow-hidden relative">
    {/* Scanline */}
    <motion.div 
      animate={{ top: ["-100%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[20%] bg-brand-primary/10 blur-md z-10 pointer-events-none"
    />
    <div className="flex gap-2">
       <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-primary transition-colors" />
       <div className="w-2 h-2 rounded-full bg-white/20" />
    </div>
    {/* Header Loading */}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-2 w-1/3 bg-white/10 rounded group-hover:bg-brand-primary/40 origin-left transition-colors" 
    />
    <div className="flex gap-2 h-full">
       <motion.div 
         initial={{ height: 0 }}
         whileInView={{ height: "100%" }}
         transition={{ duration: 0.5, delay: 0.2 }}
         className="w-1/3 bg-white/5 rounded border border-dashed border-white/10" 
       />
       <div className="flex-1 h-full space-y-2">
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-2 w-full bg-white/10 rounded" />
          <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }} className="h-2 w-2/3 bg-white/10 rounded" />
          <div className="mt-2 h-10 w-full bg-brand-primary/5 border border-brand-primary/20 rounded flex items-center justify-center overflow-hidden">
             <motion.div whileHover={{ width: "100%" }} className="h-1 w-10 bg-brand-primary rounded transition-all duration-300" />
          </div>
       </div>
    </div>
  </div>
);

const ShopVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-sm bg-black/40 p-3 grid grid-cols-2 gap-2 group-hover:border-brand-primary/50 transition-colors">
     {[1, 2, 3, 4].map((i) => (
       <motion.div 
         key={i}
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ delay: i * 0.2, duration: 0.5 }}
         whileHover={{ scale: 1.05, borderColor: "rgba(249,115,22,0.5)" }}
         className="bg-black border border-white/10 rounded flex flex-col items-center justify-center p-1 gap-1 relative overflow-hidden cursor-default"
       >
          {i === 2 && (
            <motion.div 
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-primary rounded-full" 
            />
          )} 
          <div className="w-6 h-6 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors" />
          <div className="w-8 h-1 bg-white/10 rounded-full" />
       </motion.div>
     ))}
  </div>
);

const BackendVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-sm bg-black/40 p-3 flex flex-col justify-between group-hover:border-brand-primary/50 transition-colors">
     {[1, 2, 3].map((i) => (
       <div key={i} className="h-7 w-full bg-black border border-white/10 rounded flex items-center justify-between px-3 relative overflow-hidden">
          <motion.div 
            animate={{ left: ["-20%", "120%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
            className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
          />
          <div className="flex gap-1 relative z-10">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: Math.random() }} className={`w-1 h-1 rounded-full ${i===1 ? 'bg-brand-primary' : 'bg-green-500'}`} />
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror", delay: Math.random() }} className="w-1 h-1 rounded-full bg-white/30" />
          </div>
          <div className="h-1 w-10 bg-white/10 rounded relative z-10" />
       </div>
     ))}
  </div>
);

// --- UTILS: Corner Brackets para estética técnica ---
const CornerBrackets = () => (
    <>
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </>
);

// --- DATA HARDENING (Español Técnico MX) ---

const services = [
  {
    id: "01",
    icon: <Monitor size={20} />,
    title: "Interfaces Corporativas",
    desc: "Arquitecturas SPA/PWA diseñadas para retención. Rendering ultrarrápido y SEO técnico.",
    visual: <WebVisual />
  },
  {
    id: "02",
    icon: <ShoppingBag size={20} />,
    title: "Sistemas Transaccionales", // Cambio: Transactional Systems -> Sistemas Transaccionales
    desc: "Comercio headless. Sincronización de inventario en tiempo real y pasarelas de pago seguras.",
    visual: <ShopVisual />
  },
  {
    id: "03",
    icon: <Database size={20} />,
    title: "Arquitectura de Datos", // Cambio: Backend Arch -> Arquitectura de Datos
    desc: "Bases de datos SQL/NoSQL, autenticación OAuth 2.0 y endpoints optimizados para Edge.",
    visual: <BackendVisual />
  },
];

const methodologySteps = [
    { step: "01", label: "Diagnóstico", icon: <Search size={16}/>, desc: "Auditoría Técnica" }, // Discovery -> Diagnóstico
    { step: "02", label: "Ingeniería", icon: <Layers size={16}/>, desc: "Diseño de Sistema" }, // Engineering -> Ingeniería
    { step: "03", label: "Desarrollo", icon: <GitMerge size={16}/>, desc: "Ejecución de Sprints" }, // Dev.Core -> Desarrollo
    { step: "04", label: "Despliegue", icon: <Rocket size={16}/>, desc: "Lanzamiento Global" } // Deploy -> Despliegue
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-brand-dark relative overflow-hidden">
      
      {/* Fondo Grid + Glow Atmosférico */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Spotlight Effect estático */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO TÉCNICO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6"
                >
                    <Terminal size={12} /> Servicios.Sys 
                    {/* Cambio: System.Services -> Servicios.Sys */}
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
                >
                    Arquitectura <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
                    Digital
                    </span>
                </motion.h2>
            </div>
            
            {/* Status Ticker (Localizado) */}
            <div className="hidden md:flex items-center gap-4 p-4 border border-white/10 bg-black/50 backdrop-blur-sm rounded font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-brand-primary animate-pulse"/>
                    <span>SISTEMA_ACTIVO</span> {/* SYSTEM_READY -> SISTEMA_ACTIVO */}
                </div>
                <div className="h-4 w-px bg-white/20" />
                <div>DISPONIBILIDAD: 99.9%</div> {/* UPTIME -> DISPONIBILIDAD */}
            </div>
        </div>

        {/* GRID DE SERVICIOS - ESTILO TARJETA TÉCNICA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-colors overflow-hidden">
                <CornerBrackets />
                
                {/* Number Watermark */}
                <div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 select-none font-mono group-hover:text-brand-primary/10 transition-colors">
                    {item.id}
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/5 border border-white/5 rounded text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                            {item.icon}
                        </div>
                        <ArrowUpRight className="text-white/20 group-hover:text-brand-primary transition-colors" size={20} />
                    </div>

                    <div className="mb-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500">
                        {item.visual}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-brand-primary transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
                
                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PIPELINE DE METODOLOGÍA (Estilo CI/CD) */}
        <div className="relative border border-white/10 bg-black/60 p-8 md:p-12 rounded-lg backdrop-blur-xl">
            <div className="absolute -top-3 left-8 bg-brand-dark px-2 text-xs font-mono text-brand-primary border border-brand-primary/30">
                // FLUJO_DE_EJECUCIÓN {/* EXECUTION_PIPELINE -> FLUJO_DE_EJECUCIÓN */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Línea conectora (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />

                {methodologySteps.map((m, i) => (
                    <motion.div 
                        key={m.step}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative z-10 flex flex-col items-center text-center group"
                    >
                        {/* Circle Node */}
                        <div className="w-12 h-12 bg-brand-dark border border-white/20 rounded-full flex items-center justify-center text-gray-400 mb-4 group-hover:border-brand-primary group-hover:text-brand-primary group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300 relative">
                             {m.icon}
                             {/* Small Status Dot */}
                             <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-black rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                             </div>
                        </div>

                        {/* Text Info */}
                        <div className="bg-brand-dark/80 px-2">
                            <div className="font-mono text-xs text-brand-primary mb-1">{m.step}</div>
                            <div className="font-bold text-white text-sm mb-1">{m.label}</div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{m.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}