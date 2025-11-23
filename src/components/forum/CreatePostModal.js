// src/components/forum/CreatePostModal.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, MessageSquare, Hash, AlignLeft, Send } from "lucide-react";

// Categorías simuladas para el select
const categories = [
  { id: "general", name: "Discusión General" },
  { id: "cursos", name: "Ayuda sobre Cursos" },
  { id: "proyectos", name: "Showcase de Proyectos" },
  { id: "bugs", name: "Reporte de Bugs" },
];

export default function CreatePostModal({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0].id);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // --- Simulación de envío al backend ---
    console.log("Creando post:", { title, category, content });
    // Simulamos un retraso de red de 1.5 segundos
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Tema creado exitosamente (Simulado)");
    
    // Resetear el formulario y cerrar el modal
    setTitle("");
    setContent("");
    setCategory(categories[0].id);
    setIsLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // Overlay de fondo oscuro y borroso
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >
          {/* Contenedor del Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_0_60px_rgba(249,115,22,0.1)] overflow-hidden flex flex-col max-h-[90vh]"
          >
            
            {/* HEADER DEL MODAL */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                  <Terminal size={24} />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Iniciar Nuevo Hilo
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            {/* CUERPO DEL FORMULARIO (Scrollable) */}
            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Título del Tema */}
                <div>
                  <label htmlFor="title" className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-2">
                    <MessageSquare size={14} /> // Topic.Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Escribe un título descriptivo..."
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-bold focus:border-brand-primary outline-none transition-colors placeholder:text-gray-600 placeholder:font-normal"
                    disabled={isLoading}
                  />
                </div>

                {/* 2. Selección de Categoría */}
                <div>
                  <label htmlFor="category" className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-2">
                    <Hash size={14} /> // Topic.Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none focus:border-brand-primary outline-none transition-colors cursor-pointer"
                      disabled={isLoading}
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id} className="bg-[#0a0a0a] text-white">
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    {/* Flecha custom para el select */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>

                {/* 3. Contenido del Post (Editor estilo terminal) */}
                <div>
                  <label htmlFor="content" className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-2">
                    <AlignLeft size={14} /> // Topic.Content (Markdown Supported)
                  </label>
                  <div className={`border border-white/10 rounded-lg overflow-hidden transition-colors ${isLoading ? 'opacity-50' : 'focus-within:border-brand-primary'}`}>
                    {/* Barra superior del editor */}
                    <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2 text-xs font-mono text-gray-500">
                      <div className="flex gap-1.5 mr-2">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      editor.md
                    </div>
                    <textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Escribe tu mensaje aquí. Sé claro y conciso..."
                      required
                      rows={8}
                      className="w-full px-4 py-3 bg-[#050505] text-gray-300 outline-none resize-none font-mono text-sm custom-scrollbar"
                      disabled={isLoading}
                    />
                  </div>
                   <p className="text-xs text-gray-600 mt-2 font-mono text-right">soporta **markdown** básico</p>
                </div>

              </form>
            </div>

             {/* FOOTER CON BOTÓN DE ACCIÓN */}
            <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end shrink-0">
                <button
                    onClick={handleSubmit}
                    disabled={isLoading || !title || !content}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                    {isLoading ? (
                        <>
                            <Terminal size={18} className="animate-pulse" /> Publicando...
                        </>
                    ) : (
                        <>
                            <Send size={18} /> Publicar Tema
                        </>
                    )}
                </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}