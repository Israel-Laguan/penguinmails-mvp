"use client"
import { EmailAccount, EmailAccountStatus, WarmupStatus } from "@/app/api/generated/prisma"
import { VerificationStatus, RelayType, AccountCreationType } from "./types"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch"; // No longer directly used by this page
import { Progress } from "@/components/ui/progress";
import { emailAccountCopy } from "../domains/copy"
import { EmailProvider } from "../domains/constants"

const copy = emailAccountCopy.form

export const emailAccountFormSchema = z.object({
  email: z.string().email(copy.validation.email.invalid),
  provider: z.nativeEnum(EmailProvider),
  status: z.nativeEnum(EmailAccountStatus).default(EmailAccountStatus.PENDING),
  reputation: z.number().min(0).max(100).default(100),
  warmupStatus: z.nativeEnum(WarmupStatus).default(WarmupStatus.NOT_STARTED),
  dayLimit: z.number().min(1).max(2000).default(100),
  sent24h: z.number().default(0),
  password: z.string().min(8, copy.validation.password.minLength).optional(),
  accountType: z.nativeEnum(AccountCreationType).default(AccountCreationType.VIRTUAL_USER_DB), // Default to one type

  // Account-specific SMTP Auth Status
  accountSmtpAuthStatus: z.nativeEnum(VerificationStatus).default(VerificationStatus.NOT_CONFIGURED).optional(),
  
  // Relay settings (kept as per decision)
  relayType: z.nativeEnum(RelayType).default(RelayType.DEFAULT_SERVER_CONFIG),
  relayHost: z.string().optional(),

  // Mailbox configuration (now tied to accountType in UI logic)
  virtualMailboxMapping: z.string().optional(), // e.g., "newaccount/" for /etc/postfix/virtual
  mailboxPath: z.string().optional(), // Full path if needed, or derived
  mailboxQuotaMB: z.number().positive().optional(),

  // Warmup strategy refinements
  warmupDailyIncrement: z.number().positive().optional(),
  warmupTargetDailyVolume: z.number().positive().optional(),

  // Overall account statuses
  accountSetupStatus: z.string().optional(), // General setup status
  accountDeliverabilityStatus: z.string().optional(), // For specific deliverability checks
})

export type EmailAccountFormValues = Partial<z.infer<typeof emailAccountFormSchema>>

interface DomainAuthStatusProps { // For the read-only display
  spfVerified?: boolean;
  dkimVerified?: boolean;
  dmarcVerified?: boolean;
}

interface EmailAccountFormProps {
  initialData?: Partial<EmailAccount> & { domainAuthStatus?: DomainAuthStatusProps }; // Add domainAuthStatus here
  onSubmit: (data: EmailAccountFormValues) => Promise<void>
  isLoading?: boolean
  isEditing?: boolean
  form?: UseFormReturn<EmailAccountFormValues>
  // domainAuthStatus?: DomainAuthStatusProps; // Prop to pass domain's auth status
}

