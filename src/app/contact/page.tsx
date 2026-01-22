"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sendEmail, type ActionState } from "@/actions/send-email";

// --- CAMBIO CLAVE: Importación nativa de React 19 ---
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom"; // useFormStatus se mantiene en react-dom
// ----------------------------------------------------

import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Terminal } from "lucide-react";

export default function ContactPage() {
  
  const initialState: ActionState = {
    success: false,
    message: "",
    error: "",
  };

  // React 19 Hook Nativo
  const [state, action] = useActionState(sendEmail, initialState);
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success("Transmisión recibida. Iniciando protocolo.", {
        icon: '🚀',
        style: {
          borderRadius: '4px',
          background: '#111',
          color: '#fff',
          border: '1px solid #333',
        },
      });
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error, {
        style: {
           background: '#111',
           color: '#fff',
           border: '1px solid #ef4444',
        }
      });
    }
  }, [state]);

  return (
    <main className="bg-[#020202] min-h-screen w-full relative selection:bg-orange-500/30 font-sans">
      <Navbar />
      <Toaster position="bottom-right" />
      
      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      <section className="pt-40 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA (Texto) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-orange-500 font-mono text-xs uppercase tracking-widest border-b border-white/10 pb-4 mb-8">
               <Terminal size={14} />
               <span>Comlink_System</span>
               <span className="text-white/20">/</span>
               <span>Uplink_Active</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Escala tu <br />
              <span className="text-white/20">Visión.</span>
            </h1>
            
            <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-md">
              Estamos aceptando nuevos proyectos para el Q1 2026. Ingeniería High-End para marcas que no se conforman.
            </p>

            <div className="space-y-6">
               <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors">
                     <Mail className="text-white group-hover:text-orange-500 transition-colors" size={20} />
                  </div>
                  <div>
                     <h3 className="text-white font-bold text-sm uppercase">Email Encriptado</h3>
                     <a href="mailto:hola@huup.mx" className="text-white/40 hover:text-white transition-colors font-mono text-sm">hola@huup.mx</a>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors">
                     <MapPin className="text-white group-hover:text-orange-500 transition-colors" size={20} />
                  </div>
                  <div>
                     <h3 className="text-white font-bold text-sm uppercase">Base de Operaciones</h3>
                     <p className="text-white/40 font-mono text-sm">Ciudad de México, MX</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA (Formulario) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
          >
             <form ref={formRef} action={action} className="space-y-6 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label htmlFor="name" className="text-[10px] font-mono uppercase text-white/40 tracking-widest">ID / Nombre</label>
                       <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-white/10 font-mono"
                          placeholder="Tu nombre"
                       />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="company" className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Empresa (Opcional)</label>
                       <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-white/10 font-mono"
                          placeholder="Huup Inc."
                       />
                    </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="email" className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Canal de Retorno</label>
                   <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-white/10 font-mono"
                      placeholder="nombre@empresa.com"
                   />
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Datos de Misión</label>
                   <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={5}
                      className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder:text-white/10 font-mono resize-none"
                      placeholder="Cuéntanos sobre el problema técnico que quieres resolver..."
                   />
                </div>

                <SubmitButton />

             </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

// Botón extraído para usar useFormStatus correctamente
function SubmitButton() {
   const { pending } = useFormStatus();

   return (
      <button 
         type="submit" 
         disabled={pending}
         className="w-full group relative overflow-hidden bg-white text-black py-4 px-6 rounded font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
         {pending ? (
            <>
               <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
               <span>Procesando...</span>
            </>
         ) : (
            <>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:animate-shine" />
               <span>Enviar Solicitud</span>
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </>
         )}
      </button>
   )
}