"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddTemplateContext } from "@/context/AddTemplateContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

function EmailContentStep() {
  const { form, setCurrentStep } = useAddTemplateContext();
  const [showPreview, setShowPreview] = useState(false);

  const watchType = form.watch("type");
  const watchSubject = form.watch("subject");
  const watchContent = form.watch("content");

  // Common personalization variables
  const variables = [
    "{{first_name}}",
    "{{last_name}}",
    "{{company}}",
    "{{position}}",
    "{{sender_name}}",
    "{{sender_company}}",
  ];

  const insertVariable = (variable: string) => {
    const currentContent = form.getValues("content");
    form.setValue("content", currentContent + " " + variable);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSaveDraft = async () => {
    // Here you would save as draft
    console.log("Saving draft...", form.getValues());
    // Could show a toast notification
  };

  const handleSaveTemplate = async () => {
    let isValid = false;
    if (watchType === "quick-reply") {
      isValid = await form.trigger(["content"]);
    } else {
      isValid = await form.trigger(["subject", "content"]);
    }

    if (isValid) {
      // Here you would save the template
      console.log("Saving template...", form.getValues());
      setCurrentStep(3);
    }
  };

  const previewContent = watchContent?.replace(
    /\{\{(\w+)\}\}/g,
    (match, key) => {
      const previews: Record<string, string> = {
        first_name: "John",
        last_name: "Doe",
        company: "Acme Corp",
        position: "Marketing Manager",
        sender_name: "Alex Smith",
        sender_company: "Your Company",
      };
      return previews[key] || match;
    }
  );

  const previewSubject = watchSubject?.replace(
    /\{\{(\w+)\}\}/g,
    (match, key) => {
      const previews: Record<string, string> = {
        first_name: "John",
        last_name: "Doe",
        company: "Acme Corp",
        position: "Marketing Manager",
        sender_name: "Alex Smith",
        sender_company: "Your Company",
      };
      return previews[key] || match;
    }
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
               Email Content
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Subject Line - Only for Campaign Email */}
            {watchType === "campaign-email" && (
              <div className="space-y-2">
                <Label htmlFor="subject">Subject Line *</Label>
                <Input
                  id="subject"
                  placeholder="Enter email subject"
                  {...form.register("subject")}
                />
                {form.formState.errors.subject && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>
            )}

            {/* Email Body */}
            <div className="space-y-2">
              <Label htmlFor="content">Email Body *</Label>
              <Textarea
                id="content"
                placeholder="Write your email content here..."
                className="min-h-[300px]"
                {...form.register("content")}
              />
              {form.formState.errors.content && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.content.message}
                </p>
              )}
            </div>

            {/* Variable Helper */}
            <div className="space-y-2">
              <Label>Personalization Variables</Label>
              <p className="text-sm text-muted-foreground">
                Click to add variables to your email content
              </p>
              <div className="flex flex-wrap gap-2">
                {variables.map((variable) => (
                  <Badge
                    key={variable}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => insertVariable(variable)}
                  >
                    {variable}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack}>
                ← Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleSaveDraft}>
                  Save Draft
                </Button>
                <Button onClick={handleSaveTemplate}>Save Template →</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
               Preview
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Hide" : "Show"} Preview
              </Button>
            </CardTitle>
          </CardHeader>
          {showPreview && (
            <CardContent>
              <div className="border rounded-lg p-4 bg-muted/50">
                {watchType === "campaign-email" && (
                  <div className="mb-4">
                    <Label className="text-sm font-medium">Subject:</Label>
                    <p className="font-semibold">
                      {previewSubject || "No subject"}
                    </p>
                  </div>
                )}
                <div>
                  <Label className="text-sm font-medium">Content:</Label>
                  <div className="mt-2 whitespace-pre-wrap text-sm">
                    {previewContent || "No content"}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>
                  Preview shows how variables will be replaced with actual data.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}

export default EmailContentStep;
