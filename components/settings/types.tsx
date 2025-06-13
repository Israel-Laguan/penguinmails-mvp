
export type PlanTypes = "free" | "starter" | "pro";

export interface PlanDetails {
  id: string;
  name: string;
  isMonthly: boolean;
  price: number;
  description: string | null;
  maxEmailAccounts: number;  // 0 for "Unlimited" or a number
  maxCampaigns: number;
  maxEmailsPerMonth: number;
}

export interface BillingData {
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

export interface BillingSettingsProps {
  billing: BillingData;
  pricingPlans: PlanDetails[];
}
