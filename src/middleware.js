// src/middleware.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// 1. CONFIGURACIÓN DEL MIDDLEWARE DE AUTENTICACIÓN
export default withAuth(
    // Función principal (se ejecuta solo si el token de sesión es válido)
    function middleware(req) {
        const token = req.nextauth.token;
        const pathname = req.nextUrl.pathname;

        // Ejemplo de Autorización: Proteger la ruta de administración (/admin)
        // CRÍTICO: Si el usuario intenta acceder a /admin y NO es un admin, lo redirigimos.
        if (pathname.startsWith('/admin') && token?.role !== 'admin') {
            return NextResponse.redirect(new URL('/', req.url));
        }

        // Si el usuario está autenticado y no es un admin, puede continuar (ej. en el foro)
        return NextResponse.next();
    },
    {
        // 2. CONFIGURACIÓN DE PÁGINAS PÚBLICAS Y PROTEGIDAS
        callbacks: {
            // Esta función se ejecuta antes de 'middleware' si no hay token.
            // Si devuelve 'true', permite el acceso sin token (Rutas Públicas).
            async authorized({ token, req }) {
                const pathname = req.nextUrl.pathname;

                // Definimos las rutas que son públicas (no requieren sesión)
                const isPublicPath = 
                    pathname === '/' || 
                    pathname.startsWith('/login') || 
                    pathname.startsWith('/register') ||
                    pathname.startsWith('/blog');

                // Si la ruta es pública, permitimos el acceso sin token.
                if (isPublicPath) {
                    return true;
                }

                // De lo contrario, solo permitimos si hay un token válido.
                // Esto protege TODAS las demás rutas (incluyendo /foro) por defecto.
                return !!token;
            },
        },
        // Página de inicio de sesión a la que se redirigirá si no hay sesión
        pages: {
            signIn: '/login',
        },
    }
);

// 3. CONFIGURACIÓN DEL MATCHING DE RUTAS
export const config = {
    // Definimos qué rutas deben pasar por el Middleware
    // CRÍTICO: El Middleware debe correr en el Foro y Admin
    matcher: ['/foro/:path*', '/admin/:path*'],
};