import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Huup',
  description: 'Política de privacidad y protección de datos de Huup.',
}

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">Aviso de Privacidad</h1>
        <p className="text-xs font-mono text-white/40 uppercase">Última actualización: Enero 2026</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-white/70">
        <p>
          En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), <strong>Huup</strong> (en adelante "La Agencia"), con domicilio en Ciudad de México, pone a su disposición el presente Aviso de Privacidad Integral.
        </p>

        <h3 className="text-xl font-bold text-white mt-8">1. Datos Personales Recabados</h3>
        <p>Para la prestación de nuestros servicios de desarrollo web y consultoría tecnológica, podemos recabar:</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-primary">
          <li><strong>Datos de Identificación:</strong> Nombre completo, razón social.</li>
          <li><strong>Datos de Contacto:</strong> Correo electrónico, teléfono, dirección fiscal.</li>
          <li><strong>Datos Fiscales:</strong> Información necesaria para facturación (RFC, Constancia de Situación Fiscal).</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">2. Finalidades del Tratamiento</h3>
        <p>Sus datos serán utilizados exclusivamente para:</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-primary">
          <li>Proveer los servicios de desarrollo, diseño y mantenimiento contratados.</li>
          <li>Procesos de facturación y cobro.</li>
          <li>Dar seguimiento a proyectos y soporte técnico.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8">3. Derechos ARCO</h3>
        <p>
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal (Rectificación); que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de sus datos (Oposición).
        </p>
        <p>
          Para ejercer cualquiera de los derechos ARCO, deberá presentar la solicitud respectiva a través del correo electrónico: <a href="mailto:hola@huup.mx" className="text-white underline decoration-primary/50 hover:decoration-primary">hola@huup.mx</a>.
        </p>
      </div>
    </div>
  )
}