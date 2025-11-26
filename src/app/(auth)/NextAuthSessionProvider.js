// src/components/auth/NextAuthSessionProvider.js
'use client'; // CRÍTICO: Debe ser un componente de cliente

import { SessionProvider } from 'next-auth/react';

// Este componente solo envuelve la función SessionProvider 
export default function NextAuthSessionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}