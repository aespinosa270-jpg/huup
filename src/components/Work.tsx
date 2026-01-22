"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Terminal, Cpu, Layers } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    client: "NØR",
    title: "Sportswear E-Comm",
    description: "Arquitectura Headless para una marca de alto rendimiento. Experiencia inmersiva 3D y checkout optimizado en <0.8s.",
    tags: ["Next.js 16", "WebGL", "Shopify Plus"],
    year: "2025",
    color: "from-zinc-800 to-black",
    overlay: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20",
  },
  {
    id: "02",
    client: "STEPHAN TEXTIL",
    title: "Industrial B2B Platform",
    description: "Sistema masivo de gestión de inventario. Integración SAP en tiempo real para más de 50,000 SKUs textiles.",
    tags: ["Dashboard", "PostgreSQL", "Real-time"],
    year: "2025",
    color: "from-blue-950 to-black",
    overlay: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
  },
  {
    id: "03",
    client: "HUUP AGENCY",
    title: "Agency Portfolio",
    description: "Nuestra propia identidad. Un manifiesto de ingeniería digital usando las últimas capacidades de Vercel Edge.",
    tags: ["Experimental", "Framer Motion", "RSC"],
    year: "2026",
    color: "from-primary/20 to-black",
    overlay: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-[#030303] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mb-24 border-b border-white/10 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
               <div className="flex items-center gap-2 mb-4">
                 <div className="h-1 w-10 bg-white rounded-full" />
                 <span className="text-xs font-mono uppercase tracking-widest text-white/50">Selected Works_</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                 Digital <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/20">Legacy.</span>
               </h2>
            </div>
            <div className="max-w-xs text-right hidden md:block">
               <p className="text-sm text-white/40 font-mono leading-relaxed">
                 [INDEX: 2024-2026] <br />
                 Ingeniería aplicada a marcas que desafían el status quo.
               </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
            <Link 
              href="/work"
              className="group inline-flex items-center gap-3 border-b border-white/20 pb-1 text-sm font-mono uppercase text-white/50 transition-colors hover:border-primary hover:text-white"
            >
              <span>Ver Archivo Completo</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-none border-t border-white/10 bg-transparent transition-all hover:bg-white/[0.02]"
    >
        <div className="lg:col-span-4 py-8 lg:py-12 pr-8 flex flex-col justify-between border-b lg:border-b-0 border-white/10 lg:border-r">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-black text-white/10 font-mono group-hover:text-primary transition-colors duration-500">
                    {project.id}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs font-mono text-white/40 border border-white/10 px-2 py-1 rounded">
                    {project.year}
                  </span>
               </div>
               
               <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                 {project.client}
               </h3>
               <div className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
                 // {project.title}
               </div>

               <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8">
                 {project.description}
               </p>
            </div>

            <div className="space-y-4">
               <div className="flex flex-wrap gap-2">
                 {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-mono text-white/30 uppercase bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                 ))}
               </div>
               
               <Link href={`/work/${project.client.toLowerCase()}`} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                  <span className="border-b border-white/20 pb-0.5 group-hover:border-primary">Analizar Caso</span>
                  <ArrowUpRight size={14} />
               </Link>
            </div>
        </div>

        <div className="lg:col-span-8 relative h-[300px] lg:h-auto overflow-hidden bg-[#050505]">
            <motion.div 
               style={{ y }} 
               className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} 
            />
            <div className={`absolute inset-0 ${project.overlay}`} />
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative z-10 p-8 border border-white/10 bg-black/20 backdrop-blur-sm rounded-xl max-w-sm w-full transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                     <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                        <div className="h-2 w-2 rounded-full bg-white/20" />
                     </div>
                     <span className="text-[8px] font-mono text-white/30 uppercase">System_UI</span>
                  </div>
                  <div className="space-y-2">
                     <div className="h-2 w-1/3 bg-white/20 rounded" />
                     <div className="h-16 w-full bg-white/5 rounded border border-white/5" />
                     <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 w-full bg-white/5 rounded" />
                        <div className="h-8 w-full bg-white/5 rounded" />
                     </div>
                  </div>
                  
                  <div className="absolute -right-2 -bottom-2 text-[100px] font-black text-white/5 leading-none pointer-events-none select-none">
                     {project.id}
                  </div>
               </div>
            </div>

            <div className="absolute inset-0 border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/50 pointer-events-none" />
        </div>
    </motion.div>
  );
}