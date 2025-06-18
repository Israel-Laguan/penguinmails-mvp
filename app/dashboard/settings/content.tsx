"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountSettings from "@/components/settings/AccountSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import { ComplianceSettings } from "@/components/settings/ComplianceSettings";
import BillingSettings from "@/components/settings/BillingSettings";
import { changeSubscriptionPlanAction, getSubscriptionPlanAction } from "@/actions/suscription/userSubscription";
import { useAuth } from "@/context/AuthContext";
import { PlanDetails } from "@/components/settings/types";
import { getPricingPlansDetailedsAction } from "@/actions/planDetailed/allPlans";
import CheckoutDialog from "@/components/settings/CheckoutDialog";

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
  planDetails: PlanDetails;
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
  // Use the mock data passed as props
  const { userProfile, appearance, notifications, compliance, billing } =
    settingsData;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const checkout = searchParams.get("checkout");
  const [currentTab, setCurrentTab] = useState("account");
  const [billingData, setBillingData] = useState<BillingData>(billing);
  const [pricingPlans, setPricingPlans] = useState<PlanDetails[]>([]);
  const [currentPlan, setCurrentPlan] = useState<string>(billing.planDetails.id);
  const [isLoadingPlanUpdated, setIsLoadingPlanUpdated] = useState<boolean>(false);

  const getUserPlan = async () => {
    if (loading || !user) return;

    const response = await getSubscriptionPlanAction(Number(user.claims.companyId));
    if (!response.suscription?.planDetail) return;

    const userPlanDetail: PlanDetails = response.suscription.planDetail;
    const renovateBeforeDate = response.suscription.renovateBefore?.toString() || new Date().toString()
    setBillingData((prevBilling) => ({ ...prevBilling, renewalDate: renovateBeforeDate, planDetails: userPlanDetail }));
    setCurrentPlan(userPlanDetail.id);
  };

  const handleChangeUserPlan = async (selectedPlan: string) => {
    const freePlan = pricingPlans.find((plan) => plan.name.toLowerCase() === 'free')
    const isFreePlan = freePlan?.id === selectedPlan;

    setIsLoadingPlanUpdated(true);
    if (new Date().getTime() < new Date(billingData.renewalDate).getTime())
      return toast.warning('Active paid subscription', {
        description: 'It is not possible to change, the user currently has an active paid subscription.',
      });

    const response = await changeSubscriptionPlanAction(Number(user?.claims.companyId), selectedPlan, isFreePlan);

    if (!response.ok) return;

    await getUserPlan();
    setIsLoadingPlanUpdated(false);
  };

  useEffect(() => {
    if (typeof checkout === 'string')
      setTimeout(() => {
        router.push(pathname);
      }, 2000)
  }, [checkout]);

  useEffect(() => {
    getUserPlan();
  }, [user]);

  useEffect(() => {
    const getAllPricingPlans = async () => {
      const response = await getPricingPlansDetailedsAction();
      const plansData = response.plans;
      setPricingPlans(plansData);
    };

    getAllPricingPlans();
  }, []);

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
          <BillingSettings billing={billingData} pricingPlans={pricingPlans} currentPlan={currentPlan} onChangeUserPlan={(newPlan) => handleChangeUserPlan(newPlan)} />
        </TabsContent>
      </Tabs>
      <CheckoutDialog isModalOpen={typeof checkout === 'string'} checkout={checkout} setIsModalOpen={() => router.push(pathname)} />
    </div>
  );
}
