"use client";
import { AddTemplateProvider } from "@/context/AddTemplateContext";
import NewTemplateStepper from "@/components/templates/new/NewTemplateStepper";
import AddTemplateForm from "@/components/templates/new/AddTemplateForm";

function NewTemplatePage() {
  return (
    <AddTemplateProvider>
      <div className="min-h-screen">
        <NewTemplateStepper />
        <AddTemplateForm />
      </div>
    </AddTemplateProvider>
  );
}

export default NewTemplatePage;
