// src/components/sections/RealTimeMetrics.js
'use client'; 
// Es Client Component para Framer Motion (heavy usage for micro-interactions) 

import { motion } from 'framer-motion';
import { Code, Bolt, Gauge } from 'lucide-react'; 

const MetricCard = ({ icon: Icon, title, value, unit, performance }) => (
    <motion.div 
      className="p-6 bg-[#050505] rounded-md border border-white/5"
      whileHover={{ y: -4, boxShadow: '0 0 10px rgba(249, 115, 22, 0.4)' }} 
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm text-white/70 font-mono">{title}</h3>
        <Icon className="w-5 h-5 text-[#f97316]" />
      </div>
      <p className="text-4xl font-bold font-mono text-[#f97316] mb-1">
        {value} <span className="text-lg text-white/50">{unit}</span>
      </p>
      <p className="text-xs text-white/40">{performance}</p>
    </motion.div>
);

export default function RealTimeMetrics() {
  // Valores Hardcoded para el placeholder
  const simulatedTTFB = '55.3'; 
  const simulatedLCP = '1.14';
  const simulatedLatency = '68';

  return (
    <section className="p-8 my-16 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl">
      <h2 className="text-xl font-mono text-[#f97316] mb-8">// NEXUS_ENGINEERING_REPORT.PLACEHOLDER</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <MetricCard icon={Bolt} title="TTFB (Time to First Byte)" value={simulatedTTFB} unit="ms" performance="<80ms (EDGE)" />

        <MetricCard icon={Gauge} title="LCP (Contentful Paint)" value={simulatedLCP} unit="s" performance="<1.2s (OPTIMAL)" />

        <div className="p-4 bg-[#050505] rounded-md border border-[#f97316]/30">
          <h3 className="flex items-center text-sm text-white/70 mb-2 font-mono">
            <Code className="w-4 h-4 mr-2 text-[#f97316]" /> 
            Latencia de Despliegue (ms)
          </h3>
          <div className="h-20 flex items-center justify-center text-2xl font-bold font-mono text-[#f97316]/60">
            {simulatedLatency} ms (Static)
          </div>
          <p className="text-xs text-right text-white/50 mt-1">Latencia Promedio: {simulatedLatency}ms</p>
        </div>
      </div>
    </section>
  );
}