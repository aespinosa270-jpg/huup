import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import NexusChat from "@/components/nexus/NexusChat";
// 👇 1. CURSOR & SCRIPT IMPORTADOS
import Cursor from "@/components/layout/Cursor";
import Script from "next/script";

// Fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const techMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "Huup | Arquitectura Digital",
  description: "Agencia de desarrollo web full-stack. Creamos sitios web ultrarrápidos y escalables con Next.js.",
  // Next.js buscará automáticamente el archivo 'icon.png' y 'opengraph-image'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${techMono.variable} font-sans bg-[#050505] text-white antialiased selection:bg-brand-primary/30 selection:text-white relative`}
      >
        
        {/* 🔥 1. TEXTURA GLOBAL CINEMATOGRÁFICA */}
        <div className="bg-noise" />

        {/* 🎯 2. CURSOR FRANCOTIRADOR (Solo PC) */}
        <div className="hidden md:block">
            <Cursor />
        </div>
        
        <Navbar />
        
        <main className="relative z-10">
          {children}
        </main>

        {/* 🤖 3. CHATBOT NEXUS */}
        <NexusChat />

        {/* 🌍 4. SEO TÉCNICO (SCHEMA.ORG) */}
        {/* Esto hace que Google entienda tu negocio como una Entidad Profesional */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Huup Agency",
              "url": "https://huup.com.mx",
              "logo": "https://huup.com.mx/icon.png",
              "description": "Arquitectura Digital de Alto Rendimiento. Desarrollo web full-stack, e-commerce y aplicaciones escalables.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ciudad de México",
                "addressCountry": "MX"
              },
              "priceRange": "$$$",
              "sameAs": [
                "https://instagram.com/huup.agency",
                "https://linkedin.com/company/huup"
              ]
            })
          }}
        />

      </body>
    </html>
  );
}