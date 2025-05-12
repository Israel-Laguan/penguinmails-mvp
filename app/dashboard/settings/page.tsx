import { SettingsContent } from "./content";

export default async function SettingsPage() {
  // Mock data fetching (replace with actual data fetching logic)
  const mockData = {
    userProfile: {
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      role: "admin",
      avatarUrl: "https://example.com/avatar.jpg",
    },
    appearance: {
      theme: "light",
      density: "default",
      showCampaignPreviews: true,
    },
    notifications: {
      email: {
        campaignCompletions: true,
        newReplies: true,
        weeklyReports: true,
        systemAnnouncements: true,
      },
      inApp: {
        realTimeCampaignAlerts: true,
        emailAccountAlerts: true,
      },
    },
    compliance: {
      autoAddUnsubscribeLink: true,
      unsubscribeText: "Unsubscribe",
      unsubscribeLandingPage: "https://example.com/unsubscribe",
      companyName: "Example Corp",
      addressLine1: "123 Example St",
      addressLine2: "Suite 100",
      city: "Example City",
      state: "EX",
      zip: "12345",
      country: "Example Country",
    },
    billing: {
      renewalDate: "2023-12-01",
      emailAccountsUsed: 5,
      campaignsUsed: 10,
      emailsPerMonthUsed: 1000,
      planDetails: {
        id: "plan_123",
        name: "Pro Plan",
        isMonthly: true,
        price: 29.99,
        description: "Pro Plan with advanced features.",
        maxEmailAccounts: 10,
        maxCampaigns: 20,
        maxEmailsPerMonth: 5000,
      },
      paymentMethod: {
        lastFour: "4242",
        expiry: "12/25",
        brand: "Visa",
      },
      billingHistory: [
        {
          date: "2023-11-01",
          description: "Monthly Subscription Charge",
          amount: "$29.99",
          method: "Visa •••• 4242",
        },
        {
          date: "2023-10-01",
          description: "Monthly Subscription Charge",
          amount: "$29.99",
          method: "Visa •••• 4242",
        },
        {
          date: "2023-09-01",
          description: "Monthly Subscription Charge",
          amount: "$29.99",
          method: "Visa •••• 4242",
        },
      ],
    },
  }

  return (
    <SettingsContent
      settingsData={mockData}
    />
  );
}
