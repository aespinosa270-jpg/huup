'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  ShoppingBag, Database, Rocket, BrainCircuit, LineChart, Layers, 
  Zap, ShieldAlert 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // <--- IMPORTADO DE NUEVO

// --- CONFIGURACIÓN DE ANIMACIONES ---
const revealVariant: Variants = { 
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = { 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-600 selection:text-white font-sans overflow-x-hidden">
      
      <Navbar />

      {/* PROGRESS BAR */}
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-20 left-0 right-0 h-1 bg-orange-600 origin-left z-50 shadow-[0_0_15px_#ea580c]" 
      />

      {/* --- HERO: EL MANIFIESTO DEL ARQUITECTO --- */}
      <section className="relative pt-48 pb-32 px-6 border-b border-white/5 overflow-hidden">
        {/* Grid Background Técnico */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.div variants={revealVariant} className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 border border-orange-500/30 bg-orange-500/10 text-orange-500 font-mono text-xs tracking-widest uppercase rounded-full">
                v3.0.0 :: STABLE
              </span>
              <span className="text-neutral-500 font-mono text-xs">// NO LEGACY CODE FOUND</span>
            </motion.div>
            
            <motion.h1 variants={revealVariant} className="text-7xl md:text-[7rem] font-black tracking-tighter mb-10 leading-[0.9] text-white">
              CÓDIGO SIN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-white to-neutral-500 animate-gradient-x">DEUDA TÉCNICA.</span>
            </motion.h1>

            <motion.div variants={revealVariant} className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 border-t border-white/10 pt-12">
              <div className="md:col-span-4">
                <p className="font-mono text-sm text-orange-500 mb-2">01 // EL PROBLEMA</p>
                <h3 className="text-2xl font-bold text-white">El estándar es mediocre.</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl text-neutral-400 leading-relaxed font-light">
                  Llevo más de una década en el frontend. He visto agencias entregar código que es una bomba de tiempo: 
                  <span className="text-white font-medium"> memory leaks</span>, 
                  <span className="text-white font-medium"> hydration errors</span> y 
                  dependencias innecesarias que inflan el bundle. 
                  <br/><br/>
                  Huup nació de mi frustración personal. Decidimos dejar de arreglar el desastre de otros y empezar a construir el estándar correcto desde el día cero.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- STORYTELLING: LA CRUDA REALIDAD --- */}
      <section className="py-40 px-6 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <ShieldAlert className="text-red-500" />
                 <h2 className="text-sm font-mono text-red-500 uppercase tracking-widest">Runtime Error: Bad Agencies</h2>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-none">
                "Funciona en mi máquina" <br/>
                <span className="text-neutral-600">no es una garantía.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-neutral-400">
                <p>
                  ¿Sabes por qué tu web anterior fallaba? Porque usaban plantillas multipropósito con 50 plugins activos. Porque no entendían el <em className="text-white not-italic">Critical Rendering Path</em>. Porque pensaban que instalar jQuery en 2026 era aceptable.
                </p>
                <p className="border-l-4 border-orange-600 pl-6 text-white font-light italic">
                  "En Huup, escribimos código quirúrgico. Cada línea tiene un propósito. Si no aporta valor o rendimiento, se borra (Shift + Del)."
                </p>
              </div>
            </div>

            {/* Visual Technical Block */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg bg-[#0a0a0a] border border-white/10 p-8 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="space-y-2 text-neutral-500">
                  <p><span className="text-purple-400">import</span> <span className="text-white">Performance</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@huup/core'</span>;</p>
                  <p>&nbsp;</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">deliverProject</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
                  <p className="pl-4"><span className="text-neutral-600">// No aceptamos menos de 100 en Lighthouse</span></p>
                  <p className="pl-4"><span className="text-purple-400">if</span> (CLS {'>'} <span className="text-orange-400">0.1</span> || LCP {'>'} <span className="text-orange-400">2500</span>) {'{'}</p>
                  <p className="pl-8"><span className="text-purple-400">throw</span> <span className="text-purple-400">new</span> <span className="text-yellow-400">Error</span>(<span className="text-green-400">'Refactor required. Standards not met.'</span>);</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">deployToEdge</span>();</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Production Ready"</span>;</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECH SPECS (DEEP DIVE) --- */}
      <section className="py-32 px-6 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-sm font-mono text-orange-500 uppercase tracking-widest mb-4">// TECH_STACK_DUMP</h2>
          <h3 className="text-4xl font-bold max-w-2xl">
            No somos "full-stack" porque sepamos instalar WordPress. Somos ingenieros de software.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
           <TechSpec 
             title="SSR & ISR" 
             desc="Next.js Rendering Patterns para SEO instantáneo y datos frescos." 
           />
           <TechSpec 
             title="Type Safe" 
             desc="TypeScript estricto. Atrapamos errores en compilación, no en producción." 
           />
           <TechSpec 
             title="Edge Computing" 
             desc="Middleware en Vercel Edge para latencia global sub-50ms." 
           />
           <TechSpec 
             title="Atomic Design" 
             desc="Componentes aislados, reutilizables y escalables. Sistemas de diseño reales." 
           />
        </div>
      </section>

      {/* --- CAPABILITIES MATRIX (REFINED) --- */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-10">
            <div>
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.2em] mb-4">Core Modules</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight">Nuestra Oferta.</h3>
            </div>
            <div className="text-right hidden md:block">
               <div className="flex items-center gap-2 text-green-500 font-mono text-xs bg-green-500/10 px-3 py-1 rounded-full">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                 SYSTEM OPTIMAL
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 01 */}
            <ServiceCard 
              number="01"
              title="ECOMMERCE HIGH-END"
              subtitle="HEADLESS / HYDROGEN / SHOPIFY PLUS"
              desc="Construimos tiendas que vuelan. Olvida los tiempos de carga lentos de Liquid. Implementamos arquitecturas Headless con gestión de estado global optimizada. Conversión pura a través de ingeniería."
              icon={<ShoppingBag />}
            />

            {/* 02 */}
            <ServiceCard 
              number="02"
              title="ERPS & BUSINESS OS"
              subtitle="SAAS DEVELOPMENT / INTERNAL TOOLS"
              desc="Tu Excel con macros ya no da más. Desarrollamos software a medida con bases de datos relacionales robustas (Postgres) y Dashboards en tiempo real. Escalabilidad horizontal real."
              icon={<Database />}
            />

            {/* 03: VENTURE BUILDER (HERO CARD) */}
            <div className="col-span-1 md:col-span-2 group relative p-10 md:p-20 rounded-[2rem] border border-orange-500/30 bg-[#0f0f0f] hover:border-orange-500/60 transition-all duration-500 overflow-hidden shadow-2xl">
              {/* Ruido de fondo */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16 items-start">
                <div className="max-w-3xl">
                   <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/10">
                     <span className="font-mono text-xs text-orange-500 font-bold">MODULE 03</span>
                     <div className="h-3 w-[1px] bg-orange-500/50"></div>
                     <span className="font-mono text-xs text-orange-400 tracking-widest uppercase font-bold">FLAGSHIP SERVICE</span>
                   </div>
                  
                  <h3 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                    VENTURE BUILDER
                  </h3>
                  
                  <div className="prose prose-invert prose-lg text-neutral-300">
                    <p className="leading-relaxed border-l-4 border-orange-600 pl-8 mb-8">
                      La mayoría de los MVPs fallan porque están mal construidos técnicamente. 
                      Nosotros actuamos como tu <strong>Co-Founder Técnico (CTO)</strong> interino. 
                      Validamos hipótesis, montamos infraestructura CI/CD y lanzamos productos robustos listos para recibir inversión Serie A.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-8">
                     {['MVP Architecture', 'Scalability Planning', 'Tech Due Diligence'].map((tag) => (
                       <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 rounded hover:bg-white/10 transition-colors cursor-default">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
                
                <div className="relative hidden lg:block self-center">
                   <div className="absolute inset-0 bg-orange-500 blur-[150px] opacity-10 animate-pulse"></div>
                   <Rocket size={200} className="text-neutral-200 relative z-10 drop-shadow-2xl transform group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700 ease-out" strokeWidth={0.8} />
                </div>
              </div>
            </div>

            {/* 04 */}
            <ServiceCard 
              number="04"
              title="CONSULTORÍA TECH"
              subtitle="CODE AUDIT / REFACTORING"
              desc="¿Tu equipo actual te dice que 'no se puede'? Déjame ver el repositorio. Hacemos auditoría forense de código, detectamos cuellos de botella y eliminamos la deuda técnica que frena tu negocio."
              icon={<BrainCircuit />}
            />

            {/* 05 */}
            <ServiceCard 
              number="05"
              title="GROWTH ENGINEERING"
              subtitle="PROGRAMMATIC SEO / SCRAPING"
              desc="El marketing es matemáticas. Usamos Python y Node para scraping ético, generación de miles de landing pages dinámicas (Programmatic SEO) y automatización de funnels. Growth Hacking real, no posts de Instagram."
              icon={<LineChart />}
            />

            {/* 06 */}
            <ServiceCard 
              number="06"
              title="ARQUITECTURA WEB"
              subtitle="NEXT.JS / VERCEL / PERFORMANCE"
              desc="Pixel Perfect es el mínimo. Accesibilidad (a11y), PWA capabilities y optimización de Core Web Vitals. Tu sitio web será la pieza de software más rápida que tus clientes hayan usado."
              icon={<Layers />}
            />

          </div>
        </div>
      </section>

      {/* --- FOOTER AQUÍ --- */}
      <Footer />

    </div>
  );
}

// ==========================================
// COMPONENTES AUXILIARES
// ==========================================

function ServiceCard({ number, title, subtitle, desc, icon }: { number: string, title: string, subtitle: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="group relative p-10 h-full rounded-[2rem] border border-white/5 bg-[#0f0f0f] hover:bg-[#141414] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono text-xs text-neutral-500 group-hover:text-white transition-colors border border-white/5 px-3 py-1 rounded bg-black">{number}</span>
          <div className="text-neutral-600 group-hover:text-orange-500 transition-colors duration-300 transform group-hover:rotate-12 group-hover:scale-110">
            <div className="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
               {icon}
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-500 transition-colors">{title}</h3>
        <p className="font-mono text-[10px] text-neutral-500 mb-6 tracking-widest uppercase">{subtitle}</p>
        
        <p className="text-sm text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}

function TechSpec({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 border-l border-white/10 hover:border-orange-500 transition-colors">
      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
        <Zap size={16} className="text-orange-500" />
        {title}
      </h4>
      <p className="text-xs text-neutral-500 leading-relaxed font-mono">
        {desc}
      </p>
    </div>
  );
}