"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import AlertDialogDelete from "../AlertDialogDelete";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

function MailboxActions({ mailbox }: { mailbox: Mailbox }) {
  return (
    <div className="flex items-center justify-end space-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mailbox Settings</DialogTitle>
            <DialogDescription>
              Configure settings for {mailbox.email}
            </DialogDescription>
          </DialogHeader>
          <UpdateMailboxSetting mailbox={mailbox} />
        </DialogContent>
      </Dialog>
      <AlertDialogDelete
        title="Delete Mailbox"
        description={`Are you sure you want to delete the mailbox ${mailbox.email}? This action cannot be undone.`}
        onDelete={async () => {
          // Handle mailbox deletion logic here
          console.log(`Deleting mailbox: ${mailbox.email}`);
        }}
      />
    </div>
  );
}

const updateMailboxSchema = z
  .object({
    dailyLimit: z.number().min(1, "Daily limit must be at least 1"),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
    pause: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

type updateMailboxValuesType = z.infer<typeof updateMailboxSchema>;
function UpdateMailboxSetting({ mailbox }: { mailbox: Mailbox }) {
  const form = useForm<updateMailboxValuesType>({
    resolver: zodResolver(updateMailboxSchema),
    defaultValues: {
      dailyLimit: mailbox.dailyLimit,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      pause: mailbox.status === "paused",
    },
  });

  const onSubmit = (values: updateMailboxValuesType) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="dailyLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily Sending Limit</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    min={1}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10) || 1)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pause"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Pause Mailbox</FormLabel>
                  <div className="text-sm text-muted-foreground">
                    Temporarily stop sending emails from this mailbox
                  </div>
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
        </form>
      </Form>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          Save
        </Button>
      </DialogFooter>
    </>
  );
}
export default MailboxActions;
