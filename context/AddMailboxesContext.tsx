"use client";
import { CheckCircle, Mail, Settings } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const steps = [
  {
    number: 1,
    title: "Mailbox Details",
    subtitle: "Set up basic mailbox information",
    icon: Mail,
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Mailbox Settings",
    subtitle: "Configure sending and warmup limits",
    icon: Settings,
    color: "bg-purple-500",
  },
  {
    number: 3,
    title: "Success",
    subtitle: "Mailbox created successfully",
    icon: CheckCircle,
    color: "bg-green-500 text-white",
  },
];

export const AddMailboxesContext = createContext<{
  steps: typeof steps;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  currentStepData: (typeof steps)[0];
} | null>(null);

export const addMailboxesFormSchema = z.object({
  name: z.string().min(2).max(100),
  domain: z.string().min(2).max(100),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
  dailyLimit: z.number().min(1),
  enableWarmup: z.boolean().optional(),
  enableWarmupLimits: z.boolean().optional(),
});

type AddMailboxesFormType = z.infer<typeof addMailboxesFormSchema>;
export function AddMailboxesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<AddMailboxesFormType>({
    defaultValues: {
      name: "",
      domain: "",
      password: "",
      confirmPassword: "",
      dailyLimit: 30,
      enableWarmup: false,
      enableWarmupLimits: false,
    },
  });
  const currentStepData =
    steps.find((step) => step.number === currentStep) || steps[0];

  return (
    <AddMailboxesContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        currentStepData,
      }}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </AddMailboxesContext.Provider>
  );
}
export function useAddMailboxesContext() {
  const context = useContext(AddMailboxesContext);
  if (!context) {
    throw new Error(
      "useAddMailboxesContext must be used within AddDomainProvider"
    );
  }
  return context;
}
