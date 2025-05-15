import { DomainsHeader } from "@/components/domains/header";
import { OverviewCards } from "@/components/domains/overview-cards";
import { DomainsTable } from "@/components/domains/domains-table";
import { type Domain } from "@/components/domains/types";

type DomainsContentProps = {
  domains: Domain[];
};

export default function DomainsContent({ domains }: DomainsContentProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <DomainsHeader />
      <OverviewCards domains={domains} />
      <DomainsTable domains={domains} />
    </div>
  );
}

export type { Domain };