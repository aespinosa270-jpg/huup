// src/app/page.js (CORREGIDO)

import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack"; // La cinta infinita
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";     // El timeline de pasos
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/layout/Footer";

// === NUEVAS IMPORTACIONES REQUERIDAS ===
// P2: Módulo de Métricas
import RealTimeMetrics from "@/components/sections/RealTimeMetrics"; 
// P3: El formulario de contacto HÍBRIDO (El nombre del archivo es Contact.js)
import Contact from "@/components/sections/Contact"; 
// =======================================


export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      
      {/* 1. Portada Impactante (Contiene P1: Manifiesto Técnico) */}
      <Hero />
      
      {/* 2. Cinta de Tecnologías (Movimiento constante) */}
      <TechStack />
      
      {/* 🚀 2.5 INYECCIÓN P2: Módulo de Real-Time Metrics */}
      <RealTimeMetrics />
      
      {/* 3. Qué hacemos (Tarjetas Glass) */}
      <Services />
      
      {/* 4. Cómo trabajamos (Timeline vertical) */}
      <Process />
      
      {/* 5. Proyectos (Casos de éxito) */}
      <Portfolio />
      
      {/* 💻 6. Formulario HÍBRIDO AMIGABLE (Corrige la importación a Contact) */}
      <Contact /> 
      
      {/* 7. Pie de página */}
      <Footer />
      
    </main>
  );
}