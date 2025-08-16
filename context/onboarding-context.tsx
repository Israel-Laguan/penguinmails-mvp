"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { faqItems, onboardingSteps } from "@/lib/data/onboarding.mock";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  HelpCircle,
  LucideIcon,
  Play,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  createContext,
  Fragment,
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
  icon: LucideIcon | string;
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

function OnboardingLayout() {
  const { currentStepData } = useOnboarding();

  if (!currentStepData) {
    return (
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              No onboarding steps available
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Stepper />
      <StepCard />
      <HelpSection />
    </div>
  );
}

function Stepper() {
  const { currentStep, totalSteps, steps, setCurrentStep, isStepAccessible } =
    useOnboarding();

  if (steps.length === 0) return null;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Setup Progress</CardTitle>
        <Badge variant="secondary" className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <Fragment key={step.id}>
              <StepIndicator
                step={step}
                isActive={currentStep === step.id}
                isAccessible={isStepAccessible(step.id)}
                onClick={() =>
                  isStepAccessible(step.id) && setCurrentStep(step.id)
                }
              />
              {index < totalSteps - 1 && (
                <Separator
                  orientation="horizontal"
                  className={cn(
                    "flex-1 mx-2 h-1 rounded-full transition-all",
                    step.completed ? "bg-green-500" : "bg-muted"
                  )}
                />
              )}
            </Fragment>
          ))}
        </div>
        <Progress
          value={(currentStep / totalSteps) * 100}
          className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-green-500 [&>div]:rounded-full [&>div]:transition-all [&>div]:duration-500"
        />
      </CardContent>
    </Card>
  );
}

function StepIndicator({
  step,
  isActive,
  isAccessible,
  onClick,
}: {
  step: OnboardingStep;
  isActive: boolean;
  isAccessible: boolean;
  onClick: () => void;
}) {
  const IconComponent = step.icon;

  return (
    <Button
      onClick={onClick}
      disabled={!isAccessible}
      size="icon"
      variant={step.completed ? "default" : isActive ? "default" : "outline"}
      className={cn(
        "h-12 w-12 rounded-xl transition-all",
        step.completed && "bg-green-500 hover:bg-green-600 text-white",
        isActive && !step.completed && cn(step.color, "text-white"),
        !isAccessible && "opacity-50 cursor-not-allowed"
      )}
      aria-label={`Step ${step.id}: ${step.title}`}
    >
      {step.completed ? (
        <CheckCircle className="h-6 w-6" />
      ) : (
        <IconComponent className="h-6 w-6" />
      )}
    </Button>
  );
}

function StepCard() {
  const { currentStepData } = useOnboarding();

  if (!currentStepData) return null;

  return (
    <Card className="w-full p-0">
      <StepHeader step={currentStepData} />
      <CardContent className="p-8">
        <Step step={currentStepData} />
      </CardContent>
      <CardFooter className="border-t bg-muted/30 p-8">
        <NavigationButtons />
      </CardFooter>
    </Card>
  );
}

function StepHeader({ step }: { step: OnboardingStep }) {
  const IconComponent = step.icon;

  return (
    <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-blue-50 p-8">
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl",
            step.completed ? "bg-green-500" : step.color
          )}
        >
          {step.completed ? (
            <CheckCircle className="h-8 w-8 text-white" />
          ) : (
            <IconComponent className="h-8 w-8 text-white" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
            {step.completed && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                ✅ Completed
              </Badge>
            )}
          </div>
          <p className="text-lg text-muted-foreground">{step.subtitle}</p>
        </div>
      </div>
    </CardHeader>
  );
}

function Step({ step }: { step: OnboardingStep }) {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-muted-foreground">
        {step.explanation}
      </p>
      <VideoTutorial stepTitle={step.title} />
      <ActionButtons step={step} />
      {step.promotion && <PromotionAlert promotion={step.promotion} />}
    </div>
  );
}

