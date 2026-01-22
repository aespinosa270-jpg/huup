"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Search, PenTool, Code2, Rocket, FileJson, CheckCircle2 } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Auditoría y Diagnóstico",
    subtitle: "Datos de Entrada",
    description: "Descodificación total. Auditoría de infraestructura, análisis de deuda técnica y definición de KPIs. No adivinamos, medimos.",
    icon: Search,
    outputs: ["Reporte Tech Radar", "Flujos de Usuario", "Docs RFC"],
    colSpan: "md:col-span-2",
  },
  {
    id: "02",
    title: "Arquitectura de Sistema",
    subtitle: "Planos Técnicos",
    description: "Diseño de alta ingeniería. Selección de stack (Next.js/Supabase), esquema de BD y sistemas de diseño atómico.",
    icon: PenTool,
    outputs: ["UI Kit en Figma", "Esquema DB", "Spec de API"],
    colSpan: "md:col-span-1",
  },
  {
    id: "03",
    title: "Construcción Ágil",
    subtitle: "Fabricación",
    description: "Desarrollo en sprints de 2 semanas. Código tipado (TypeScript), testing automatizado y CI/CD riguroso.",
    icon: Code2,
    outputs: ["Código Fuente", "Tests Unitarios", "URL de Staging"],
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    title: "Despliegue Global",
    subtitle: "Lanzamiento",
    description: "Despliegue en el borde (Edge). Configuración de dominios, SSL, caché global y protección DDoS. Tu producto, en <100ms.",
    icon: Rocket,
    outputs: ["Build de Producción", "Analytics", "Handoff"],
    colSpan: "md:col-span-2",
  },
];

export default function Methodology() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="process" className="relative w-full bg-[#030303] py-32 px-6 overflow-hidden border-t border-white/5" onMouseMove={handleMouseMove}>
      
      {/* FONDO TÉCNICO */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
           <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-primary" />
                 <span className="text-xs font-mono uppercase tracking-widest text-primary">Protocolo de Ejecución</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                 Método <br />
                 <span className="text-white/20">Huup v2.0</span>
              </h2>
           </div>
           <p className="max-w-sm text-sm text-white/50 font-mono text-right hidden md:block leading-relaxed">
              Eliminamos la incertidumbre. <br />
              Un pipeline de ingeniería diseñado para resultados predecibles y escalables.
           </p>
        </div>

        {/* --- GRID DE PROCESO (BENTO STYLE) --- */}
        <div className="group grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {phases.map((phase) => (
             <div 
                key={phase.id} 
                className={`${phase.colSpan} relative rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden group/card`}
             >
                <SpotlightEffect mouseX={mouseX} mouseY={mouseY} />
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[320px]">
                   
                   {/* Top: Icon & ID */}
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover/card:bg-primary/20 group-hover/card:border-primary/20 transition-colors duration-500">
                         <phase.icon size={28} className="text-white group-hover/card:text-primary transition-colors duration-500" />
                      </div>
                      <span className="text-4xl font-black text-white/5 font-mono select-none group-hover/card:text-white/10 transition-colors duration-500">
                         {phase.id}
                      </span>
                   </div>

                   {/* Middle: Info */}
                   <div>
                      <div className="flex items-center gap-3 mb-2">
                         <h3 className="text-2xl font-bold text-white group-hover/card:text-primary transition-colors duration-300">
                            {phase.title}
                         </h3>
                         <div className="h-px flex-1 bg-white/10 group-hover/card:bg-primary/30 transition-colors duration-500" />
                      </div>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-4">
                         // {phase.subtitle}
                      </span>
                      <p className="text-sm text-white/60 leading-relaxed max-w-md group-hover/card:text-white/80 transition-colors duration-300">
                         {phase.description}
                      </p>
                   </div>

                   {/* Bottom: Deliverables (Reveal on Hover) */}
                   <div className="mt-8 pt-6 border-t border-white/5 group-hover/card:border-white/10 transition-colors duration-500">
                      <span className="text-[9px] text-white/20 uppercase tracking-widest font-mono block mb-3 group-hover/card:text-primary/60 transition-colors">
                         Artefactos Entregables
                      </span>
                      <div className="flex flex-wrap gap-3">
                         {phase.outputs.map(out => (
                            <div key={out} className="flex items-center gap-1.5 text-xs text-white/40 font-mono group-hover/card:text-white transition-colors duration-300 bg-white/[0.02] px-2 py-1 rounded border border-transparent group-hover/card:border-white/10">
                               <FileJson size={10} className="text-primary/50" />
                               {out}
                            </div>
                         ))}
                      </div>
                   </div>

                </div>
             </div>
           ))}

        </div>

        {/* METADATA FOOTER */}
        <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-6 opacity-50">
           <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <CheckCircle2 size={12} className="text-green-500" />
              <span>Estado del Proceso: OPTIMIZADO</span>
           </div>
           <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span>Próximo Sprint Disponible:</span>
              <span className="text-primary">Q1 2026</span>
           </div>
        </div>

      </div>
    </section>
  );
}

// --- UTILIDAD: Spotlight Effect ---
function SpotlightEffect({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
  return (
    <motion.div
      className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300 group-hover/card:opacity-100"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(255, 77, 0, 0.08),
            transparent 40%
          )
        `,
      }}
    />
  );
}