export default function EmailAccountForm({
  initialData,
  onSubmit,
  isLoading = false,
  isEditing = false,
}: EmailAccountFormProps) {
  const copy = emailAccountCopy.form

  const form = useForm<EmailAccountFormValues>({
    // resolver: zodResolver(emailAccountFormSchema),
    defaultValues: {
      dayLimit: 200,
      ...initialData,
      provider: initialData?.provider as EmailProvider,
    },
  })

  // Watch new fields relevant for conditional UI
  const watchedAccountType = form.watch("accountType");
  const watchedRelayType = form.watch("relayType");
  // Note: watchedSpfEnabled, watchedDkimEnabled, watchedDmarcEnabled, watchedIsVirtualUser are removed as these fields are gone from schema

  // Helper to display status, ensuring value exists in enum
  const getVerificationStatusText = (statusKey: VerificationStatus | undefined) => {
    if (statusKey && copy.enums.verificationStatus[statusKey]) {
      return copy.enums.verificationStatus[statusKey];
    }
    // Fallback to NOT_CONFIGURED if statusKey is undefined or not in enum map
    const notConfiguredKey = VerificationStatus.NOT_CONFIGURED;
    if (copy.enums.verificationStatus[notConfiguredKey]) {
       return copy.enums.verificationStatus[notConfiguredKey];
    }
    return "Status Unknown"; // Should not happen if copy.ts is correct
  };

  const handleSubmit = async (values: EmailAccountFormValues) => {
    try {
      await onSubmit(values)
      const notification = isEditing ? copy.notifications.success.updated : copy.notifications.success.created
      toast.success(notification.title, {
        description: notification.description,
      })
    } catch (error) {
      toast.error(copy.notifications.error.title, {
        description: copy.notifications.error.description(
          isEditing ? 'update' : 'create',
          error instanceof Error ? error.message : 'Unknown error'
        )
      })
    }
  }

    // Mock metrics data, as it's separate from the form
    const accountMetrics = {
      bounceRate: 0.02,
      spamComplaints: 0.001,
      openRate: 0.45,
      replyRate: 0.12,
      maxBounceRateThreshold: 0.05,
      maxSpamComplaintRateThreshold: 0.005,
      minOpenRateThreshold: 0.20,
      minReplyRateThreshold: 0.05,
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{copy.labels.email}</FormLabel>
              <FormControl>
                <Input 
                  placeholder={copy.placeholders.email} 
                  {...field} 
                  disabled={isEditing || isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Performance Metrics Card (kept separate as discussed) */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>
              View and manage email performance thresholds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div>
                <Label>Bounce Rate</Label>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-2xl font-bold">
                    {(accountMetrics.bounceRate * 100).toFixed(2)}%
                  </div>
                  <Progress
                    value={100 - accountMetrics.bounceRate * 100}
                    className="w-[160px] h-2"
                  />
                </div>
                <div className="grid gap-2 mt-4">
                  <Label htmlFor="max-bounce-rate">Max Bounce Rate Threshold (%)</Label>
                  <Input
                    id="max-bounce-rate"
                    type="number"
                    step="0.1"
                    defaultValue={(accountMetrics.maxBounceRateThreshold * 100).toFixed(1)}
                  />
                  <div className="text-sm text-muted-foreground">
                    Set a maximum acceptable bounce rate.
                  </div>
                </div>
              </div>

              <div>
                <Label>Spam Complaints</Label>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-2xl font-bold">
                    {(accountMetrics.spamComplaints * 100).toFixed(3)}%
                  </div>
                  <Progress
                    value={100 - accountMetrics.spamComplaints * 100}
                    className="w-[160px] h-2"
                  />
                </div>
                <div className="grid gap-2 mt-4">
                  <Label htmlFor="max-spam-complaints">Max Spam Complaint Rate Threshold (%)</Label>
                  <Input
                    id="max-spam-complaints"
                    type="number"
                    step="0.01"
                    defaultValue={(accountMetrics.maxSpamComplaintRateThreshold * 100).toFixed(2)}
                  />
                  <div className="text-sm text-muted-foreground">
                    Set a maximum acceptable spam complaint rate.
                  </div>
                </div>
              </div>

              <div>
                <Label>Engagement</Label>
                <div className="flex items-center justify-between mt-2">
                  <div className="grid gap-1">
                    <div className="text-sm">Open Rate: {(accountMetrics.openRate * 100).toFixed(1)}%</div>
                    <div className="text-sm">Reply Rate: {(accountMetrics.replyRate * 100).toFixed(1)}%</div>
                  </div>
                  <Progress
                    value={accountMetrics.openRate * 100}
                    className="w-[160px] h-2"
                  />
                </div>
                 <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="grid gap-2">
                        <Label htmlFor="min-open-rate">Min Open Rate Threshold (%)</Label>
                        <Input
                        id="min-open-rate"
                        type="number"
                        step="0.1"
                        defaultValue={(accountMetrics.minOpenRateThreshold * 100).toFixed(1)}
                        />
                        <div className="text-sm text-muted-foreground">
                        Set a minimum acceptable open rate.
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="min-reply-rate">Min Reply Rate Threshold (%)</Label>
                        <Input
                        id="min-reply-rate"
                        type="number"
                        step="0.1"
                        defaultValue={(accountMetrics.minReplyRateThreshold * 100).toFixed(1)}
                        />
                        <div className="text-sm text-muted-foreground">
                        Set a minimum acceptable reply rate.
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <FormField
          control={form.control}
          name="provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{copy.labels.provider}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={copy.placeholders.provider} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(EmailProvider).map((provider) => (
                    <SelectItem key={provider} value={provider}>
                      {provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{copy.labels.status}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={copy.placeholders.status} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(EmailAccountStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0) + status.slice(1).toLowerCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Account Creation & Authentication Section */}
        <div className="space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-medium">{copy.ui.accountCreation?.title || "Account Creation & Authentication"}</h3>
          <p className="text-sm text-muted-foreground">{copy.ui.accountCreation?.description || "Configure how this account is set up and authenticates."}</p>
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{copy.labels.accountType}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={copy.placeholders.accountType} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(AccountCreationType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {copy.enums?.accountCreationType?.[type] || type.replace('_', ' ')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password field is already present later, its label might need to be dynamic based on accountType in copy.ts or via a helper */}
        </div>

        {/* Domain Authentication Overview (Read-Only) */}
        {initialData?.domainAuthStatus && (
          <div className="space-y-3 p-4 border rounded-md bg-secondary/10">
            <h3 className="text-lg font-medium">{copy.ui.domainAuthOverview?.title || "Domain Authentication Overview"}</h3>
            <p className="text-sm text-muted-foreground">{copy.ui.domainAuthOverview?.description || "Status of the parent domain's authentication records (read-only)."}</p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <FormItem>
                <FormLabel>SPF</FormLabel>
                <p className={`text-sm font-semibold ${initialData.domainAuthStatus.spfVerified ? 'text-green-600' : 'text-red-600'}`}>
                  {initialData.domainAuthStatus.spfVerified ? "Verified" : "Not Verified/Error"}
                </p>
              </FormItem>
              <FormItem>
                <FormLabel>DKIM</FormLabel>
                <p className={`text-sm font-semibold ${initialData.domainAuthStatus.dkimVerified ? 'text-green-600' : 'text-red-600'}`}>
                  {initialData.domainAuthStatus.dkimVerified ? "Verified" : "Not Verified/Error"}
                </p>
              </FormItem>
              <FormItem>
                <FormLabel>DMARC</FormLabel>
                <p className={`text-sm font-semibold ${initialData.domainAuthStatus.dmarcVerified ? 'text-green-600' : 'text-red-600'}`}>
                  {initialData.domainAuthStatus.dmarcVerified ? "Verified" : "Not Verified/Error"}
                </p>
              </FormItem>
            </div>
          </div>
        )}

        {/* SMTP Authentication & Relay Configuration Section - This section remains as per plan */}
        <div className="space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-medium">{copy.ui.relaySetup.title}</h3>
          <p className="text-sm text-muted-foreground">{copy.ui.relaySetup.description}</p>
          <FormItem className="pt-2">
            <FormLabel>{copy.labels.accountSmtpAuthStatus}</FormLabel> {/* Also update label if copy.ts was changed for this */}
            <p className="text-sm pt-1">{getVerificationStatusText(form.watch("accountSmtpAuthStatus"))}</p>
          </FormItem>
          <FormField
            control={form.control}
            name="relayType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{copy.labels.relayType}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relay type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(RelayType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {copy.enums.relayTypes[type] || type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {watchedRelayType === RelayType.EXTERNAL && (
            <FormField
              control={form.control}
              name="relayHost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.relayHost}</FormLabel>
                  <FormControl>
                    <Input placeholder={copy.placeholders.relayHost} {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        {/* Mailbox Configuration Section */}
        <div className="space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-medium">{copy.ui.mailboxSetup.title}</h3>
          <p className="text-sm text-muted-foreground">{copy.ui.mailboxSetup.description}</p>
          {/* isVirtualUser FormField is removed, logic now depends on watchedAccountType */}
          {watchedAccountType === AccountCreationType.VIRTUAL_USER_DB && (
            <div className="pl-2 space-y-3 mt-2">
              <FormField
                control={form.control}
                name="virtualMailboxMapping"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.labels.virtualMailboxMapping}</FormLabel>
                    <FormControl>
                      <Input placeholder={copy.placeholders.virtualMailboxMapping} {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mailboxPath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.labels.mailboxPath}</FormLabel>
                    <FormControl>
                      <Input placeholder={copy.placeholders.mailboxPath} {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mailboxQuotaMB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{copy.labels.mailboxQuotaMB}</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder={copy.placeholders.mailboxQuotaMB} {...field}
                        onChange={e => {
                          const value = parseInt(e.target.value);
                          field.onChange(isNaN(value) ? null : value); // Handle empty input or invalid number
                        }}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        {/* Sending Configuration Section (existing fields wrapped) */}
        {/* This section will be enhanced with new Warmup Strategy fields */}
        <div className="space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-medium">{copy.ui.sendingConfig.title}</h3>
          <p className="text-sm text-muted-foreground">{copy.ui.sendingConfig.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <FormField
              control={form.control}
              name="dayLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.dayLimit}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={e => {
                        const value = parseInt(e.target.value);
                        field.onChange(isNaN(value) ? null : value);
                      }}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reputation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.reputation}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      {...field}
                      onChange={e => {
                        const value = parseInt(e.target.value);
                        field.onChange(isNaN(value) ? null : value);
                      }}
                      disabled={!isEditing || isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="warmupStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.warmupStatus}</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} disabled={isLoading}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={copy.placeholders.warmupStatus} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(WarmupStatus).map((status) => (
                        <SelectItem key={status} value={status}>
                          {status.charAt(0) + status.slice(1).toLowerCase().replace('_', ' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* New Warmup Strategy Fields */}
            <FormField
              control={form.control}
              name="warmupDailyIncrement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.warmupDailyIncrement}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={copy.placeholders.warmupDailyIncrement}
                      {...field}
                      onChange={e => field.onChange(parseInt(e.target.value) || null)}
                      disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="warmupTargetDailyVolume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{copy.labels.warmupTargetDailyVolume}</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={copy.placeholders.warmupTargetDailyVolume}
                      {...field}
                      onChange={e => field.onChange(parseInt(e.target.value) || null)}
                      disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        {/* Overall Account Setup Status Display */}
        {form.watch("accountSetupStatus") && (
          <div className="p-4 border rounded-md bg-secondary/50">
            <FormItem>
              <FormLabel>{copy.labels.accountSetupStatus}</FormLabel>
              <p className="text-sm pt-1 font-semibold">{form.watch("accountSetupStatus")}</p>
            </FormItem>
          </div>
        )}

        {/* Account Deliverability Status Display */}
        {form.watch("accountDeliverabilityStatus") && (
          <div className="p-4 border rounded-md bg-secondary/50 mt-4">
            <FormItem>
              <FormLabel>{copy.labels.accountDeliverabilityStatus}</FormLabel>
              <p className="text-sm pt-1 font-semibold">{form.watch("accountDeliverabilityStatus")}</p>
            </FormItem>
          </div>
        )}

        {!isEditing && (
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{copy.labels.password}</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex gap-4">
          <Button type="submit" disabled={isLoading}>
            {isEditing ? copy.buttons.submit.update : copy.buttons.submit.create}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => window.history.back()}
            disabled={isLoading}
          >
            {copy.buttons.cancel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
