"use client";
import { useAddTemplateContext } from "@/context/AddTemplateContext";
import TemplateBasicsStep from "./steps/TemplateBasicsStep";
import EmailContentStep from "./steps/EmailContentStep";
import SuccessStep from "./steps/SuccessStep";

function AddTemplateForm() {
  const { currentStep } = useAddTemplateContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TemplateBasicsStep />;
      case 2:
        return <EmailContentStep />;
      case 3:
        return <SuccessStep />;
      default:
        return <TemplateBasicsStep />;
    }
  };

  return <div className="min-h-screen">{renderStep()}</div>;
}

export default AddTemplateForm;
