'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Card, CardContent } from "@/components/ui/card";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateEditMode } from "@/components/templates/TemplateEditMode";

// Use same temporary data store
const templateData = {
  't1': {
    id: 't1',
    name: 'Welcome Email',
    category: "Onboarding",
    subject: 'Welcome to Our Service!',
    body: "Welcome to our service!\n\nWe're excited to have you on board.",
    createdAt: "2 weeks ago"
  },
  // ...existing templates...
};

export default function TemplateEditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const template = templateData[params.id];

  const [formData, setFormData] = useState({
    name: template?.name || "",
    category: template?.category || "",
    subject: template?.subject || "",
    body: template?.body || ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const insertTag = (tag: string, field: "subject" | "body") => {
    const textarea = document.getElementById(field) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;
    const text = formData[field];
    const newText = text.substring(0, start) + tag + text.substring(end);
    
    handleChange(field, newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tag.length, start + tag.length);
    }, 0);
    
    toast.success('Tag inserted', {
      description: `${tag} has been inserted into your template.`
    });
  };

  const handleSave = () => {
    toast.success('Template saved', {
      description: 'Your template has been saved successfully.'
    });
    router.push("/dashboard/templates");
  };

  if (!template) {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card>
          <CardContent className="p-6">
            <p>The template you're looking for doesn't exist.</p>
            <button className="mt-4" onClick={() => router.push("/dashboard/templates")}>
              Return to Templates
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <TemplateHeader 
        templateName={template.name}
        templateId={template.id}
        isViewMode={false}
        onSave={handleSave}
      />
      
      <Card className="overflow-visible">
        <CardContent className="p-6 space-y-4">
          <TemplateEditMode 
            formData={formData}
            onFormChange={handleChange}
            onInsertTag={insertTag}
          />
        </CardContent>
      </Card>
    </div>
  );
}
