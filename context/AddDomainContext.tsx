"use client";
import { CheckCircle, Globe, Server } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const steps = [
  {
    number: 1,
    title: "Enter Domain",
    subtitle: "Provide your domain name",
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Set Up DNS Records",
    subtitle: "Configure DNS settings",
    icon: Server,
    color: "bg-purple-500",
  },
  {
    number: 3,
    title: "Confirmation",
    subtitle: "Domain verified successfully",
    icon: CheckCircle,
    color: "bg-green-500 text-white",
  },
];
const dnsRecords: DNSRecord[] = [
  {
    type: "SPF",
    name: "@",
    value: "v=spf1 include:penguinmails.com ~all",
    status: "pending",
    description: "Sender Policy Framework - Prevents email spoofing",
  },
  {
    type: "DKIM",
    name: "penguin._domainkey",
    value:
      "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7vbqajDw4o6gJy8ousKZQrBqj...",
    status: "pending",
    description: "DomainKeys Identified Mail - Email authentication",
  },
  {
    type: "DMARC",
    name: "_dmarc",
    value: "v=DMARC1; p=none; rua=mailto:dmarc@penguinmails.com",
    status: "pending",
    description: "Domain-based Message Authentication - Email policy",
  },
  {
    type: "MX",
    name: "@",
    value: "mx.penguinmails.com",
    status: "pending",
    description: "Mail Exchange - Routes incoming emails",
  },
];

export const AddDomainContext = createContext<{
  steps: typeof steps;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  dnsRecords: typeof dnsRecords;
  currentStepData: (typeof steps)[0];
} | null>(null);

const addDomainFormSchema = z.object({
  domain: z
    .string()
    .min(1, "Domain is required")
    .max(255, "Domain is too long")
    .regex(
      /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/,
      "Please enter a valid domain name"
    ),
  dnsRecords: z.array(
    z.object({
      type: z.enum(["SPF", "DKIM", "DMARC", "MX"]),
      name: z.string(),
      value: z.string(),
      status: z.enum(["verified", "pending", "failed"]),
      description: z.string(),
    })
  ),
});

type AddDomainFormType = z.infer<typeof addDomainFormSchema>;
export function AddDomainProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<AddDomainFormType>({
    defaultValues: {
      domain: "",
      dnsRecords: [],
    },
  });
  const currentStepData =
    steps.find((step) => step.number === currentStep) || steps[0];

  return (
    <AddDomainContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        dnsRecords,
        currentStepData,
      }}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </AddDomainContext.Provider>
  );
}
export function useAddDomainContext() {
  const context = useContext(AddDomainContext);
  if (!context) {
    throw new Error(
      "useAddDomainContext must be used within AddDomainProvider"
    );
  }
  return context;
}
