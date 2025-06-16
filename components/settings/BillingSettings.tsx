"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, Check, CreditCard, Crown, DollarSign, Star } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import purchaseAction from "@/lib/actions/purchase";
import { getStripe } from "@/lib/stripe-client";
import { useAuth } from "@/context/AuthContext";
import { BillingSettingsProps, PlanTypes } from "./types";
import { toast } from "sonner";
import { pricingContent } from "@/app/pricing/content";

function convertDateToLong(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const BillingSettings: React.FC<BillingSettingsProps> = ({ billing, pricingPlans }) => {
  const { user } = useAuth();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>(billing.planDetails.id);
  const [currentPlan, setCurrentPlan] = useState<string>(billing.planDetails.id)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePlanChange = () => {
    setCurrentPlan(selectedPlan);
    setIsModalOpen(false);
    // Aquí iría la lógica para actualizar el plan en el backend
  };

  const handlePayNow = async (event: FormEvent) => {
    event.preventDefault();

    if (billing.planDetails.name === 'FREE')
      return toast.info('Free Suscription', {
        description: 'Payment it´s not needed to pay Free suscription.',
      });

    setIsProcessingPayment(true);
    const res = await purchaseAction(Number(user?.claims.companyId), billing.planDetails);

    if (!res.checkoutSessionId) {
      console.error("Failed to create stripe checkout session.");
      setIsProcessingPayment(false);
      return;
    }

    const stripe = await getStripe();

    await stripe?.redirectToCheckout({
      sessionId: res.checkoutSessionId,
    });

    setIsProcessingPayment(false);
  };

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
                {
                  billing.planDetails.name !== 'FREE' &&
                  <>
                    ${billing.planDetails.price} / month • Renews on {new Date(billing.renewalDate).toLocaleDateString()}{" "}
                  </>
                }
              </p>
            </div>
            <Button className="cursor-pointer" variant="outline" onClick={() => setIsModalOpen(true)}>
              Change Plan
            </Button>
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
              <span>{billing.planDetails.maxEmailsPerMonth.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-md border p-4">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Payment Management
            </h3>
            <p className="text-sm text-muted-foreground">
              Make payments for your subscription and manage your billing.
            </p>
          </div>
          <div className="space-y-4 flex flex-col">
            <Alert>
              {
                billing.planDetails.name.toLowerCase() !== 'free'
                && <Calendar className="h-4 w-4" />
              }
              <AlertDescription>
                {billing.planDetails.name.toLowerCase() !== 'free' ?
                  <>
                    Your next payment of ${billing.planDetails.price} is due on {convertDateToLong(billing.renewalDate)}
                  </> :
                  <>
                    In order to make the best use of the platform, you should start using paid plans.

                  </>
                }

              </AlertDescription>
            </Alert>
            {
              billing.planDetails.name.toLowerCase() !== 'free' &&
              <div className="">
                <Button onClick={handlePayNow} disabled={isProcessingPayment} className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="w-4 h-4" />
                  {isProcessingPayment ? "Processing..." : "Pay Now"}
                </Button>
              </div>
            }
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
            <Button className="cursor-pointer" variant="ghost" size="sm">
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
                  className={`p-4 flex items-center justify-between text-sm ${index > 0 ? "border-t" : ""
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-6xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Choose Your Plan</DialogTitle>
            <DialogDescription>
              Select the plan that best fits your needs. You can change or cancel anytime.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {pricingPlans.map((plan) => {
              const planName = plan.name.toLowerCase() as PlanTypes;
              const detailedPlan: any = pricingContent.plans[planName];

              return (
                <Card
                  key={plan.id}
                  className={`relative cursor-pointer transition-all ${selectedPlan === plan.id ? "ring-2 ring-blue-600 shadow-lg" : "hover:shadow-md"
                    }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardHeader className="pb-4 flex flex-col items-center">
                    {
                      planName == 'free' &&
                      <Briefcase className="h-8 w-8 mb-2 text-primary" />
                    }
                    {
                      planName == 'starter' &&
                      <Star className="h-8 w-8 mb-2 text-primary" />
                    }
                    {
                      planName == 'pro' &&
                      <Crown className="h-8 w-8 mb-2 text-primary" />
                    }
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      {detailedPlan.description}
                    </CardDescription>
                    <div className="text-4xl font-bold mt-2">
                      {plan.price}
                      <span className="text-xl font-normal text-muted-foreground">
                        {plan.isMonthly && '/mo'}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="h-full flex flex-col">
                    <ul className="space-y-2 mb-6">
                      {detailedPlan.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <CardFooter className="mt-auto">
                      <Button className="w-full" variant={selectedPlan === plan.id ? "default" : "outline"}>
                        {currentPlan === plan.id ? "Current Plan" : "Select Plan"}
                      </Button>
                    </CardFooter>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handlePlanChange} disabled={selectedPlan === currentPlan}>
              {selectedPlan === currentPlan ? "Current Plan" : "Confirm Change"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default BillingSettings;
