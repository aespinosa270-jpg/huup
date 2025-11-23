// src/components/sections/Services.js
"use client";

import { motion } from "framer-motion";
import { Monitor, ShoppingBag, Database, ArrowUpRight, Terminal } from "lucide-react";

// 1. ANIMACIÓN WEB: Bloques cargando (Skeleton UI)
const WebVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-lg bg-white/5 p-3 flex flex-col gap-2 group-hover:border-brand-primary/50 transition-colors overflow-hidden relative">
    {/* Scanline (Efecto de escaneo pasando) */}
    <motion.div 
      animate={{ top: ["-100%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[20%] bg-brand-primary/10 blur-md z-10 pointer-events-none"
    />

    <div className="flex gap-2">
       <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-primary transition-colors" />
       <div className="w-2 h-2 rounded-full bg-white/20" />
    </div>
    
    {/* Header Loading */}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-2 w-1/3 bg-white/10 rounded group-hover:bg-brand-primary/40 origin-left transition-colors" 
    />

    <div className="flex gap-2 h-full">
       {/* Sidebar */}
       <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/3 bg-white/5 rounded border border-dashed border-white/10" 
       />
       
       {/* Content Blocks */}
       <div className="flex-1 h-full space-y-2">
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-full bg-white/10 rounded" 
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
            className="h-2 w-2/3 bg-white/10 rounded" 
          />
          {/* Botón interactivo */}
          <div className="mt-2 h-10 w-full bg-brand-primary/5 border border-brand-primary/20 rounded flex items-center justify-center overflow-hidden">
             <motion.div 
                whileHover={{ width: "100%" }}
                className="h-1 w-10 bg-brand-primary rounded transition-all duration-300" 
             />
          </div>
       </div>
    </div>
  </div>
);

// 2. ANIMACIÓN SHOP: Productos apareciendo (Ventas)
const ShopVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-lg bg-white/5 p-3 grid grid-cols-2 gap-2 group-hover:border-brand-primary/50 transition-colors">
     {[1, 2, 3, 4].map((i) => (
        <motion.div 
          key={i}
          // Stagger effect: Aparecen uno por uno
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          // Hover effect individual
          whileHover={{ scale: 1.05, borderColor: "rgba(249,115,22,0.5)" }}
          className="bg-black border border-white/10 rounded flex flex-col items-center justify-center p-1 gap-1 relative overflow-hidden cursor-default"
        >
           {/* Notificación de venta (Punto parpadeante) */}
           {i === 2 && (
             <motion.div 
               animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-primary rounded-full" 
             />
           )} 
           <div className="w-6 h-6 bg-white/5 rounded-sm group-hover:bg-white/10 transition-colors" />
           <div className="w-8 h-1 bg-white/10 rounded-full" />
        </motion.div>
     ))}
  </div>
);

// 3. ANIMACIÓN BACKEND: Servidores Procesando (Data Flow)
const BackendVisual = () => (
  <div className="w-full h-32 border border-white/10 rounded-lg bg-white/5 p-3 flex flex-col justify-between group-hover:border-brand-primary/50 transition-colors">
     {[1, 2, 3].map((i) => (
        <div key={i} className="h-7 w-full bg-black border border-white/10 rounded flex items-center justify-between px-3 relative overflow-hidden">
           {/* Data Packet (Luz moviéndose horizontalmente) */}
           <motion.div 
              animate={{ left: ["-20%", "120%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.8, // Retraso escalonado para que no vayan juntos
                ease: "linear" 
              }}
              className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
           />
           
           <div className="flex gap-1 relative z-10">
              {/* Luces de estado parpadeando aleatoriamente */}
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: Math.random() }}
                className={`w-1 h-1 rounded-full ${i===1 ? 'bg-brand-primary' : 'bg-green-500'}`} 
              />
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror", delay: Math.random() }}
                className="w-1 h-1 rounded-full bg-white/30" 
              />
           </div>
           <div className="h-1 w-10 bg-white/10 rounded relative z-10" />
        </div>
     ))}
  </div>
);

const services = [
  {
    id: "web",
    icon: <Monitor size={24} />,
    title: "Desarrollo Web",
    desc: "Sitios corporativos que no solo informan, venden. Arquitectura SPA (Single Page Application) para carga instantánea.",
    visual: <WebVisual />
  },
  {
    id: "shop",
    icon: <ShoppingBag size={24} />,
    title: "E-Commerce",
    desc: "Tiendas headless ultra rápidas. Pasarelas de pago custom (Stripe/MercadoPago) y sincronización de stock en tiempo real.",
    visual: <ShopVisual />
  },
  {
    id: "backend",
    icon: <Database size={24} />,
    title: "Backend & APIs",
    desc: "Sistemas robustos que escalan. Bases de datos SQL/NoSQL, autenticación segura y endpoints optimizados.",
    visual: <BackendVisual />
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-brand-dark relative">
      
      {/* Fondo Grid Continuo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO TÉCNICO */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6"
          >
            <Terminal size={12} /> System.Services
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Arquitectura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">
              Digital
            </span>
          </motion.h2>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black border border-white/10 hover:border-brand-primary rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1"
            >
              {/* HEADER DE LA TARJETA */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors border border-white/5 group-hover:border-brand-primary/20">
                  {item.icon}
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-brand-primary transition-colors" size={20} />
              </div>

              {/* VISUAL TÉCNICO ANIMADO */}
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                 {item.visual}
              </div>

              {/* CONTENIDO DE TEXTO */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-brand-primary/50 transition-colors">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}