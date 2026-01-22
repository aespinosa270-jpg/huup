"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Cloud, CreditCard, Server, TrendingUp, Cpu, Globe, Zap } from "lucide-react";

const pillars = [
  {
    id: "mobile",
    title: "Native Core",
    subtitle: "iOS & Android Unificado",
    description: "React Native con arquitectura bridgeless. 60 FPS garantizados.",
    icon: Smartphone,
    color: "bg-blue-600",
    gradient: "from-blue-600/20 via-blue-900/5 to-transparent",
    visual: <MobileCodeVisual />,
  },
  {
    id: "cloud",
    title: "Edge Network",
    subtitle: "Infraestructura Global",
    description: "Serverless distribuido en 35 regiones. Latencia <50ms.",
    icon: Cloud,
    color: "bg-green-500",
    gradient: "from-green-500/20 via-green-900/5 to-transparent",
    visual: <CloudVisual />,
  },
  {
    id: "revenue",
    title: "Revenue Engine",
    subtitle: "Conversión Financiera",
    description: "Pasarelas de pago inteligentes y analítica en tiempo real.",
    icon: CreditCard,
    color: "bg-orange-500",
    gradient: "from-orange-500/20 via-orange-900/5 to-transparent",
    visual: <RevenueVisual />,
  },
];

