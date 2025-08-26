"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const notificationSchema = z.object({
  newReplies: z.boolean(),
  campaignUpdates: z.boolean(),
  weeklyReports: z.boolean(),
  domainAlerts: z.boolean(),
  warmupCompletion: z.boolean(),
});

type NotificationFormValues = z.infer<typeof notificationSchema>;

interface NotificationItem {
  id: keyof NotificationFormValues;
  label: string;
  description?: string;
  defaultValue: boolean;
}

const notificationItems: NotificationItem[] = [
  {
    id: "newReplies",
    label: "New replies to campaigns",
    description: "Get notified when prospects reply to your campaigns",
    defaultValue: true,
  },
  {
    id: "campaignUpdates",
    label: "Campaign status updates",
    description: "Updates on campaign start, pause, and completion",
    defaultValue: true,
  },
  {
    id: "weeklyReports",
    label: "Weekly performance reports",
    description: "Summary of your campaign performance every week",
    defaultValue: true,
  },
  {
    id: "domainAlerts",
    label: "Domain verification alerts",
    description: "Important alerts about domain authentication status",
    defaultValue: true,
  },
  {
    id: "warmupCompletion",
    label: "Mailbox warmup completion",
    description: "Notifications when mailbox warmup process completes",
    defaultValue: false,
  },
];

function NotificationsSettings() {
  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: notificationItems.reduce((values, item) => {
      values[item.id] = item.defaultValue;
      return values;
    }, {} as NotificationFormValues),
  });

  const onSubmit = (data: NotificationFormValues) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {notificationItems.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name={item.id}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className={cn(
                        "mt-0.5",
                        field.value &&
                          "data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      )}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel
                      className={cn(
                        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        field.value
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </FormLabel>
                    {item.description && (
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" className="w-full sm:w-auto">
            Save Notification Settings
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default NotificationsSettings;
