// src/components/sections/Process.js
"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Analizamos tu modelo de negocio y definimos los requerimientos técnicos exactos." },
  { num: "02", title: "UX/UI Design", desc: "Prototipamos la interfaz. Nada se programa hasta que apruebes el diseño visual." },
  { num: "03", title: "Development", desc: "Programación pura en Next.js. Conectamos bases de datos, APIs y pagos." },
  { num: "04", title: "Launch", desc: "Despliegue en servidores globales (Vercel/AWS), pruebas de estrés y entrega de llaves." },
];

export default function Process() {
  return (
    <section id="metodo" className="py-32 bg-brand-dark relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Metodología <span className="text-brand-primary">Huup</span>
          </h2>
        </div>

        <div className="relative">
          {/* Línea central vertical */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Texto */}
                <div className="flex-1 md:text-right">
                   {/* En móvil ajustamos alineación, en desktop usamos la lógica reverse */}
                   <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-brand-text text-sm">{step.desc}</p>
                   </div>
                </div>

                {/* Bolita Central */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-primary flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  <span className="text-xs font-bold text-white">{step.num}</span>
                </div>

                {/* Espacio vacío para balancear */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}