// src/app/layout.js (SOLUCIÓN FINAL DE RUTA Y WHITESPACE)

import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import NexusChat from "@/components/nexus/NexusChat";
import Cursor from "@/components/layout/Cursor";
import Script from "next/script";

// CRÍTICO: Importación corregida a ruta relativa '../' (Sube un nivel: src/app -> src/)
import NextAuthSessionProvider from "../components/auth/NextAuthSessionProvider"; 

// === ID REAL DE GTM ===
const GTM_ID = "GTM-P4V2MZFX"; 
// ======================

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
      {/* Corregimos el error de hidratación moviendo el script de GTM dentro de head si es posible, 
         y eliminando el espacio entre <html> y <body> */}
      
      {/* 🟢 GTM PARTE 1: INYECCIÓN EN HEAD (Script principal) */}
      <Script id="gtm-script-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body 
        className={`${inter.variable} ${techMono.variable} font-sans bg-[#050505] text-white antialiased selection:bg-brand-primary/30 selection:text-white relative`}
      >
        
        {/* 🔥 COMIENZO DEL PROVIDER DE SESIÓN (Fase 6) */}
        <NextAuthSessionProvider> 

            {/* 🟢 GTM PARTE 2: INYECCIÓN EN BODY (No-Script Iframe) */}
            <noscript>
              <iframe 
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0" width="0" style={{display:'none',visibility:'hidden'}}
              />
            </noscript>
            
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
            <Script
              id="schema-org"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  // ... (metadatos sin cambios) ...
                  "sameAs": [
                    "https://instagram.com/huup.agency",
                    "https://linkedin.com/company/huup"
                  ]
                })
              }}
            />
        
        </NextAuthSessionProvider> {/* FIN DEL PROVIDER */}
      </body>
    </html>
  );
}