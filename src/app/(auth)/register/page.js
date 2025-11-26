// src/app/(auth)/register/page.js
'use client';
import Link from 'next/link';
import { useState } from 'react'; 
import { Terminal, Lock, User, AtSign, ArrowRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerUser } from '@/app/actions';

// Componente para el botón de envío
function SubmitButton({ isPending }) {
    return (
        <button
            type="submit"
            disabled={isPending}
            className="group relative w-full bg-[#f97316] text-black font-bold py-3 px-4 rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
            <div className="flex items-center justify-center">
                <span className="mr-2">{isPending ? 'PROCESANDO...' : 'REGISTRAR ACCESO'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
    );
}

const initialState = {
    message: null,
    errors: null,
    success: false,
};

export default function RegisterPage() {
    const [state, setState] = useState(initialState);
    const [isPending, setIsPending] = useState(false);

    // CRÍTICO: La función handleSubmit está ahora dentro del componente sin terminación ambigua
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true); 
        setState(initialState); 

        const formData = new FormData(e.currentTarget);
        
        try {
            const result = await registerUser(formData);
            
            setState(result);
            
            if (result.success) {
                e.target.reset(); 
            }
        } catch (error) {
            setState({
                message: 'ERROR CRÍTICO: Fallo al procesar la solicitud en el servidor.',
                errors: null,
                success: false
            });
        } finally {
            setIsPending(false);
        }
    }; // <--- Sin punto y coma aquí

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#050505]"> 
            <div className="max-w-md w-full space-y-8 bg-[#0a0a0a] p-8 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"> 
                {/* Encabezado */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#f97316] hover:text-white transition-colors font-mono">
                        <Terminal className="w-6 h-6" />
                        <span className="text-xl font-bold">Huup.Terminal</span>
                    </Link>
                    <h1 className="mt-4 text-3xl font-black text-white">
                        INICIAR ACCESO
                    </h1>
                    <p className="mt-2 text-gray-500 font-mono text-xs">
                        Protocolo de Registro de Usuario
                    </p>
                </div>

                {/* Formulario de Registro */}
                <motion.form 
                    onSubmit={handleSubmit} // Usa el handler estable
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Campo de Usuario */}
                    <div className="space-y-2">
                        <label htmlFor="forum_username" className="block text-sm font-mono text-[#f97316] mb-1">// USERNAME_ALIAS</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                            <input
                                id="forum_username"
                                name="forum_username"
                                type="text"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-[#050505] border border-white/20 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all font-mono"
                                placeholder="Ingresa alias (Ej. SrDevHuup)"
                            />
                        </div>
                        {state?.errors?.forum_username && <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {state.errors.forum_username}</p>}
                    </div>

                    {/* Campo de Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-mono text-[#f97316] mb-1">// EMAIL_ADDR</label>
                        <div className="relative">
                            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-[#050505] border border-white/20 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all font-mono"
                                placeholder="tu@email.com"
                            />
                        </div>
                        {state?.errors?.email && <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {state.errors.email}</p>}
                    </div>

                    {/* Campo de Contraseña */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-mono text-[#f97316] mb-1">// PASSCODE</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full pl-10 pr-4 py-3 bg-[#050505] border border-white/20 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all font-mono"
                                placeholder="••••••••"
                            />
                        </div>
                        {state?.errors?.password && <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {state.errors.password}</p>}
                    </div>

                    {/* Mensajes de Error o Éxito */}
                    <AnimatePresence>
                        {state.message && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`p-3 rounded-lg flex items-center gap-2 ${
                                    state.success 
                                    ? 'bg-green-900/50 text-green-200' 
                                    : 'bg-red-900/50 text-red-200'
                                }`}
                            >
                                <AlertCircle className="w-4 h-4" />
                                <span className="text-sm">{state.message}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Botón de Envío */}
                    <SubmitButton isPending={isPending} />

                    {/* Enlace a Login */}
                    <div className="text-center">
                        <Link 
                            href="/login" 
                            className="text-[#f97316] hover:text-white transition-colors text-sm font-mono"
                        >
                            ¿Ya tienes cuenta? Inicia Sesión
                        </Link>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}