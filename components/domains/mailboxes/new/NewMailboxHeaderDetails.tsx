"use client";
import { useAddMailboxesContext } from "@/context/AddMailboxesContext";
import { LucideIcon } from "lucide-react";

function NewMailboxHeaderDetails() {
  const { currentStepData } = useAddMailboxesContext();
  const Icon: LucideIcon = currentStepData.icon;
  return (
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">
          {currentStepData.title}
        </p>
        <p className="text-sm text-gray-500">{currentStepData.subtitle}</p>
      </div>
      <div className={`p-3 rounded-xl ${currentStepData.color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
export default NewMailboxHeaderDetails;
