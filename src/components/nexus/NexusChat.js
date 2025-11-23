'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Terminal } from 'lucide-react';
// Importamos también INITIAL_CONTEXT
import { getBotResponse, INITIAL_CONTEXT } from './NexusBrain';
import NexusIcon from './NexusIcon';

export default function NexusChat() {
  const [isOpen, setIsOpen] = useState(false);
  
  // ESTADO DE CONVERSACIÓN (LA MEMORIA)
  const [conversationContext, setConversationContext] = useState(INITIAL_CONTEXT);

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "NEXUS_CORE: Conexión establecida.\nPara iniciar el registro, por favor ingresa tu NOMBRE.", 
      sender: 'bot' 
    }
  ]);
  
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // 1. Guardar mensaje del usuario
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // 2. Procesar respuesta con el CONTEXTO ACTUAL
    setTimeout(() => {
      // Enviamos el texto Y el contexto actual al cerebro
      const response = getBotResponse(userMsg.text, conversationContext);
      
      // El cerebro nos devuelve el texto Y el nuevo contexto
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response.text, sender: 'bot' }]);
      setConversationContext(response.nextContext); // Actualizamos la memoria
      
    }, 600);
  };

  // (El resto del RETURN del HTML es exactamente igual que el anterior, no cambia)
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-mono">

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 md:w-[400px] h-[550px] bg-[#0a0a0a] border-2 border-orange-500/50 rounded-xl shadow-[0_0_50px_rgba(249,115,22,0.2)] flex flex-col mb-6 overflow-hidden backdrop-blur-sm"
          >
            {/* Header */}
            <div className="bg-orange-950/30 p-4 border-b-2 border-orange-500/50 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent animate-scanline pointer-events-none"></div>
              
              <div className="flex items-center gap-3 text-orange-500 relative z-10">
                <div className="p-2 bg-orange-500/20 rounded-md">
                    <Terminal size={18} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-[0.2em] leading-none">NEXUS AI</span>
                    <span className="text-[10px] text-orange-300/70 leading-none mt-1">PROTOCOLO V2.0 // SMART</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="relative z-10 bg-[#0a0a0a] p-1 rounded-md border border-orange-500/30 text-orange-500 hover:bg-orange-500 hover:text-black transition-colors">
                  <X size={20} />
              </button>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 p-5 overflow-y-auto bg-[#050505] bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:20px_20px] space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-xs md:text-sm relative ${
                    msg.sender === 'user' 
                      ? 'bg-orange-500 text-black font-bold clip-path-polygon-[0_0,100%_0,100%_100%,10px_100%]' 
                      : 'bg-[#111] border-l-2 border-orange-500 text-orange-100/80 clip-path-polygon-[0_0,100%_0,95%_100%,0_100%] whitespace-pre-wrap'
                  }`}>
                    {msg.sender === 'bot' && <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500/50"></div>}
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#0a0a0a] border-t-2 border-orange-500/50 flex gap-3 relative z-20">
              <input
                className="flex-1 bg-[#050505] border border-orange-900/50 text-sm text-orange-100 focus:outline-none focus:border-orange-500 px-4 py-3 rounded-none placeholder-orange-700/50"
                placeholder="> Ingresa comando..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="bg-orange-500 text-black p-3 hover:bg-white hover:text-orange-600 transition-colors font-bold relative overflow-hidden group">
                  <Send size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-4 group relative">
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }} 
            className={`hidden md:flex items-center bg-[#0a0a0a] border-2 border-orange-500/50 px-4 py-2 rounded-l-lg shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}
        >
            <span className="text-orange-500 text-xs font-bold tracking-widest whitespace-nowrap">HABLEMOS</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="ml-2 text-orange-500">→</motion.span>
        </motion.div>

        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative h-16 w-16 rounded-xl bg-[#0a0a0a] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all z-20 overflow-visible"
        >
            {!isOpen && (
                <span className="absolute -inset-2 rounded-xl border-2 border-orange-500/60 animate-ping pointer-events-none z-0"></span>
            )}
            <NexusIcon className="w-12 h-12 relative z-10 group-hover:brightness-125 transition-all" />
        </motion.button>
      </div>
    </div>
  );
}