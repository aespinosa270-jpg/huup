// src/app/blog/[id]/page.js
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

// NOTA: En Next.js 15, el componente debe ser async para esperar los params
export default async function BlogPost({ params }) {
  
  // PASO CRUCIAL: Esperar a que la promesa de params se resuelva
  const { id } = await params;

  return (
    <article className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      
      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div className="h-full w-1/3 bg-brand-primary" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Botón Volver */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Volver al System.Logs
        </Link>

        {/* Encabezado */}
        <header className="mb-12 border-b border-white/10 pb-12">
          <div className="flex items-center gap-4 text-brand-primary text-xs font-mono font-bold uppercase mb-6">
            <span className="px-2 py-1 bg-brand-primary/10 rounded border border-brand-primary/30">Performance</span>
            {/* Usamos la variable 'id' que extrajimos arriba */}
            <span>ID: {id}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
            Por qué tu sitio en WordPress está perdiendo dinero
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-400 font-mono">
            <span className="flex items-center gap-2"><Calendar size={14} /> 2025-10-24</span>
            <span className="flex items-center gap-2"><Clock size={14} /> 5 min read</span>
            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto"><Share2 size={14} /> Share</button>
          </div>
        </header>

        {/* Contenido */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-loose">
          <p className="mb-6">
            <strong className="text-white">Init Sequence...</strong> La web ha cambiado. Los usuarios ya no esperan 3 segundos a que cargue una página. Google penaliza la lentitud. Y sin embargo, el 70% de las empresas siguen usando infraestructuras monolíticas de 2010.
          </p>
          
          <h3 className="text-2xl font-bold text-white mt-10 mb-4">El problema del Monolito</h3>
          <p className="mb-6">
            WordPress fue genial para blogs, pero cuando intentas escalar una aplicación compleja sobre PHP y plugins que chocan entre sí, estás creando deuda técnica. Cada plugin es una librería de JS extra que el navegador de tu cliente tiene que descargar.
          </p>

          <div className="my-10 p-6 bg-[#0a0a0a] border-l-4 border-brand-primary rounded-r-xl">
            <p className="text-white italic font-mono">
              "La velocidad no es una característica de lujo, es el requerimiento número uno de la conversión."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">La Solución: Headless Architecture</h3>
          <p>
            Al desacoplar el frontend (Next.js) del backend (Base de datos/CMS), logramos tiempos de carga casi instantáneos. El usuario navega sin recargar la página completa.
          </p>
        </div>

      </div>
    </article>
  );
}