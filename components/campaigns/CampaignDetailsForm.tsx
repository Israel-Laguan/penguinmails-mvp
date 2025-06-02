"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { copyText as t } from "./copy";
import { CampaignFormValues } from "./types";

interface CampaignDetailsFormProps {
  form: UseFormReturn<CampaignFormValues>;
  readOnly?: boolean;
  sendingAccounts: { value: string; label: string }[];
}

export function CampaignDetailsForm({ form, readOnly = false, sendingAccounts }: CampaignDetailsFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t.campaignDetails.labels.campaignName}</FormLabel>
            <FormControl>
              <Input placeholder={t.campaignDetails.placeholders.campaignName} {...field} disabled={readOnly} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {readOnly && (
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.campaignDetails.labels.status}</FormLabel>
              <FormControl>
                <Input {...field} disabled value={field.value || 'DRAFT'} />
              </FormControl>
            </FormItem>
          )}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="fromName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.campaignDetails.labels.fromName}</FormLabel>
              <FormControl>
                <Input placeholder={t.campaignDetails.placeholders.fromName} {...field} disabled={readOnly} />
              </FormControl>
              <FormDescription>
                {t.campaignDetails.descriptions.fromName}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fromEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.campaignDetails.labels.fromEmail}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={readOnly}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t.campaignDetails.placeholders.selectAccount} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sendingAccounts.map(account => (
                    <SelectItem key={account.value} value={account.value}>
                      {account.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                {t.campaignDetails.descriptions.fromEmail}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* {readOnly && form.getValues().recipients && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
          <div className="text-sm">
            <div className="font-medium">{t.stats.recipients.title}</div>
            <div>{t.stats.recipients.format(
              form.getValues().recipients?.sent ?? 0,
              form.getValues().recipients?.total ?? 0
            )}</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">{t.stats.opens.title}</div>
            <div>{t.stats.opens.format(
              form.getValues().opens?.rate ?? 0,
              form.getValues().opens?.total ?? 0
            )}</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">{t.stats.clicks.title}</div>
            <div>{t.stats.clicks.format(
              form.getValues().clicks?.rate ?? 0,
              form.getValues().clicks?.total ?? 0
            )}</div>
          </div>
          <div className="text-sm">
            <div className="font-medium">{t.stats.replies.title}</div>
            <div>{t.stats.replies.format(
              form.getValues().replies?.rate ?? 0,
              form.getValues().replies?.total ?? 0
            )}</div>
          </div>
        </div>
      )} */}
    </div>
  );
}

