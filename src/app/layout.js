// src/app/layout.js
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// 1. IMPORTAMOS EL CHAT AQUÍ 👇
import NexusChat from "@/components/nexus/NexusChat";

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
  title: "Huup",
  description: "Agencia de desarrollo web full-stack. Creamos sitios web ultrarrápidos y escalables con Next.js.",
  // 🚀 NOTA: Hemos eliminado 'icons' manuales. 
  // Next.js buscará automáticamente el archivo 'icon.png' dentro de src/app/
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body 
        // AQUÍ ESTÁ LA CLAVE: bg-[#050505] sólido
        className={`${inter.variable} ${techMono.variable} font-sans bg-[#050505] text-white antialiased selection:bg-brand-primary/30 selection:text-white relative`}
      >
        
        {/* 🔥 AQUÍ ESTÁ LA MAGIA: TEXTURA GLOBAL CINEMATOGRÁFICA */}
        <div className="bg-noise" />
        
        <Navbar />
        
        <main className="relative z-10">
          {children}
        </main>

        {/* 2. INTEGRACIÓN DE NEXUS AQUÍ 👇 */}
        <NexusChat />

      </body>
    </html>
  );
}