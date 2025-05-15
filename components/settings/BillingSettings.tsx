"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    maxEmailAccounts: number;  // 0 for "Unlimited" or a number
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

interface BillingSettingsProps {
  billing: BillingData;
}

const BillingSettings: React.FC<BillingSettingsProps> = ({ billing }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
        <CardDescription>
          Manage your subscription and billing details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-md border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{billing.planDetails.name}</h3>
              <p className="text-sm text-muted-foreground">
                {billing.planDetails.price} / month • Renews on {billing.renewalDate}{" "}
              </p>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>

          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Email accounts</span>
              <span>
                {billing.emailAccountsUsed} / {billing.planDetails.maxEmailAccounts}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Campaigns</span>
              <span>{billing.campaignsUsed}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Emails per month</span>
              <span>{billing.emailsPerMonthUsed.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-14 rounded-md bg-gray-100 flex items-center justify-center">
                {/* Basic card icon - replace with actual icon based on billingData.paymentMethod.brand if available */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <div>
                <p className="font-medium">
                  •••• •••• •••• {billing.paymentMethod.lastFour}
                </p>
                <p className="text-xs text-muted-foreground">
                  Expires {billing.paymentMethod.expiry}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing History</h3>
          <div className="rounded-md border">
            {billing.billingHistory.map((item, index) => (
              <div key={index} className={`p-4 flex items-center justify-between text-sm ${index > 0 ? 'border-t' : ''}`}>
                <div
                  key={index}
                  className={`p-4 flex items-center justify-between text-sm ${
                    index > 0 ? "border-t" : ""
                  }`}
                >
                  <p className="font-medium">{item.date}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.amount}</p>
                  <p className="text-xs text-muted-foreground">{item.method}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="link" size="sm">
              View All Invoices
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingSettings;
