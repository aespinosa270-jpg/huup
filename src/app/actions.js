// src/app/actions.js (COMPLETO Y CORREGIDO: Inclusión de registerUser)
'use server'

import { Resend } from 'resend';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'; // Asegúrate de haber instalado bcryptjs

const resend = new Resend(process.env.RESEND_API_KEY);
const prisma = new PrismaClient(); // Inicialización del cliente de Prisma


// =======================================================
// 1. ESQUEMAS DE VALIDACIÓN (ZOD)
// =======================================================

const ContactSchema = z.object({
    name: z.string().optional(),
    company: z.string().optional(),
    email: z.string().email({ message: "EMAIL_ERROR: Formato inválido." }),
    message: z.string().min(10, { message: "MSG_ERROR: Mínimo 10 caracteres." })
});

const RegisterSchema = z.object({
    forum_username: z.string().min(3, "USUARIO_ERROR: Mínimo 3 caracteres."),
    email: z.string().email("EMAIL_ERROR: Formato inválido."),
    password: z.string().min(8, "PASS_ERROR: Mínimo 8 caracteres."),
});


// =======================================================
// 2. FUNCIÓN DE CONTACTO (Se mantiene funcional)
// =======================================================
export async function sendContactEmail(formData) { 
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        console.error("SERVER ACTION ERROR: Validación fallida en 'sendContactEmail'", validatedFields.error.flatten().fieldErrors);
        return { success: false, errors: validatedFields.error.flatten().fieldErrors, message: "Validación de datos fallida." };
    }

    const { name, company, email, message } = validatedFields.data;

    try {
        await resend.emails.send({
            from: 'Huup Terminal <onboarding@resend.dev>',
            to: 'aespinosa270@gmail.com', // Tu correo
            subject: `🚀 Nuevo Proyecto: ${name || 'Anónimo'} (${company || 'Sin Empresa'})`,
            text: `NOMBRE: ${name || 'N/A'}\nEMPRESA: ${company || 'N/A'}\nEMAIL: ${email}\n\nMENSAJE:\n${message}`,
        });
        
        return { success: true, message: "Datos encriptados y enviados correctamente." };
    
    } catch (error) {
        console.error("DEBUG CRÍTICO: Fallo en el bloque TRY/CATCH (Conectividad/TimeOut):", error);
        return { success: false, message: "Fallo crítico del sistema. (Verificar TimeOut/Credenciales)." };
    }
}

// =======================================================
// 3. FUNCIÓN DE REGISTRO (CORREGIDA: Ahora está exportada)
// =======================================================
export async function registerUser(formData) {
    // 1. Validación de Datos (Zod)
    const validatedFields = RegisterSchema.safeParse({
        forum_username: formData.get('forum_username'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return { success: false, errors: validatedFields.error.flatten().fieldErrors, message: "Validación de datos fallida." };
    }

    const { forum_username, email, password } = validatedFields.data;

    try {
        // 2. Verificar si el usuario ya existe (email o username)
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email },
                    { forum_username: forum_username }
                ]
            }
        });

        if (existingUser) {
            return { success: false, message: "REGISTRO_FALLIDO: El email o nombre de usuario ya está registrado." };
        }

        // 3. Hashing de la Contraseña (Paso crítico de seguridad)
        const hashedPassword = await bcrypt.hash(password, 10); 

        // 4. Creación del Usuario en la BD (Supabase)
        await prisma.user.create({
            data: {
                email: email,
                name: forum_username, 
                forum_username: forum_username,
                hashedPassword: hashedPassword, 
                role: 'user', 
            }
        });
        
        return { success: true, message: "USUARIO_CREADO: Registro exitoso. Ahora puedes iniciar sesión." };

    } catch (error) {
        // Este catch maneja errores de base de datos (ej. conexión)
        console.error("SERVER ACTION ERROR - Registro:", error);
        return { success: false, message: "ERROR CRÍTICO: Fallo al intentar conectar con la base de datos." };
    }
}