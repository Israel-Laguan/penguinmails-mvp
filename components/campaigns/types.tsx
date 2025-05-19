import { z } from "zod";
import { MouseEvent, RefObject } from "react";
import { Control, UseFormRegister } from "react-hook-form";
import { CampaignEventContition, Template } from "@/app/api/generated/prisma";
import { campaignFormSchema, campaignStepSchema } from "./schemaValidations";

export type CampaignFormValues = z.infer<typeof campaignFormSchema>;

export interface CampaignFormProps {
  initialData?: CampaignFormValues;
  onSubmit: (data: CampaignFormValues) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
  submitLoadingLabel?: string;
  readOnly?: boolean;
}

export type CampaignSteps = z.infer<typeof campaignStepSchema>[];

export type PartialCampaignStep = Partial<z.infer<typeof campaignStepSchema>>;

// Secuence Types
export interface SequenceStepActionsProps {
  onMoveStepUp: (index: number) => void;
  onMoveStepDown: (index: number) => void;
  onRemoveStep: (index: number) => void;
  onUpdateStep: (index: number, updates: Partial<SequenceStepProps["step"]>) => void;
  onInsertTag: (index: number, tag: string) => void;
  onSetCurrentEditingStep: (index: number | null) => void;
  onSelectTemplate: (index: number, templateId: number) => void;
}

export interface EmailSecuenceSettingsProps {
  steps: CampaignSteps;
  templates?: Template[];
  currentEditingStep: number | null;
  emailBodyRef: RefObject<HTMLTextAreaElement>;
  stepErrors: any;
  actions: SequenceStepActionsProps & {
    handleAddEmailStep: (index: number) => void;
  };
}

export interface SequenceStepProps {
  step: {
    id?: number;
    sequenceOrder: number;
    delayDays: number;
    delayHours: number;
    emailSubject: string;
    emailBody?: string;
    templateId?: number;
    campaignId: number;
    condition: CampaignEventContition;
    createdAt?: Date;
    updatedAt?: Date;
  };
  templates?: Template[];
  index: number;
  totalSteps: number;
  currentEditingStep: number | null;
  emailBodyRef: RefObject<HTMLTextAreaElement>;
  actions: SequenceStepActionsProps;
}

// ScheduleSettings Types
export interface ScheduleSettingsProps {
  timezone: string;
  selectedSendDays: number[];
  control: Control<CampaignFormValues>;
  register: UseFormRegister<CampaignFormValues>;
  handleDayChange: (dayId: number, evt: MouseEvent<HTMLButtonElement>) => void;
}
