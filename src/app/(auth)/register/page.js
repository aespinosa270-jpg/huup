// src/app/(auth)/register/page.js
'use client';

import Link from 'next/link';
import { useActionState } from 'react-dom';
import { Terminal, Lock, User, AtSign, ArrowRight, AlertCircle, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerUser } from '@/app/actions'; // Importar la Server Action

// Componente para el botón de envío (SubmitButton)
function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button 
            type="submit" 
            disabled={pending}
            className="w-full bg-brand-primary text-black font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
            <span className="relative z-10 flex items-center gap-2">
                {pending ? (
                    <>EJECUTANDO... <Radio size={18} className="animate-spin" /></>
                ) : (
                    <>REGISTRAR ACCESO <ArrowRight size={18} /></>
                )}
            </span>
        </button>
    );
}

const initialState = {
    message: null,
    errors: null,
    success: false,
};

export default function RegisterPage() {
    // Manejo de estado con Server Actions
    const [state, formAction] = useActionState(registerUser, initialState);

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
                    <Terminal size={12} /> System.Auth // Register User
                </div>

                <h1 className="text-2xl font-black text-white mb-2">Crear Cuenta</h1>
                <p className="text-gray-500 mb-8 text-sm">Inicia tu Protocolo de Acceso a la Comunidad Huup.</p>

                {/* Formulario de Registro */}
                <motion.form 
                    action={formAction} 
                    className="space-y-4"
                    // Nota: No usamos onSubmit={handleSubmit} porque useActionState lo maneja
                >
                    {/* Campo: Nombre de Usuario */}
                    <div className="space-y-2">
                        <label htmlFor="forum_username" className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider">// Nombre de Usuario</label>
                        <div className="flex items-center border border-white/20 bg-[#0a0a0a] rounded-sm">
                            <User size={16} className="text-gray-500 mx-3"/>
                            <input 
                                type="text" id="forum_username" name="forum_username" required placeholder="Ej. SrDevHuup" 
                                className="flex-1 bg-transparent py-3 text-white placeholder:text-gray-700 focus:outline-none font-mono text-sm" 
                            />
                        </div>
                        {state?.errors?.forum_username && (
                            <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle size={10} /> {state.errors.forum_username}</p>
                        )}
                    </div>
                    
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
                        {state?.errors?.email && (
                            <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle size={10} /> {state.errors.email}</p>
                        )}
                    </div>

                    {/* Campo: Contraseña */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider">// Contraseña (Mín. 8 Caracteres)</label>
                        <div className="flex items-center border border-white/20 bg-[#0a0a0a] rounded-sm">
                            <Lock size={16} className="text-gray-500 mx-3"/>
                            <input 
                                type="password" id="password" name="password" required placeholder="••••••••" 
                                className="flex-1 bg-transparent py-3 text-white placeholder:text-gray-700 focus:outline-none font-mono text-sm" 
                            />
                        </div>
                        {state?.errors?.password && (
                            <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle size={10} /> {state.errors.password}</p>
                        )}
                    </div>

                    {/* Botón de Envío */}
                    <SubmitButton />

                    {/* Mensaje de Resultado (Éxito o Fallo General) */}
                    <AnimatePresence>
                        {state.message && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`mt-4 p-3 text-xs font-mono flex items-center gap-2 rounded-sm ${state.success ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/30'}`}
                            >
                                <AlertCircle size={14}/> <span>{state.message}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Enlace a Login */}
                    <p className="text-center text-xs text-gray-500 pt-4">
                        ¿Ya tienes acceso? <Link href="/login" className="text-brand-primary hover:text-white transition-colors">Inicia sesión aquí.</Link>
                    </p>
                </motion.form>
            </motion.div>
        </main>
    );
}