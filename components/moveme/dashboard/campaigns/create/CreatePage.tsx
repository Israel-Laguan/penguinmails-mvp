"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileText, Clock, Users } from "lucide-react";
import { CampaignDetailsForm } from "@/components/campaigns/CampaignDetailsForm";
import { SequenceStep } from "@/components/campaigns/SequenceStep";
import { ScheduleSettings } from "@/components/campaigns/ScheduleSettings";
import { RecipientsSettings } from "@/components/campaigns/RecipientsSettings";
// Assuming PersonalizationTags was copied/created correctly
// import { PersonalizationTags } from "@/components/email/PersonalizationTags";

// Define Zod schema for validation
const sequenceStepSchema = z.object({
  type: z.enum(["email", "delay"]),
  emailSubject: z.string().optional(),
  emailBody: z.string().optional(),
  delayDays: z.number().optional(),
  delayHours: z.number().optional(),
  condition: z.enum(["always", "if_not_opened", "if_not_clicked", "if_not_replied"]).optional(),
});

const campaignFormSchema = z.object({
  name: z.string().min(1, "Campaign name is required"),
  fromName: z.string().min(1, "From name is required"),
  fromEmail: z.string().email("Invalid email address"),
  // TODO: Add schema for schedule and recipients if managed by react-hook-form
  sequence: z.array(sequenceStepSchema).min(1, "Campaign must have at least one step"),
});

type CampaignFormValues = z.infer<typeof campaignFormSchema>;

export default function CampaignCreatePage() {
  // State for managing sequence steps (similar to original)
  const [steps, setSteps] = useState<z.infer<typeof sequenceStepSchema>[]>([
    { type: "email", emailSubject: "", emailBody: "" }
  ]);
  const [currentEditingStep, setCurrentEditingStep] = useState<number | null>(null);
  const emailBodyRef = useRef<HTMLTextAreaElement>(null!);

  // Initialize react-hook-form
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignFormSchema),
    defaultValues: {
      name: "",
      fromName: "",
      fromEmail: "",
      sequence: steps, // Initialize sequence in form state
    },
    mode: "onChange", // Or "onBlur"
  });

  // Update form state when steps change
  React.useEffect(() => {
    form.setValue("sequence", steps, { shouldValidate: true });
  }, [steps, form]);

  // Handle form submission
  async function onSubmit(data: CampaignFormValues) {
    console.log("Form Submitted:", data);
    // TODO: Replace with actual API call or Server Action
    // Example using a hypothetical server action:
    // try {
    //   await createCampaignAction(data);
    //   toast({ title: "Campaign created successfully!" });
    //   // Redirect or clear form
    // } catch (error) {
    //   console.error("Failed to create campaign:", error);
    //   toast({ title: "Error creating campaign", description: error.message, variant: "destructive" });
    // }
  }

  // Step manipulation functions (similar to original)
  const addEmailStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index + 1, 0, { type: "email", emailSubject: "", emailBody: "" });
    setSteps(newSteps);
  };

  const addDelayStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index + 1, 0, { type: "delay", delayDays: 3, delayHours: 0, condition: "if_not_replied" });
    setSteps(newSteps);
  };

  const removeStep = (index: number) => {
    if (steps.length <= 1) return; // Prevent removing the last step
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const moveStepUp = (index: number) => {
    if (index > 0) {
      const newSteps = [...steps];
      const temp = newSteps[index - 1];
      newSteps[index - 1] = newSteps[index];
      newSteps[index] = temp;
      setSteps(newSteps);
    }
  };

  const moveStepDown = (index: number) => {
    if (index < steps.length - 1) {
      const newSteps = [...steps];
      const temp = newSteps[index + 1];
      newSteps[index + 1] = newSteps[index];
      newSteps[index] = temp;
      setSteps(newSteps);
    }
  };

  const importTemplate = (index: number, subject: string, body: string) => {
    const newSteps = [...steps];
    if (newSteps[index]?.type === "email") {
      newSteps[index].emailSubject = subject;
      newSteps[index].emailBody = body;
      setSteps(newSteps);
      // Update form state directly as well
      form.setValue(`sequence.${index}.emailSubject`, subject);
      form.setValue(`sequence.${index}.emailBody`, body);
    }
  };

  const handleInsertTag = (index: number, tag: string) => {
    const textarea = emailBodyRef.current;
    if (!textarea || steps[index]?.type !== "email") return;

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const currentBody = steps[index].emailBody ?? "";
    const newBody = currentBody.substring(0, start) + tag + currentBody.substring(end);

    const newSteps = [...steps];
    newSteps[index].emailBody = newBody;
    setSteps(newSteps);

    // Update form state directly
    form.setValue(`sequence.${index}.emailBody`, newBody);

    // Set cursor position after inserted tag
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tag.length, start + tag.length);
    }, 0);
  };

  const updateStep = (index: number, updatedStepData: Partial<z.infer<typeof sequenceStepSchema>>) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], ...updatedStepData };
    setSteps(newSteps);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Create Campaign</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Pass form instance to CampaignDetailsForm */}
              <CampaignDetailsForm form={form} />
            </CardContent>
          </Card>

          <Tabs defaultValue="sequence" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sequence">
                <FileText className="mr-2 h-4 w-4" />
                Sequence
              </TabsTrigger>
              <TabsTrigger value="schedule">
                <Clock className="mr-2 h-4 w-4" />
                Schedule
              </TabsTrigger>
              <TabsTrigger value="recipients">
                <Users className="mr-2 h-4 w-4" />
                Recipients
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sequence" className="mt-4">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <SequenceStep
                    key={index} // Consider using a more stable key if steps can be reordered significantly
                    step={step}
                    index={index}
                    totalSteps={steps.length}
                    currentEditingStep={currentEditingStep}
                    emailBodyRef={emailBodyRef}
                    onMoveStepUp={moveStepUp}
                    onMoveStepDown={moveStepDown}
                    onRemoveStep={removeStep}
                    onAddEmailStep={addEmailStep}
                    onAddDelayStep={addDelayStep}
                    onUpdateStep={updateStep}
                    onInsertTag={handleInsertTag}
                    onSetCurrentEditingStep={setCurrentEditingStep}
                    onImportTemplate={importTemplate}
                  />
                ))}
              </div>
              {form.formState.errors.sequence?.message && (
                 <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.sequence.message}</p>
              )}
               {form.formState.errors.sequence?.root?.message && (
                 <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.sequence.root.message}</p>
              )}
            </TabsContent>

            <TabsContent value="schedule" className="mt-4">
              {/* Pass form control/register if schedule is part of the main form */}
              <ScheduleSettings />
            </TabsContent>

            <TabsContent value="recipients" className="mt-4">
              {/* Pass form control/register if recipients are part of the main form */}
              <RecipientsSettings />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" type="button" onClick={() => console.log("Cancel clicked")}> {/* Add cancel behavior */}
              Cancel
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Creating..." : "Create Campaign"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

