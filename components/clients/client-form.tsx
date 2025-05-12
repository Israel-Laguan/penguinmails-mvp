"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createClient,
  updateClient,
} from "@/app/dashboard/campaigns/[campaignId]/clients/new/actions";
import { copyText as t } from "./copy";

interface ClientFormProps {
  campaignId: string;
  client?: {
    id: number;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    notes?: string | null;
  };
  isEditMode?: boolean;
}

export default function ClientForm({
  campaignId,
  client,
  isEditMode = false,
}: ClientFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleCreate(formData: FormData) {
    await createClient({
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      notes: formData.get("notes") as string,
      campaignId,
    });
  }

  async function handleUpdate(formData: FormData) {
    if (!client) return;
    await updateClient(client.id, {
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      notes: formData.get("notes") as string,
      campaignId,
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      if (isEditMode) {
        await handleUpdate(formData);
      } else {
        await handleCreate(formData);
      }
      router.push(`/dashboard/clients?campaignId=${campaignId}`);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-2xl mt-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          {t.form.email.label}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={client?.email}
          disabled={isEditMode}
          placeholder={t.form.email.placeholder}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            {t.form.firstName.label}
          </label>
          <Input
            id="firstName"
            name="firstName"
            defaultValue={client?.firstName || ""}
            placeholder={t.form.firstName.placeholder}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            {t.form.lastName.label}
          </label>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={client?.lastName || ""}
            placeholder={t.form.lastName.placeholder}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          {t.form.notes.label}
        </label>
        <Textarea
          id="notes"
          name="notes"
          defaultValue={client?.notes || ""}
          placeholder={t.form.notes.placeholder}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading
            ? isEditMode
              ? t.form.buttons.updating
              : t.form.buttons.submitting
            : isEditMode
            ? t.form.buttons.update
            : t.form.buttons.submit}
        </Button>

        <Button type="button" variant="outline" onClick={() => router.back()}>
          {t.form.buttons.cancel}
        </Button>
      </div>
    </form>
  );
}
