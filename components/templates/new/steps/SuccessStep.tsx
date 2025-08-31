"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAddTemplateContext } from "@/context/AddTemplateContext";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

function SuccessStep() {
  const { form } = useAddTemplateContext();
  const templateData = form.getValues();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">
            Template Created Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-lg font-medium">
              &ldquo;{templateData.name}&rdquo;
            </p>
            <p className="text-muted-foreground">
              Your{" "}
              {templateData.type === "quick-reply"
                ? "Quick Reply"
                : "Campaign Email"}{" "}
              template has been saved and is ready to use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="font-medium">Type</p>
              <p className="text-muted-foreground">
                {templateData.type === "quick-reply"
                  ? "Quick Reply"
                  : "Campaign Email"}
              </p>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="font-medium">Folder</p>
              <p className="text-muted-foreground">
                {templateData.newFolder || templateData.folder || "No folder"}
              </p>
            </div>
          </div>

          {templateData.tags && templateData.tags.length > 0 && (
            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="font-medium mb-2">Tags</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {templateData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="flex-1">
              <Link href="/dashboard/templates">Back to Templates</Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link href="/dashboard/templates/new">
                Create Another Template
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SuccessStep;
