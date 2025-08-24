"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  folderName: z
    .string()
    .min(1, "Folder name is required")
    .max(50, "Folder name must be less than 50 characters")
    .regex(
      /^[a-zA-Z0-9\s-_]+$/,
      "Folder name can only contain letters, numbers, spaces, hyphens, and underscores"
    ),
});

type FormValues = z.infer<typeof formSchema>;

interface NewFolderFormProps {
  onSubmit?: (data: FormValues) => void;
  onCancel?: () => void;
  className?: string;
}

function NewFolderForm({ onSubmit, onCancel, className }: NewFolderFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folderName: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    console.log("Creating folder:", data);
    onSubmit?.(data);
    form.reset();
  };

  return (
    <div className={cn("space-y-4", className)}>


      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="folderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Folder Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter folder name"
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end space-x-2 pt-2">
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={!form.formState.isValid}>
              Create Folder
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default NewFolderForm;
