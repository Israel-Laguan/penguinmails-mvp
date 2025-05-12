import { notFound } from 'next/navigation';
import { getClient } from '@/lib/queries/clients';
import ClientForm from '@/components/clients/client-form';
import { ClientHeader } from '@/components/clients/client-header';

interface EditClientPageProps {
  params: { campaignId: string, clientId?: string;  };
}

export default async function EditClientPage({ params }: EditClientPageProps) {
    const { campaignId, clientId } = await params;
  
  if (isNaN(Number(clientId))) {
    notFound();
  }

  const client = await getClient(Number(clientId));
  
  if (!client) {
    notFound();
  }

  return (
    <div className="container py-8">
      <ClientHeader
        client={client}
        campaignId={campaignId}
      />
      <ClientForm 
        client={client}
        campaignId={campaignId}
        isEditMode={true}
      />
    </div>
  );
}
