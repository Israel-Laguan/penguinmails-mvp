"use client";
import { Button } from "@/components/ui/button";
import { useAddDomainContext } from "@/context/AddDomainContext";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Loader2, Server } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

function NewDomainNavigation() {
  const { currentStep, setCurrentStep } = useAddDomainContext();
  const router = useRouter();
  const form = useFormContext();
  const { isValidating } = form.formState;
  const domainName = form.watch("domain");
  function onClose() {
    router.back();
  }
  function handleDomainSubmit() {
    if (domainName.trim()) {
      setCurrentStep(2);
    }
  }
  function handleDNSCheck() {
    // Logic to check DNS records would go here
    setCurrentStep(3);
  }
  const isCheckingDNS = false; // Replace with actual state if needed

  return (
    <div className="w-full border-t border-gray-200 ">
      <div className="px-8 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() =>
              currentStep > 1 ? setCurrentStep(currentStep - 1) : onClose()
            }
            className="px-6 py-3 text-muted-foreground hover:text-foreground font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>{currentStep === 1 ? "Cancel" : "Previous"}</span>
          </Button>

          <div className="flex items-center space-x-4">
            {currentStep === 1 && (
              <Button
                onClick={handleDomainSubmit}
                disabled={!domainName.trim() || isValidating}
                className={cn(
                  "px-8 py-3 font-medium",
                  "bg-blue-600 hover:bg-blue-700 text-white"
                )}
              >
                {isValidating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    <span>Validating...</span>
                  </>
                ) : (
                  <>
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            )}

            {currentStep === 2 && (
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleDNSCheck}
                  disabled={isCheckingDNS}
                  className={cn(
                    "px-6 py-3 font-medium",
                    "bg-purple-600 hover:bg-purple-700 text-white"
                  )}
                >
                  {isCheckingDNS ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Checking DNS...</span>
                    </>
                  ) : (
                    <>
                      <Server className="w-5 h-5 mr-2" />
                      <span>Check DNS Status</span>
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => setCurrentStep(3)}
                  className={cn(
                    "px-6 py-3 font-medium",
                    "bg-green-600 hover:bg-green-700 text-white"
                  )}
                >
                  <span>Finish</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewDomainNavigation;
