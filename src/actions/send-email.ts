"use server";

import { Resend } from "resend";
import { z } from "zod";

// Inicialización de la instancia de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Esquema de Validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ActionState = {
  success: boolean;
  message: string;
  error: string;
};

export async function sendEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
  // 2. Extracción de datos del FormData
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  // 3. Validación de campos
  const validatedFields = formSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Datos inválidos. Por favor revisa los campos del formulario.",
      message: "",
    };
  }

  const { name, email, company, message } = validatedFields.data;

  try {
    // 4. Envío de correo mediante el dominio de pruebas (Onboarding)
    const { data, error: resendError } = await resend.emails.send({
      // CAMBIO CLAVE: Al no tener dominio configurado, usamos onboarding@resend.dev
      from: "Huup Terminal <onboarding@resend.dev>",
      // IMPORTANTE: Solo llegará a aespinosa270@gmail.com en modo prueba
      to: "aespinosa270@gmail.com", 
      replyTo: email,
      subject: `[UPLINK] Nuevo Lead Detectado: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #050505; font-family: 'Courier New', Courier, monospace;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #050505; border: 1px solid #1a1a1a; border-top: 4px solid #ea580c;">
                  
                  <tr>
                    <td style="padding: 30px 40px;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -1px;">
                        huup<span style="color: #ea580c;">.</span>
                      </h1>
                      <p style="margin: 5px 0 0 0; font-size: 10px; color: #ea580c; letter-spacing: 2px; text-transform: uppercase;">
                        System_Incoming_Transmission
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 0 40px 30px 40px;">
                      <div style="border-left: 2px solid #1a1a1a; padding-left: 20px;">
                        <p style="color: #404040; font-size: 12px; margin: 0 0 20px 0;">// DATA_STAMP: ${new Date().toLocaleString('es-MX')}</p>
                        
                        <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0;">
                          <span style="color: #ea580c;">></span> <strong>IDENTIDAD:</strong> ${name}
                        </p>
                        <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0;">
                          <span style="color: #ea580c;">></span> <strong>ORIGEN:</strong> ${company || "Independiente"}
                        </p>
                        <p style="color: #ffffff; font-size: 14px; margin: 0 0 30px 0;">
                          <span style="color: #ea580c;">></span> <strong>CANAL:</strong> ${email}
                        </p>

                        <p style="color: #ea580c; font-size: 11px; font-weight: bold; margin: 0 0 10px 0; text-transform: uppercase;">
                          [ PAYLOAD_MESSAGE ]
                        </p>
                        <div style="background-color: #0a0a0a; border: 1px solid #1a1a1a; padding: 20px; color: #d4d4d4; font-size: 14px; line-height: 1.6;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 30px 40px; border-top: 1px solid #1a1a1a; background-color: #080808;">
                      <p style="margin: 0; font-size: 10px; color: #404040; line-height: 1.5;">
                        ESTE ES UN MENSAJE AUTOMATIZADO GENERADO POR EL NÚCLEO DE HUUP.COM.MX.<br>
                        TEST_MODE: ONBOARDING_DOMAIN
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return {
        success: false,
        error: resendError.message,
        message: "",
      };
    }

    return { 
      success: true, 
      message: "Protocolo completado exitosamente.",
      error: "" 
    };

  } catch (error) {
    console.error("Critical Server Error:", error);
    return {
      success: false,
      error: "Error crítico al procesar la transmisión de datos.",
      message: ""
    };
  }
}