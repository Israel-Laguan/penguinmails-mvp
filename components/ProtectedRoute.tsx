'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { status } = useSession();
  
  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (status === 'unauthenticated') {
    redirect('/login');
  }
  
  return children;
}
