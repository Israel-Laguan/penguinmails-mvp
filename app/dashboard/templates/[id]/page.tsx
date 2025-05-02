"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateViewMode } from "@/components/templates/TemplateViewMode";
import { TemplateEditMode } from "@/components/templates/TemplateEditMode";
import { content } from "./content";

// Sample template data (would be fetched from API in real implementation)
const templateData = {
  1: {
    id: 1,
    name: "Initial CEO Outreach",
    category: "Outreach",
    subject: "Quick question about {Company}'s growth strategy",
    body: "Hi {First Name},\n\nI hope this email finds you well. I came across {Company} recently and was impressed by your work in the {Industry} space.\n\nAs the CEO of {My Company}, I've been helping companies like yours achieve X% growth through our specialized solutions.\n\nWould you be open to a brief 15-minute call this week to discuss how we might be able to help {Company} with [specific value proposition]?\n\nBest regards,\n{My First Name}",
    createdAt: "2 weeks ago"
  },
  2: {
    id: 2,
    name: "SaaS Introduction",
    category: "Introduction",
    subject: "How {Company} can improve [specific metric] with our solution",
    body: "Hello {First Name},\n\nI noticed that {Company} has been making waves in the {Industry} industry. Congrats on your recent [achievement/news if applicable]!\n\nI'm reaching out because we've helped similar {Industry} companies solve [specific pain point] with our [product/service].\n\nOur clients typically see [specific result] within [timeframe].\n\nWould you be interested in a quick demo to see if this could be valuable for {Company}?\n\nRegards,\n{My First Name}\n{My Company}",
    createdAt: "1 month ago"
  },
  3: {
    id: 3,
    name: "Follow-up After No Response",
    category: "Follow-up",
    subject: "Re: Following up on my previous email",
    body: "Hi {First Name},\n\nI wanted to follow up on my previous email about helping {Company} with [specific value proposition].\n\nI understand you're busy, so I'll keep this brief. We've recently helped [competitor or similar company] achieve [specific result], and I believe we could do the same for {Company}.\n\nIf you're interested, I'd be happy to share some insights specific to your situation. Would a brief call this week or next work for you?\n\nBest regards,\n{My First Name}",
    createdAt: "3 weeks ago"
  }
};

// Define a type for the template IDs to help TypeScript understand the key types
type TemplateId = keyof typeof templateData;

export default function TemplateDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const action = params?.action;
  const isViewMode = action === "view" || !action;
  
  // Fix the TypeScript error by using the TemplateId type
  const validId = id ? (parseInt(id as string) as TemplateId) : undefined;
  
  // Find the template based on ID
  const template = validId ? templateData[validId] : undefined;
  
  // Initialize form state with template data
  const [formData, setFormData] = useState({
    name: template?.name || "",
    category: template?.category || "Outreach",
    subject: template?.subject || "",
    body: template?.body || ""
  });
  
  // Handle form input changes
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Insert personalization tag into subject or body
  const insertTag = (tag: string, field: "subject" | "body") => {
    const textarea = document.getElementById(field) as HTMLTextAreaElement;
    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;
    const text = formData[field];
    const newText = text.substring(0, start) + tag + text.substring(end);
    
    handleChange(field, newText);
    
    // After state update, set cursor position after inserted tag
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tag.length, start + tag.length);
    }, 0);
    
    toast(content.notifications.tagInserted.title, {
      description: content.notifications.tagInserted.description.replace("{tag}", tag)
    });
  };
  
  // Handle save action
  const handleSave = () => {
    toast(content.notifications.templateSaved.title, {
      description: content.notifications.templateSaved.description
    });
    
    router.push("/dashboard/templates");
  };
  
  if (!template) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-4">
          <Card>
            <CardContent className="p-6">
              <p>{content.errors.templateNotFound.message}</p>
              <button className="mt-4" onClick={() => router.push("/dashboard/templates")}>
                {content.errors.templateNotFound.action}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <TemplateHeader 
        templateName={template.name}
        templateId={template.id}
        isViewMode={isViewMode}
        onSave={handleSave}
      />
      
      <Card className="overflow-visible">
        <CardContent className="p-6 space-y-4">
          {isViewMode ? (
            <TemplateViewMode template={template} />
          ) : (
            <TemplateEditMode 
              formData={formData}
              onFormChange={handleChange}
              onInsertTag={insertTag}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
