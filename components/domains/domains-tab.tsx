import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { domains, getStatusColor } from "@/lib/data/domains.mock";
import { cn } from "@/lib/utils";
import { AlertTriangle, Check, Copy, Plus, X } from "lucide-react";
import Link from "next/link";
import DeleteDomainDialog from "./DeleteDomainDialog";

export const getRecordIcon = (status: string) => {
  switch (status) {
    case "verified":
      return <Check className="w-4 h-4 text-green-600" />;
    case "pending":
      return <AlertTriangle className="w-4 h-4 text-orange-600" />;
    case "failed":
      return <X className="w-4 h-4 text-red-600" />;
    default:
      return <AlertTriangle className="w-4 h-4 text-gray-600" />;
  }
};

function DomainsTab() {
  const dnsRecords = [
    {
      name: "SPF Record",
      value: "v=spf1 include:_spf.google.com ~all",
    },
    {
      name: "DKIM Record",
      value: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3...",
    },
    {
      name: "DMARC Record",
      value: "v=DMARC1; p=quarantine; rua=mailto:...",
    },
    {
      name: "MX Record",
      value: "10 mx1.emailprovider.com",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button asChild>
          <Link
            href={"/dashboard/domains/new"}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4 " />
            Add Domain
          </Link>
        </Button>
      </div>
      {domains.map((domain) => (
        <Card key={domain.id} className="p-6">
          <CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {domain.domain}
              </h3>
              <div className="flex items-center space-x-4 mt-1">
                <Badge
                  variant={
                    domain.status === "verified" ? "default" : "secondary"
                  }
                  className={cn(getStatusColor(domain.status))}
                >
                  {domain.status === "verified"
                    ? "Verified"
                    : "Pending Verification"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {domain.mailboxes} mailboxes
                </span>
                <span className="text-sm text-muted-foreground">
                  Added {domain.addedDate}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DeleteDomainDialog domainId={domain.id} />
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dnsRecords.map((record, index) => {
                const recordKey = record.name
                  .toLowerCase()
                  .split(" ")[0] as keyof typeof domain.records;
                const status = domain.records[recordKey];

                return (
                  <Card key={index} className="bg-muted/50 p-0">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          {record.name}
                        </span>
                        {getRecordIcon(status)}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {record.value}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-xs"
                      >
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {domain.status === "pending" && (
              <Card className="mt-4 border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-orange-900">
                        DNS Setup Required
                      </h4>
                      <p className="text-sm text-orange-700 mt-1">
                        Please add the DNS records above to your domain's DNS
                        settings. Once added, verification typically takes 5-15
                        minutes.
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 h-auto p-0 text-orange-700 hover:text-orange-900"
                      >
                        Check DNS Status
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default DomainsTab;
