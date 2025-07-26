"use client";
import { Campaign } from "@/lib/data/campaigns";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Check, Mail, Target, Users, Zap } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const CampaignFormSchema = z.object({
  name: z.string().min(1, "Campaign name is required"),
  description: z.string().optional(),
  leadsList: z
    .object({
      id: z.string(),
      name: z.string(),
      contacts: z.number(),
      description: z.string().optional(),
    })
    .optional(),
  selectedMailboxes: z
    .array(
      z.object({
        id: z.string(),
        email: z.string().email("Invalid email address"),
        name: z.string().optional(),
      })
    )
    .min(1, "At least one mailbox must be selected"),
  sequence: z
    .array(
      z.object({
        id: z.string(),
        type: z.enum(["email", "wait"]),
        subject: z.string().optional(),
        content: z.string().optional(),
        delay: z.number().optional(),
        delayUnit: z.enum(["hours", "days"]).optional(),
        condition: z.enum(["always", "no_reply"]).optional(),
      })
    )
    .min(1, "At least one sequence step is required"),
  schedule: z.object({
    days: z
      .array(
        z.enum([
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ])
      )
      .min(1, "At least one sending day must be selected"),
    startTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid start time format"),
    endTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid end time format"),
    dailyLimit: z.number().min(1, "Daily limit must be at least 1"),
    delayBetween: z.number().min(0, "Delay between steps must be at least 0"),
    timezone: z.string().optional(),
  }),
});
export type CampaignFormValues = z.infer<typeof CampaignFormSchema>;

interface contextType {
  currentStep: number;
  steps: typeof steps;
  currentStepData: (typeof steps)[number];
  setCurrentStep: (step: number) => void;
  form: ReturnType<typeof useForm<CampaignFormValues>>;
  prevStep?: () => void;
  nextStep?: () => void;
  editingMode?: boolean;
  campaign?: Campaign;
}
const AddCampaignContext = createContext<contextType>({
  currentStep: 1,
  steps: steps,
  currentStepData: steps[0],
  setCurrentStep: () => {},
  form: {} as ReturnType<typeof useForm<CampaignFormValues>>,
  prevStep: () => {},
  nextStep: () => {},
  editingMode: false,
  campaign: undefined,
});

export function AddCampaignProvider({
  initialValues,
  children,
}: {
  initialValues?: Campaign;
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(CampaignFormSchema),
    defaultValues: {
      name: "",
      description: "",
      leadsList: undefined,
      selectedMailboxes: [],
      sequence: [],
      schedule: {
        days: [],
        startTime: "09:00",
        endTime: "17:00",
        dailyLimit: 100,
        delayBetween: 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      ...initialValues,
    },
  });

  const contextValue = {
    currentStep,
    steps: steps,
    currentStepData:
      steps.find((step) => step.number === currentStep) || steps[0],
    setCurrentStep,
    form,
    prevStep,
    nextStep,
    editingMode: Boolean(initialValues),
    campaign: initialValues,
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
