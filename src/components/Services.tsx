"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Terminal, ShoppingBag, Briefcase, Boxes, 
  LayoutDashboard, TrendingUp, Rocket, CheckCircle2, 
  BarChart3, ArrowRight, Cpu, ShieldCheck
} from "lucide-react";

// --- TUS 6 SERVICIOS (DATA) ---
const services = [
  {
    id: "ecommerce",
    number: "01",
    title: "Ecommerce High-End",
    subtitle: "Headless Architecture",
    description: "Comercio unificado sin límites. Arquitectura composable con Next.js que supera a Shopify Plus en velocidad y personalización.",
    tags: ["Headless", "Stripe", "MedusaJS"],
    status: "ONLINE",
  },
  {
    id: "erp",
    number: "02",
    title: "ERPs & Sistemas",
    subtitle: "Business OS",
    description: "El sistema nervioso de tu empresa. Dashboards operativos y automatización de flujos de trabajo a medida.",
    tags: ["Dashboard", "CRM", "Auto"],
    status: "ACTIVE",
  },
  {
    id: "venture",
    number: "03",
    title: "Venture Builder",
    subtitle: "Zero to One",
    description: "De la idea al mercado. Desarrollo acelerado de MVPs para startups que necesitan validar y escalar rápido.",
    tags: ["MVP", "Scale", "Launch"],
    status: "READY",
  },
  {
    id: "consulting",
    number: "04",
    title: "Consultoría Tech",
    subtitle: "CTO as a Service",
    description: "Auditoría de código, rescate de proyectos legacy y estrategia de nube. Elevamos el estándar de tu equipo in-house.",
    tags: ["Audit", "Cloud", "Security"],
    status: "AVAIL",
  },
  {
    id: "growth",
    number: "05",
    title: "Growth Engineering",
    subtitle: "SEO & Data",
    description: "Infraestructura diseñada para rankear. SEO programático y funnels de conversión con tiempos de carga sub-segundo.",
    tags: ["SEO", "Analytics", "CRO"],
    status: "TRACKING",
  },
  {
    id: "web",
    number: "06",
    title: "Arquitectura Web",
    subtitle: "Core Engineering",
    description: "PWAs de alto rendimiento. El estándar de oro en desarrollo web moderno con React Server Components.",
    tags: ["Next.js", "Vercel", "RSC"],
    status: "DEPLOYED",
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section id="services" className="relative min-h-screen bg-[#020202] py-32 px-6 md:px-12 selection:bg-primary/30 overflow-hidden">
      
      {/* --- AMBIENTE --- */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute left-0 top-1/3 h-[800px] w-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute right-0 bottom-1/3 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               <span className="text-xs font-mono uppercase tracking-widest text-primary">Capacidades del Sistema</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Soluciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Integrales.</span>
            </h2>
          </div>
          <div className="hidden md:block max-w-xs text-right">
             <p className="text-sm text-white/40 font-mono">
                Seleccione un módulo para inicializar la visualización de arquitectura.
             </p>
          </div>
        </div>

        {/* --- GRID MAESTRO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMNA IZQUIERDA: TARJETAS DE MANDO */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative z-10">
            <LayoutGroup>
              {services.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)} // Hover para desktop
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className={`
                      group relative w-full overflow-hidden rounded-xl border text-left transition-all duration-300
                      ${isActive 
                        ? "border-primary/50 bg-[#0A0A0A] shadow-[0_0_30px_-10px_rgba(255,77,0,0.15)]" 
                        : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"}
                    `}
                  >
                    {/* Glow de fondo activo */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-50"
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    <div className="relative z-10 p-5 flex items-start gap-5">
                      {/* Número / Status LED */}
                      <div className="flex flex-col items-center gap-2 pt-1">
                        <span className={`font-mono text-[10px] ${isActive ? "text-primary" : "text-white/20"}`}>
                          {service.number}
                        </span>
                        <div className={`h-8 w-px ${isActive ? "bg-primary/50" : "bg-white/10"}`} />
                        <div className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-primary shadow-[0_0_8px_#FF4D00]" : "bg-white/10"}`} />
                      </div>

                      {/* Contenido Principal */}
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                           <h3 className={`text-lg font-bold uppercase tracking-tight transition-colors ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                             {service.title}
                           </h3>
                           {isActive && <ArrowRight size={14} className="text-primary -rotate-45" />}
                        </div>
                        
                        <div className={`text-[10px] font-mono uppercase tracking-widest mb-3 ${isActive ? "text-primary/80" : "text-white/30"}`}>
                          // {service.subtitle}
                        </div>

                        {/* Descripción Expandible */}
                        <motion.div
                          initial={false}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-white/60 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          {/* Tags Técnicos */}
                          <div className="flex gap-2">
                             {service.tags.map(tag => (
                               <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-white/50 font-mono">
                                 {tag}
                               </span>
                             ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </LayoutGroup>
          </div>

          {/* COLUMNA DERECHA: VIEWPORT HOLOGRÁFICO */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[500px]">
             <div className="sticky top-24 w-full h-full">
                <div className="relative h-full w-full rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl flex flex-col">
                   
                   {/* HUD Header */}
                   <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.01] px-5 py-4">
                      <div className="flex items-center gap-3">
                         <div className="flex gap-1.5">
                            <div className="h-2 w-2 rounded-full bg-white/20" />
                            <div className="h-2 w-2 rounded-full bg-white/20" />
                         </div>
                         <div className="h-4 w-px bg-white/10" />
                         <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                            SYS_VIEW :: {activeId.toUpperCase()}
                         </span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="font-mono text-[10px] text-green-500">LIVE</span>
                      </div>
                   </div>

                   {/* Main Viewport */}
                   <div className="relative flex-1 bg-grid-white/[0.02] flex items-center justify-center p-8 overflow-hidden">
                      {/* Scanline FX */}
                      <motion.div 
                        key={activeId}
                        initial={{ top: "-100%" }}
                        animate={{ top: "200%" }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none z-0"
                      />
                      
                      {/* Componente Visual Activo */}
                      <AnimatePresence mode="wait">
                         <motion.div
                           key={activeId}
                           initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                           exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                           transition={{ duration: 0.4 }}
                           className="w-full max-w-md relative z-10"
                         >
                            {activeId === 'ecommerce' && <EcommerceVisual />}
                            {activeId === 'erp' && <ERPVisual />}
                            {activeId === 'venture' && <VentureVisual />}
                            {activeId === 'consulting' && <ConsultingVisual />}
                            {activeId === 'growth' && <GrowthVisual />}
                            {activeId === 'web' && <WebVisual />}
                         </motion.div>
                      </AnimatePresence>
                   </div>

                   {/* HUD Footer */}
                   <div className="border-t border-white/5 bg-white/[0.01] px-5 py-3 flex justify-between items-center text-[10px] font-mono text-white/30">
                      <span>CPU: 12%</span>
                      <span>MEM: 430MB</span>
                      <span>LATENCY: 24ms</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- COMPONENTES VISUALES (Mocks Mejorados) ---

function EcommerceVisual() {
  return (
    <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 shadow-2xl">
       <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center"><ShoppingBag size={14} /></div>
             <div>
                <div className="text-xs text-white font-bold">Storefront</div>
                <div className="text-[10px] text-white/40">Headless API</div>
             </div>
          </div>
          <div className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold border border-green-500/20">98/100 SPEED</div>
       </div>
       <div className="space-y-3">
          <div className="h-16 w-full rounded bg-white/5 border border-white/5 flex items-center px-4 gap-4">
             <div className="h-8 w-8 rounded bg-white/10" />
             <div className="flex-1">
                <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                <div className="h-2 w-10 bg-white/10 rounded" />
             </div>
             <div className="text-white font-mono">$240</div>
          </div>
          <div className="h-16 w-full rounded bg-white/5 border border-white/5 flex items-center px-4 gap-4">
             <div className="h-8 w-8 rounded bg-white/10" />
             <div className="flex-1">
                <div className="h-2 w-24 bg-white/20 rounded mb-1" />
                <div className="h-2 w-12 bg-white/10 rounded" />
             </div>
             <div className="text-white font-mono">$120</div>
          </div>
       </div>
       <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-xs text-white/50">Powered by Stripe</span>
          <div className="flex gap-1">
             <div className="h-1.5 w-1.5 rounded-full bg-primary" />
             <div className="h-1.5 w-1.5 rounded-full bg-primary" />
             <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
       </div>
    </div>
  )
}

function ERPVisual() {
  return (
    <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-1 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
        <div className="p-5">
           <div className="flex justify-between mb-6">
              <span className="text-xs font-mono text-white/50 uppercase">System Status</span>
              <span className="text-xs text-blue-400 font-bold">OPERATIONAL</span>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded bg-white/5 border border-white/5">
                 <div className="text-[10px] text-white/40 mb-1">Active Users</div>
                 <div className="text-xl font-bold text-white">1,240</div>
              </div>
              <div className="p-3 rounded bg-white/5 border border-white/5">
                 <div className="text-[10px] text-white/40 mb-1">Requests/s</div>
                 <div className="text-xl font-bold text-white">840</div>
              </div>
              <div className="col-span-2 p-3 rounded bg-white/5 border border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-green-500" />
                    <span className="text-xs text-white">Security Protocol</span>
                 </div>
                 <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded">Active</span>
              </div>
           </div>
        </div>
    </div>
  )
}

function VentureVisual() {
    return (
        <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-6 shadow-2xl text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4 ring-1 ring-primary/50 ring-offset-2 ring-offset-black">
               <Rocket size={20} />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">Sprint de Lanzamiento</h4>
            <p className="text-xs text-white/50 mb-6">Timeline estimado: 4 Semanas</p>
            
            <div className="space-y-3 relative">
               <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
               <div className="flex items-center gap-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-white border border-black" /> {/* Cambiado a h-2 w-2 */}
                  <div className="flex-1 h-8 rounded bg-white/5 flex items-center px-3 text-[10px] text-white/60">Semana 1: Prototipo</div>
               </div>
               <div className="flex items-center gap-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-white border border-black" />
                  <div className="flex-1 h-8 rounded bg-white/5 flex items-center px-3 text-[10px] text-white/60">Semana 2: Desarrollo Core</div>
               </div>
               <div className="flex items-center gap-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-primary border border-black shadow-[0_0_8px_#FF4D00]" />
                  <div className="flex-1 h-8 rounded bg-primary/20 border border-primary/30 flex items-center px-3 text-[10px] text-white font-bold justify-between">
                     <span>Semana 4: Launch</span>
                     <ArrowRight size={10} />
                  </div>
               </div>
            </div>
        </div>
    )
}

function ConsultingVisual() {
    return (
       <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 font-mono text-xs shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-white/5 pb-2 text-white/40">
             <span>root@audit:~#</span>
             <span className="text-white">./run_diagnostics.sh</span>
          </div>
          <div className="space-y-1">
             <div className="flex justify-between">
                <span className="text-white/60">Architecture Analysis...</span>
                <span className="text-green-500">DONE</span>
             </div>
             <div className="flex justify-between">
                <span className="text-white/60">Checking Database Sharding...</span>
                <span className="text-green-500">OPTIMAL</span>
             </div>
             <div className="flex justify-between">
                <span className="text-white/60">Security Vulnerabilities...</span>
                <span className="text-red-500">2 FOUND</span>
             </div>
             <div className="h-px w-full bg-white/10 my-2" />
             <div className="text-primary mt-2">{`> Generating CTO Report...`}</div>
             <div className="w-full bg-primary/20 h-1 mt-1">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2 }} className="h-full bg-primary" />
             </div>
          </div>
       </div>
    )
}

function GrowthVisual() {
   return (
      <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-6 shadow-2xl">
         <div className="flex items-end justify-between mb-6">
            <div>
               <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Organic Traffic</div>
               <div className="text-3xl font-bold text-white flex items-start">
                  +124%
                  <TrendingUp size={14} className="text-green-500 ml-2 mt-1" />
               </div>
            </div>
            <div className="text-right">
               <div className="text-[10px] text-white/40">Conversion</div>
               <div className="text-lg font-bold text-primary">4.2%</div>
            </div>
         </div>
         <div className="flex items-end gap-1 h-32">
            {[20, 35, 30, 50, 45, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 animate={{ height: `${h}%` }}
                 transition={{ delay: i * 0.05 }}
                 className="flex-1 bg-gradient-to-t from-white/5 to-white/20 hover:to-primary rounded-t-sm transition-colors duration-300"
               />
            ))}
         </div>
      </div>
   )
}

function WebVisual() {
   return (
      <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-5 shadow-2xl relative">
         <div className="absolute top-4 right-4 flex gap-1">
            <div className="h-2 w-2 rounded-full bg-red-500/50" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
            <div className="h-2 w-2 rounded-full bg-green-500/50" />
         </div>
         <div className="flex flex-col items-center py-6">
            <div className="relative h-24 w-24 flex items-center justify-center mb-4">
               <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <motion.path 
                     initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "circOut" }}
                     className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" 
                  />
               </svg>
               <div className="text-3xl font-bold text-white">100</div>
            </div>
            <div className="text-sm font-bold text-white">Lighthouse Score</div>
            <div className="text-xs text-white/40 mt-1">Core Web Vitals Optimized</div>
         </div>
         <div className="grid grid-cols-3 gap-2 mt-2 pt-4 border-t border-white/5 text-center">
            <div>
               <div className="text-[10px] text-white/30">FCP</div>
               <div className="text-xs text-green-400 font-mono">0.2s</div>
            </div>
            <div>
               <div className="text-[10px] text-white/30">LCP</div>
               <div className="text-xs text-green-400 font-mono">0.8s</div>
            </div>
            <div>
               <div className="text-[10px] text-white/30">CLS</div>
               <div className="text-xs text-green-400 font-mono">0.00</div>
            </div>
         </div>
      </div>
   )
}