import { SettingsContent } from "./content";

export default async function SettingsPage() {
  // Mock data fetching (replace with actual data fetching logic)
  const userData = {
    username: "johndoe",
    email: "john@example.com",
    name: "John Doe",
    bio: "Email marketing specialist focused on SaaS growth.",
    avatarUrl: "",
    role: "admin",
  };

  const appearanceSettings = {
    theme: "light",
    density: "default",
    showCampaignPreviews: true,
  };

  const notificationSettings = {
    emailNotifications: {
      campaignCompletions: true,
      newReplies: true,
      weeklyReports: true,
      systemAnnouncements: true,
    },
    inAppNotifications: {
      realtimeCampaignAlerts: true,
      emailAccountAlerts: true,
    },
  };

  return (
    <SettingsContent
      userData={userData}
      appearanceSettings={appearanceSettings}
      notificationSettings={notificationSettings}
      // Add mock data for compliance and billing when those components are ready
      complianceSettings={{}}
      billingSettings={{}}
    />
  );
}
