// src/components/sections/TechStack.js
"use client";

const technologies = [
  "Next.js 14", "React", "Node.js", "TypeScript", "Tailwind CSS", "AWS", "Docker", "PostgreSQL", "Supabase", "Stripe", "Framer Motion", "Vercel"
];

export default function TechStack() {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden relative">
      
      {/* Sombras laterales para suavizar la entrada/salida */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />

      <div className="flex">
        {/* Tira 1 */}
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="mx-8 text-lg font-mono font-bold text-gray-500 uppercase tracking-wider hover:text-brand-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Tira 2 (Duplicada para el efecto infinito) */}
        <div className="flex animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="mx-8 text-lg font-mono font-bold text-gray-500 uppercase tracking-wider hover:text-brand-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}