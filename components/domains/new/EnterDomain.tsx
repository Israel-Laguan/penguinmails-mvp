import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Globe, Lightbulb } from "lucide-react";
import { useFormContext } from "react-hook-form";

function EnterDomain() {
  const form = useFormContext();
  const { register } = form;
  return (
    <Card>
      <CardContent className="p-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Enter Domain</h2>
            <p className="text-muted-foreground">
              Enter your domain name to get started with email setup
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-sm font-medium">
                Domain Name *
              </Label>
              <Input id="domain" type="text" {...register("domain")} />
              {form.formState.errors.domain && (
                <div className="flex items-center space-x-1 text-destructive text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>
                    {form.formState.errors.domain.message?.toString()}
                  </span>
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                Please enter only the root domain. Don't include http:// or www.
              </p>
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Lightbulb className="w-4 h-4 text-blue-600" />
            <AlertDescription className="text-blue-700">
              <div className="font-medium mb-2">💡 Domain Setup Tips</div>
              <ul className="space-y-1 text-sm">
                <li>• Use your main business domain (e.g., mycompany.com)</li>
                <li>
                  • You can add subdomains later (e.g., mail.mycompany.com)
                </li>
                <li>
                  • Make sure you have access to your domain's DNS settings
                </li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
}
export default EnterDomain;
