// src/app/blog/[id]/page.js
// Finalización de la Arquitectura del Blog (Server Component)

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { notFound } from 'next/navigation'; // Necesario para manejar 404
import { getPostById } from '@/lib/data/blog'; // Importar la función de fetching de datos

// 1. GENERACIÓN DE METADATOS DINÁMICOS (SEO)
// Esto se ejecuta Server-Side y permite que los crawlers lean el título correcto.
export async function generateMetadata({ params }) {
    const post = await getPostById(params.id);

    if (!post) {
        return { title: 'Error 404 | Publicación no Encontrada' };
    }

    return {
        title: `${post.title} | Huup Blog`,
        description: post.summary || `Publicación sobre ${post.category}.`,
        openGraph: {
            // Asumo que el objeto post tiene un campo summary y category
        },
    };
}


// 2. COMPONENTE PRINCIPAL (Debe ser async para Next.js 15)
export default async function BlogPost({ params }) {
    
    // PASO CRUCIAL: Obtención directa del ID y Fetching
    const { id } = params; // Ya no es necesario 'await params' en versiones recientes de Next.js
    
    const post = await getPostById(id); // Fetch de datos del post
    
    // Si el post no existe, mostramos la página 404 de Next.js
    if (!post) {
        return notFound();
    }

    // Calculamos el tiempo de lectura (simulado)
    const readTime = Math.ceil(post.content.length / 1200); // Estimación de 1200 caracteres por minuto

    return (
        <article className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
            
            {/* Barra de progreso (Se mantiene) */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
                <div className="h-full w-1/3 bg-brand-primary" /> {/* Esto debería ser dinámico con JS si fuera un Client Component */}
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                
                {/* Botón Volver (Se mantiene) */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
                    <ArrowLeft size={16} /> Volver al System.Logs
                </Link>

                {/* Encabezado DINÁMICO */}
                <header className="mb-12 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-4 text-brand-primary text-xs font-mono font-bold uppercase mb-6">
                        <span className="px-2 py-1 bg-brand-primary/10 rounded border border-brand-primary/30">{post.category || 'Arquitectura'}</span>
                        <span>ID: {post.id}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        {post.title} {/* Contenido dinámico */}
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-gray-400 font-mono">
                        <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('es-MX')}</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> {readTime} min lectura</span> {/* Tiempo de lectura dinámico */}
                        <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto"><Share2 size={14} /> Compartir</button>
                    </div>
                </header>

                {/* Contenido DINÁMICO */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Inyectar contenido del backend */}
                </div>

            </div>
        </article>
    );
}