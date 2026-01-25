"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si ya existe la preferencia guardada
    const consent = localStorage.getItem("huup-cookie-consent");
    if (!consent) {
      // Pequeño delay para no abrumar al usuario inmediatamente al entrar
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("huup-cookie-consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("huup-cookie-consent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#050505]/90 backdrop-blur-xl p-6 shadow-2xl shadow-black/50">
            
            {/* Efecto de brillo sutil en el borde superior */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <Cookie size={14} className="text-white/80" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-white">Cookies & Privacidad</h4>
                  <p className="text-xs leading-relaxed text-white/50">
                    Utilizamos cookies para optimizar la infraestructura y analizar el tráfico. 
                    Consulta nuestra <Link href="/legal/cookies" className="text-white hover:text-primary underline decoration-white/20 underline-offset-2 transition-colors">Política de Cookies</Link>.
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={handleAccept}
                    className="flex-1 rounded bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Aceptar
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 rounded border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/5"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </div>

            {/* Botón de cerrar discreto */}
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 p-2 text-white/20 hover:text-white transition-colors"
            >
                <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}