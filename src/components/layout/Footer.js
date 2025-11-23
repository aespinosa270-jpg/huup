// src/components/layout/Footer.js
export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-4">huup<span className="text-brand-primary">.</span></h2>
        <p className="text-brand-text text-sm mb-8">
          Huup.com, Ciudad de México, 2025.
        </p>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Huup Web Services. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}