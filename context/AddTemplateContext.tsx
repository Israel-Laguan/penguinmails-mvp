"use client";
import { CheckCircle, Edit, FileText } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const steps = [
  {
    number: 1,
    title: "Template Basics",
    subtitle: "Set up template information",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Email Content",
    subtitle: "Create your email template",
    icon: Edit,
    color: "bg-purple-500",
  },
  {
    number: 3,
    title: "Success",
    subtitle: "Template created successfully",
    icon: CheckCircle,
    color: "bg-green-500",
  },
];

export const addTemplateFormSchema = z.object({
  name: z
    .string()
    .min(1, "Template name is required")
    .max(100, "Template name is too long"),
  type: z.enum(["quick-reply", "campaign-email"]),
  folder: z.string().optional(),
  newFolder: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isFavorite: z.boolean(),
  subject: z.string().optional(),
  content: z.string().min(1, "Email content is required"),
});

export type AddTemplateFormType = z.infer<typeof addTemplateFormSchema>;

export const AddTemplateContext = createContext<{
  steps: typeof steps;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  currentStepData: (typeof steps)[0];
  form: UseFormReturn<AddTemplateFormType>;
} | null>(null);

export function AddTemplateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm<AddTemplateFormType>({
    resolver: zodResolver(addTemplateFormSchema),
    defaultValues: {
      name: "",
      type: "quick-reply",
      folder: "",
      newFolder: "",
      tags: [],
      isFavorite: false,
      subject: "",
      content: "",
    },
  });

  const currentStepData =
    steps.find((step) => step.number === currentStep) || steps[0];

  return (
    <AddTemplateContext.Provider
      value={{
        steps,
        currentStep,
        setCurrentStep,
        currentStepData,
        form,
      }}
    >
      <FormProvider {...form}>{children}</FormProvider>
    </AddTemplateContext.Provider>
  );
}

export function useAddTemplateContext() {
  const context = useContext(AddTemplateContext);
  if (!context) {
    throw new Error(
      "useAddTemplateContext must be used within AddTemplateProvider"
    );
  }
  return context;
}
