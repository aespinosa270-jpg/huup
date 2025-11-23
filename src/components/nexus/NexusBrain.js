/**
 * NEXUS BRAIN V2.0 - Context Aware Logic
 * Simula inteligencia recordando de qué estamos hablando.
 */

// Definimos los estados posibles de la conversación
export const INITIAL_CONTEXT = 'waiting_for_name';

/**
 * Función principal de inteligencia
 * @param {string} input - Lo que escribe el usuario
 * @param {string} context - En qué parte de la conversación estamos
 * @returns {object} - { text: "Respuesta", nextContext: "nuevo_estado" }
 */
export const getBotResponse = (input, context) => {
  const text = input.toLowerCase().trim();

  // --- ESTADO 1: SALUDO Y NOMBRE ---
  if (context === 'waiting_for_name') {
    if (text.length < 2) return { 
      text: "NEXUS_CORE: Input demasiado corto. Por favor, identifícate para iniciar protocolo.", 
      nextContext: 'waiting_for_name' 
    };
    
    // Detectamos si el usuario saluda en lugar de dar el nombre
    if (['hola', 'hey', 'buenas'].some(x => text.includes(x))) {
        return {
            text: "NEXUS_CORE: Saludos. Para continuar, por favor ingresa tu nombre o alias.",
            nextContext: 'waiting_for_name'
        };
    }

    return {
      text: `Bienvenido, ${input}. Identidad registrada.\n\nSelecciona protocolo de interés:\n1. Desarrollo Web (Web)\n2. Consultoría Técnica (Consultoria)\n3. Contacto Humano (Info)`,
      nextContext: 'menu_selection'
    };
  }

  // --- ESTADO 2: SELECCIÓN DE MENÚ ---
  if (context === 'menu_selection') {
    if (text.includes('1') || text.includes('web') || text.includes('desarrollo')) {
      return {
        text: "Protocolo WEB iniciado.\n¿Buscas un sitio corporativo (Landing) o una aplicación compleja (App)?",
        nextContext: 'waiting_for_web_type'
      };
    }
    if (text.includes('2') || text.includes('consult') || text.includes('asesoria')) {
      return {
        text: "Accediendo a módulo de Consultoría.\n¿Necesitas auditoría de código o arquitectura de sistemas?",
        nextContext: 'waiting_for_consult_type'
      };
    }
    if (text.includes('3') || text.includes('contacto') || text.includes('info')) {
      return {
        text: "Entendido. Para agendar una llamada, necesito tu correo electrónico.",
        nextContext: 'waiting_for_email'
      };
    }
    
    return {
      text: "Comando no reconocido. Por favor escribe: 'Web', 'Consultoría' o 'Contacto'.",
      nextContext: 'menu_selection'
    };
  }

  // --- RAMA WEB ---
  if (context === 'waiting_for_web_type') {
    if (text.includes('landing') || text.includes('sitio') || text.includes('corporativo')) {
        return {
            text: "Landing Page High-Performance: Usamos Next.js para tiempos de carga <1s. \n\n¿Te gustaría recibir una cotización preliminar a tu correo?",
            nextContext: 'confirm_proposal'
        };
    }
    if (text.includes('app') || text.includes('sistema') || text.includes('compleja')) {
        return {
            text: "SaaS / WebApp: Arquitectura escalable con bases de datos y autenticación. \n\n¿Te gustaría recibir una propuesta técnica a tu correo?",
            nextContext: 'confirm_proposal'
        };
    }
    return { text: "¿Te refieres a una 'Landing' o una 'App'?", nextContext: 'waiting_for_web_type' };
  }

  // --- RAMA CONSULTORÍA ---
  if (context === 'waiting_for_consult_type') {
      return {
          text: "Entendido. Nuestros ingenieros senior pueden revisar tu caso. ¿Deseas que te contactemos?",
          nextContext: 'confirm_proposal'
      };
  }

  // --- ESTADO: CAPTURA DE CORREO ---
  if (context === 'waiting_for_email' || context === 'confirm_proposal') {
    if (text.includes('no') || text.includes('cancelar')) {
        return {
            text: "Protocolo cancelado. Regresando al menú principal.\n\n¿En qué más puedo ayudarte?",
            nextContext: 'menu_selection'
        };
    }
    
    // Validación simple de correo (debe tener @)
    if (text.includes('@')) {
        return {
            text: `Datos recibidos: [${text}].\nUn agente humano de Huup te contactará en <24h.\n\nFin de la transmisión.`,
            nextContext: 'finished'
        };
    }
    
    // Si llegamos aquí desde 'confirm_proposal' y el usuario dijo "si"
    if (context === 'confirm_proposal' && (text.includes('si') || text.includes('claro'))) {
        return {
            text: "Perfecto. Por favor ingresa tu correo electrónico para enviar la información.",
            nextContext: 'waiting_for_email'
        };
    }

    return {
        text: "Por favor, ingresa un correo electrónico válido para continuar.",
        nextContext: 'waiting_for_email'
    };
  }

  // --- ESTADO FINAL ---
  if (context === 'finished') {
      return {
          text: "El sistema está en espera. Escribe 'REINICIAR' para comenzar de nuevo.",
          nextContext: 'finished_loop'
      };
  }

  if (context === 'finished_loop') {
      if (text.includes('reiniciar') || text.includes('inicio')) {
          return {
            text: "Sistema reiniciado. Identifícate, por favor.",
            nextContext: 'waiting_for_name'
          };
      }
      return { text: "Sesión finalizada.", nextContext: 'finished_loop' };
  }

  // Fallback de seguridad
  return {
    text: "Error crítico en lógica. Reiniciando sistema...",
    nextContext: 'waiting_for_name'
  };
};