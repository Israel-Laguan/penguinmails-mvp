"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { copyText as t } from "@/components/domains/copy";
import DomainForm, { type DomainFormValues } from "@/components/domains/domain-form";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Shield } from "lucide-react";
import { createDomain } from "../actions";

export default function NewDomainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: DomainFormValues) => {
    setIsLoading(true);
    try {
      await createDomain(data);
      toast.success(t.notifications.success.title, {
        description: t.notifications.success.description
      });
      router.push("/dashboard/domains");
    } catch (error) {
      toast.error(t.notifications.error.title, {
        description: error instanceof Error ? error.message : t.notifications.error.description
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t.form.title}</h1>
        <p className="text-muted-foreground">{t.form.description}</p>
      </div>

      <div className="grid gap-6">
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>{t.form.alerts.setup.title}</AlertTitle>
          <AlertDescription>{t.form.alerts.setup.description}</AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>{t.form.sections.domain.title}</CardTitle>
            <CardDescription>{t.form.sections.domain.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <DomainForm onSubmit={handleSubmit} isLoading={isLoading} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}