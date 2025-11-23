// src/app/page.js
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack"; // La cinta infinita
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";     // El timeline de pasos
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      
      {/* 1. Portada Impactante */}
      <Hero />
      
      {/* 2. Cinta de Tecnologías (Movimiento constante) */}
      <TechStack />
      
      {/* 3. Qué hacemos (Tarjetas Glass) */}
      <Services />
      
      {/* 4. Cómo trabajamos (Timeline vertical) */}
      <Process />
      
      {/* 5. Proyectos (Casos de éxito) */}
      <Portfolio />
      
      {/* 6. Formulario y cierre de venta */}
      <Contact />
      
      {/* 7. Pie de página */}
      <Footer />
      
    </main>
  );
}