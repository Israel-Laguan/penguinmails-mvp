"use client";
import { onboardingSteps } from "@/lib/data/onboarding.mock";
import { LucideIcon } from "lucide-react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface OnboardingStep {
  id: number;
  title: string;
  subtitle: string;
  explanation: string;
  icon: LucideIcon;
  color: string;
  href: string;
  buttonText: string;
  kbLink: string;
  videoId: string;
  completed: boolean;
  promotion?: {
    title: string;
    description: string;
    link: string;
  };
}

interface OnboardingContextType {
  currentStep: number;
  totalSteps: number;
  steps: OnboardingStep[];
  currentStepData: OnboardingStep | null;
  setSteps: (steps: OnboardingStep[]) => void;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  markStepCompleted: (stepId: number) => void;
  isStepAccessible: (stepId: number) => boolean;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

function OnboardingProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState<OnboardingStep[]>(onboardingSteps);

  const totalSteps = steps.length;

  const currentStepData = useMemo(
    () => steps.find((step) => step.id === currentStep) || null,
    [steps, currentStep]
  );

  const markStepCompleted = useCallback((stepId: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === stepId ? { ...step, completed: true } : step
      )
    );
  }, []);

  const goToNextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      markStepCompleted(currentStep);
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, totalSteps, markStepCompleted]);

  const goToPreviousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const isStepAccessible = useCallback(
    (stepId: number) => {
      if (stepId <= 0 || stepId > totalSteps) return false;
      return (
        stepId <= currentStep ||
        steps.find((step) => step.id === stepId)?.completed ||
        false
      );
    },
    [currentStep, steps, totalSteps]
  );

  const contextValue = useMemo(
    () => ({
      currentStep,
      totalSteps,
      steps,
      currentStepData,
      setSteps,
      setCurrentStep,
      goToNextStep,
      goToPreviousStep,
      markStepCompleted,
      isStepAccessible,
    }),
    [
      currentStep,
      totalSteps,
      steps,
      currentStepData,
      goToNextStep,
      goToPreviousStep,
      markStepCompleted,
      isStepAccessible,
    ]
  );

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
}

function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}

export { OnboardingProvider, useOnboarding };
export type { OnboardingStep };
