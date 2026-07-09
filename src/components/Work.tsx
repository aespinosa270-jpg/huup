"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "527299935444";
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const projects = [
  {
    id: "01",
    slug: "nor",
    client: "NØR",
    title: "Sportswear E-Comm",
    description:
      "Tienda de alto rendimiento construida desde cero: catálogo, carrito y checkout 100% propios. Sin plataforma de terceros ni comisión por transacción — cada peso de venta se queda en la marca.",
    tags: ["Next.js 16", "Checkout propio", "$0 comisiones"],
    year: "2025",
    color: "from-zinc-800 to-black",
    overlay: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20",
    liveUrl: "https://nor.com.mx",
    image: "/work/nor.jpg",
    waMsg:
      "Hola Huup, vi el caso NØR y quiero una tienda en línea propia como esa.",
  },
  {
    id: "02",
    slug: "coyote-textil",
    client: "COYOTE TEXTIL",
    title: "B2B Commerce Engine",
    description:
      "Plataforma de venta mayorista textil con lógica de negocio real: precios por rollo, kilo y metro, facturación 4.0 automática al confirmar compra, y asistente de compra con IA disponible 24/7.",
    tags: ["Venta por rollo/kg", "Facturación 4.0", "IA 24/7"],
    year: "2026",
    color: "from-orange-950 to-black",
    overlay: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20",
    liveUrl: "https://coyotetextil.com",
    image: "/work/coyote-textil.jpg",
    waMsg:
      "Hola Huup, vi el caso Coyote Textil y quiero una plataforma B2B con esa lógica de negocio.",
  },
  {
    id: "03",
    slug: "stephan-textil",
    client: "STEPHAN TEXTIL",
    title: "Industrial B2B Platform",
    description:
      "Sistema masivo de gestión de inventario: más de 50,000 SKUs textiles sincronizados en tiempo real con el ERP del cliente. Sus vendedores cotizan con existencias y precios al día, sin captura manual.",
    tags: ["Dashboard", "PostgreSQL", "Real-time"],
    year: "2025",
    color: "from-blue-950 to-black",
    overlay:
      "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
    liveUrl: "https://stephantextil.com",
    image: "/work/stephan-textil.jpg",
    waMsg:
      "Hola Huup, vi el caso Stephan Textil y quiero conectar mi operación B2B con mi ERP.",
  },
  {
    id: "04",
    slug: "huup",
    client: "HUUP AGENCY",
    title: "Agency Portfolio",
    description:
      "Nuestra propia identidad. Un manifiesto de ingeniería digital usando las últimas capacidades de Vercel Edge.",
    tags: ["Experimental", "Framer Motion", "RSC"],
    year: "2026",
    color: "from-primary/20 to-black",
    overlay:
      "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent",
    liveUrl: null,
    image: null,
    waMsg: "Hola Huup, quiero un sitio con este nivel de ingeniería para mi marca.",
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

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
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

               {/* Evidencia + conversión: sitio en vivo y CTA de WhatsApp por caso */}
               <div className="flex flex-wrap items-center gap-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors"
                    >
                       <span className="border-b border-white/20 pb-0.5 group-hover:border-primary">Ver sitio en vivo</span>
                       <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a
                    href={wa(project.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-primary transition-colors"
                  >
                     <span className="border-b border-white/20 pb-0.5 hover:border-primary">Quiero algo así</span>
                     <ArrowUpRight size={14} />
                  </a>
               </div>
            </div>
        </div>

        <div className="lg:col-span-8 relative h-[300px] lg:h-auto overflow-hidden bg-[#050505]">
            <motion.div
               style={{ y }}
               className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
            />
            <div className={`absolute inset-0 ${project.overlay}`} />

            <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
               <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
                  {/* Barra de navegador */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-2.5">
                     <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-500/40" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/40" />
                        <div className="h-2 w-2 rounded-full bg-green-500/40" />
                     </div>
                     <span className="text-[9px] font-mono text-white/40">
                        {project.liveUrl ? project.liveUrl.replace("https://", "") : "huup.com.mx"}
                     </span>
                     <span className="text-[8px] font-mono text-green-500/60 uppercase">Live</span>
                  </div>

                  {/* Screenshot real del sitio en producción */}
                  {project.image ? (
                     <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                           src={project.image}
                           alt={`Sitio de ${project.client} construido por Huup`}
                           fill
                           sizes="(max-width: 1024px) 90vw, 672px"
                           className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                     </div>
                  ) : (
                     <div className="relative aspect-[16/10] w-full p-8">
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
                  )}
               </div>
            </div>

            <div className="absolute inset-0 border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/50 pointer-events-none" />
        </div>
    </motion.div>
  );
}
