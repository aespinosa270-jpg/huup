import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import SmoothScrolling from "@/components/SmoothScrolling";
import CookieConsent from "@/components/CookieConsent"; // <--- 1. IMPORTAR AQUÍ

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata optimizada para el SEO y Branding de Huup
export const metadata: Metadata = {
  title: "Huup | High-End Software Agency",
  description: "CEO de Huup.com.mx: Desarrollo fullstack con implementación de herramientas high tech y software a la medida.",
  keywords: ["Software a la medida", "Fullstack Development", "High Tech", "Next.js 16", "Agencia de Software"],
  authors: [{ name: "Huup Team" }],
  
  icons: {
    icon: "/icon.png", 
    apple: "/apple-icon.png", 
  },

  openGraph: {
    title: "Huup | Ingeniería de Software de Alto Rendimiento",
    description: "Arquitectura digital y desarrollo fullstack para marcas que no se conforman.",
    url: "https://huup.com.mx",
    siteName: "Huup",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Huup Software Agency Terminal Interface",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Huup | High-End Software Agency",
    description: "Desarrollo de software a la medida con stack tecnológico moderno.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="bg-noise" />
        
        <SmoothScrolling>
          {children}
        </SmoothScrolling>

        {/* 2. COMPONENTE INTEGRADO AQUÍ (Fuera del scroll, dentro del body) */}
        <CookieConsent />
        
      </body>
    </html>
  );
}