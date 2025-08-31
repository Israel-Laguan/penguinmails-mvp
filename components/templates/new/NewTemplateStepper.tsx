import Stepper from "@/components/Stepper";
import { AddTemplateContext } from "@/context/AddTemplateContext";

function NewTemplateStepper() {
  return <Stepper context={AddTemplateContext} />;
}

export default NewTemplateStepper;
