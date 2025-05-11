"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountSettings } from "@/components/settings/AccountSettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { ComplianceSettings } from "@/components/settings/ComplianceSettings";
import { BillingSettings } from "@/components/settings/BillingSettings";

interface UserProfileData {
 name: string;
 email: string;
 username: string;
 bio?: string;
 avatarUrl?: string;
}

interface AppearanceData {
 theme: "light" | "dark" | "system";
 density: "compact" | "default" | "comfortable";
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
 plan: string;
 nextBillingDate: string;
 planDetails: { label: string; value: string }[];
 paymentMethod: { type: string; last4: string; expiry: string };
 billingHistory: { date: string; description: string; amount: string; method: string }[];
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
  const { userProfile, appearance, notifications, compliance, billing } = settingsData;

  // You can add state or effects here if needed for client-side interactions
  // For now, we just use the data passed down.

  return (
    <div className="space-y-6">
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
          <AppearancePage appearance={appearance} />
        </TabsContent>
        <TabsContent value="billing" className="pt-4">
          {/* Pass relevant mock data to BillingPage */}
          <BillingPage billing={billing} />
        </TabsContent>
      </Tabs>
    </div>
  );
}