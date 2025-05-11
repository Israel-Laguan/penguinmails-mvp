"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";
import { DnsProvider, DNS_RECORD_TYPES, DkimManagementType } from "./constants";
import { VerificationStatus } from "@/components/domains/types"; // Assuming VerificationStatus is in accounts/types for now
import { copyText as t } from "./copy";

const DOMAIN_REGEX = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}$/;

const formSchema = z.object({
  domain: z.string()
    .min(1, t.form.validation.domain.required)
    .regex(DOMAIN_REGEX, t.form.validation.domain.invalid),
  provider: z.nativeEnum(DnsProvider, { // This makes provider required
    required_error: t.form.validation.provider.required
  }),
  spfRecordValue: z.string().optional(),
  spfStatus: z.nativeEnum(VerificationStatus).optional(),
  dkimManagementType: z.nativeEnum(DkimManagementType), // Removed .default() here
  dkimSelector: z.string().optional(),
  dkimPublicKey: z.string().optional(),
  // dkimCnameTarget: z.string().optional(), // This will be derived, not a direct form input
  dkimStatus: z.nativeEnum(VerificationStatus).optional(),
  dmarcRecordValue: z.string().optional(),
  dmarcStatus: z.nativeEnum(VerificationStatus).optional(),
  overallAuthStatus: z.string().optional(),
});

export type DomainFormValues = z.infer<typeof formSchema>;

interface DomainFormProps {
  onSubmit: (data: DomainFormValues) => Promise<void>;
  isLoading?: boolean;
}

