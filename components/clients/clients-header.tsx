import Link from 'next/link';
import { Button, buttonVariants } from "@/components/ui/button";
import { copyText as t } from "./copy";

interface ClientsHeaderProps {
  showPII: boolean;
  onTogglePII: () => void;
  campaignId: string;
  campaignName?: string;
}

export function ClientsHeader({ showPII, onTogglePII, campaignId, campaignName }: ClientsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">
        {t.headers.clientsCampaign(campaignName || campaignId)}
      </h1>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onTogglePII}
        >
          {showPII ? t.buttons.hidePII : t.buttons.showPII}
        </Button>
        <Link
          href={`/dashboard/campaigns/${campaignId}/clients/new`}
          className={buttonVariants({ variant: "default" })}
        >
          {t.buttons.addClient}
        </Link>
      </div>
    </div>
  );
}
