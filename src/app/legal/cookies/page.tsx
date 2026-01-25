import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Huup',
}

export default function CookiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">Política de Cookies</h1>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <p>
          Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico y personalizar el contenido.
        </p>

        <h3 className="text-xl font-bold text-white mt-8">1. ¿Qué son las cookies?</h3>
        <p>
          Son pequeños archivos de texto que se almacenan en su navegador cuando visita nuestro sitio web. No contienen código malicioso ni virus.
        </p>

        <h3 className="text-xl font-bold text-white mt-8">2. Tipos de Cookies que usamos</h3>
        <ul className="list-disc pl-5 space-y-1 marker:text-primary">
          <li><strong>Esenciales:</strong> Necesarias para la navegación básica y el acceso a áreas seguras.</li>
          <li><strong>Analíticas:</strong> Utilizamos herramientas como Vercel Analytics para entender cómo interactúan los usuarios con nuestra web de forma anónima.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">3. Gestión</h3>
        <p>
          Usted puede configurar su navegador para rechazar todas las cookies o indicar cuándo se envía una cookie. Sin embargo, algunas características de nuestros servicios pueden no funcionar correctamente sin ellas.
        </p>
      </div>
    </div>
  )
}