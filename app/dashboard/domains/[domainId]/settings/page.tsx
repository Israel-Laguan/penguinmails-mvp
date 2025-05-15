import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

export default function DomainSettingsPage({ params }: { params: { domainId: string } }) {
  // TODO: Fetch domain data based on domainId
  const domain = {
    id: parseInt(params.domainId),
    name: "example.com",
    warmupEnabled: true,
    dailyIncrease: 10,
    maxDailyEmails: 1000,
    initialDailyVolume: 10, // New
    warmupSpeed: "moderate", // New: 'slow', 'moderate', 'fast'
    replyRate: "80", // New: '70', '80', '90', '100' (as strings for Select)
    threadDepth: "3", // New: '1', '2', '3', '5' (as strings for Select)
    autoAdjustWarmup: true, // New
    reputationFactors: {
      bounceRate: 0.3,
      spamComplaints: 0.3,
      engagement: 0.4,
    },
    authentication: {
      spf: {
        enabled: true,
        record: "v=spf1 ip4:192.168.1.1 ip4:203.0.113.5 ~all",
        policy: "soft",
      },
      dkim: {
        enabled: true,
        selector: "default",
        key: "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQ...",
      },
      dmarc: {
        enabled: true,
        policy: "quarantine",
        percentage: 100,
        reportEmail: "dmarc-reports@example.com",
        record: "v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@example.com;",
      },
    },
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/domains">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Domain Settings</h1>
          <p className="text-muted-foreground">{domain.name}</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Settings</CardTitle>
            <CardDescription>
              Configure email authentication and security policies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="spf">
                <AccordionTrigger className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">SPF (Sender Policy Framework)</div>
                      <div className="text-sm text-muted-foreground">
                        Control which mail servers can send emails from your domain
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      domain.authentication.spf.enabled
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }
                  >
                    {domain.authentication.spf.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enable SPF</Label>
                      <Switch defaultChecked={domain.authentication.spf.enabled} />
                    </div>
                    <div className="space-y-2">
                      <Label>SPF Record</Label>
                      <Textarea
                        defaultValue={domain.authentication.spf.record}
                        className="font-mono text-sm"
                      />
                      <p className="text-sm text-muted-foreground">
                        DNS TXT record that specifies which mail servers are authorized to send email
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Policy</Label>
                      <Select defaultValue={domain.authentication.spf.policy}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select policy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strict">Strict (-all)</SelectItem>
                          <SelectItem value="soft">Soft (~all)</SelectItem>
                          <SelectItem value="neutral">Neutral (?all)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dkim">
                <AccordionTrigger className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">DKIM (DomainKeys Identified Mail)</div>
                      <div className="text-sm text-muted-foreground">
                        Add digital signatures to outgoing emails
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      domain.authentication.dkim.enabled
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }
                  >
                    {domain.authentication.dkim.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enable DKIM</Label>
                      <Switch defaultChecked={domain.authentication.dkim.enabled} />
                    </div>
                    <div className="space-y-2">
                      <Label>Selector</Label>
                      <Input
                        defaultValue={domain.authentication.dkim.selector}
                        className="font-mono"
                      />
                      <p className="text-sm text-muted-foreground">
                        The name of the DKIM selector used in the DNS record
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Public Key</Label>
                      <Textarea
                        defaultValue={domain.authentication.dkim.key}
                        className="font-mono text-sm"
                      />
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Regenerate Keys
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dmarc">
                <AccordionTrigger className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5" />
                    <div>
                      <div className="font-semibold">DMARC (Domain-based Message Authentication)</div>
                      <div className="text-sm text-muted-foreground">
                        Set policies for handling authentication failures
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      domain.authentication.dmarc.enabled
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }
                  >
                    {domain.authentication.dmarc.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Enable DMARC</Label>
                      <Switch defaultChecked={domain.authentication.dmarc.enabled} />
                    </div>
                    <div className="space-y-2">
                      <Label>Policy</Label>
                      <Select defaultValue={domain.authentication.dmarc.policy}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select policy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None (Monitor Only)</SelectItem>
                          <SelectItem value="quarantine">Quarantine</SelectItem>
                          <SelectItem value="reject">Reject</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Enforcement Percentage</Label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={domain.authentication.dmarc.percentage}
                      />
                      <p className="text-sm text-muted-foreground">
                        Percentage of messages to which the policy is applied
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Report Email</Label>
                      <Input
                        type="email"
                        defaultValue={domain.authentication.dmarc.reportEmail}
                      />
                      <p className="text-sm text-muted-foreground">
                        Email address where DMARC reports should be sent
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>DMARC Record</Label>
                      <Textarea
                        defaultValue={domain.authentication.dmarc.record}
                        className="font-mono text-sm"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Warmup Configuration</CardTitle>
            <CardDescription>
              Configure how your domain gradually increases email sending capacity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="warmup-enabled">Enable Warmup</Label>
              <Switch
                id="warmup-enabled"
                defaultChecked={domain.warmupEnabled}
              />
            </div>

            {/* Warmup Schedule Section */}
            <div className="space-y-2">
              <h3 className="text-md font-medium">Warmup Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Configure how your email accounts are warmed up over time.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {/* Initial Daily Volume - NEW */}
                <div className="grid gap-2">
                  <Label htmlFor="initial-daily-volume">Initial Daily Volume</Label>
                  <Input
                    id="initial-daily-volume"
                    type="number"
                    defaultValue={domain.initialDailyVolume}
                  />
                  <p className="text-xs text-muted-foreground">
                    Number of emails sent on day one
                  </p>
                </div>

                {/* Daily Email Increase - EXISTING (with description) */}
                <div className="grid gap-2">
                  <Label htmlFor="daily-increase">Daily Email Increase</Label>
                  <Input
                    id="daily-increase"
                    type="number"
                    defaultValue={domain.dailyIncrease}
                  />
                  <p className="text-xs text-muted-foreground">
                    Emails added each day
                  </p>
                </div>

                {/* Maximum Daily Emails - EXISTING (with description) */}
                <div className="grid gap-2">
                  <Label htmlFor="max-daily">Maximum Daily Emails</Label>
                  <Input
                    id="max-daily"
                    type="number"
                    defaultValue={domain.maxDailyEmails}
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum number of daily emails
                  </p>
                </div>

                {/* Warmup Speed - NEW */}
                <div className="grid gap-2">
                  <Label htmlFor="warmup-speed">Warmup Speed</Label>
                  <Select defaultValue={domain.warmupSpeed}>
                    <SelectTrigger id="warmup-speed">
                      <SelectValue placeholder="Select speed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow (Safe)</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="fast">Fast (Aggressive)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How aggressively to increase volume
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Seed Network Section - NEW */}
            <div className="space-y-2">
              <h3 className="text-md font-medium">Seed Network Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure how your emails interact with our network of seed accounts.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {/* Reply Rate - NEW */}
                <div className="grid gap-2">
                  <Label htmlFor="reply-rate">Reply Rate</Label>
                  <Select defaultValue={domain.replyRate}>
                    <SelectTrigger id="reply-rate">
                      <SelectValue placeholder="Select reply rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="70">70%</SelectItem>
                      <SelectItem value="80">80%</SelectItem>
                      <SelectItem value="90">90%</SelectItem>
                      <SelectItem value="100">100%</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Percentage of emails that receive replies
                  </p>
                </div>

                {/* Thread Depth - NEW */}
                <div className="grid gap-2">
                  <Label htmlFor="thread-depth">Thread Depth</Label>
                  <Select defaultValue={domain.threadDepth}>
                    <SelectTrigger id="thread-depth">
                      <SelectValue placeholder="Select thread depth" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 reply</SelectItem>
                      <SelectItem value="2">2 replies</SelectItem>
                      <SelectItem value="3">3 replies</SelectItem>
                      <SelectItem value="5">5 replies</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    How many back-and-forth replies in each thread
                  </p>
                </div>
              </div>
              {/* Auto-adjust - NEW */}
              <div className="pt-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="auto-adjust-warmup"
                    defaultChecked={domain.autoAdjustWarmup}
                  />
                  <Label htmlFor="auto-adjust-warmup">Auto-adjust warmup based on performance</Label>
                </div>
                <p className="pl-7 text-xs text-muted-foreground mt-1">
                  Automatically adjust warmup parameters based on email performance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reputation Settings</CardTitle>
            <CardDescription>
              Adjust how reputation scores are calculated for this domain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="bounce-weight">Bounce Rate Weight</Label>
                <Select defaultValue={domain.reputationFactors.bounceRate.toString()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.2">20%</SelectItem>
                    <SelectItem value="0.3">30%</SelectItem>
                    <SelectItem value="0.4">40%</SelectItem>
                    <SelectItem value="0.5">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="spam-weight">Spam Complaints Weight</Label>
                <Select defaultValue={domain.reputationFactors.spamComplaints.toString()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.2">20%</SelectItem>
                    <SelectItem value="0.3">30%</SelectItem>
                    <SelectItem value="0.4">40%</SelectItem>
                    <SelectItem value="0.5">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="engagement-weight">Engagement Weight</Label>
                <Select defaultValue={domain.reputationFactors.engagement.toString()}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.2">20%</SelectItem>
                    <SelectItem value="0.3">30%</SelectItem>
                    <SelectItem value="0.4">40%</SelectItem>
                    <SelectItem value="0.5">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/domains">Cancel</Link>
          </Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}