"use client";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "Next.js 15", type: "FRAMEWORK", color: "text-white" },
  { name: "React 19", type: "LIBRARY", color: "text-cyan-400" },
  { name: "TypeScript", type: "LANG", color: "text-blue-500" },
  { name: "Rust", type: "PERFORMANCE", color: "text-orange-500" },
  { name: "Tailwind v4", type: "STYLING", color: "text-teal-400" },
  { name: "Supabase", type: "BACKEND", color: "text-emerald-400" },
  { name: "PostgreSQL", type: "DATABASE", color: "text-indigo-400" },
  { name: "Vercel Edge", type: "CLOUD", color: "text-white" },
  { name: "Docker", type: "DEVOPS", color: "text-blue-600" },
  { name: "Stripe API", type: "PAYMENTS", color: "text-violet-400" },
  { name: "OpenAI", type: "LLM", color: "text-green-500" },
  { name: "Framer Motion", type: "ANIMATION", color: "text-purple-500" },
];

export default function TechStack() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 border-y border-white/5">
      
      <div className="absolute left-6 top-6 flex items-center gap-2 z-20">
        <div className="h-2 w-2 bg-primary animate-pulse rounded-full" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
          Stack Performance Monitor
        </span>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="flex flex-col gap-6">
        <InfiniteMarquee direction="left" speed={40}>
          {TECHNOLOGIES.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </InfiniteMarquee>

        <InfiniteMarquee direction="right" speed={50}>
          {[...TECHNOLOGIES].reverse().map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}

function InfiniteMarquee({ children, direction = "left", speed = 30 }: any) {
  return (
    <div className="flex w-full overflow-hidden select-none">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0 gap-4 pr-4 will-change-transform" 
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function TechCard({ tech }: any) {
  return (
    <div className="group relative flex items-center gap-3 rounded-md border border-white/10 bg-zinc-900/50 px-5 py-2.5 transition-colors hover:border-primary/50 hover:bg-zinc-900">
      
      <span className={`text-xs font-mono font-bold ${tech.color}`}>
        {`const ${tech.type}`}
      </span>
      
      <span className="text-white/20 font-mono text-xs">=</span>
      
      <span className="text-sm font-bold text-white tracking-tight">
        "{tech.name}";
      </span>

      <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all" />
    </div>
  );
}