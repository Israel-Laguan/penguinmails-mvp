"use client";
import { Button } from "@/components/ui/button";
import { useAddMailboxesContext } from "@/context/AddMailboxesContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

function AddMailboxesNavigation() {
  const { currentStep, setCurrentStep, steps } = useAddMailboxesContext();
  const router = useRouter();
  const form = useFormContext();
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  function onClose() {
    router.push("/dashboard/domains");
  }
  const mailboxData = form.watch();
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return mailboxData.name && mailboxData.domain && mailboxData.password && mailboxData.confirmPassword === mailboxData.password;
      case 2:
        return mailboxData.dailyLimit >= 1 && mailboxData.dailyLimit <= 50;
      case 3:
        return true;
      default:
        return false;
    }
  };
  return (
    <div className="w-full border-t border-gray-200 px-8 py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => (currentStep > 1 ? prevStep() : onClose())}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{currentStep === 1 ? "Cancel" : "Previous"}</span>
        </Button>

        <div className="flex items-center space-x-4">
          {currentStep < 3 && (
            <Button onClick={nextStep} disabled={!canProceed()}>
              <span>{currentStep === 2 ? "Finish" : "Next"}</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddMailboxesNavigation;
