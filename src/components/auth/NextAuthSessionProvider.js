// src/components/auth/NextAuthSessionProvider.js
'use client'; // CRÍTICO: Debe ser un componente de cliente

import { SessionProvider } from 'next-auth/react';

// Este componente solo envuelve la función SessionProvider 
export default function NextAuthSessionProvider({ children }) {
  // Nota: Envuelve toda la aplicación para habilitar el hook useSession()
  return <SessionProvider>{children}</SessionProvider>;
}