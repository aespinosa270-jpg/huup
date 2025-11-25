"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 1. RASTREAR POSICIÓN DEL MOUSE
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. DETECTAR SI ESTAMOS SOBRE ALGO CLICKABLE (LINK/BOTÓN)
    const handleMouseOver = (e) => {
      // Buscamos si el elemento o sus padres son 'A' (links) o 'BUTTON'
      const isClickable = e.target.closest('a') || e.target.closest('button');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* PUNTO CENTRAL (Mira precisa) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-primary rounded-full pointer-events-none z-[9999]"
        style={{ mixBlendMode: "difference" }} // Para que se vea sobre blanco y negro
        animate={{
          x: mousePosition.x - 4, // Centrar (mitad del ancho)
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1, // Desaparece al hacer hover (fusión)
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* ANILLO EXTERIOR (Seguidor con inercia) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-primary rounded-full pointer-events-none z-[9998]"
        style={{ mixBlendMode: "difference" }}
        animate={{
          x: mousePosition.x - 16, // Centrar (mitad del ancho)
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1, // Se agranda al hacer hover
          borderWidth: isHovering ? "1px" : "2px",
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20, 
            mass: 0.5 
        }}
      />
    </>
  );
}