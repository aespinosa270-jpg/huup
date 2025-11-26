// src/app/(auth)/login/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react'; // Función clave para el login
import { useRouter } from 'next/navigation';
import { Terminal, Lock, AtSign, ArrowRight, AlertCircle, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Componente para el botón de envío
function SubmitButton({ loading }) {
    return (
        <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-brand-primary text-black font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
            <span className="relative z-10 flex items-center gap-2">
                {loading ? (
                    <>ACCEDIENDO... <Radio size={18} className="animate-spin" /></>
                ) : (
                    <>INICIAR SESIÓN <ArrowRight size={18} /></>
                )}
            </span>
        </button>
    );
}

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        // 1. Llamar a la función signIn de NextAuth
        // Provider: 'credentials' (el que configuramos en route.js)
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false, // CRÍTICO: No redirige automáticamente, nos permite manejar el error
        });

        setLoading(false);

        // 2. Manejo de la Respuesta
        if (result?.error) {
            // Error en la autenticación (ej. credenciales inválidas)
            setError("ACCESO DENEGADO: Credenciales inválidas. Inténtelo de nuevo.");
        } else {
            // Login exitoso
            // 3. Redirigir al dashboard o página principal
            router.push('/'); 
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#050505] py-20 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-black/80 backdrop-blur-xl p-8 md:p-10 rounded-xl border border-white/10 relative shadow-[0_0_50px_rgba(249,115,22,0.2)]"
            >
                {/* Cabecera Técnica */}
                <div className="flex items-center gap-2 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-3">
                    <Terminal size={12} /> System.Auth // Login Credentials
                </div>

                <h1 className="text-2xl font-black text-white mb-2">Acceso al Sistema</h1>
                <p className="text-gray-500 mb-8 text-sm">Introduce tus credenciales para ingresar a la plataforma Huup.</p>

                {/* Formulario de Login */}
                <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                >
                    {/* Campo: Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider">// Correo Electrónico</label>
                        <div className="flex items-center border border-white/20 bg-[#0a0a0a] rounded-sm">
                            <AtSign size={16} className="text-gray-500 mx-3"/>
                            <input 
                                type="email" id="email" name="email" required placeholder="tu_correo@dominio.com" 
                                className="flex-1 bg-transparent py-3 text-white placeholder:text-gray-700 focus:outline-none font-mono text-sm" 
                            />
                        </div>
                    </div>

                    {/* Campo: Contraseña */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider">// Contraseña</label>
                        <div className="flex items-center border border-white/20 bg-[#0a0a0a] rounded-sm">
                            <Lock size={16} className="text-gray-500 mx-3"/>
                            <input 
                                type="password" id="password" name="password" required placeholder="••••••••" 
                                className="flex-1 bg-transparent py-3 text-white placeholder:text-gray-700 focus:outline-none font-mono text-sm" 
                            />
                        </div>
                    </div>

                    {/* Botón de Envío */}
                    <SubmitButton loading={loading} />

                    {/* Mensaje de Error */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`mt-4 p-3 text-xs font-mono flex items-center gap-2 rounded-sm bg-red-500/10 text-red-400 border border-red-500/30`}
                            >
                                <AlertCircle size={14}/> <span>{error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Enlace a Registro */}
                    <p className="text-center text-xs text-gray-500 pt-4">
                        ¿No tienes una cuenta? <Link href="/register" className="text-brand-primary hover:text-white transition-colors">Crea tu acceso aquí.</Link>
                    </p>
                </motion.form>
            </motion.div>
        </main>
    );
}