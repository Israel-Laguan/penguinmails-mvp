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
interface CampaignDetailsFormProps {
  form: UseFormReturn<{
    name: string;
    fromName: string;
    fromEmail: string;
  }>;
}

// TODO: Fetch available sending accounts dynamically
const sendingAccounts = [
  { value: "john@example.com", label: "john@example.com" },
  { value: "sales@example.com", label: "sales@example.com" },
  { value: "marketing@example.com", label: "marketing@example.com" },
];

export function CampaignDetailsForm({ form }: CampaignDetailsFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t.campaignDetails.labels.campaignName}</FormLabel>
            <FormControl>
              <Input placeholder={t.campaignDetails.placeholders.campaignName} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="fromName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.campaignDetails.labels.fromName}</FormLabel>
              <FormControl>
                <Input placeholder={t.campaignDetails.placeholders.fromName} {...field} />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
    </div>
  );
}

