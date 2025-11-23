// src/app/blog/page.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, Calendar, Tag, User } from "lucide-react";

// Simulación de Base de Datos de artículos
const posts = [
  {
    id: 1,
    title: "Por qué tu sitio en WordPress está perdiendo dinero",
    excerpt: "Analizamos el rendimiento técnico de los CMS tradicionales vs. soluciones programadas a medida en Next.js.",
    date: "2025-10-24",
    category: "PERFORMANCE",
    author: "Dev Team",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "La muerte del SEO tradicional: IA y Búsqueda Semántica",
    excerpt: "Cómo estructurar tu HTML y metadatos para que los nuevos motores de búsqueda basados en IA entiendan tu negocio.",
    date: "2025-11-02",
    category: "STRATEGY",
    author: "Huup Labs",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Integrando Stripe y Webhooks en tiempo real",
    excerpt: "Guía técnica sobre cómo manejar pagos asíncronos sin perder la consistencia de datos en tu base de datos.",
    date: "2025-11-15",
    category: "CODE",
    author: "Backend Lead",
    readTime: "12 min read"
  }
];

export default function BlogListing() {
  return (
    <section className="min-h-screen bg-[#050505] pt-32 pb-20 relative overflow-hidden">
      
      {/* Fondo Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6"
          >
            <Terminal size={12} /> System.Logs
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4"
          >
            Conocimiento <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">
              Técnico
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Bitácora de ingeniería, estrategias de crecimiento y actualizaciones del sistema.
          </p>
        </div>

        {/* GRID DE POSTS */}
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="group block">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
                  
                  {/* Efecto de luz al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                    
                    {/* Info del Post */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
                        <span className="text-brand-primary flex items-center gap-1">
                           <Tag size={12} /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                           <Calendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                           <User size={12} /> {post.author}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Botón Flecha */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-black text-white transition-all shrink-0">
                      <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}