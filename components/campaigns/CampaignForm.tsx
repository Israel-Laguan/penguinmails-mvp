"use client";

import { useState, useRef, MouseEvent, ChangeEvent, useEffect } from "react";
import { SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
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
import { CampaignEventContition } from "@/app/api/generated/prisma";
import { CampaignFormProps, CampaignFormValues, CampaignSteps, PartialCampaignStep } from "./types";
import { CampaignDetails } from "./CampaignDetails";
import { timezones } from "./const-mock";

export function CampaignForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = t.buttons.create,
  submitLoadingLabel = t.buttons.creating,
  readOnly = false,
}: CampaignFormProps) {
  const [steps, setSteps] = useState<CampaignSteps>(
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
  const [recipients, setRecipients] = useState<string>('');
  const emailBodyRef = useRef<HTMLTextAreaElement>(null!);

  const form = useForm<CampaignFormValues>({
    defaultValues: initialData || {
      name: "",
      fromName: "",
      fromEmail: "",
      status: "DRAFT",
      steps: steps,
      timezone: timezones[7],
      sendTimeStart: '09:00',
      sendTimeEnd: '17:00',
      sendDays: [0, 1, 2, 3, 4]
    },
    mode: "onChange",
  }) as unknown as UseFormReturn<CampaignFormValues>;

  const { timezone = timezones[7], sendTimeStart = '09:00', sendTimeEnd = '17:00', sendDays = [0, 1, 2, 3, 4], clients } = form.getValues();

  // Update form state when steps change
  useEffect(() => {
    form.setValue("steps", steps, { shouldValidate: true });
  }, [steps, form]);

  // Handle form submission
  const handleSubmit: SubmitHandler<CampaignFormValues> = async (data: CampaignFormValues) => {
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

  const handleDayChange = (dayId: number, evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const newSendDays = sendDays.includes(dayId)
      ? sendDays.filter(d => d !== dayId)
      : [...sendDays, dayId]
    form.setValue('sendDays', newSendDays, { shouldValidate: true });
  };

  const updateStep = (
    index: number,
    updatedStepData: PartialCampaignStep
  ) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], ...updatedStepData };
    setSteps(newSteps);
  };

  const handleChangeScheduleSettings = (field: 'sendTimeEnd' | 'sendTimeStart' | 'timezone', value: string) => {
    form.setValue(field, value, { shouldValidate: true });
  };

  const updateRecipients = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const clientsTextArea = evt.target.value;
    const clientsData = clientsTextArea.split('\n').filter((client: string) => client.trim()).map((client: string) => client.trim());
    setRecipients(clientsTextArea);

    if (clientsData.length === 0) return;

    form.setValue('clients', clientsData, { shouldValidate: true });
    form.setValue('metrics.recipients.total', clientsData.length, { shouldValidate: true });
    form.setValue('metrics.recipients.sent', clientsData.length, { shouldValidate: true });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.cardTitles.campaignDetails}</CardTitle>
            </CardHeader>
            <CardContent>
              <CampaignDetails readOnly={readOnly} initialData={initialData} />
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
              {JSON.stringify(form.formState.errors)}

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
              <ScheduleSettings selectedSendDays={sendDays} timezone={timezone} sendTimeStart={sendTimeStart} sendTimeEnd={sendTimeEnd} handleDayChange={handleDayChange} handleChangeScheduleSettings={handleChangeScheduleSettings} />
            </TabsContent>

            <TabsContent value="recipients" className="mt-4">
              {/* Pass form control/register if recipients are part of the main form */}
              <RecipientsSettings recipients={recipients} handleChangeRecipients={updateRecipients} />
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