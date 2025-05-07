import { Metadata } from 'next';
import NewClientForm from '@/components/clients/client-form';
import { Header } from '@/components/clients/header';
import { copyText as t } from "@/components/clients/copy";

export const metadata: Metadata = {
  title: t.page.title,
  description: t.page.description,
};

export default function NewClientPage({
  searchParams,
}: {
  searchParams: { campaignId: string };
}) {
  return (
    <div className="container mx-auto py-6">
      <Header />
      <NewClientForm campaignId={searchParams.campaignId} />
    </div>
  );
}
