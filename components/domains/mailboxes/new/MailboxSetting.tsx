"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Settings, Shield, Zap } from "lucide-react";
import { useFormContext } from "react-hook-form";

function MailboxSetting() {
  const form = useFormContext();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Set Sending & Warmup Limits
          </h2>
          <p className="text-gray-600">
            Control how many emails this mailbox sends per day and enable warmup
          </p>
        </div>

        <div className="space-y-8">
          <FormField
            control={form.control}
            name="dailyLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Daily Sending Limit
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={50}
                      className={cn(
                        "w-full px-4 py-3 pr-24 text-lg h-12",
                        form.formState.errors.dailyLimit && "border-red-300"
                      )}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    emails/day
                  </span>
                </div>
                <FormMessage />
                <p className="text-sm text-gray-500">
                  Default: 30 emails/day. Maximum: 50 emails/day for optimal
                  deliverability
                </p>
              </FormItem>
            )}
          />

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="enableWarmup"
              render={({ field }) => (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Zap className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <Label className="font-medium text-green-900">
                            Enable Warmup
                          </Label>
                          <p className="text-sm text-green-700">
                            Gradually build sender reputation for better
                            deliverability
                          </p>
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-green-600"
                        />
                      </FormControl>
                    </div>
                  </CardContent>
                </Card>
              )}
            />

            <FormField
              control={form.control}
              name="enableWarmupLimits"
              render={({ field }) => (
                <>
                  {form.watch("enableWarmup") && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <Label className="font-medium text-blue-900">
                                Enable Warmup Sending Limits
                              </Label>
                              <p className="text-sm text-blue-700">
                                Applies a safe ramp-up for new mailboxes (e.g.
                                +5/day growth)
                              </p>
                            </div>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </FormControl>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <h4 className="font-medium text-purple-900 mb-3">
              💡 Warmup Best Practices
            </h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• New mailboxes should start with warmup enabled</li>
              <li>• Warmup process typically takes 2-4 weeks</li>
              <li>• Gradually increases sending volume to build reputation</li>
              <li>• Improves inbox placement and deliverability rates</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MailboxSetting;
