"use client"; // This component uses client-side state (useState)

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation"; // To read query params like ?plan=business
import { LandingLayout } from "@/components/layout/landing";
import { SignUpForm } from "./components/SignUpForm";

// Separate component for handling search params
function SearchParamsProvider({ children }: {
  children: (props: { selectedPlan: string | null; }) => React.ReactNode
}) {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");

  return children({ selectedPlan });
}

export default function SignUpPage() {
  return (
    <LandingLayout>
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <Suspense fallback={null}>
          <SearchParamsProvider>
            {({ selectedPlan }) => (
              <SignUpForm selectedPlan={selectedPlan} />
            )}
          </SearchParamsProvider>
        </Suspense>
      </div>
    </LandingLayout>
  );
}
