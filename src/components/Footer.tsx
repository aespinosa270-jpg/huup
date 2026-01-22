"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin, Terminal, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#020202] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden font-sans">
      
      {/* TEXTURAS DE FONDO */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col justify-between min-h-[60vh]">
        
        {/* --- SECCIÓN SUPERIOR: MEGA CTA (En Español) --- */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col items-start gap-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-1"
            >
               <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                  Capacidad Operativa: Disponible
               </span>
            </motion.div>

            <h2 className="max-w-5xl text-6xl font-black tracking-tighter text-white md:text-9xl leading-[0.85]">
              Escala tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/20 hover:text-white transition-colors duration-500 cursor-default">visión.</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-8 w-full">
               <Link
                 href="/contact"
                 className="group relative flex h-16 w-full md:w-auto items-center justify-center gap-4 overflow-hidden rounded bg-white px-10 text-lg font-bold uppercase tracking-wider text-black transition-all hover:bg-primary"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                 <span>Iniciar Proyecto</span>
                 <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
               </Link>
               
               <a href="mailto:hola@huup.mx" className="text-white/40 hover:text-white transition-colors font-mono text-sm flex items-center gap-2 border-b border-transparent hover:border-white/40 pb-1">
                  <Mail size={14} /> hola@huup.mx
               </a>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN MEDIA: GRID DE NAVEGACIÓN TÉCNICA --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-20">
           
           {/* Columna 1: Brand */}
           <div className="col-span-2 md:col-span-1 space-y-4">
              <Link href="/" className="text-3xl font-black tracking-tighter text-white">
                huup<span className="text-primary">.</span>
              </Link>
              <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">
                 Laboratorio de ingeniería digital. Construimos ecosistemas de alto rendimiento para líderes de mercado.
              </p>
           </div>

           {/* Columna 2: Sitemap */}
           <div className="space-y-4">
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest">Índice</h4>
              <ul className="space-y-2 text-sm">
                 {[
                   { label: 'Proyectos', href: '/work' },
                   { label: 'Servicios', href: '/#services' },
                   { label: 'Método', href: '/#process' },
                   { label: 'Nosotros', href: '/about' }
                 ].map((item) => (
                    <li key={item.label}>
                       <Link href={item.href} className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group">
                          <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 text-primary">/</span>
                          {item.label}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Columna 3: Social */}
           <div className="space-y-4">
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest">Conexión</h4>
              <ul className="space-y-2 text-sm">
                 <li><a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a></li>
                 <li><a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter (X)</a></li>
                 <li><a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2"><Github size={14} /> GitHub</a></li>
              </ul>
           </div>

            {/* Columna 4: HQ & Status */}
           <div className="space-y-4">
              <h4 className="font-mono text-xs text-white/30 uppercase tracking-widest">HQ</h4>
              <div className="text-sm text-white/60 space-y-1">
                 <p className="flex items-center gap-2"><MapPin size={14} /> Ciudad de México, MX</p>
                 <p className="text-xs text-white/30 pl-6">Zona Horaria: CST (UTC-6)</p>
              </div>
              <div className="pt-4">
                 <div className="inline-flex items-center gap-2 rounded bg-[#111] border border-white/5 px-3 py-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-white/40 uppercase">Sistemas Nominales</span>
                 </div>
              </div>
           </div>

        </div>

        {/* --- SECCIÓN INFERIOR: COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
           
           <div className="flex items-center gap-2 text-[10px] font-mono text-white/20 uppercase">
              <span>© {currentYear} Huup Inc.</span>
              <span>—</span>
              <span>Todos los derechos reservados.</span>
           </div>

           <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase">Privacidad</Link>
              <Link href="/terms" className="text-[10px] font-mono text-white/20 hover:text-white transition-colors uppercase">Términos</Link>
           </div>
           
           <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/20">
              <Terminal size={10} />
              <span>v16.0.4-rc (Latam)</span>
           </div>

        </div>

      </div>
    </footer>
  );
}