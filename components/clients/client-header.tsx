'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { removeFromCampaign, deleteClient } from '@/app/dashboard/campaigns/[campaignId]/clients/new/actions';
import { copyText as t } from '@/components/clients/copy';

// Add this new action import or create it in the actions file
async function maskClientPII(clientId: number) {
  console.log('Masking PII for client:', clientId);
  // Implement the server action to update the client
  // This should update maskPII to true and modify the name fields
}

interface ClientHeaderProps {
  client?: {
    id: number;
    email: string;
    maskPII?: boolean;
  };
  campaignId: string;
}

export function ClientHeader({ client, campaignId }: ClientHeaderProps) {
  const router = useRouter();

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

  async function handleMaskPII() {
    if (!client) return;
    await maskClientPII(client.id);
    router.refresh();
  }

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{t.headers.title}</h1>
      {client && (
        <div className="flex gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary">{t.form.mask.button || 'Mask PII'}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t.form.mask.title || 'Mask Personal Information'}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t.form.mask.description || 'This will mask personal information in the database. This action cannot be undone.'}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t.form.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleMaskPII}>
                  {t.form.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">{t.form.remove.button}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t.form.remove.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t.form.remove.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t.form.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleRemoveFromCampaign}>
                  {t.form.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">{t.form.delete.button}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t.form.delete.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {t.form.delete.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t.form.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteClient}>
                  {t.form.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
}
