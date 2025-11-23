'use server'

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().optional(), // Nuevo campo
  company: z.string().optional(), // Nuevo campo
  email: z.string().email({ message: "EMAIL_ERROR: Formato inválido." }),
  message: z.string().min(10, { message: "MSG_ERROR: Mínimo 10 caracteres." })
});

export async function sendContactEmail(prevState, formData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    company: formData.get('company'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, company, email, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: 'Huup Terminal <onboarding@resend.dev>',
      to: 'aespinosa270@gmail.com', // Tu correo
      subject: `🚀 Nuevo Proyecto: ${name || 'Anónimo'}`,
      text: `NOMBRE: ${name}\nEMPRESA: ${company}\nEMAIL: ${email}\n\nMENSAJE:\n${message}`,
    });

    if (data.error) return { success: false, message: "Error en el servidor API." };
    return { success: true, message: "Datos encriptados y enviados correctamente." };
  } catch (error) {
    return { success: false, message: "Fallo crítico del sistema." };
  }
}