"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Info, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TemplateCategory } from "@/app/api/generated/prisma";
import { copyText as t } from "./copy";
import PersonalizationTags from "@/components/email/PersonalizationTags";

const templateFormSchema = z.object({
  name: z.string().min(1, "Template name is required"),
  category: z.nativeEnum(TemplateCategory),
  subject: z.string().min(1, "Subject line is required"),
  body: z.string().min(1, "Email body is required"),
});

export type TemplateFormValues = z.infer<typeof templateFormSchema>;

interface TemplateFormProps {
  initialData?: TemplateFormValues;
  onSubmit: (data: TemplateFormValues) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
  submitLoadingLabel?: string;
}

export function TemplateForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = t.newTemplate.actions.create,
  submitLoadingLabel = t.newTemplate.actions.creating,
}: TemplateFormProps) {
  const form = useForm<TemplateFormValues>({
    resolver: zodResolver(templateFormSchema),
    defaultValues: initialData || {
      name: "",
      category: TemplateCategory.OUTREACH,
      subject: "",
      body: "",
    },
    mode: "onChange",
  });

  const handleSubmit = async (data: TemplateFormValues, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    await onSubmit(data);
  };

  const handleInsertTag = (tag: string, field: "subject" | "body") => {
    const currentValue = form.getValues(field);
    const input = document.querySelector(
      `[name="${field}"]`
    ) as HTMLTextAreaElement;
    if (!input) return;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const newValue =
      currentValue.substring(0, start) + tag + currentValue.substring(end);

    form.setValue(field, newValue, { shouldValidate: true });

    // Set cursor position after inserted tag
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(start + tag.length, start + tag.length);
    }, 0);
  };

  return (
    <Form {...form}>
      <form className="space-y-6">
        <div className="grid grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>{t.newTemplate.form.name.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.newTemplate.form.name.placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.newTemplate.form.category.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={t.newTemplate.form.category.placeholder}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(TemplateCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {t.categories.labels[category]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>{t.newTemplate.form.subject.label}</FormLabel>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t.newTemplate.form.subject.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormControl>
                <Input
                  placeholder={t.newTemplate.form.subject.placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>{t.newTemplate.form.content.label}</FormLabel>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t.newTemplate.form.content.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormControl>
                <Textarea
                  rows={12}
                  placeholder={t.newTemplate.form.content.placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <PersonalizationTags
          onInsertTag={(tag) => handleInsertTag(tag, "body")}
        />

        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              {t.newTemplate.actions.cancel}
            </Button>
          )}
          <Button type="submit" disabled={form.formState.isSubmitting} onClick={form.handleSubmit(handleSubmit)}>
          <Save className="mr-2 h-4 w-4" />
            {form.formState.isSubmitting ? submitLoadingLabel : submitLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
}
