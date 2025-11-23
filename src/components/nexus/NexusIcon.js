'use client';

import { motion } from 'framer-motion';

export default function NexusIcon({ className }) {
  // Definimos variantes de rotación para mantener el código limpio
  const spinTransition = (duration, reverse = false) => ({
    repeat: Infinity,
    ease: "linear",
    duration: duration,
    repeatType: "loop",
    direction: reverse ? "reverse" : "normal" // Framer Motion permite control de dirección
  });

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Núcleo de Energía (Pulso) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"
      />

      {/* Anillo Interno (Rápido, Naranja solido) */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={spinTransition(3)}
      >
        <circle cx="50" cy="50" r="15" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="10 30" opacity="0.8" />
      </motion.svg>

      {/* Anillo Medio (Velocidad media, Carbono/Gris) */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full"
        animate={{ rotate: -360 }}
        transition={spinTransition(8, true)}
      >
        <circle cx="50" cy="50" r="28" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="40 10" />
        {/* Detalles técnicos "glitch" */}
        <circle cx="50" cy="50" r="28" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="2 90" opacity="0.5" />
      </motion.svg>

      {/* Anillo Externo (Lento, Segmentado) */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={spinTransition(15)}
      >
        <circle cx="50" cy="50" r="42" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="25 25" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="1 100" opacity="0.6" />
      </motion.svg>
    </div>
  );
}