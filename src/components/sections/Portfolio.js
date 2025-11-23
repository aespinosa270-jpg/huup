// src/components/sections/Portfolio.js
"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Terminal, Layers, Activity, ShoppingCart, Image as ImageIcon } from "lucide-react";

// --- COMPONENTES VISUALES (BLUEPRINTS ANIMADOS) ---

// 1. FINTECH: Gráfico de datos en tiempo real
const FintechBlueprint = () => (
  <div className="w-full h-full bg-black/50 relative overflow-hidden flex flex-col justify-between p-4">
    {/* Grid de fondo */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
    
    <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500/50" /><div className="w-2 h-2 rounded-full bg-yellow-500/50" /></div>
        <div className="text-[10px] font-mono text-brand-primary/70 animate-pulse">LIVE DATA FEED</div>
    </div>

    {/* El Gráfico Animado */}
    <div className="relative flex-1 border-l border-b border-white/20 mt-2">
        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Línea del gráfico */}
            <motion.path
                d="M0,80 C20,70 40,90 60,40 S80,20 100,60"
                fill="none"
                stroke="rgba(249,115,22,0.8)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, d: ["M0,80 C20,70 40,90 60,40 S80,20 100,60", "M0,80 C20,60 40,80 60,20 S80,40 100,50", "M0,80 C20,70 40,90 60,40 S80,20 100,60"] }}
                transition={{ 
                    pathLength: { duration: 2, ease: "easeInOut" },
                    d: { duration: 10, repeat: Infinity, ease: "linear" } // Morphing lento
                }}
            />
            {/* Área bajo la curva */}
            <motion.path
                 d="M0,80 C20,70 40,90 60,40 S80,20 100,60 L100,100 L0,100 Z"
                 fill="rgba(249,115,22,0.1)"
                 stroke="none"
                 animate={{ d: ["M0,80 C20,70 40,90 60,40 S80,20 100,60 L100,100 L0,100 Z", "M0,80 C20,60 40,80 60,20 S80,40 100,50 L100,100 L0,100 Z", "M0,80 C20,70 40,90 60,40 S80,20 100,60 L100,100 L0,100 Z"] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    </div>

    <div className="flex gap-2 mt-3">
        <div className="h-2 w-1/3 bg-white/10 rounded-sm" />
        <div className="h-2 w-1/3 bg-white/10 rounded-sm" />
        <div className="h-2 w-1/3 bg-brand-primary/20 rounded-sm animate-pulse" />
    </div>
  </div>
);

// 2. REAL ESTATE: Estructura de Parallax/Imagen inmersiva
const RealEstateBlueprint = () => (
    <div className="w-full h-full bg-black/50 relative overflow-hidden p-4 flex flex-col gap-3">
      {/* Header minimalista */}
      <div className="w-full h-4 flex justify-between items-center border-b border-white/10 pb-2">
          <div className="w-1/4 h-2 bg-white/20 rounded-full" />
          <div className="flex gap-2"><div className="w-4 h-2 bg-white/10 rounded-full" /><div className="w-4 h-2 bg-white/10 rounded-full" /></div>
      </div>
      
      {/* Contenedor de "Imagen Hero" con efecto parallax */}
      <div className="flex-1 border border-white/20 rounded-lg relative overflow-hidden group-hover:border-brand-primary/50 transition-colors">
          <div className="absolute inset-0 flex items-center justify-center z-10">
             <ImageIcon className="text-white/20 group-hover:text-brand-primary/50 transition-colors" size={32} />
          </div>
          {/* La "imagen" que se mueve lento al fondo */}
          <motion.div 
             animate={{ y: ["0%", "-20%"] }}
             transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
             className="absolute -inset-x-4 -inset-y-8 bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.05)_50%,transparent_55%)] bg-[size:20px_20px] opacity-50"
          >
             <div className="w-full h-full bg-white/5" />
          </motion.div>
          {/* UI Overlay */}
          <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/60 backdrop-blur-sm border border-white/10 rounded flex items-center px-3 gap-2">
              <div className="h-3 w-2/3 bg-white/30 rounded-sm" />
              <div className="h-6 w-1/4 bg-brand-primary/20 rounded-sm ml-auto" />
          </div>
      </div>
    </div>
  );

// 3. E-COMMERCE: Flujo de compra (Grid -> Carrito)
const EcommerceBlueprint = () => (
    <div className="w-full h-full bg-black/50 relative overflow-hidden p-4 flex items-center gap-4">
      
      {/* Lado Izquierdo: Grid de Productos */}
      <div className="w-2/3 grid grid-cols-2 gap-2">
         {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square border border-white/10 rounded-sm bg-white/5 p-1 flex flex-col gap-1 group-hover:border-brand-primary/30 transition-colors relative overflow-hidden">
                 {i === 2 && <motion.div animate={{opacity:[0,0.5,0]}} transition={{duration:2, repeat:Infinity}} className="absolute inset-0 bg-brand-primary/20" />}
                 <div className="flex-1 bg-white/5 rounded-sm" />
                 <div className="h-1 w-2/3 bg-white/20 rounded-full" />
                 <div className="h-1 w-1/2 bg-brand-primary/20 rounded-full" />
             </div>
         ))}
      </div>

      {/* Conector animado */}
      <div className="relative flex-1 h-12 flex items-center">
        <svg className="absolute inset-0 w-full h-full overflow-visible">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Punto de dato viajando */}
            <motion.circle 
               r="3" fill="#f97316"
               animate={{ cx: ["0%", "100%"], cy: "50%" }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
        </svg>
        <ArrowRight className="text-brand-primary/50 ml-auto relative z-10" size={16} />
      </div>

      {/* Lado Derecho: Carrito/Checkout */}
      <div className="w-1/4 h-3/4 border border-brand-primary/30 bg-brand-primary/5 rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
          <ShoppingCart className="text-brand-primary" size={20} />
          <div className="h-1 w-1/2 bg-brand-primary/50 rounded-full animate-pulse" />
      </div>

    </div>
);


