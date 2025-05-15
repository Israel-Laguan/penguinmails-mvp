import { Metadata } from 'next';
import NewClientForm from '@/components/clients/client-form';
import { Header } from '@/components/clients/header';
import { copyText as t } from "@/components/clients/copy";

export const metadata: Metadata = {
  title: t.page.title,
  description: t.page.description,
};

export default async function NewClientPage({
  params,
}: {
  params: { campaignId: string };
}) {
  const { campaignId } = await params;
  return (
    <div className="container mx-auto py-6">
      <Header />
      <NewClientForm campaignId={campaignId} />
    </div>
  );
}
