"use client";

import React, { useState, useRef } from "react";
import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { FileText, Clock, Users } from "lucide-react";
import { CampaignDetailsForm } from "./CampaignDetailsForm";
import { SequenceStep } from "./SequenceStep";
import { ScheduleSettings } from "./ScheduleSettings";
import { RecipientsSettings } from "./RecipientsSettings";
import { copyText as t } from "./copy";
import { CampaignEventContition, CampaignStatus } from "@/app/api/generated/prisma";

// Schema definitions
const campaignStepSchema = z.object({
  id: z.number().optional(),
  sequenceOrder: z.number(),
  delayDays: z.number(),
  delayHours: z.number(),
  templateId: z.number(),
  campaignId: z.number(),
  emailSubject: z.string().min(1, t.validation.subject),
  emailBody: z.string().optional(),
  condition: z.nativeEnum(CampaignEventContition),
});

const campaignFormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, t.validation.campaignName),
  fromName: z.string().min(1, t.validation.fromName),
  fromEmail: z.string().email(t.validation.email),
  status: z.nativeEnum(CampaignStatus).optional().default("DRAFT"),
  companyId: z.number().optional(),
  createdById: z.string().optional(),
  steps: z.array(campaignStepSchema).min(1, t.validation.minSteps),
  sendDays: z.array(z.number()).optional(), // Array of weekday numbers (0-6)
  sendTimeStart: z.string().optional(), // HH:mm format
  sendTimeEnd: z.string().optional(), // HH:mm format
  emailsPerDay: z.number().optional(),
  timezone: z.string().optional().default("UTC"),
  metrics: z.object({
    recipients: z.object({
      sent: z.number(),
      total: z.number(),
    }),
    opens: z.object({
      total: z.number(),
      rate: z.number(),
    }),
    clicks: z.object({
      total: z.number(),
      rate: z.number(),
    }),
    replies: z.object({
      total: z.number(),
      rate: z.number(),
    }),
    bounces: z.object({
      total: z.number(),
      rate: z.number(),
    }).optional(),
  }).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CampaignFormValues = z.infer<typeof campaignFormSchema>;

interface CampaignFormProps {
  initialData?: CampaignFormValues;
  onSubmit: (data: CampaignFormValues) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
  submitLoadingLabel?: string;
  readOnly?: boolean;
}

export function CampaignForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = t.buttons.create,
  submitLoadingLabel = t.buttons.creating,
  readOnly = false,
}: CampaignFormProps) {
  const [steps, setSteps] = useState<z.infer<typeof campaignStepSchema>[]>(
    initialData?.steps || [{
      sequenceOrder: 0,
      delayDays: 0,
      delayHours: 0,
      templateId: 0,
      campaignId: 0,
      emailSubject: "",
      emailBody: "",
      condition: CampaignEventContition.ALWAYS,
    }]
  );
  const [currentEditingStep, setCurrentEditingStep] = useState<number | null>(null);
  const emailBodyRef = useRef<HTMLTextAreaElement>(null!);

  const form = useForm<CampaignFormValues>({
    defaultValues: initialData || {
      name: "",
      fromName: "",
      fromEmail: "",
      status: "DRAFT",
      steps: steps,
    },
    mode: "onChange",
  }) as unknown as UseFormReturn<CampaignFormValues>;

  // Update form state when steps change
  React.useEffect(() => {
    form.setValue("steps", steps, { shouldValidate: true });
  }, [steps, form]);

  // Handle form submission
  async function handleSubmit(data: CampaignFormValues) {
    await onSubmit(data);
  }

  // Step manipulation functions (similar to original)
  const addEmailStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index + 1, 0, {
      sequenceOrder: newSteps.length,
      delayDays: 0,
      delayHours: 0,
      templateId: 0,
      campaignId: 0,
      emailSubject: "",
      emailBody: "",
      condition: CampaignEventContition.ALWAYS,
    });
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
    if (newSteps[index]?.templateId) {
      // Assuming templateId is used to fetch the template
      // Update form state directly as well
      form.setValue(`steps.${index}.templateId`, newSteps[index].templateId);
    }
  };

  const handleInsertTag = (index: number, tag: string) => {
    const textarea = emailBodyRef.current;
    if (!textarea || !steps[index]?.templateId) return;

    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const currentBody = ""; // Assuming we fetch the body using templateId
    const newBody =
      currentBody.substring(0, start) + tag + currentBody.substring(end);

    const newSteps = [...steps];
    // Assuming we update the body using templateId
    setSteps(newSteps);

    // Update form state directly
    form.setValue(`steps.${index}.templateId`, newSteps[index].templateId);

    // Set cursor position after inserted tag
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tag.length, start + tag.length);
    }, 0);
  };

  const updateStep = (
    index: number,
    updatedStepData: Partial<z.infer<typeof campaignStepSchema>>
  ) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], ...updatedStepData };
    setSteps(newSteps);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.cardTitles.campaignDetails}</CardTitle>
            </CardHeader>
            <CardContent>
              {readOnly && initialData?.id && (
                <div className="mb-6 space-y-2 text-sm text-muted-foreground border-b pb-4">
                  <div>
                    <span className="font-medium">{t.metadata.id}:</span> {initialData.id}
                  </div>
                  {initialData.createdAt && (
                    <div>
                      <span className="font-medium">{t.metadata.created}:</span>{" "}
                      {new Date(initialData.createdAt).toLocaleString()}
                    </div>
                  )}
                  {initialData.updatedAt && (
                    <div>
                      <span className="font-medium">{t.metadata.lastUpdated}:</span>{" "}
                      {new Date(initialData.updatedAt).toLocaleString()}
                    </div>
                  )}
                </div>
              )}
              <CampaignDetailsForm form={form} readOnly={readOnly} />
            </CardContent>
          </Card>

          <Tabs defaultValue="sequence" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sequence">
                <FileText className="mr-2 h-4 w-4" />
                {t.tabs.sequence}
              </TabsTrigger>
              <TabsTrigger value="schedule">
                <Clock className="mr-2 h-4 w-4" />
                {t.tabs.schedule}
              </TabsTrigger>
              <TabsTrigger value="recipients">
                <Users className="mr-2 h-4 w-4" />
                {t.tabs.recipients}
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
                    onUpdateStep={updateStep}
                    onInsertTag={handleInsertTag}
                    onSetCurrentEditingStep={setCurrentEditingStep}
                    templates={[]}
                    onSelectTemplate={(templateId) => {
                      const newSteps = [...steps];
                      newSteps[index].templateId = templateId;
                      setSteps(newSteps);
                      form.setValue(`steps.${index}.templateId`, templateId);
                    }}
                  />
                ))}

                <div className="flex items-center justify-center gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addEmailStep(steps.length - 1)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {t.addEmail}
                  </Button>
                </div>
              </div>

              {form.formState.errors.steps?.message && (
                <p className="text-sm font-medium text-destructive mt-2">
                  {form.formState.errors.steps.message}
                </p>
              )}
              {form.formState.errors.steps?.root?.message && (
                <p className="text-sm font-medium text-destructive mt-2">
                  {form.formState.errors.steps.root.message}
                </p>
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
            {onCancel && (
              <Button variant="outline" type="button" onClick={onCancel}>
                {t.buttons.cancel}
              </Button>
            )}
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? submitLoadingLabel : submitLabel}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}