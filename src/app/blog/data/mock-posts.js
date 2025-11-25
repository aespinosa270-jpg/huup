// src/app/blog/data/mock-posts.js
// Módulo de datos SIMULADO local para el Blog

const MOCK_POSTS = [
    { 
        id: 'nextjs-performance', 
        title: 'Optimización Crítica de Rendimiento con Next.js 15', 
        summary: 'La transición a Server Components y el manejo de latencia en la App Router.',
        category: 'PERFORMANCE',
        author: 'Nexus AI', 
        date: '2025-11-20', 
        content: '<p>Contenido de prueba. La arquitectura de Next.js es la solución a la deuda técnica.</p>' 
    },
    { 
        id: 'supabase-auth', 
        title: 'Guía de Implementación de Autenticación Segura con Supabase', 
        summary: 'Detalles sobre la tabla de usuarios y el flujo de sesión en NextAuth.',
        category: 'SEGURIDAD',
        author: 'Sr Dev Huup', 
        date: '2025-10-15', 
        content: '<p>Asegurar las sesiones de usuario es nuestra prioridad.</p>' 
    },
];

export async function getPostById(id) {
    // Simula la latencia de una base de datos/API
    await new Promise(resolve => setTimeout(resolve, 100)); 
    
    // Busca el post por ID
    return MOCK_POSTS.find(post => post.id === id);
}