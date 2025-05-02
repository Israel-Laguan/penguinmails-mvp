import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { copyText as t } from "./copy";

export default function CampaignsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-900">{t.title}</h1>
      <Button asChild={true}>
        <Link href="/dashboard/campaigns/create">
          {t.newCampaign}
        </Link>
      </Button>
    </div>
  );
}
