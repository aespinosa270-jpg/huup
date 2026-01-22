"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowUpRight, Search, Terminal, Zap, FileJson
} from "lucide-react";

// --- DATOS CORREGIDOS (Adiós Shopify) ---
const allProjects = [
  {
    id: "PROJ-092",
    client: "NØR",
    title: "Sportswear E-Comm",
    category: "Ecommerce",
    year: "2025",
    // CORRECCIÓN AQUI: Usamos MedusaJS (Headless real) en lugar de Shopify
    tech: ["Next.js 16", "MedusaJS", "WebGL"], 
    impact: "+240% Tasa de Conv.",
    team: "Squad Alpha",
    imageColor: "from-zinc-800 to-black",
    status: "EN VIVO"
  },
  {
    id: "PROJ-088",
    client: "Stephan Textil",
    title: "Industrial B2B OS",
    category: "Industrial",
    year: "2025",
    tech: ["PostgreSQL", "Redis", "Retool"],
    impact: "$4.2M Procesados",
    team: "Squad Beta",
    imageColor: "from-blue-900 to-black",
    status: "EN VIVO"
  },
  {
    id: "PROJ-074",
    client: "Vera Cosmetics",
    title: "Global Rebranding",
    category: "Ecommerce",
    year: "2024",
    tech: ["Sanity CMS", "React", "Stripe API"],
    impact: "0.4s Tiempo Carga",
    team: "Squad Alpha",
    imageColor: "from-rose-900 to-black",
    status: "MANTENIMIENTO"
  },
  {
    id: "PROJ-101",
    client: "Huup R&D",
    title: "Internal Framework",
    category: "Experimental",
    year: "2026",
    tech: ["Rust", "WASM", "Vercel Edge"],
    impact: "IP Propietaria",
    team: "Core Team",
    imageColor: "from-purple-900 to-black",
    status: "BETA"
  }
];

const categories = ["Todos", "Ecommerce", "Industrial", "Experimental"];

