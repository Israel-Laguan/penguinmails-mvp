"use client";

import React, { useState } from "react";
import { Briefcase, Check, Crown, Star } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlanDetails, PlanTypes } from "./types";
import { pricingContent } from "@/app/pricing/content";

interface ModalPricingPlansProps {
  isModalOpen: boolean;
  planDetailId: string;
  currentPlan: string;
  pricingPlans: PlanDetails[];
  handlePlanChange: (newPlan: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function PlanDialog({ isModalOpen, planDetailId, currentPlan, pricingPlans, handlePlanChange, setIsModalOpen }: ModalPricingPlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>(planDetailId);

  return (
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
          <Button onClick={() => handlePlanChange(selectedPlan)} disabled={selectedPlan === currentPlan}>
            {selectedPlan === currentPlan ? "Current Plan" : "Confirm Change"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
