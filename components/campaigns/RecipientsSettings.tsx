"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, List } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function RecipientsSettings() {
  // TODO: Implement actual file upload/CSV parsing/manual entry logic
  // TODO: Connect state to react-hook-form or parent state
  const [recipientInput, setRecipientInput] = React.useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recipients</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Add recipients by uploading a CSV file or manually entering email addresses.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Upload className="h-4 w-4" />
            Upload CSV
          </Button>
          {/* Add functionality to switch to manual input */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="manual-recipients">Manually Add Recipients</Label>
          <Textarea
            id="manual-recipients"
            placeholder="Enter email addresses, one per line...\nExample:\njohn.doe@example.com\njane.smith@example.com"
            value={recipientInput}
            onChange={(e) => setRecipientInput(e.target.value)}
            rows={6}
          />
          <p className="text-xs text-muted-foreground">
            Enter one email address per line. You can also include variables like: email,firstName,lastName\njohn.doe@example.com,John,Doe
          </p>
        </div>
        {/* TODO: Display added recipients count or list preview */}
      </CardContent>
    </Card>
  );
}

