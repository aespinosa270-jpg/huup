import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CookieConsent from "@/components/CookieConsent";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huup | Software a la medida. Código propio, cero rentas.",
  description:
    "Construimos tu e-commerce, ERP o plataforma desde cero. El software es 100% tuyo: sin licencias mensuales, sin comisiones por venta, sin depender de plataformas de terceros. Cotización cerrada por WhatsApp.",
  keywords: [
    "Software a la medida",
    "E-commerce propio",
    "ERP a la medida",
    "Desarrollo fullstack",
    "Agencia de software México",
  ],
  authors: [{ name: "Huup Team" }],
  metadataBase: new URL("https://huup.com.mx"),
  alternates: { canonical: "https://huup.com.mx" },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Huup | Ingeniería de software que vende",
    description:
      "Plataformas de venta y sistemas operativos de negocio construidos desde cero. Código propiedad del cliente, cero licencias externas.",
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
    title: "Huup | Software a la medida. Código propio, cero rentas.",
    description:
      "Tu plataforma de ventas construida desde cero. Sin licencias mensuales ni comisiones de terceros.",
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

        {/* Contenido con Scroll Suave */}
        <SmoothScrolling>
          {children}
        </SmoothScrolling>

        {/* Componentes Flotantes (Fuera del flujo del scroll) */}
        <CookieConsent />
        <FloatingWhatsApp />

      </body>
    </html>
  );
}
