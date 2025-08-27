"use client";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
function AddCampaignHeader({ children }: { children?: React.ReactNode }) {
  const { currentStep, steps, currentStepData } = useAddCampaignContext();
  const Icon = currentStepData.icon;

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              {children}
              <p className="text-gray-600">
                Step {currentStep} of {steps.length}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {currentStepData.title}
              </p>
              <p className="text-sm text-gray-500">
                {currentStepData.subtitle}
              </p>
            </div>
            <div className={`p-3 rounded-xl ${currentStepData.color}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCampaignHeader;
