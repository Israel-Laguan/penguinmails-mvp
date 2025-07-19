import { useAddCampaignContext } from "@/context/AddCampaignContext";

function AddCampaignForm() {
  const { currentStep } = useAddCampaignContext();
  switch (currentStep) {
    case 1:
      return <div>Step 1: Campaign Details</div>;
    case 2:
      return <div>Step 2: Audience Selection</div>;
    case 3:
      return <div>Step 3: Mailbox Assignment</div>;
    case 4:
      return <div>Step 4: Sequence Building</div>;
    case 5:
      return <div>Step 5: Schedule Setting</div>;
    case 6:
      return <div>Step 6: Review & Launch</div>;
    default:
      return <div>Unknown Step</div>;
  }
}
export default AddCampaignForm;
