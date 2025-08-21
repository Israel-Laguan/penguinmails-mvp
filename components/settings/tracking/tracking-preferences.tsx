"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const trackingSchema = z.object({
  openTracking: z.boolean(),
  clickTracking: z.boolean(),
  customDomain: z.string().optional(),
});

type TrackingFormValues = z.infer<typeof trackingSchema>;

function TrackingPreferences() {
  const form = useForm<TrackingFormValues>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      openTracking: false,
      clickTracking: true,
      customDomain: "",
    },
  });

  const watchClickTracking = form.watch("clickTracking");

  const onSubmit = (data: TrackingFormValues) => {
    console.log("Tracking preferences saved:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Open Tracking */}
        <FormField
          control={form.control}
          name="openTracking"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Open Tracking</FormLabel>
                <FormDescription>
                  Track when recipients open your emails. Note: This may affect
                  deliverability.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Click Tracking */}
        <FormField
          control={form.control}
          name="clickTracking"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Click Tracking</FormLabel>
                <FormDescription>
                  Track when recipients click links in your emails.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Custom Domain */}
        <FormField
          control={form.control}
          name="customDomain"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-base">
                Custom Domain for Click Tracking
              </FormLabel>
              <FormDescription>
                Use your own domain for click tracking links to improve trust
                and deliverability.
                {!watchClickTracking &&
                  " (Available when click tracking is enabled)"}
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="e.g., track.yourdomain.com"
                  disabled={!watchClickTracking}
                  {...field}
                />
              </FormControl>
              {watchClickTracking && (
                <FormDescription className="text-xs text-muted-foreground">
                  Make sure to configure DNS settings for your custom domain.
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-4">
          <Button type="submit">Save Tracking Preferences</Button>
        </div>
      </form>
    </Form>
  );
}

export default TrackingPreferences;
