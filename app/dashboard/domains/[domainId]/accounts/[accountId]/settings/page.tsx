"use client"; // Required for useState and useEffect, and form handling

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EmailAccountForm, { EmailAccountFormValues } from "@/components/domains/email-account-form";
import { EmailAccountStatus, WarmupStatus } from "@/app/api/generated/prisma"; // For mock data type
import { AccountCreationType, RelayType, VerificationStatus } from "@/components/domains/types";
import { EmailProvider } from "@/components/domains/constants";

// Define the type for the data EmailAccountForm expects for its initialData prop
type EmailAccountFormInitialData = Partial<EmailAccountFormValues> & {
  domainAuthStatus?: {
    spfVerified?: boolean;
    dkimVerified?: boolean;
    dmarcVerified?: boolean;
  };
};

// Helper function to simulate API call
async function fetchAccountDetails(accountId: string): Promise<EmailAccountFormInitialData> {
  console.log("Fetching account details for:", accountId);
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // Return mock data - replace with actual API call
  return {
    email: "sales@example.com",
    provider: EmailProvider.GMAIL, // Corrected enum key
    status: EmailAccountStatus.ACTIVE,
    reputation: 95,
    warmupStatus: WarmupStatus.WARMED,
    dayLimit: 250, // This was currentDailyLimit in old mock
    // sent24h: 0, // Defaulted in schema
    password: "currentpassword", // For editing, might not show but needed for submission
    accountType: AccountCreationType.VIRTUAL_USER_DB,
    accountSmtpAuthStatus: VerificationStatus.VERIFIED,
    relayType: RelayType.DEFAULT_SERVER_CONFIG,
    // relayHost: "", // Only if EXTERNAL
    virtualMailboxMapping: "sales/",
    mailboxPath: "/var/mail/example.com/sales",
    mailboxQuotaMB: 1024,
    warmupDailyIncrement: 10, // This was dailyIncrease
    warmupTargetDailyVolume: 500, // This was maxDailyEmails
    accountSetupStatus: "Configuration Complete",
    accountDeliverabilityStatus: "Checks Passed",
    domainAuthStatus: { // Mocked domain auth status
      spfVerified: true,
      dkimVerified: true,
      dmarcVerified: true,
    }
    // The 'metrics' object from the old mock is not part of EmailAccountFormValues
    // and would be handled by the separate "Performance Metrics" card if kept.
  };
}


export default function AccountSettingsPage({
  params,
}: {
  params: { domainId: string; accountId: string };
}) {
  const [initialData, setInitialData] = useState<EmailAccountFormInitialData | null>(null);
  const [isLoading, setIsLoading] = useState(true); // For form submission
  const [isFetchingData, setIsFetchingData] = useState(true); // For initial data load

  useEffect(() => {
    async function loadAccountData() {
      setIsFetchingData(true);
      try {
        const data = await fetchAccountDetails(params.accountId);
        setInitialData(data);
      } catch (error) {
        console.error("Failed to fetch account details:", error);
        // Handle error (e.g., show toast, set error state)
      } finally {
        setIsFetchingData(false);
      }
    }
    loadAccountData();
  }, [params.accountId]);

  const handleSubmit = async (data: EmailAccountFormValues) => {
    setIsLoading(true);
    console.log("Submitting account settings:", data);
    // TODO: Implement actual API call to update account settings
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    // On success:
    // toast.success("Account settings updated!");
    // On error:
    // toast.error("Failed to update settings.");
    setIsLoading(false);
  };

  if (isFetchingData) {
    return <div className="container mx-auto py-6">Loading account settings...</div>; // Or a proper skeleton loader
  }

  if (!initialData) {
    return <div className="container mx-auto py-6">Failed to load account settings. Please try again.</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          {/* TODO: Update this link if the account detail view path changes */}
          <Link href={`/dashboard/domains/${params.domainId}/accounts/${params.accountId}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Account Settings</h1>
          <p className="text-muted-foreground">{initialData.email || `Account ID: ${params.accountId}`}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Use the EmailAccountForm component */}
        <EmailAccountForm
          initialData={initialData}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isEditing={true}
        />
      </div>
    </div>
  );
}