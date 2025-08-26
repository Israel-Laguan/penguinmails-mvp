import { OnboardingLayout } from "@/components/onboarding";
import { OnboardingProvider } from "@/context/onboarding-context";

function OnboardingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to PenguinMails! 🐧</h1>
        <p className="text-muted-foreground">
          Let's get you set up for cold email success
        </p>
      </div>
      <OnboardingProvider>
        <OnboardingLayout />
      </OnboardingProvider>
    </div>
  );
}

export default OnboardingPage;
