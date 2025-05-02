"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { copyText as t } from "./copy";

export function RecipientsSettings() {
  // TODO: Implement actual file upload/CSV parsing/manual entry logic
  // TODO: Connect state to react-hook-form or parent state
  const [recipientInput, setRecipientInput] = React.useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.recipients.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {t.recipients.description}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Upload className="h-4 w-4" />
            {t.recipients.uploadCsvButton}
          </Button>
          {/* Add functionality to switch to manual input */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="manual-recipients">{t.recipients.manualInputLabel}</Label>
          <Textarea
            id="manual-recipients"
            placeholder={t.recipients.textareaPlaceholder}
            value={recipientInput}
            onChange={(e) => setRecipientInput(e.target.value)}
            rows={6}
          />
          <p className="text-xs text-muted-foreground">
            {t.recipients.helpText}
          </p>
        </div>
        {/* TODO: Display added recipients count or list preview */}
      </CardContent>
    </Card>
  );
}