export default function TechFoundation() {
  const [activeId, setActiveId] = useState<string | null>("cloud"); // Cloud activo por defecto para que no se vea vacío

  return (
    <section className="relative w-full bg-[#030303] py-32 px-4 md:px-8 border-t border-white/5 overflow-hidden">
      
      {/* --- AMBIENTE DE FONDO --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      {/* Grid sutil para dar sensación técnica */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl h-[600px] flex flex-col lg:flex-row gap-4">
        
        {/* --- TÍTULO FLOTANTE (Izquierda o Arriba) --- */}
        <div className="lg:w-1/4 flex flex-col justify-between py-4 pr-8">
           <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                 </span>
                 <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Ingeniería Profunda</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                 Motor <br />
                 <span className="text-white/30">Tecnológico</span>
              </h2>
              <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-xs">
                 No es solo lo que se ve. Es la infraestructura invisible que permite escalar tu negocio sin límites técnicos.
              </p>
           </div>
           
           {/* Stats Rápidos */}
           <div className="hidden lg:block space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <span className="text-xs text-white/30 font-mono">UPTIME</span>
                 <span className="text-sm text-white font-bold">99.99%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <span className="text-xs text-white/30 font-mono">LATENCY</span>
                 <span className="text-sm text-white font-bold">~24ms</span>
              </div>
           </div>
        </div>

        {/* --- ACORDEÓN CINEMÁTICO --- */}
        <div className="flex-1 flex flex-col lg:flex-row gap-3">
          {pillars.map((pillar) => {
            const isActive = activeId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }} // Física pesada y premium
                className={`
                   relative flex flex-col overflow-hidden rounded-2xl border transition-colors duration-500 cursor-pointer group
                   ${isActive ? "lg:flex-[3] border-white/10" : "lg:flex-[1] border-white/5 bg-white/[0.01] hover:border-white/10"}
                `}
              >
                {/* 1. IMAGEN DE FONDO (Icono Gigante Abstracto) */}
                <div className="absolute -right-10 -bottom-10 text-white/[0.02] transform rotate-12 scale-[3] pointer-events-none transition-transform duration-700 group-hover:scale-[3.5]">
                   <pillar.icon size={200} />
                </div>

                {/* 2. GRADIENTE DE "LUZ" ACTIVA */}
                <motion.div 
                   className={`absolute inset-0 bg-gradient-to-t ${pillar.gradient} opacity-0`}
                   animate={{ opacity: isActive ? 1 : 0 }}
                   transition={{ duration: 0.6 }}
                />

                {/* 3. CONTENIDO VISIBLE */}
                <div className="relative z-10 flex flex-col h-full p-6 justify-between">
                   
                   {/* Header: Icono + Título */}
                   <div className="flex items-start justify-between">
                      <motion.div 
                         layout="position"
                         className={`p-3 rounded-xl border ${isActive ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/5 text-white/40 group-hover:text-white"}`}
                      >
                         <pillar.icon size={24} />
                      </motion.div>
                      
                      {/* Título Vertical cuando está inactivo (Desktop Only) */}
                      {!isActive && (
                         <motion.div 
                           initial={{ opacity: 0 }} 
                           animate={{ opacity: 1 }} 
                           className="hidden lg:block absolute top-20 right-6 origin-top-right rotate-90"
                         >
                            <span className="text-sm font-bold uppercase tracking-widest text-white/30 whitespace-nowrap">
                               {pillar.title}
                            </span>
                         </motion.div>
                      )}
                   </div>

                   {/* Visualizador Central (Solo Activo) */}
                   <div className="flex-1 flex items-center justify-center my-4">
                      <AnimatePresence mode="popLayout">
                         {isActive && (
                            <motion.div
                               initial={{ opacity: 0, scale: 0.9, y: 20 }}
                               animate={{ opacity: 1, scale: 1, y: 0 }}
                               exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                               transition={{ duration: 0.5, delay: 0.1 }}
                               className="w-full"
                            >
                               {pillar.visual}
                            </motion.div>
                         )}
                      </AnimatePresence>
                   </div>

                   {/* Footer: Textos (Expandido) */}
                   <motion.div layout="position" className="relative">
                      <motion.h3 
                         layout="position"
                         className={`text-xl md:text-2xl font-black uppercase tracking-tight mb-2 ${isActive ? "text-white" : "text-white/50 lg:hidden"}`}
                      >
                         {pillar.title}
                      </motion.h3>
                      
                      <AnimatePresence>
                         {isActive && (
                            <motion.div
                               initial={{ opacity: 0, height: 0 }}
                               animate={{ opacity: 1, height: "auto" }}
                               exit={{ opacity: 0, height: 0 }}
                               className="overflow-hidden"
                            >
                               <div className="flex items-center gap-2 mb-3">
                                  <div className={`h-px w-8 ${pillar.color}`} />
                                  <span className={`text-xs font-mono uppercase ${pillar.color.replace('bg-', 'text-')}`}>
                                     {pillar.subtitle}
                                  </span>
                               </div>
                               <p className="text-sm text-white/60 leading-relaxed max-w-md">
                                  {pillar.description}
                               </p>
                            </motion.div>
                         )}
                      </AnimatePresence>
                   </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// --- VISUALIZADORES MEJORADOS ---

function MobileCodeVisual() {
  return (
    <div className="w-full max-w-[280px] mx-auto bg-black/50 backdrop-blur-md rounded-xl border border-white/10 p-4 font-mono text-[10px] shadow-2xl relative overflow-hidden">
       {/* Línea de escaneo */}
       <motion.div 
         className="absolute top-0 left-0 right-0 h-1 bg-blue-500/50 shadow-[0_0_15px_#3b82f6]"
         animate={{ top: ["0%", "100%", "0%"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
       />
       
       <div className="flex gap-1.5 mb-3 opacity-50">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
       </div>
       <div className="space-y-1.5 text-blue-100/70">
          <div className="flex"><span className="w-4 text-white/20">1</span><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> 'react';</div>
          <div className="flex"><span className="w-4 text-white/20">2</span><span className="text-purple-400">import</span> {'{ Native }'} <span className="text-purple-400">from</span> 'huup-core';</div>
          <div className="flex"><span className="w-4 text-white/20">3</span></div>
          <div className="flex"><span className="w-4 text-white/20">4</span><span className="text-blue-400">const</span> <span className="text-yellow-400">App</span> = () {'=>'} {'{' }</div>
          <div className="flex"><span className="w-4 text-white/20">5</span>  <span className="text-purple-400">return</span> (</div>
          <div className="flex"><span className="w-4 text-white/20">6</span>    {'<Native.View style={styles.gpu}>'}</div>
          <div className="flex"><span className="w-4 text-white/20">7</span>      {'<Native.Text>60 FPS</Native.Text>'}</div>
          <div className="flex"><span className="w-4 text-white/20">8</span>    {'</Native.View>'}</div>
          <div className="flex"><span className="w-4 text-white/20">9</span>  )</div>
          <div className="flex"><span className="w-4 text-white/20">10</span>{'}'}</div>
       </div>
    </div>
  )
}

function CloudVisual() {
   return (
      <div className="relative w-full max-w-[280px] mx-auto h-[160px] flex items-center justify-center">
         {/* Orbitas */}
         <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.2] animate-spin-slow opacity-30" />
         <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.8] animate-reverse-spin opacity-30" />
         
         {/* Nodo Central */}
         <motion.div 
            animate={{ boxShadow: ["0 0 0px #22c55e", "0 0 20px #22c55e", "0 0 0px #22c55e"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10 bg-[#050505] border border-green-500/30 p-4 rounded-full"
         >
            <Server size={32} className="text-green-500" />
         </motion.div>

         {/* Satélites */}
         <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-[#0A0A0A] border border-white/10 p-1.5 rounded-full">
                 <Globe size={12} className="text-white/50" />
             </div>
         </motion.div>
         <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 scale-[0.7]">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-[#0A0A0A] border border-white/10 p-1.5 rounded-full">
                 <Zap size={12} className="text-yellow-500/80" />
             </div>
         </motion.div>
         
         <div className="absolute bottom-0 text-[10px] font-mono text-green-500 bg-green-900/10 px-2 py-0.5 rounded border border-green-500/20">
            EDGE NETWORK: ACTIVE
         </div>
      </div>
   )
}

function RevenueVisual() {
   return (
      <div className="w-full max-w-[280px] mx-auto space-y-3">
         {/* Tarjeta 1 */}
         <motion.div 
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="bg-[#111] border border-white/10 rounded-lg p-3 flex justify-between items-center relative overflow-hidden"
         >
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />
             <div className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                    <TrendingUp size={14} className="text-orange-500" />
                 </div>
                 <div>
                    <div className="text-[10px] text-white/40">MRR Growth</div>
                    <div className="text-sm font-bold text-white">+24.5%</div>
                 </div>
             </div>
             <div className="text-xs text-green-500 font-mono">▲</div>
         </motion.div>

         {/* Tarjeta 2 */}
         <motion.div 
            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
            className="bg-[#111] border border-white/10 rounded-lg p-3 flex justify-between items-center relative overflow-hidden"
         >
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
             <div className="flex items-center gap-3">
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                    <CreditCard size={14} className="text-blue-500" />
                 </div>
                 <div>
                    <div className="text-[10px] text-white/40">Transactions</div>
                    <div className="text-sm font-bold text-white">1,204</div>
                 </div>
             </div>
             <div className="text-xs text-blue-500 font-mono">2s ago</div>
         </motion.div>
      </div>
   )
}