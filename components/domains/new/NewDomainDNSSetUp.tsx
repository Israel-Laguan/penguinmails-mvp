"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAddDomainContext } from "@/context/AddDomainContext";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle,
  Copy,
  Eye,
  HelpCircle,
  Mail,
  Server,
  Shield,
  X,
} from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const getRecordIcon = (status: string) => {
  switch (status) {
    case "verified":
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    case "failed":
      return <X className="w-5 h-5 text-red-600" />;
    default:
      return <AlertTriangle className="w-5 h-5 text-orange-600" />;
  }
};
const getRecordIconStyles = (type: DNSRecord["type"]) => {
  const baseStyles = "p-2 rounded-lg";
  switch (type) {
    case "SPF":
      return cn(baseStyles, "bg-blue-100");
    case "DKIM":
      return cn(baseStyles, "bg-purple-100");
    case "DMARC":
      return cn(baseStyles, "bg-green-100");
    case "MX":
      return cn(baseStyles, "bg-orange-100");
    default:
      return cn(baseStyles, "bg-gray-100");
  }
};

const getRecordTypeIcon = (type: DNSRecord["type"]) => {
  const iconProps = { className: "w-5 h-5" };
  switch (type) {
    case "SPF":
      return (
        <Shield
          {...iconProps}
          className={cn(iconProps.className, "text-blue-600")}
        />
      );
    case "DKIM":
      return (
        <Eye
          {...iconProps}
          className={cn(iconProps.className, "text-purple-600")}
        />
      );
    case "DMARC":
      return (
        <Shield
          {...iconProps}
          className={cn(iconProps.className, "text-green-600")}
        />
      );
    case "MX":
      return (
        <Mail
          {...iconProps}
          className={cn(iconProps.className, "text-orange-600")}
        />
      );
  }
};
function NewDomainDNSSetUp() {
  const [_, setCopiedField] = useState<string | null>(null);
  const { dnsRecords } = useAddDomainContext();
  const copyToClipboard = async (text: string, recordType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(`${recordType}-${text}`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const form = useFormContext();
  const domainName = form.watch("domain") || "example.com";

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-2">
                Set Up DNS Records
              </CardTitle>
              <p className="text-muted-foreground">
                Add these records to your DNS provider (e.g. Cloudflare,
                GoDaddy, Namecheap)
              </p>
            </div>

            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertTitle className="text-orange-900">
                Domain: {domainName}
              </AlertTitle>
              <AlertDescription className="text-orange-700">
                Add these DNS records to your domain's DNS settings.
                Verification typically takes 5-15 minutes after adding all
                records.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* DNS Records Table */}
        <Card>
          <CardHeader>
            <CardTitle>DNS Records to Add</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {dnsRecords.map((record, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={getRecordIconStyles(record.type)}>
                        {getRecordTypeIcon(record.type)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">
                            {record.type} Record
                          </h4>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                              >
                                <HelpCircle className="w-4 h-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{record.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {record.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getRecordIcon(record.status)}
                      <Badge
                        variant={
                          record.status === "verified"
                            ? "default"
                            : record.status === "failed"
                            ? "destructive"
                            : "secondary"
                        }
                        className={cn(
                          record.status === "verified" &&
                            "bg-green-100 text-green-800 hover:bg-green-100",
                          record.status === "failed" &&
                            "bg-red-100 text-red-800 hover:bg-red-100",
                          record.status === "pending" &&
                            "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        )}
                      >
                        {record.status === "verified"
                          ? "Verified"
                          : record.status === "failed"
                          ? "Failed"
                          : "Pending"}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`name-${index}`}>Name</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id={`name-${index}`}
                          value={record.name}
                          readOnly
                          className="bg-muted"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(record.name, record.type)
                          }
                          className="shrink-0"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`value-${index}`}>Value</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id={`value-${index}`}
                          value={record.value}
                          readOnly
                          className="bg-muted text-sm"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(record.value, record.type)
                          }
                          className="shrink-0"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Alert className="border-blue-200 bg-blue-50">
          <AlertTitle className="text-blue-900">
            🔧 Need Help Adding DNS Records?
          </AlertTitle>
          <AlertDescription>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-blue-700 hover:text-blue-900"
              >
                → How to add DNS on Cloudflare
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-blue-700 hover:text-blue-900"
              >
                → How to add DNS on GoDaddy
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-blue-700 hover:text-blue-900"
              >
                → How to add DNS on Namecheap
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </TooltipProvider>
  );
}

export default NewDomainDNSSetUp;
