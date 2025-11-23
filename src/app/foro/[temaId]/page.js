// src/app/foro/[temaId]/page.js
import Link from "next/link";
import { ArrowLeft, MessageSquare, Clock, User, Share2, Reply, Terminal } from "lucide-react";

// NOTA: En Next.js 15, params es una promesa.
export default async function TopicPage({ params }) {
  // Esperamos a que params se resuelva
  const { temaId } = await params;

  // Datos simulados para el tema y las respuestas
  const topicData = {
    id: temaId,
    title: "¿Cuál es el mejor stack para un SaaS en 2025?",
    category: "Discusión General",
    author: "dev_master",
    date: "2025-10-25 14:30",
    content: `
      <p>Hola comunidad,</p>
      <p>Estoy planeando iniciar un nuevo proyecto SaaS B2B y me encuentro en la clásica encrucijada tecnológica.</p>
      <p>Mi background es principalmente React/Node, pero veo mucho hype alrededor de nuevas herramientas. Mis prioridades son:</p>
      <ul>
        <li>Velocidad de desarrollo (Time-to-market)</li>
        <li>Escalabilidad a largo plazo</li>
        <li>Experiencia de desarrollador (DX)</li>
      </ul>
      <p>¿Qué stack elegirían ustedes hoy para un proyecto serio que debe escalar? ¿Sigue siendo el T3 Stack (Next.js, tRPC, Tailwind, Prisma) la opción reina, o hay algo mejor?</p>
      <p>Los leo. Saludos.</p>
    `,
  };

  const replies = [
    {
      id: 101,
      author: "senior_architect",
      role: "Moderador",
      date: "Hace 1 hora",
      content: `<p>Excelente pregunta. En mi opinión, el T3 stack sigue siendo una opción solidísima, pero yo le haría un pequeño ajuste para 2025: reemplazaría tRPC por <strong>Server Actions</strong> nativas de Next.js para simplificar la arquitectura.</p><p>Para la base de datos, usaría algo serverless como Neon (PostgreSQL) o PlanetScale (MySQL) para no preocuparme por la infraestructura.</p>`,
    },
    {
      id: 102,
      author: "frontend_wizard",
      date: "Hace 45 minutos",
      content: `<p>Concuerdo con @senior_architect sobre las Server Actions. Simplifican mucho el código. En cuanto a UI, no te olvides de usar una buena librería de componentes como shadcn/ui sobre Tailwind, te ahorrará semanas de trabajo.</p>`,
    },
  ];

  return (
    <section className="min-h-screen bg-[#050505] pt-32 pb-20 relative">
      
      {/* Fondo Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Botón Volver */}
        <Link href="/foro" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
          <ArrowLeft size={16} /> Volver al Índice
        </Link>

        {/* HEADER DEL TEMA */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <div className="flex items-center gap-4 text-brand-primary text-xs font-mono font-bold uppercase mb-4">
            <span className="px-2 py-1 bg-brand-primary/10 rounded border border-brand-primary/30">
              <Hash size={12} className="inline mr-1" />
              {topicData.category}
            </span>
            <span>ID: {topicData.id}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            {topicData.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono">
            <span className="flex items-center gap-2">
              <User size={14} className="text-brand-primary" /> 
              Iniciado por <span className="text-white font-bold">{topicData.author}</span>
            </span>
            <span className="flex items-center gap-2"><Clock size={14} /> {topicData.date}</span>
            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
              <Share2 size={14} /> Compartir
            </button>
          </div>
        </div>

        {/* --- POST ORIGINAL --- */}
        <div className="mb-12 bg-[#0a0a0a] border border-brand-primary/30 rounded-xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.1)]">
          {/* Decoración de Terminal */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 flex items-center px-4 border-b border-white/5">
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
             </div>
             <div className="ml-4 text-xs font-mono text-gray-600 flex items-center gap-1">
                <Terminal size={10} /> source_code.md
             </div>
          </div>

          <div 
            className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300 leading-relaxed mt-6"
            dangerouslySetInnerHTML={{ __html: topicData.content }} 
          />
        </div>

        {/* --- SECCIÓN DE RESPUESTAS --- */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
            <MessageSquare size={20} className="text-brand-primary" /> {replies.length} Respuestas al hilo
          </h3>

          <div className="space-y-6">
            {replies.map((reply) => (
              <div key={reply.id} className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 relative hover:border-white/20 transition-colors">
                
                {/* Header de la Respuesta */}
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <User size={20} className="text-gray-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{reply.author}</span>
                        {reply.role && (
                          <span className="px-1.5 py-0.5 bg-brand-primary/20 text-brand-primary text-[10px] font-mono font-bold uppercase rounded">
                            {reply.role}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{reply.date}</span>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-brand-primary transition-colors p-2 hover:bg-white/5 rounded-lg">
                    <Reply size={16} />
                  </button>
                </div>

                {/* Contenido de la Respuesta */}
                <div 
                  className="prose prose-invert prose-sm max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: reply.content }} 
                />
              </div>
            ))}
          </div>

          {/* CALL TO ACTION PARA RESPONDER */}
          <div className="mt-12 p-8 bg-brand-primary/5 border border-dashed border-brand-primary/30 rounded-xl text-center">
            <p className="text-gray-400 mb-4">Debes iniciar sesión para participar en este hilo.</p>
            <Link href="/login" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-all">
              <User size={18} /> Iniciar Sesión para Responder
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}