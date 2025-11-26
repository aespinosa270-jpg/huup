// src/proxy.js (CORREGIDO PARA EVITAR REDIRECCIONES INFINITAS)
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// 1. CONFIGURACIÓN DEL MIDDLEWARE DE AUTENTICACIÓN
export default withAuth(
    // Función principal (Autorización de Rol: se ejecuta si el token es válido)
    function middleware(req) {
        const token = req.nextauth.token;
        const pathname = req.nextUrl.pathname;

        // EJEMPLO DE AUTORIZACIÓN: Proteger la ruta de administración (/admin)
        if (pathname.startsWith('/admin') && token?.role !== 'admin') {
            return NextResponse.redirect(new URL('/', req.url));
        }

        return NextResponse.next();
    },
    {
        // 2. CONFIGURACIÓN DE PÁGINAS PÚBLICAS Y PROTEGIDAS
        callbacks: {
            // Función CRÍTICA: Determina si el acceso está autorizado (antes de la redirección)
            async authorized({ token, req }) {
                const pathname = req.nextUrl.pathname;
                
                // Definimos las rutas que son públicas (no requieren sesión)
                const isPublicPath = 
                    pathname === '/' || 
                    pathname.startsWith('/login') || 
                    pathname.startsWith('/register') ||
                    pathname.startsWith('/blog');

                // Permitir acceso a rutas públicas (el usuario puede estar logueado o no).
                if (isPublicPath) {
                    return true;
                }

                // Para rutas protegidas (/foro, /admin, etc.), solo permitimos si hay un token.
                return !!token; 
            },
        },
        // NextAuth usará esta página para redirigir si 'authorized' devuelve false.
        pages: {
            signIn: '/login',
        },
    }
);

// 3. CONFIGURACIÓN DEL MATCHING DE RUTAS
export const config = {
    // Aplicar el Middleware a todas las rutas que PUEDEN ser protegidas (todas excepto _next/static, etc.)
    // Incluye /foro y /admin.
    matcher: ['/foro/:path*', '/admin/:path*', '/'], // Puedes añadir '/' aquí para proteger el root también si fuera necesario
};