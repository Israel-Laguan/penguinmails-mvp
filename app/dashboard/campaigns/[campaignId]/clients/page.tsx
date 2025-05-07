import { redirect } from 'next/navigation';
// import { getClientsPage } from './actions';
import ClientsContent from './content';
import { getMockClientsPage } from '@/components/clients/mock';

export default async function ClientsPage({
  params,
  searchParams,
}: {
  params: { campaignId: string };
  searchParams: { page?: string };
}) {
  const { campaignId } = await params;
  const { page } = await searchParams;
  if (!campaignId) {
    redirect('/dashboard/campaigns');
  }
  // Comment out the backend call for now
  // const data = await getClientsPage(searchParams.campaignId, page);
  const data = getMockClientsPage(Number(page) || 1);

  return (
    <ClientsContent
      initialClients={data.clients}
      totalPages={data.pages}
      campaignId={campaignId}
      initialPage={Number(page) || 1}
    />
  );
}

