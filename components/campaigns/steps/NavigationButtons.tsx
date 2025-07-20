"use client";

import { Button } from "@/components/ui/button";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

function NavigationButtons() {
  const { currentStep, steps, prevStep, nextStep } = useAddCampaignContext();
  return (
    <div className="bg-white border-t border-gray-200 px-8 py-6 w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Button
          onClick={prevStep}
          disabled={currentStep === 1}
          variant={"outline"}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Previous</span>
        </Button>

        <div className="flex items-center space-x-4">
          <Button variant={"outline"}>Save as Draft</Button>
          {currentStep < steps.length ? (
            <Button onClick={nextStep}>
              <span>Continue</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          ) : (
            <Button className=" bg-emerald-600  hover:bg-emerald-700 ">
              <Play className="w-5 h-5" />
              <span>Launch Campaign</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default NavigationButtons;
