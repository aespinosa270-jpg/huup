import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import TechFoundation from "@/components/TechFoundation";
import Methodology from "@/components/Methodology";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen w-full selection:bg-orange-500/30">
      <Navbar />
      
      {/* 00. INICIO */}
      <section id="inicio" className="w-full relative">
        <Hero />
      </section>
      
      {/* 01. STACK TECNOLÓGICO */}
      <section id="stack" className="w-full relative z-10">
        <TechStack />
      </section>
      
      {/* 02. SERVICIOS */}
      <section id="servicios" className="w-full relative z-10 scroll-mt-20">
        <Services />
      </section>
      
      {/* 03. FUNDAMENTOS / NOSOTROS */}
      {/* Ideal para enlazar la sección "Nosotros" aquí */}
      <section id="nosotros" className="w-full relative z-10">
        <TechFoundation />
      </section>

      {/* 04. METODOLOGÍA */}
      <section id="metodologia" className="w-full relative z-10 scroll-mt-20">
        <Methodology />
      </section>
      
      {/* 05. PROYECTOS / WORK */}
      <section id="proyectos" className="w-full relative z-10 scroll-mt-20">
        <Work />
      </section>
      
      {/* 06. CONTACTO / FOOTER */}
      <section id="contacto" className="w-full relative z-10">
        <Footer />
      </section>
      
    </main>
  );
}