export default function WorkArchive() {
  const [filter, setFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<any | null>(null);
  
  // Física del Cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Lógica de Filtrado
  const filteredProjects = allProjects.filter(p => {
    const matchesCategory = filter === "Todos" || p.category === filter;
    const matchesSearch = p.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#020202] min-h-screen w-full relative selection:bg-primary/30 cursor-default">
      <Navbar />

      {/* --- AMBIENTE --- */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-50 z-50" />

      <section className="pt-32 pb-20 px-4 md:px-8 min-h-screen flex flex-col relative z-10">
        
        {/* HEADER TÁCTICO */}
        <div className="max-w-[1400px] mx-auto w-full mb-12">
           <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-widest border-b border-white/10 pb-4">
                 <TerminalIcon />
                 <span>Raiz_Sistema</span>
                 <span className="text-white/20">/</span>
                 <span>Proyectos</span>
                 <span className="text-white/20">/</span>
                 <span className="text-white">Indice_Archivo</span>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                 <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                    Registro de <br />
                    <span className="text-white/10">Operaciones.</span>
                 </h1>
                 
                 {/* STATS DEL ARCHIVO */}
                 <div className="flex gap-8 text-right hidden md:flex">
                    <div>
                       <div className="text-2xl font-bold text-white">{allProjects.length}</div>
                       <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Expedientes</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-green-500">
                          {allProjects.filter(p => p.status === 'EN VIVO').length}
                       </div>
                       <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Sistemas Activos</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* BARRA DE CONTROL (FILTROS Y BUSQUEDA) */}
        <div className="max-w-[1400px] mx-auto w-full mb-8 sticky top-24 z-30">
           <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-lg p-2 flex flex-col md:flex-row gap-4 justify-between items-center shadow-2xl">
              
              {/* Categorías */}
              <div className="flex overflow-x-auto w-full md:w-auto gap-1 scrollbar-hide">
                 {categories.map(cat => (
                    <button
                       key={cat}
                       onClick={() => setFilter(cat)}
                       className={`
                          px-4 py-2 text-[11px] font-mono uppercase tracking-widest rounded transition-all duration-300 whitespace-nowrap
                          ${filter === cat 
                             ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                             : "text-white/40 hover:text-white hover:bg-white/5"}
                       `}
                    >
                       {cat}
                    </button>
                 ))}
              </div>

              {/* Búsqueda */}
              <div className="relative w-full md:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                 <input 
                    type="text" 
                    placeholder="BUSCAR CLIENTE O ID..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-9 py-2 text-xs text-white font-mono focus:outline-none focus:border-primary/50 placeholder:text-white/20 uppercase"
                 />
              </div>
           </div>
        </div>

        {/* TABLA DE PROYECTOS (GRID AVANZADO) */}
        <div className="max-w-[1400px] mx-auto w-full relative">
           
           {/* Headers (Desktop) */}
           <div className="hidden md:grid grid-cols-12 gap-4 px-4 pb-2 border-b border-white/10 text-[9px] font-mono text-white/30 uppercase tracking-widest select-none">
              <div className="col-span-1">ID Sistema</div>
              <div className="col-span-3">Cliente / Alcance</div>
              <div className="col-span-2">Stack Principal</div>
              <div className="col-span-2">Impacto / ROI</div>
              <div className="col-span-2">Unidad (Squad)</div>
              <div className="col-span-1">Año</div>
              <div className="col-span-1 text-right">Acceso</div>
           </div>

           <div className="flex flex-col">
              <AnimatePresence mode="popLayout">
                 {filteredProjects.map((project, i) => (
                    <motion.div
                       key={project.id}
                       layout
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, x: 10 }}
                       transition={{ duration: 0.2, delay: i * 0.05 }}
                       onMouseEnter={() => setHoveredProject(project)}
                       onMouseLeave={() => setHoveredProject(null)}
                       className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.03] transition-all duration-300"
                    >
                       {/* ID */}
                       <div className="hidden md:block col-span-1 font-mono text-[10px] text-white/30 group-hover:text-primary transition-colors">
                          {project.id}
                       </div>

                       {/* Client & Title */}
                       <div className="col-span-10 md:col-span-3">
                          <div className="flex items-center gap-2 mb-1">
                             <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'EN VIVO' ? 'bg-green-500 shadow-[0_0_5px_#22c55e]' : 'bg-white/20'}`} />
                             <h3 className="text-lg font-bold text-white leading-none">
                                {project.client}
                             </h3>
                          </div>
                          <span className="text-xs text-white/40 font-mono uppercase group-hover:text-white/70 transition-colors">
                             {project.title}
                          </span>
                       </div>

                       {/* Tech Stack */}
                       <div className="hidden md:flex col-span-2 flex-wrap gap-1">
                          {project.tech.map(t => (
                             <span key={t} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-white/40 font-mono">
                                {t}
                             </span>
                          ))}
                       </div>

                       {/* Impact Metric (Highlight) */}
                       <div className="hidden md:block col-span-2">
                          <div className="flex items-center gap-2">
                             <Zap size={12} className="text-yellow-500" />
                             <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {project.impact}
                             </span>
                          </div>
                       </div>

                       {/* Squad & Year */}
                       <div className="hidden md:block col-span-2 text-xs text-white/40 font-mono">
                          {project.team}
                       </div>
                       <div className="hidden md:block col-span-1 text-xs text-white/40 font-mono">
                          {project.year}
                       </div>

                       {/* Action */}
                       <div className="col-span-2 md:col-span-1 flex justify-end">
                          <motion.div 
                             whileHover={{ scale: 1.1, rotate: 45 }}
                             className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 bg-black group-hover:border-primary group-hover:text-primary"
                          >
                             <ArrowUpRight size={14} />
                          </motion.div>
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </div>
        </div>

      </section>

      {/* --- PREVIEW FLOTANTE HOLOGRÁFICO (CURSOR) --- */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden md:block w-[320px] rounded-lg overflow-hidden border border-white/10 bg-[#050505]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ 
           x: springX, 
           y: springY,
           translateX: "20px",
           translateY: "-50%"
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
           opacity: hoveredProject ? 1 : 0, 
           scale: hoveredProject ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
      >
         {hoveredProject && (
            <div className="flex flex-col">
               {/* Visual Header */}
               <div className={`h-32 w-full bg-gradient-to-br ${hoveredProject.imageColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                     <span className="text-[10px] font-bold text-white uppercase">{hoveredProject.category}</span>
                  </div>
               </div>
               
               {/* Data Footer */}
               <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                     <span className="text-[10px] text-white/40 font-mono">ESTADO</span>
                     <span className="text-[10px] text-green-500 font-bold font-mono tracking-wider">{hoveredProject.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                     <div>
                        <div className="text-[9px] text-white/30 uppercase">Latencia</div>
                        <div className="text-xs text-white font-mono">24ms</div>
                     </div>
                     <div>
                        <div className="text-[9px] text-white/30 uppercase">Uptime</div>
                        <div className="text-xs text-white font-mono">99.99%</div>
                     </div>
                  </div>
                  {/* Mock de archivos */}
                  <div className="pt-2 flex gap-2">
                     <FileJson size={10} className="text-white/20" />
                     <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }} 
                           animate={{ width: "100%" }} 
                           transition={{ duration: 1.5, ease: "circOut" }}
                           className="h-full bg-primary" 
                        />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </motion.div>

      <Footer />
    </main>
  );
}

// Icono Helper
function TerminalIcon() {
   return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <polyline points="4 17 10 11 4 5"></polyline>
         <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
   )
}