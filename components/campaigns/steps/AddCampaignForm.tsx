"use client";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import CampaignDetailsStep from "./CampaignDetailsStep";
import LeadsSelectionStep from "./LeadsSelectionStep";
import MailboxAssignmentStep from "./MailboxAssignmentStep";
import SequenceBuilderStep from "./SequenceBuilderStep";
import ScheduleSettingStep from "./ScheduleSettingStep";
import ReviewLaunchStep from "./ReviewLaunchStep";

function AddCampaignForm() {
  const { currentStep } = useAddCampaignContext();
  switch (currentStep) {
    case 1:
      return <CampaignDetailsStep />;
    case 2:
      return <LeadsSelectionStep />;
    case 3:
      return <MailboxAssignmentStep />;
    case 4:
      return <SequenceBuilderStep />;
    case 5:
      return <ScheduleSettingStep />;
    case 6:
      return <ReviewLaunchStep />;
    default:
      return <div>Unknown Step</div>;
  }
}
export default AddCampaignForm;
