import { notFound } from 'next/navigation';
import { getClient } from '@/lib/queries/clients';
import ClientForm from '@/components/clients/client-form';
import { ClientHeader } from '@/components/clients/client-header';

interface EditClientPageProps {
  params: {
    id: string;
  };
  searchParams: {
    campaignId: string;
  };
}

export default async function EditClientPage({ params, searchParams }: EditClientPageProps) {
    const { id } = await params;
    const {campaignId} = await searchParams; 
  
  if (isNaN(Number(id))) {
    notFound();
  }

  const client = await getClient(Number(id));
  
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