function VideoTutorial({ stepTitle }: { stepTitle: string }) {
  const handlePlayVideo = useCallback(() => {
    console.log("Play video tutorial:", stepTitle);
  }, [stepTitle]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">📹 Video Tutorial</h3>
      <Card className="bg-gradient-to-br from-muted/50 to-muted w-full">
        <CardContent className="p-8 text-center space-y-4">
          <Button
            variant="destructive"
            size="lg"
            className="rounded-full w-24 h-24"
            onClick={handlePlayVideo}
            aria-label={`Play video tutorial for ${stepTitle}`}
          >
            <Play className="h-12 w-12 text-white" />
          </Button>
          <div className="space-y-2">
            <h4 className="font-semibold">Step-by-Step Guide: {stepTitle}</h4>
            <p className="text-muted-foreground">
              Watch our detailed tutorial to complete this step
            </p>
          </div>
          <Button variant="destructive" onClick={handlePlayVideo}>
            ▶ Watch Video Tutorial
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function ActionButtons({ step }: { step: OnboardingStep }) {
  const { markStepCompleted } = useOnboarding();

  const handleStepAction = useCallback(() => {
    if (!step.completed) {
      markStepCompleted(step.id);
    }
    console.log("Step action clicked:", step.title);
  }, [step.completed, step.id, step.title, markStepCompleted]);

  const handleKnowledgeBase = useCallback(() => {
    console.log("Knowledge base clicked:", step.kbLink);
  }, [step.kbLink]);

  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <Button
        onClick={handleStepAction}
        disabled={step.completed}
        className="min-w-fit"
        asChild
      >
        <Link href={step.href}>
          <span>{step.buttonText}</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button variant={"outline"} onClick={handleKnowledgeBase}>
        <BookOpen className="mr-2 h-5 w-5" />
        <span>{step.kbLink}</span>
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

function PromotionAlert({
  promotion,
}: {
  promotion: { title: string; description: string; link: string };
}) {
  const handlePromotionClick = useCallback(() => {
    console.log("Promotion clicked:", promotion.link);
  }, [promotion.link]);

  return (
    <Alert className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
      <AlertTitle className="flex gap-2 items-center">
        <Sparkles className="h-4 w-4 text-blue-600" />
        <h4 className="font-semibold text-blue-900">{promotion.title}</h4>
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <p className="text-blue-700">{promotion.description}</p>
        <Button
          className="bg-blue-600 hover:bg-blue-700 ml-4"
          onClick={handlePromotionClick}
        >
          {promotion.link}
        </Button>
      </AlertDescription>
    </Alert>
  );
}

function NavigationButtons() {
  const { currentStep, steps, goToNextStep, goToPreviousStep } =
    useOnboarding();

  const handleSkipSetup = useCallback(() => {
    console.log("Skip setup clicked");
  }, []);

  const handleCompleteSetup = useCallback(() => {
    console.log("Complete setup clicked");
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <Button
        variant="ghost"
        onClick={goToPreviousStep}
        disabled={currentStep === 1}
        className="font-medium"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Previous
      </Button>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          onClick={handleSkipSetup}
          className="font-medium"
        >
          Skip Setup
        </Button>

        {currentStep < steps.length ? (
          <Button onClick={goToNextStep} className="shadow-sm">
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Button
            onClick={handleCompleteSetup}
            className="bg-green-600 hover:bg-green-700 shadow-sm"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Complete Setup
          </Button>
        )}
      </div>
    </div>
  );
}

function HelpSection() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleContactSupport = useCallback(() => {
    console.log("Contact support clicked");
  }, []);

  const handleToggleFAQ = useCallback(() => {
    setShowFAQ(!showFAQ);
  }, [showFAQ]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
              <HelpCircle className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <CardTitle className="font-semibold">Need Help?</CardTitle>
              <p className="text-sm text-muted-foreground">
                We're here to support your success
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleContactSupport}
              className="bg-purple-600 hover:bg-purple-700"
              size="sm"
            >
              Contact Support
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleFAQ}
              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              FAQ
              {showFAQ ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      <Collapsible open={showFAQ} onOpenChange={setShowFAQ}>
        <CollapsibleContent>
          <Separator />
          <CardContent className="py-4">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="p-0 rounded-md">
                  <Collapsible
                    open={expandedFAQ === index}
                    onOpenChange={(open) => setExpandedFAQ(open ? index : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                      >
                        <span className="text-sm ">{item.question}</span>
                        {expandedFAQ === index ? (
                          <ChevronUp className="h-4 w-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 flex-shrink-0" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-3 pb-3">
                      <Separator className="mb-3" />
                      <p className="text-sm leading-relaxed">{item.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export {
  OnboardingLayout,
  OnboardingProvider,
  Step,
  Stepper,
  useOnboarding,
  HelpSection,
};
