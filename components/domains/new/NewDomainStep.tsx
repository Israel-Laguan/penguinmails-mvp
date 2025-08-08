"use client";

import { useAddDomainContext } from "@/context/AddDomainContext";
import EnterDomain from "./EnterDomain";
import NewDomainDNSSetUp from "./NewDomainDNSSetUp";
import Confirmation from "./Confirmation";

function NewDomainStep() {
  const { currentStep } = useAddDomainContext();
  switch (currentStep) {
    case 1:
      return <EnterDomain />;
    case 2:
      return <NewDomainDNSSetUp />;
    case 3:
      return <Confirmation />;

    default:
      return <div>Unknown Step</div>;
  }
}
export default NewDomainStep;