const projects = [
  {
    title: "Nexus Fintech Dashboard",
    category: "SaaS / Web App",
    icon: <Activity size={18} />,
    desc: "Plataforma financiera con gráficos en tiempo real (WebSockets) y procesamiento de datos masivo.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Recharts"],
    blueprint: <FintechBlueprint />,
  },
  {
    title: "Aura Luxury Real Estate",
    category: "Sitio Corporativo",
    icon: <Layers size={18} />,
    desc: "Experiencia inmersiva con navegación fluida, carga diferida de imágenes 4K y animaciones parallax.",
    stack: ["React", "Framer Motion", "Sanity CMS"],
    blueprint: <RealEstateBlueprint />,
  },
  {
    title: "Zenith Streetwear",
    category: "E-Commerce Headless",
    icon: <ShoppingCart size={18} />,
    desc: "Tienda ultrarrápida. Carrito persistente, checkout optimizado y gestión de inventario en tiempo real.",
    stack: ["Next.js", "Shopify API", "Stripe"],
    blueprint: <EcommerceBlueprint />,
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-32 bg-brand-dark relative overflow-hidden">
      
      {/* Fondo Grid Continuo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO TÉCNICO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <Terminal size={12} /> System.Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Casos de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
                Éxito
              </span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-gray-400 font-mono text-sm hover:text-brand-primary transition-colors border-b border-white/10 hover:border-brand-primary pb-1 group"
          >
            Ver repositorio completo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* GRID DE PROYECTOS (BLUEPRINTS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl bg-black border border-white/10 overflow-hidden hover:border-brand-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
            >
              
              {/* 1. BLUEPRINT COVER (El diagrama técnico animado) */}
              <div className="h-64 w-full relative border-b border-white/10 group-hover:border-brand-primary/50 transition-colors bg-[url('/noise.svg')] bg-opacity-5">
                {/* Capa de opacidad que se aclara al hover */}
                <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {project.blueprint}
                </div>

                {/* Botón flotante 'Ver Proyecto' */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                  <div className="flex items-center gap-2 bg-brand-primary text-white font-bold px-6 py-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    Explorar Caso <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              {/* 2. CONTENIDO TÉCNICO */}
              <div className="p-8 relative">
                
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-primary mb-4 uppercase tracking-wider">
                  {project.icon}
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-white/10 pl-4 group-hover:border-brand-primary/30 transition-colors">
                  {project.desc}
                </p>

                {/* Tags estilo Terminal Monospace */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-gray-400 uppercase hover:border-brand-primary/50 hover:text-white transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón móvil */}
        <div className="mt-12 md:hidden text-center">
            <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-brand-primary hover:border-brand-primary transition-all font-mono uppercase text-sm">
                Ver Repositorio
            </button>
        </div>

      </div>
    </section>
  );
}