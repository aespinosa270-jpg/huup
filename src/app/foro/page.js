// src/app/foro/page.js
"use client";

// 1. Importamos useState para controlar el modal
import { useState } from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, MessageSquare, Hash, Clock, User, ArrowRight, Plus } from "lucide-react";
// 2. Importamos el componente del modal
import CreatePostModal from "@/components/forum/CreatePostModal";

// Datos simulados (luego vendrán de tu base de datos)
const forumCategories = [
  { id: "anuncios", name: "Anuncios Oficiales", description: "Noticias y actualizaciones de la plataforma Huup.", icon: <Terminal size={20} /> },
  { id: "general", name: "Discusión General", description: "Charla libre sobre tecnología, desarrollo y diseño.", icon: <Hash size={20} /> },
  { id: "cursos", name: "Ayuda sobre Cursos", description: "Dudas y preguntas específicas sobre los cursos.", icon: <MessageSquare size={20} /> },
];

const recentTopics = [
  { id: 1, title: "¿Cuál es el mejor stack para un SaaS en 2025?", category: "general", author: "dev_master", replies: 24, lastActivity: "Hace 2 horas" },
  { id: 2, title: "Problema con el despliegue en Vercel (Curso Next.js)", category: "cursos", author: "newbie_coder", replies: 5, lastActivity: "Hace 1 día" },
  { id: 3, title: "Bienvenidos a la comunidad beta de Huup", category: "anuncios", author: "HuupAdmin", replies: 102, lastActivity: "Hace 3 días" },
  { id: 4, title: "Debate: Tailwind CSS vs. CSS-in-JS", category: "general", author: "css_ninja", replies: 45, lastActivity: "Hace 4 días" },
];

export default function ForumPage() {
  // 3. Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#050505] pt-32 pb-20 relative overflow-hidden">
      
      {/* Fondo Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER DEL FORO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-4"
            >
              <Hash size={12} /> Community.Main
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none"
            >
              Foro de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">
                Ingeniería
              </span>
            </motion.h1>
          </div>
          
          {/* 4. Botón conectado para abrir el modal */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all flex items-center gap-2"
            onClick={() => setIsModalOpen(true)} // <--- Al hacer clic, abre el modal
          >
            <Plus size={18} /> Crear Nuevo Tema
          </motion.button>
        </div>

        {/* SECCIÓN DE CATEGORÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {forumCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors">
                  {cat.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN DE TEMAS RECIENTES */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Clock size={20} className="text-brand-primary" /> Actividad Reciente
          </h2>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
            {/* Encabezados de Tabla (Estilo Terminal) */}
            <div className="grid grid-cols-12 bg-white/5 px-6 py-3 text-xs font-mono text-gray-500 uppercase tracking-wider border-b border-white/10">
              <div className="col-span-7 md:col-span-6">Tema</div>
              <div className="col-span-2 hidden md:block text-center">Categoría</div>
              <div className="col-span-3 md:col-span-2 text-center">Respuestas</div>
              <div className="col-span-2 text-right">Última Act.</div>
            </div>

            {/* Lista de Temas */}
            <div className="divide-y divide-white/5">
              {recentTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link href={`/foro/${topic.id}`} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/5 transition-colors group">
                    
                    {/* Título y Autor */}
                    <div className="col-span-7 md:col-span-6 pr-4">
                      <h3 className="text-base font-bold text-white group-hover:text-brand-primary transition-colors mb-1 truncate">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                        <User size={12} /> Iniciado por <span className="text-gray-300">{topic.author}</span>
                      </div>
                    </div>

                    {/* Categoría (Desktop) */}
                    <div className="col-span-2 hidden md:flex justify-center">
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400 uppercase">
                        {topic.category}
                      </span>
                    </div>

                    {/* Respuestas */}
                    <div className="col-span-3 md:col-span-2 text-center flex items-center justify-center gap-1 text-gray-400">
                      <MessageSquare size={14} />
                      <span className="font-mono font-bold text-white">{topic.replies}</span>
                    </div>

                    {/* Última Actividad */}
                    <div className="col-span-2 text-right text-xs text-gray-500 font-mono flex items-center justify-end gap-2">
                      <span>{topic.lastActivity}</span>
                      <ArrowRight size={14} className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                    </div>

                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Renderizamos el Modal al final del contenedor principal */}
        {/* Se muestra según el estado 'isModalOpen' y se le pasa la función para cerrarlo */}
        <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </section>
  );
}