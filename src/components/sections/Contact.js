// src/components/sections/Contact.js
"use client";

import { useActionState, useState, useEffect } from "react"; 
import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions";
import { motion, AnimatePresence } from "framer-motion";
import { AtSign, ArrowRight, Terminal, Radio, AlertCircle, Wifi, ShieldCheck } from "lucide-react";

// === LOGIC COMPONENTS ===

const initialState = {
  message: '',
  errors: null,
  success: false
};

const WhatsAppBrandIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.172.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-brand-primary hover:bg-brand-secondary text-black font-bold py-5 rounded-sm transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] uppercase tracking-widest text-sm relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <span className="relative z-10 flex items-center gap-2">
         {pending ? (
             <>ENCRIPTANDO DATOS... <Radio size={18} className="animate-spin" /></>
         ) : (
             <>EJECUTAR ENVÍO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
         )}
      </span>
      {!pending && <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12 origin-left" />}
    </button>
  );
}

const ContactDataLink = ({ icon: Icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? "_blank" : "_self"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative block h-24 w-full bg-black border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300"
  >
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
        <svg className="w-full h-full">
            <pattern id={`grid-${label}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#f97316" opacity="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#grid-${label})`} />
            <motion.line 
               x1="0" y1="0" x2="100%" y2="100%" 
               stroke="#f97316" strokeWidth="2" strokeDasharray="5,5"
               animate={{ strokeDashoffset: [0, -20] }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    </div>
    
    <div className="relative z-10 h-full flex items-center px-6 gap-4">
        <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/30 rounded flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-black transition-all">
            <Icon size={20} />
        </div>
        <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-brand-primary/70 uppercase tracking-wider mb-1">
                <Radio size={10} className="animate-pulse" /> {label}_CHANEL_OPEN
            </div>
            <div className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                {value}
            </div>
        </div>
        <ArrowRight className="ml-auto text-white/20 group-hover:text-brand-primary -translate-x-4 group-hover:translate-x-0 transition-all" />
    </div>
  </motion.a>
);

// === MAIN COMPONENT ===

export default function Contact() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const start = Date.now();
    fetch('/icon.png?ping=' + Date.now(), { method: 'HEAD', cache: 'no-store' })
      .then(() => {
        const end = Date.now();
        const duration = end - start;
        setLatency(Math.max(12, duration)); 
      })
      .catch(() => setLatency(null));
  }, []);

  const getLatencyColor = () => {
    if (!latency) return "text-gray-500";
    if (latency < 80) return "text-green-500";
    if (latency < 200) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <section id="contacto" className="py-32 bg-brand-dark relative overflow-hidden">
      
      {/* Fondo Grid Continuo - OPTIMIZADO PARA MÓVIL */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* El blur gigante ahora solo aparece en Desktop (md:block) */}
        <div className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* === COLUMNA IZQUIERDA === */}
          <div>
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6"
            >
                <Terminal size={12} /> System.Contact(Init)
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-8 uppercase leading-tight tracking-tight"
            >
              Inicializar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400 drop-shadow-[0_0_25px_rgba(249,115,22,0.3)]">
                Protocolo de Escala
              </span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-brand-text text-lg mb-12 leading-relaxed max-w-md border-l-2 border-brand-primary/30 pl-6 font-light"
            >
              No pierdas más clientes por tecnología obsoleta. Ejecuta una consulta técnica gratuita y definamos la arquitectura de tu próximo nivel de facturación.
            </motion.p>

            <div className="space-y-4">
              <ContactDataLink 
                icon={AtSign} 
                label="EMAIL" 
                value="hola@huup.com.mx" 
                href="mailto:hola@huup.com.mx" 
                delay={0.3}
              />
              <ContactDataLink 
                icon={WhatsAppBrandIcon} 
                label="WHATSAPP" 
                value="+52 55 1234 5678" 
                href="https://wa.me/525512345678" 
                delay={0.4}
              />
            </div>
          </div>

          {/* === COLUMNA DERECHA: Formulario === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-primary via-transparent to-brand-secondary rounded-3xl opacity-50 blur-sm pointer-events-none" />
            
            <div className="bg-black/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[500px] flex flex-col">
              
              {/* CABECERA CON PING REAL */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex gap-2 items-center">
                      <div className={`w-3 h-3 rounded-full ${latency ? 'bg-brand-primary animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-xs font-mono text-brand-primary tracking-widest">
                        {latency ? 'LINK_ESTABLISHED' : 'CONNECTING...'}
                      </span>
                  </div>
                  <div className={`text-xs font-mono flex items-center gap-2 ${getLatencyColor()}`}>
                    <Wifi size={14} />
                    {latency ? `LATENCY: ${latency}ms` : 'PINGING...'}
                  </div>
              </div>

              <AnimatePresence mode="wait">
                {state.success ? (
                    /* === ESTADO DE ÉXITO: TERMINAL STYLE === */
                    <motion.div 
                        key="success-terminal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="bg-black border border-green-500/30 p-6 rounded font-mono text-sm shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                            <div className="flex items-center gap-2 text-green-500 mb-4 border-b border-green-900/50 pb-2">
                                <ShieldCheck size={18} />
                                <span className="font-bold">TRANSMISSION COMPLETE</span>
                            </div>
                            <div className="space-y-2 text-green-400">
                                <p>&gt; Status: 200 OK</p>
                                <p>&gt; Payload received at server: huup.com.mx</p>
                                <p>&gt; Ticket ID: <span className="text-white">#XA-{Math.floor(Math.random() * 9999)}</span> generated.</p>
                                <p>&gt; Encryption: AES-256</p>
                                <div className="h-px bg-green-900/50 my-4" />
                                <p className="text-gray-400 text-xs">
                                    // SYSTEM_NOTE: El equipo de ingeniería revisará tu solicitud.
                                    <br/>Tiempo estimado de respuesta: &lt; 24h.
                                </p>
                                <p className="animate-pulse mt-4 text-brand-primary">&gt; Closing session..._</p>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* === FORMULARIO STANDARD === */
                    <motion.form 
                        key="contact-form"
                        action={formAction} 
                        className="space-y-6 flex-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-[10px] font-mono font-bold text-brand-primary uppercase ml-1 tracking-wider"> // Tu Nombre</label>
                            <input 
                            type="text" id="name" name="name" placeholder="Ej. Juan Pérez" 
                            className="w-full bg-black border border-white/20 rounded-none px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono text-sm" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-[10px] font-mono font-bold text-brand-primary uppercase ml-1 tracking-wider">// Empresa</label>
                            <input 
                            type="text" id="company" name="company" placeholder="Ej. StartUp Inc." 
                            className="w-full bg-black border border-white/20 rounded-none px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono text-sm" 
                            />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-mono font-bold text-brand-primary uppercase ml-1 tracking-wider">// Correo Electrónico (Requerido)</label>
                        <input 
                            type="email" id="email" name="email" required placeholder="juan@empresa.com" 
                            className="w-full bg-black border border-white/20 rounded-none px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all font-mono text-sm" 
                        />
                        {state?.errors?.email && (
                            <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle size={10} /> {state.errors.email}</p>
                        )}
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="message" className="text-[10px] font-mono font-bold text-brand-primary uppercase ml-1 tracking-wider">// Detalles de la Misión</label>
                        <textarea 
                            id="message" name="message" required rows="5" placeholder="Describe los requerimientos técnicos..." 
                            className="w-full bg-black border border-white/20 rounded-none px-4 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none font-mono text-sm" 
                        />
                        {state?.errors?.message && (
                            <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle size={10} /> {state.errors.message}</p>
                        )}
                        </div>

                        <SubmitButton />
                        
                        {state?.message && !state.success && (
                            <div className="mt-4 p-3 text-xs border border-red-500/30 bg-red-500/10 text-red-400 flex items-center gap-2 font-mono">
                                <AlertCircle size={14}/> <span>ERROR: {state.message}</span>
                            </div>
                        )}
                    </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}