export default function DomainForm({ onSubmit, isLoading = false }: DomainFormProps) {
  const form = useForm<DomainFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      domain: "",
      provider: DnsProvider.OTHER, // Provide a default for the required enum
      spfRecordValue: "",
      spfStatus: VerificationStatus.NOT_CONFIGURED,
      dkimManagementType: DkimManagementType.SERVICE_MANAGED_CNAME, // Default handled by useForm
      dkimSelector: "pm",
      dkimPublicKey: "",
      dkimStatus: VerificationStatus.NOT_CONFIGURED,
      dmarcRecordValue: "",
      dmarcStatus: VerificationStatus.NOT_CONFIGURED,
      overallAuthStatus: "", // Optional string
    },
  });

  const watchProvider = form.watch("provider");
  const watchDkimManagementType = form.watch("dkimManagementType");
  const domain = form.watch("domain"); // Keep this for CNAME target generation

  const getDnsValue = (template: string) => { // Keep for CNAME or default suggestions
    return template.replace("{domain}", domain || "example.com");
  };

  // Helper to display verification status text
  const getVerificationStatusText = (statusKey: VerificationStatus | undefined) => {
    const verificationStatusMap = t.form.enums?.verificationStatus; // Use optional chaining for safety
    if (verificationStatusMap && statusKey && verificationStatusMap[statusKey]) {
      return verificationStatusMap[statusKey];
    }
    const notConfiguredKey = VerificationStatus.NOT_CONFIGURED;
    if (verificationStatusMap && verificationStatusMap[notConfiguredKey]) {
       return verificationStatusMap[notConfiguredKey];
    }
    return "Status Unknown";
  };
  
  const getDkimCnameTarget = () => {
    return DNS_RECORD_TYPES.DKIM.template.replace("{domain}", domain || "yourdomain.com");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.form.labels.domain}</FormLabel>
                <FormControl>
                  <Input placeholder={t.form.placeholders.domain} {...field} disabled={isLoading} />
                </FormControl>
                <FormDescription>{t.form.hints.domain}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="provider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.form.labels.provider}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t.form.placeholders.provider} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(DnsProvider).map((provider) => (
                      <SelectItem key={provider} value={provider}>
                        {provider}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>{t.form.hints.provider}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {watchProvider && (
          <Card>
            <CardHeader>
              <CardTitle>{t.form.auth.title}</CardTitle>
              <CardDescription>{t.form.auth.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>{t.form.auth.hint}</AlertDescription>
              </Alert>

              {/* SPF Section */}
              <div className="space-y-3 p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{t.auth.SPF}</h4>
                  <Badge variant={form.watch("spfStatus") === VerificationStatus.VERIFIED ? "default" : "outline"}>
                    {getVerificationStatusText(form.watch("spfStatus"))}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{t.form.auth.spf}</p>
                <FormField
                  control={form.control}
                  name="spfRecordValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.labels.spfRecordValue}</FormLabel>
                      <FormControl>
                        <Input placeholder={getDnsValue(DNS_RECORD_TYPES.SPF.template)} {...field} disabled={isLoading} />
                      </FormControl>
                      <FormDescription>{t.form.hints.spfRecordValue}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* DKIM Section */}
              <div className="space-y-3 p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{t.auth.DKIM}</h4>
                   <Badge variant={form.watch("dkimStatus") === VerificationStatus.VERIFIED ? "default" : "outline"}>
                    {getVerificationStatusText(form.watch("dkimStatus"))}
                  </Badge>
                </div>
                 <p className="text-sm text-muted-foreground">{t.form.auth.dkim}</p>
                <FormField
                  control={form.control}
                  name="dkimManagementType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.labels.dkimManagementType}</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.placeholders.dkimManagementType} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(DkimManagementType).map((type) => (
                            <SelectItem key={type} value={type}>
                              {t.form.enums?.dkimManagementType?.[type] || type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {watchDkimManagementType === DkimManagementType.SERVICE_MANAGED_CNAME && (
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-muted-foreground">{t.form.hints.dkimCname}</p>
                    <code className="block text-xs bg-muted p-2 rounded">
                      Type: {DNS_RECORD_TYPES.DKIM.type}<br />
                      Name: {DNS_RECORD_TYPES.DKIM.name}<br />
                      Value: {getDkimCnameTarget()}
                    </code>
                  </div>
                )}
                {watchDkimManagementType === DkimManagementType.USER_MANAGED_TXT && (
                  <div className="mt-2 space-y-3">
                    <FormField
                      control={form.control}
                      name="dkimSelector"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.labels.dkimSelector}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.placeholders.dkimSelector} {...field} disabled={isLoading} />
                          </FormControl>
                           <FormDescription>{t.form.hints.dkimSelector}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dkimPublicKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.form.labels.dkimPublicKey}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.form.placeholders.dkimPublicKey} {...field} disabled={isLoading} />
                          </FormControl>
                          <FormDescription>{t.form.hints.dkimPublicKey}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>

              {/* DMARC Section */}
              <div className="space-y-3 p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{t.auth.DMARC}</h4>
                  <Badge variant={form.watch("dmarcStatus") === VerificationStatus.VERIFIED ? "default" : "outline"}>
                    {getVerificationStatusText(form.watch("dmarcStatus"))}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{t.form.auth.dmarc}</p>
                <FormField
                  control={form.control}
                  name="dmarcRecordValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.labels.dmarcRecordValue}</FormLabel>
                      <FormControl>
                        <Input placeholder={getDnsValue(DNS_RECORD_TYPES.DMARC.template)} {...field} disabled={isLoading} />
                      </FormControl>
                      <FormDescription>{t.form.hints.dmarcRecordValue}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Overall Auth Status Display */}
              {form.watch("overallAuthStatus") && (
                <div className="p-3 border rounded-md bg-secondary/50 mt-4">
                  <FormItem>
                    <FormLabel>{t.form.labels.overallAuthStatus}</FormLabel>
                    <p className="text-sm pt-1 font-semibold">{form.watch("overallAuthStatus")}</p>
                  </FormItem>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Server Configuration Notes Section */}
        {watchProvider && (
          <Card>
            <CardHeader>
              <CardTitle>{t.form.sections.serverConfig.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertDescription>
                  <p>{t.form.sections.serverConfig.mainCf}</p>
                  <code className="block text-xs bg-muted p-2 rounded mt-2 whitespace-pre-wrap">
                    smtpd_sasl_auth_enable = yes<br />
                    smtpd_sasl_local_domain = $mydomain
                  </code>
                  <p className="mt-2">{t.form.sections.serverConfig.restartPostfix}</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {/* Domain Reputation Monitoring Section */}
        {watchProvider && (
          <Card>
            <CardHeader>
              <CardTitle>{t.form.sections.reputationMonitoring.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <p className="text-sm text-muted-foreground">{t.form.sections.reputationMonitoring.description}</p>
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="https://postmaster.google.com/" target="_blank" rel="noopener noreferrer">
                  {t.form.buttons.googlePostmaster}
                </a>
              </Button>
              <br />
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="https://sendersupport.olc.protection.outlook.com/snds/" target="_blank" rel="noopener noreferrer">
                  {t.form.buttons.microsoftSNDS}
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? t.form.buttons.submitting : t.form.buttons.addDomain}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
            disabled={isLoading}
          >
            {t.form.buttons.cancel}
          </Button>
        </div>
      </form>
    </Form>
  );
}