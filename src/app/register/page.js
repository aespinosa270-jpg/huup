// src/app/register/page.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Lock, Mail, User, ArrowRight, LogIn } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Error: Passwords no coinciden.");
      setIsLoading(false);
      return;
    }

    // --- Lógica de registro REAL se agregará aquí más adelante ---
    // Por ahora, solo simulamos un retraso
    await new Promise((resolve) => setTimeout(resolve, 1500)); 

    if (name && email && password) {
      alert("¡Registro exitoso! (Simulado). Ahora puedes iniciar sesión.");
      // Redirigir a la página de login
    } else {
      setError("Todos los campos son requeridos.");
    }
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden px-4">
      
      {/* Fondo de Grid y Orbe Naranja */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl p-8 md:p-10 shadow-[0_0_60px_rgba(249,115,22,0.1)]"
      >
        <div className="flex justify-center mb-8">
          <Terminal size={48} className="text-brand-primary" />
        </div>

        <h1 className="text-3xl font-black text-white text-center mb-2">
          CREAR NUEVA CUENTA
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Acceso a la matriz de Huup.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">// User.Name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de Usuario"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">// User.Email</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ingresa@tu.email"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-mono text-gray-400 mb-2">// User.Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-mono text-gray-400 mb-2">// Confirm.Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite tu password"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Mensaje de Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm font-mono text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Botón de Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Terminal size={20} className="animate-pulse" /> Registrando...
              </>
            ) : (
              <>
                Registrarse <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        {/* Enlace para volver a Login */}
        <div className="mt-8 text-center text-gray-500 text-sm font-mono">
          <Link href="/login" className="hover:text-brand-primary transition-colors flex items-center justify-center gap-2">
            <LogIn size={16} /> Ya tengo cuenta.Acceso()
          </Link>
        </div>
      </motion.div>
    </section>
  );
}