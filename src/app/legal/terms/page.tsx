import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Huup',
}

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">Términos y Condiciones</h1>
        <p className="text-xs font-mono text-white/40 uppercase">Vigencia: 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <h3 className="text-xl font-bold text-white">1. Aceptación</h3>
        <p>
          Al contratar los servicios de <strong>Huup</strong> o navegar en nuestro sitio, usted acepta estos términos de servicio. Huup se reserva el derecho de actualizar estos términos sin previo aviso.
        </p>

        <h3 className="text-xl font-bold text-white mt-8">2. Servicios</h3>
        <p>
          Huup es una agencia especializada en desarrollo de software y diseño web High-Ticket. Los alcances específicos, tiempos de entrega ("Sprints") y costos se detallarán en la propuesta comercial o contrato individual de cada proyecto.
        </p>

        <h3 className="text-xl font-bold text-white mt-8">3. Propiedad Intelectual</h3>
        <ul className="list-disc pl-5 space-y-1 marker:text-primary">
          <li><strong>Desarrollos a Medida:</strong> Una vez liquidado el pago total del proyecto, los derechos patrimoniales sobre el código fuente final serán transferidos al Cliente.</li>
          <li><strong>Herramientas Internas:</strong> Cualquier metodología, librería base o código preexistente propiedad de Huup permanece bajo nuestra titularidad.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">4. Pagos y Cancelaciones</h3>
        <p>
          Los anticipos requeridos para iniciar proyectos no son reembolsables una vez iniciada la fase de investigación o diseño. La falta de pago en las fechas estipuladas puede resultar en la suspensión temporal de los servicios.
        </p>
      </div>
    </div>
  )
}