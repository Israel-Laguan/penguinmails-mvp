"use client";

import { useState, useRef, MouseEvent, ChangeEvent, useEffect } from "react";
import { ResolverResult, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/components/ui/form";
import { FileText, Clock, Users } from "lucide-react";
import { CampaignDetailsForm } from "./CampaignDetailsForm";
import { ScheduleSettings } from "./ScheduleSettings";
import { RecipientsSettings } from "./RecipientsSettings";
import { copyText as t } from "./copy";
import { CampaignEventContition } from "@/app/api/generated/prisma";
import { getCampaignSendingAccountsMockAction, getTimezonesMockAction } from "@/lib/actions/campaignActions";
import { CampaignFormProps, CampaignFormValues, CampaignSteps, PartialCampaignStep } from "./types";
import { CampaignDetails } from "./CampaignDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { campaignFormSchema } from "./schemaValidations";
import { EmailSecuenceSettings } from "./EmailSecuenceSettings";
import { defaultSteps } from "./const-mock";
import Loader from "./loader";

export function CampaignForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = t.buttons.create,
  submitLoadingLabel = t.buttons.creating,
  readOnly = false,
}: CampaignFormProps) {
  const [steps, setSteps] = useState<CampaignSteps>(
    initialData?.steps || defaultSteps,
  );
  const [sendingAccounts, setSendingAccounts] = useState<{ value: string; label: string }[]>([]);
  const [timezones, setTimezones] = useState<string[]>([]);
  const [loadingAccounts, setLoadingAccounts] = useState<boolean>(true);
  const [loadingTimezones, setLoadingTimezones] = useState<boolean>(true);
  const [currentEditingStep, setCurrentEditingStep] = useState<number | null>(null);
  const [recipients, setRecipients] = useState<string>(initialData?.clients.join('\n') ?? '');
  const emailBodyRef = useRef<HTMLTextAreaElement>(null!);

  const form = useForm<CampaignFormValues>({
    defaultValues: initialData,
    mode: "onChange",
  }) as unknown as UseFormReturn<CampaignFormValues>;

  const { timezone = '', sendDays = [0, 1, 2, 3, 4] } = form.getValues();

  // Update form state when steps change
  useEffect(() => {
    form.setValue("steps", steps, { shouldValidate: true });
  }, [steps, form]);

  useEffect(() => {
    const fetchSendingAccounts = async () => {
      setLoadingAccounts(true);
      const accounts = await getCampaignSendingAccountsMockAction();
      setSendingAccounts(accounts);
      setLoadingAccounts(false);
    };
    fetchSendingAccounts();
  }, []);

  useEffect(() => {
    const fetchTimezones = async () => {
      setLoadingTimezones(true);
      const fetchedTimezones = await getTimezonesMockAction();
      setTimezones(fetchedTimezones);
      setLoadingTimezones(false);
    };
    fetchTimezones();
  }, []);

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
    form.setValue('sendDays', newSendDays.sort((a: number, b: number) => a - b), { shouldValidate: true });
  };

  const updateStep = (
    index: number,
    updatedStepData: PartialCampaignStep
  ) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], ...updatedStepData };
    setSteps(newSteps);
  };

  const updateRecipients = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const clientsTextArea = evt.target.value;
    const clientsData = clientsTextArea.split('\n').filter((client: string) => client.trim()).map((client: string) => client.trim());
    setRecipients(clientsTextArea);

    if (clientsData.length === 0) return;

    form.setValue('clients', clientsData, { shouldValidate: true });
    form.setValue('metrics.recipients', { sent: clientsData.length, total: clientsData.length }, { shouldValidate: true });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {loadingAccounts && <Loader />}
      {!loadingAccounts &&
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.cardTitles.campaignDetails}</CardTitle>
              </CardHeader>
              <CardContent>
                {!loadingAccounts ?
                  (
                    <>
                      <CampaignDetails readOnly={readOnly} initialData={initialData} />
                      <CampaignDetailsForm form={form} readOnly={readOnly} sendingAccounts={sendingAccounts} />
                    </>
                  ) : 'Loading data...'
                }
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
                <EmailSecuenceSettings
                  steps={steps}
                  currentEditingStep={currentEditingStep}
                  emailBodyRef={emailBodyRef}
                  stepErrors={form.formState.errors.steps}
                  templates={[]}
                  actions={{
                    onMoveStepUp: moveStepUp,
                    onMoveStepDown: moveStepDown,
                    onRemoveStep: removeStep,
                    onUpdateStep: updateStep,
                    onInsertTag: handleInsertTag,
                    onSetCurrentEditingStep: (index) => setCurrentEditingStep(index),
                    handleAddEmailStep: addEmailStep,
                    onSelectTemplate: (index, templateId) => {
                      const newSteps = [...steps];
                      newSteps[index].templateId = templateId;
                      setSteps(newSteps);
                      form.setValue(`steps.${index}.templateId`, templateId);
                    },
                  }}
                />
              </TabsContent>

              <TabsContent value="schedule" className="mt-4">
                {/* Pass form control/register if schedule is part of the main form */}
                <ScheduleSettings timezones={timezones} selectedTimezone={timezone} control={form.control} register={form.register} selectedSendDays={sendDays} handleDayChange={handleDayChange} />
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
      }
    </div>
  );
}
