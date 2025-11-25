// src/app/actions.js (CORREGIDO Y ESTABLE)
'use server'

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
    name: z.string().optional(),
    company: z.string().optional(),
    email: z.string().email({ message: "EMAIL_ERROR: Formato inválido." }),
    message: z.string().min(10, { message: "MSG_ERROR: Mínimo 10 caracteres." })
});

// CRÍTICO: La Server Action ahora acepta SOLO el objeto FormData (un solo argumento).
// Esto resuelve el TypeError en el servidor.
export async function sendContactEmail(formData) { 
    
    // El objeto formData ahora es el objeto real FormData y .get() funciona.
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        // Añadimos un console.error en el servidor para depuración
        console.error("SERVER ACTION ERROR: Validación fallida en 'sendContactEmail'", validatedFields.error.flatten().fieldErrors);
        return { success: false, errors: validatedFields.error.flatten().fieldErrors, message: "Validación de datos fallida." };
    }

    const { name, company, email, message } = validatedFields.data;

    try {
        console.log(`DEBUG: Iniciando envío Resend para: ${email}`);
        
        const data = await resend.emails.send({
            from: 'Huup Terminal <onboarding@resend.dev>',
            to: 'aespinosa270@gmail.com', // Tu correo
            subject: `🚀 Nuevo Proyecto: ${name || 'Anónimo'} (${company || 'Sin Empresa'})`,
            text: `NOMBRE: ${name || 'N/A'}\nEMPRESA: ${company || 'N/A'}\nEMAIL: ${email}\n\nMENSAJE:\n${message}`,
        });

        if (data.error) {
            console.error("DEBUG CRÍTICO: Fallo en la API de Resend:", data.error);
            return { success: false, message: "Error en el servidor API de Resend." };
        }
        
        console.log("DEBUG: Envío Resend exitoso.");
        return { success: true, message: "Datos encriptados y enviados correctamente." };
    
    } catch (error) {
        console.error("DEBUG CRÍTICO: Fallo en el bloque TRY/CATCH (Conectividad/TimeOut):", error);
        return { success: false, message: "Fallo crítico del sistema. (Verificar TimeOut/Credenciales)." };
    }
}