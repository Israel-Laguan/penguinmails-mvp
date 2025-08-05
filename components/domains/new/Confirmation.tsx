"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { redirect } from "next/navigation";
import { useFormContext } from "react-hook-form";

function Confirmation() {
  const form = useFormContext();
  function handleComplete() {
    redirect("/dashboard/domains");
    form.reset();
    // Navigate to mailboxes or perform any other action
  }
  const domainName = form.watch("domain") || "example.com";
  return (
    <Card>
      <CardContent className="p-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              ✅ Domain Verified Successfully!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              <strong className="text-foreground">{domainName}</strong> is now
              ready for email sending.
            </p>
            <p className="text-muted-foreground">
              Now you can start adding mailboxes and warming up your inbox to
              ensure optimal deliverability.
            </p>
          </div>

          <Alert className={cn("border-green-200 bg-green-50")}>
            <AlertTitle className="text-green-900">🎉 What's Next?</AlertTitle>
            <AlertDescription>
              <ul className="text-sm text-green-700 space-y-2 text-left mt-3">
                <li>
                  • Create mailboxes for your domain (e.g., john@{domainName})
                </li>
                <li>• Start the warmup process to build sender reputation</li>
                <li>• Begin creating and sending cold email campaigns</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Button
            onClick={handleComplete}
            size="lg"
            className={cn(
              "bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold",
              "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200",
              "flex items-center space-x-2 mx-auto"
            )}
          >
            <Mail className="w-5 h-5" />
            <span>Go to Mailboxes</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Confirmation;
