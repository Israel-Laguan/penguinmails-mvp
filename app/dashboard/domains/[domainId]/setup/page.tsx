"use client"

import Link from "next/link";
import { ArrowLeft, RefreshCw, Shield, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { copyText } from "@/components/domains/copy";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface DomainSetupPageProps {
  params: {
    domainId: string;
  };
}

interface DomainData {
  id: number;
  name: string;
  spf: boolean;
  dkim: boolean;
  dmarc: boolean;
  records: {
    spf: string;
    dkim: string;
    dmarc: string;
  };
}

// Server action for DNS verification
async function verifyDnsRecord(domainId: number, recordType: "spf" | "dkim" | "dmarc") {
  try {
    const response = await fetch(`/api/domains/${domainId}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recordType }),
    });

    if (!response.ok) throw new Error("Verification failed");
    
    const data = await response.json();
    return data.verified;
  } catch (error) {
    console.error("DNS verification error:", error);
    throw error;
  }
}

// Copy text to clipboard helper
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard");
};

export default function DomainSetupPage({ params }: DomainSetupPageProps) {
  // State for managing verification status
  const [domain, setDomain] = useState<DomainData>({
    id: parseInt(params.domainId),
    name: "",
    spf: false,
    dkim: false,
    dmarc: false,
    records: {
      spf: "",
      dkim: "",
      dmarc: "",
    },
  });
  const [isVerifying, setIsVerifying] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial domain data
  useEffect(() => {
    const fetchDomainData = async () => {
      try {
        const response = await fetch(`/api/domains/${params.domainId}`);
        if (!response.ok) throw new Error("Failed to fetch domain data");
        const data = await response.json();
        setDomain(data);
      } catch (error) {
        toast.error("Failed to load domain data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDomainData();
  }, [params.domainId]);

  const getSetupProgress = () => {
    const steps = [domain.spf, domain.dkim, domain.dmarc];
    return (steps.filter(Boolean).length / steps.length) * 100;
  };

  const handleVerify = async (recordType: "spf" | "dkim" | "dmarc") => {
    setIsVerifying(recordType);
    try {
      const verified = await verifyDnsRecord(domain.id, recordType);
      if (verified) {
        setDomain(prev => ({ ...prev, [recordType]: true }));
        toast.success(`${recordType.toUpperCase()} record verified successfully`);
      } else {
        toast.error(`${recordType.toUpperCase()} record verification failed. Please check your DNS settings.`);
      }
    } catch (error) {
      toast.error(`Failed to verify ${recordType.toUpperCase()} record`);
    } finally {
      setIsVerifying(null);
    }
  };

  if (isLoading) {
    return <div className="container mx-auto py-6">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/domains">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{copyText.setup.title}</h1>
          <p className="text-muted-foreground">{domain.name}</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{copyText.setup.steps.spf.title}</h3>
              {domain.spf ? (
                <Shield className="h-5 w-5 text-green-500" />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleVerify("spf")}
                  disabled={isVerifying === "spf"}
                >
                  <RefreshCw className={`mr-2 h-4 w-4 ${isVerifying === "spf" ? "animate-spin" : ""}`} />
                  Verify
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {copyText.setup.steps.spf.description}
            </p>
            <div className="relative bg-muted p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">{domain.records.spf}</pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(domain.records.spf)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{copyText.setup.steps.dkim.title}</h3>
              {domain.dkim ? (
                <Shield className="h-5 w-5 text-green-500" />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleVerify("dkim")}
                  disabled={isVerifying === "dkim"}
                >
                  <RefreshCw className={`mr-2 h-4 w-4 ${isVerifying === "dkim" ? "animate-spin" : ""}`} />
                  Verify
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {copyText.setup.steps.dkim.description}
            </p>
            <div className="relative bg-muted p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">{domain.records.dkim}</pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(domain.records.dkim)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{copyText.setup.steps.dmarc.title}</h3>
              {domain.dmarc ? (
                <Shield className="h-5 w-5 text-green-500" />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleVerify("dmarc")}
                  disabled={isVerifying === "dmarc"}
                >
                  <RefreshCw className={`mr-2 h-4 w-4 ${isVerifying === "dmarc" ? "animate-spin" : ""}`} />
                  Verify
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {copyText.setup.steps.dmarc.description}
            </p>
            <div className="relative bg-muted p-4 rounded-lg">
              <pre className="text-sm font-mono overflow-x-auto">{domain.records.dmarc}</pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(domain.records.dmarc)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Setup Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round(getSetupProgress())}%
            </span>
          </div>
          <Progress value={getSetupProgress()} className="h-2" />
        </div>
      </div>
    </div>
  );
}