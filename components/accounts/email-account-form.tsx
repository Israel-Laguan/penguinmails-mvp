"use client"
import { EmailAccount, EmailAccountStatus, WarmupStatus } from "@/app/api/generated/prisma"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Switch } from "@/components/ui/switch"
import { emailAccountCopy } from "./copy"
import { EmailProvider } from "./constants"

const copy = emailAccountCopy.form

export const emailAccountFormSchema = z.object({
  email: z.string().email(copy.validation.email.invalid),
  provider: z.nativeEnum(EmailProvider),
  status: z.nativeEnum(EmailAccountStatus).default(EmailAccountStatus.PENDING),
  reputation: z.number().min(0).max(100).default(100),
  warmupStatus: z.nativeEnum(WarmupStatus).default(WarmupStatus.NOT_STARTED),
  dayLimit: z.number().min(1).max(2000).default(100),
  sent24h: z.number().default(0),
  spf: z.boolean().default(false),
  dkim: z.boolean().default(false),
  dmarc: z.boolean().default(false),
  password: z.string().min(8, copy.validation.password.minLength).optional(),
})

export type EmailAccountFormValues = Partial<z.infer<typeof emailAccountFormSchema>>

interface EmailAccountFormProps {
  initialData?: Partial<EmailAccount>
  onSubmit: (data: EmailAccountFormValues) => Promise<void>
  isLoading?: boolean
  isEditing?: boolean
  form?: UseFormReturn<EmailAccountFormValues>
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 max-w-2xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    onChange={e => field.onChange(parseInt(e.target.value))}
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
                    onChange={e => field.onChange(parseInt(e.target.value))}
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
                <Select onValueChange={field.onChange} value={field.value}>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="spf"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>{copy.labels.spf}</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dkim"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>{copy.labels.dkim}</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dmarc"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>{copy.labels.dmarc}</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

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
