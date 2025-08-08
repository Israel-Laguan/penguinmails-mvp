"use client";
import { useAddMailboxesContext } from "@/context/AddMailboxesContext";
import AddMailboxDetails from "./AddMailboxDetails";
import MailboxSetting from "./MailboxSetting";
import SuccessStep from "./SuccessStep";

function AddMailboxesStep() {
  const { currentStep } = useAddMailboxesContext();
  switch (currentStep) {
    case 1:
      return <AddMailboxDetails />;
    case 2:
      return <MailboxSetting />;
    case 3:
      return <SuccessStep />;
    default:
      return <div>Unknown Step</div>;
  }
}
export default AddMailboxesStep;
