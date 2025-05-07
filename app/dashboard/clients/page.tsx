import { redirect } from 'next/navigation';
// import { getClientsPage } from './actions';
import ClientsContent from './content';
import { getMockClientsPage } from '@/components/clients/mock';

export default async function ClientsPage({
  searchParams,
}: {
  searchParams: { campaignId?: string; page?: string };
}) {
  if (!searchParams.campaignId) {
    redirect('/dashboard/campaigns');
  }

  const page = Number(searchParams.page) || 1;
  // Comment out the backend call for now
  // const data = await getClientsPage(searchParams.campaignId, page);
  const data = getMockClientsPage(page);

  return (
    <ClientsContent
      initialClients={data.clients}
      totalPages={data.pages}
      campaignId={searchParams.campaignId}
      initialPage={page}
    />
  );
}

