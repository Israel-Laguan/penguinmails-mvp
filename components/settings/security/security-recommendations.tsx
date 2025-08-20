"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useTwoAuthContext } from "./two-factor-auth-switch";
import { AlertTriangle, Check, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function SecurityRecommendations() {
  const { isEnabled } = useTwoAuthContext();

  return (
    <div className="space-y-4">
      <Alert
        className={cn(
          isEnabled
            ? "border-green-200 bg-green-50/50"
            : "border-orange-200 bg-orange-50/50"
        )}
      >
        <AlertTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "p-1 rounded-full",
                isEnabled ? "bg-green-100" : "bg-orange-100"
              )}
            >
              {isEnabled ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              )}
            </div>
            <span>Two-Factor Authentication</span>
          </div>
          <Badge
            variant="outline"
            className={cn(
              isEnabled
                ? "bg-green-100 text-green-700 border-green-300"
                : "bg-orange-100 text-orange-700 border-orange-300"
            )}
          >
            {isEnabled ? "Enabled" : "Recommended"}
          </Badge>
        </AlertTitle>
        <AlertDescription>
          {isEnabled
            ? "Great! Your account is protected with 2FA."
            : "Enable 2FA to add an extra layer of security to your account."}
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 bg-green-50/50">
        <AlertTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-green-100 rounded-full">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <span>Strong Password</span>
          </div>
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 border-green-300"
          >
            Active
          </Badge>
        </AlertTitle>
        <AlertDescription>
          Your password meets our security requirements.
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 bg-green-50/50">
        <AlertTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-green-100 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
            <span>Recent Activity Monitoring</span>
          </div>
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 border-green-300"
          >
            Active
          </Badge>
        </AlertTitle>
        <AlertDescription>
          We monitor your account for suspicious activity and will notify you of
          any concerns.
        </AlertDescription>
      </Alert>
    </div>
  );
}
export default SecurityRecommendations;
