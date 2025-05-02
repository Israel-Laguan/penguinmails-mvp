
'use client';

import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // You can add other global providers here if needed
  return <SessionProvider>{children}</SessionProvider>;
}

