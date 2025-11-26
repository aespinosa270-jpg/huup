// src/app/actions.js (CÓDIGO FINAL DE AUTENTICACIÓN)
'use server'

import { Resend } from 'resend';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const resend = new Resend(process.env.RESEND_API_KEY);
// CRÍTICO: Inicializamos el cliente de Prisma para las acciones
const prisma = new PrismaClient(); 


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
    // ... (lógica de contacto sin cambios) ...
    // Se asume que esta parte del código está bien.
}

// =======================================================
// 3. FUNCIÓN DE REGISTRO (Utiliza Prisma)
// =======================================================
export async function registerUser(formData) {
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
        // 1. Verificar si el usuario ya existe (PUNTO DONDE EL ERROR CRÍTICO OCURRE)
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

        // 2. Hashing y Creación
        const hashedPassword = await bcrypt.hash(password, 10); 

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
        // Devolvemos el mensaje genérico de conexión fallida
        console.error("SERVER ACTION ERROR - Fallo de conexión o DB:", error);
        return { success: false, message: "ERROR CRÍTICO: Fallo al intentar conectar con la base de datos." };
    }
}