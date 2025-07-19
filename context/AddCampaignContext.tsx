"use client";
import { CampaignFormValues } from "@/components/campaigns/types";
import { Calendar, Check, Mail, Target, Users, Zap } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
const steps = [
  {
    number: 1,
    title: "Campaign Details",
    subtitle: "Name and describe your campaign",
    icon: Target,
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Select Leads",
    subtitle: "Choose your target audience",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    number: 3,
    title: "Assign Mailboxes",
    subtitle: "Configure sending accounts",
    icon: Mail,
    color: "bg-green-500",
  },
  {
    number: 4,
    title: "Build Sequence",
    subtitle: "Create your email flow",
    icon: Zap,
    color: "bg-orange-500",
  },
  {
    number: 5,
    title: "Set Schedule",
    subtitle: "Configure sending times",
    icon: Calendar,
    color: "bg-pink-500",
  },
  {
    number: 6,
    title: "Review & Launch",
    subtitle: "Final review and activation",
    icon: Check,
    color: "bg-emerald-500",
  },
];
interface contextType {
  currentStep: number;
  steps: typeof steps;
  currentStepData: (typeof steps)[number];
  setCurrentStep: (step: number) => void;
  form: ReturnType<typeof useForm<CampaignFormValues>>;
}
const AddCampaignContext = createContext<contextType>({
  currentStep: 1,
  steps: steps,
  currentStepData: steps[0],
  setCurrentStep: () => {},
  form: {} as ReturnType<typeof useForm<CampaignFormValues>>,
});
export function AddCampaignProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<CampaignFormValues>();

  const contextValue = {
    currentStep,
    steps: steps,
    currentStepData:
      steps.find((step) => step.number === currentStep) || steps[0],
    setCurrentStep,
    form,
  };
  return (
    <AddCampaignContext.Provider value={contextValue}>
      {children}
    </AddCampaignContext.Provider>
  );
}
export function useAddCampaignContext() {
  const context = useContext(AddCampaignContext);
  if (!context) {
    throw new Error(
      "useAddCampaignContext must be used within an AddCampaignProvider"
    );
  }
  return context;
}
