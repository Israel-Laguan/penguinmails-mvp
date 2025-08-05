import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { domains } from "@/lib/data/domains.mock";
import { cn } from "@/lib/utils";
import { AlertTriangle, Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

function AddMailboxDetails() {
  const form = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const availableDomains = domains;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Mailbox Details
          </h2>
          <p className="text-gray-600">
            Set up a mailbox to start sending cold emails
          </p>
        </div>

        <div className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Mailbox Name *
                </FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Input
                      placeholder="john"
                      className={cn(
                        "flex-1 px-4 py-3 text-lg h-12",
                        form.formState.errors.name && "border-red-300"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <span className="text-lg text-gray-500">@</span>
                  <FormField
                    control={form.control}
                    name="domain"
                    render={({ field: domainField }) => (
                      <Select
                        value={domainField.value}
                        onValueChange={domainField.onChange}
                      >
                        <SelectTrigger
                          className={cn(
                            "px-4 py-3 text-lg h-12 min-w-[160px]",
                            form.formState.errors.domain && "border-red-300"
                          )}
                        >
                          <SelectValue placeholder="Select Domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableDomains
                            .filter((d) => d.status === "verified")
                            .map((domain) => (
                              <SelectItem key={domain.id} value={domain.domain}>
                                {domain.domain}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <FormMessage />
                <p className="text-sm text-gray-500">
                  Choose a professional name like your first name, role, or
                  department
                </p>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Password *
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter a secure password"
                      className={cn(
                        "px-4 py-3 pr-12 text-lg h-12",
                        form.formState.errors.password && "border-red-300"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 h-5 w-5 p-0"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </Button>
                </div>
                <FormMessage />
                <p className="text-sm text-gray-500">
                  Use at least 8 characters with a mix of letters, numbers, and
                  symbols
                </p>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Confirm Password *
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      className={cn(
                        "px-4 py-3 pr-12 text-lg h-12",
                        form.formState.errors.confirmPassword &&
                          "border-red-300"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 h-5 w-5 p-0"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </Button>
                </div>
                <FormMessage />
                <p className="text-sm text-gray-500">
                  Please confirm your password to proceed
                </p>
              </FormItem>
            )}
          />
        </div>

        {availableDomains.filter((d) => d.status === "verified").length ===
          0 && (
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <AlertDescription>
              <h4 className="font-medium text-orange-900 mb-1">
                No Verified Domains
              </h4>
              <p className="text-sm text-orange-700">
                You need to add and verify a domain before creating mailboxes.
                <Button className="font-medium underline ml-1 p-0 h-auto text-orange-700">
                  Add a domain first
                </Button>
              </p>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}

export default AddMailboxDetails;
