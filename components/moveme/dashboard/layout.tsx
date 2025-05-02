'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { DashboardLayout as NewDashboardLayout } from '@/components/layout/DashboardLayout'; // Renamed to avoid conflict

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  // Optional: Add a loading state while session is being verified
  if (status === 'loading') {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <ProtectedRoute>
      {/* Use the newly integrated DashboardLayout */}
      <NewDashboardLayout>
        {children}
      </NewDashboardLayout>
    </ProtectedRoute>
  );
}

