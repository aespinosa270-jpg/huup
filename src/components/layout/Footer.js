// src/components/layout/Footer.js
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding Técnico */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-brand-primary mb-1">
            <Terminal size={18} />
            <h2 className="text-xl font-bold tracking-tighter text-white">
              HUUP<span className="text-brand-primary">.</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
            Infraestructura y Sistemas
          </p>
        </div>

        {/* Status y Dominio */}
        <div className="text-center md:text-right font-mono text-xs text-gray-500 space-y-1">
          <a 
            href="https://huup.com.mx" 
            className="text-white hover:text-brand-primary transition-colors block mb-2"
          >
            huup.com.mx
          </a>
          <p>
            © {new Date().getFullYear()} Huup: Ingeniería Digital.
          </p>
          <p className="text-green-900">
            &gt; Estatus: Operativo.
          </p>
        </div>
        
      </div>
    </footer>
  );
}