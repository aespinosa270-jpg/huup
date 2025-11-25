import { ImageResponse } from 'next/og'

// Configuración de la imagen
export const runtime = 'edge'
export const alt = 'Huup | Arquitectura Digital'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      // Contenedor (Fondo Negro)
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decoración de fondo */}
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                backgroundSize: '40px 40px',
                opacity: 0.2
            }}
        />

        {/* Glow Naranja */}
        <div
            style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: '#f97316',
                filter: 'blur(200px)',
                opacity: 0.15,
                borderRadius: '100%'
            }}
        />

        {/* LOGO */}
        <div
          style={{
            fontSize: 150,
            fontWeight: 900,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            marginBottom: 20,
            zIndex: 10
          }}
        >
          huup
          <span style={{ color: '#f97316' }}>.</span>
        </div>

        {/* TEXTO */}
        <div
            style={{
                fontSize: 32,
                color: '#9ca3af',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                zIndex: 10
            }}
        >
            Arquitectura Digital
        </div>
      </div>
    ),
    { ...size }
  )
}