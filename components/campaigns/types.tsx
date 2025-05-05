import { z } from "zod";
import { RefObject } from "react";
import { campaignFormSchema, campaignStepSchema } from "./validations";
import { CampaignEventContition, Template } from "@/app/api/generated/prisma";

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

// Tab types
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
  onMoveStepUp: (index: number) => void;
  onMoveStepDown: (index: number) => void;
  onRemoveStep: (index: number) => void;
  onUpdateStep: (index: number, updates: Partial<SequenceStepProps["step"]>) => void;
  onInsertTag: (index: number, tag: string) => void;
  onSetCurrentEditingStep: (index: number | null) => void;
  onSelectTemplate: (index: number, templateId: number) => void;
}
