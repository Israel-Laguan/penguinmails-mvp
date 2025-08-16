"use client";
import Icon from "@/components/Icon";
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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { onboardingSteps } from "@/lib/data/onboarding.mock";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ExternalLink,
  Play,
  Sparkles,
} from "lucide-react";
import { createContext, Fragment, useContext, useState } from "react";

interface OnboardingContextType {
  currentStep: number;
  totalSteps: number;
  steps: typeof onboardingSteps;
  setSteps: (steps: typeof onboardingSteps) => void;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

function OnboardingProvider() {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(onboardingSteps);
  const currentStepData =
    steps.find((step) => step.id === currentStep) || steps[currentStep - 1];
  const totalSteps = steps.length;
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setSteps((prevSteps) =>
        prevSteps.map((step) =>
          step.id === currentStep ? { ...step, completed: true } : step
        )
      );
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        setSteps,
        setCurrentStep,
        totalSteps,
        steps,
        goToNextStep,
        goToPreviousStep,
      }}
    >
      <Stepper />
      <Card className="pt-0">
        <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-blue-50 p-8">
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-2xl",
                currentStepData.completed
                  ? "bg-green-500"
                  : currentStepData.color
              )}
            >
              {currentStepData.completed ? (
                <CheckCircle className="h-8 w-8 text-white" />
              ) : (
                <Icon
                  icon={currentStepData.icon}
                  className="h-8 w-8 text-white"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <CardTitle className="text-2xl font-bold">
                  {currentStepData.title}
                </CardTitle>
                {currentStepData.completed && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    ✅ Completed
                  </Badge>
                )}
              </div>
              <p className="text-lg text-muted-foreground">
                {currentStepData.subtitle}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Step />
        </CardContent>
        <CardFooter>
          <NavigationButtons />
        </CardFooter>
      </Card>
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

function Stepper() {
  const { currentStep, totalSteps, steps, setCurrentStep } = useOnboarding();

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Setup Progress</CardTitle>
        <Badge variant="secondary" className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-[repeat(4,auto_1fr)_auto] items-center">
          {steps.map((step, index) => (
            <Fragment key={step.id}>
              <div>
                <Button
                  onClick={() => setCurrentStep(step.id)}
                  disabled={!step.completed && step.id > currentStep}
                  size="icon"
                  variant={
                    step.completed
                      ? "default"
                      : currentStep === step.id
                      ? "default"
                      : "outline"
                  }
                  className={cn(
                    "h-12 w-12 rounded-xl transition-all",
                    step.completed &&
                      "bg-green-500 hover:bg-green-600 text-white",
                    currentStep === step.id &&
                      !step.completed &&
                      cn(step.color, "text-white"),
                    !step.completed &&
                      step.id > currentStep &&
                      "opacity-50 cursor-not-allowed"
                  )}
                >
                  {step.completed ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </Button>
              </div>
              {index < totalSteps - 1 && (
                <Separator
                  orientation="horizontal"
                  className={cn(
                    "h-1 rounded-full transition-all",
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

function Step() {
  const { currentStep, steps } = useOnboarding();
  const currentStepData = steps.find((step) => step.id === currentStep);

  if (!currentStepData) return null;

  const handleStepAction = () => {
    // Handle step action logic here
    console.log("Step action clicked");
  };

  return (
    <>
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {currentStepData.explanation}
        </p>

        {/* Video Section */}
        <h3 className=" text-lg font-semibold">📹 Video Tutorial</h3>
        <Card className="bg-gradient-to-br from-muted/50 to-muted w-full">
          <CardContent className="p-8 text-center space-y-4">
            <Button
              variant={"destructive"}
              size={"lg"}
              className=" rounded-full w-24 h-24"
            >
              <Play className="h-12 w-12 text-white" />
            </Button>
            <div className="space-y-2">
              <h4 className=" font-semibold">
                Step-by-Step Guide: {currentStepData.title}
              </h4>
              <p className=" text-muted-foreground">
                Watch our detailed tutorial to complete this step
              </p>
            </div>
            <Button variant={"destructive"}>▶ Watch Video Tutorial</Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
          <Button
            onClick={handleStepAction}
            disabled={currentStepData.completed}
          >
            <span>{currentStepData.buttonText}</span>
            <ArrowRight className=" h-5 w-5" />
          </Button>

          <Button variant={"link"} className="border ">
            <BookOpen className=" h-5 w-5" />
            <span>{currentStepData.kbLink}</span>
            <ExternalLink className=" h-4 w-4" />
          </Button>
        </div>

        {/* Promotion */}
        {currentStepData.promotion && (
          <Alert className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <AlertTitle className="flex gap-2 items-center">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">
                {currentStepData.promotion.title}
              </h4>
            </AlertTitle>
            <AlertDescription className="flex items-center justify-between ">
              <p className="text-blue-700">
                {currentStepData.promotion.description}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                {currentStepData.promotion.link}
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
}

function NavigationButtons() {
  const { currentStep, steps, goToNextStep, goToPreviousStep } =
    useOnboarding();

  function handleSkipSetup() {
    // Handle skip setup logic here
    console.log("Skip setup clicked");
  }

  return (
    <div className="flex items-center justify-between w-full">
      <Button
        variant="ghost"
        onClick={goToPreviousStep}
        disabled={currentStep === 1}
        className="font-medium"
      >
        <ArrowLeft className=" h-5 w-5" />
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
            <ArrowRight className=" h-5 w-5" />
          </Button>
        ) : (
          <Button
            onClick={() => {
              /* Handle complete setup */
            }}
            className="bg-green-600 hover:bg-green-700 shadow-sm"
          >
            <Sparkles className=" h-5 w-5" />
            Complete Setup
          </Button>
        )}
      </div>
    </div>
  );
}

export { OnboardingProvider, Step, Stepper, useOnboarding };
