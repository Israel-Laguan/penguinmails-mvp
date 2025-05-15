"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountSettings from "@/components/settings/AccountSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import { ComplianceSettings } from "@/components/settings/ComplianceSettings";
import BillingSettings from "@/components/settings/BillingSettings";

interface UserProfileData {
  name: string;
  email: string;
  username: string;
  role: string;
  avatarUrl?: string;
}

interface AppearanceData {
  theme: "light" | "dark" | "system" | string;
  density: "compact" | "default" | "comfortable" | string;
  showCampaignPreviews: boolean;
}

interface NotificationData {
  email: {
    campaignCompletions: boolean;
    newReplies: boolean;
    weeklyReports: boolean;
    systemAnnouncements: boolean;
  };
  inApp: {
    realTimeCampaignAlerts: boolean;
    emailAccountAlerts: boolean;
  };
}

interface ComplianceData {
  autoAddUnsubscribeLink: boolean;
  unsubscribeText: string;
  unsubscribeLandingPage: string;
  companyName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface BillingData {
  renewalDate: string;
  emailAccountsUsed: number;
  campaignsUsed: number;
  emailsPerMonthUsed: number;
  planDetails: {
    id: string;
    name: string;
    isMonthly: boolean;
    price: number;
    description: string;
    maxEmailAccounts: number;
    maxCampaigns: number;
    maxEmailsPerMonth: number;
  };
  paymentMethod: {
    lastFour: string;
    expiry: string;
    brand: string; // e.g., "Visa"
  };
  billingHistory: Array<{
    date: string;
    description: string;
    amount: string;
    method: string; // e.g., "Visa •••• 4242"
  }>;
}

// Mock data structure based on potential server-fetched data
interface MockSettingsData {
  userProfile: UserProfileData;
  appearance: AppearanceData;
  notifications: NotificationData;
  compliance: ComplianceData;
  billing: BillingData;
}

interface SettingsContentProps {
  settingsData: MockSettingsData;
}

export function SettingsContent({ settingsData }: SettingsContentProps) {
  const [currentTab, setCurrentTab] = useState("account");

  // Use the mock data passed as props
  const { userProfile, appearance, notifications, compliance, billing } =
    settingsData;

  // You can add state or effects here if needed for client-side interactions
  // For now, we just use the data passed down.

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>
      <Tabs defaultValue={currentTab} className="w-full">
        <TabsList>
          <TabsTrigger value="account" onClick={() => setCurrentTab("account")}>
            Account
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            onClick={() => setCurrentTab("appearance")}
          >
            Appearance
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            onClick={() => setCurrentTab("notifications")}
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="compliance"
            onClick={() => setCurrentTab("compliance")}
          >
            Compliance
          </TabsTrigger>
          <TabsTrigger value="billing" onClick={() => setCurrentTab("billing")}>
            Billing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="pt-4">
          <AccountSettings userProfile={userProfile} />
        </TabsContent>
        <TabsContent value="appearance" className="pt-4">
          {/* Pass relevant mock data to AppearancePage */}
          <AppearanceSettings
            theme={appearance.theme}
            density={appearance.density}
            showCampaignPreviews={appearance.showCampaignPreviews}
          />
        </TabsContent>
        <TabsContent value="notifications" className="pt-4">
          {/* Pass relevant mock data to NotificationPage */}
          <NotificationSettings
            email={notifications.email}
            inApp={notifications.inApp}
          />
        </TabsContent>
        <TabsContent value="compliance" className="pt-4">
          {/* Pass relevant mock data to CompliancePage */}
          <ComplianceSettings complianceData={compliance} />
        </TabsContent>
        <TabsContent value="billing" className="pt-4">
          {/* Pass relevant mock data to BillingPage */}
          <BillingSettings billing={billing} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
