'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { createClient, removeFromCampaign, deleteClient } from '@/app/dashboard/campaigns/[campaignId]/clients/new/actions';

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

export default function ClientForm({ campaignId, client, isEditMode = false }: ClientFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    try {
      await createClient({
        email: formData.get('email') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        notes: formData.get('notes') as string,
        campaignId,
      });
      router.push(`/dashboard/clients?campaignId=${campaignId}`);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveFromCampaign() {
    if (!client) return;
    await removeFromCampaign(client.id, parseInt(campaignId));
    router.push(`/dashboard/clients?campaignId=${campaignId}`);
    router.refresh();
  }

  async function handleDeleteClient() {
    if (!client) return;
    await deleteClient(client.id);
    router.push(`/dashboard/clients?campaignId=${campaignId}`);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-2xl mt-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          defaultValue={client?.email}
          disabled={isEditMode}
          placeholder="client@example.com"
        />
      </div>
      
      {!isEditMode && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                defaultValue={client?.firstName || ''}
                placeholder="John"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={client?.lastName || ''}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="text-sm font-medium">
              Notes
            </label>
            <Textarea
              id="notes"
              name="notes"
              defaultValue={client?.notes || ''}
              placeholder="Additional notes about the client..."
            />
          </div>
        </>
      )}

      <div className="flex gap-4">
        {!isEditMode && (
          <Button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Client'}
          </Button>
        )}

        {isEditMode && (
          <>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Remove from Campaign</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove from Campaign</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove the client from this campaign only. The client data will remain in your database.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleRemoveFromCampaign}>
                    Remove
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Client</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Client</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete the client and remove them from all campaigns. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteClient}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}

        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
