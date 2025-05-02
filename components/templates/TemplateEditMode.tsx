
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PersonalizationTags from "@/components/email/PersonalizationTags";

interface TemplateFormData {
  name: string;
  category: string;
  subject: string;
  body: string;
}

interface TemplateEditModeProps {
  formData: TemplateFormData;
  onFormChange: (field: string, value: string) => void;
  onInsertTag: (tag: string, field: "subject" | "body") => void;
}

export function TemplateEditMode({ 
  formData, 
  onFormChange, 
  onInsertTag 
}: TemplateEditModeProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Template Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => onFormChange("name", e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => onFormChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Outreach">Outreach</SelectItem>
              <SelectItem value="Introduction">Introduction</SelectItem>
              <SelectItem value="Follow-up">Follow-up</SelectItem>
              <SelectItem value="Meeting">Meeting</SelectItem>
              <SelectItem value="Value">Value</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="subject">Subject Line</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Include personalization tags in your subject line.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <Input 
            id="subject" 
            value={formData.subject} 
            onChange={(e) => onFormChange("subject", e.target.value)} 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="body">Email Body</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Use personalization tags to make your emails more personal.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Textarea 
          id="body" 
          value={formData.body} 
          onChange={(e) => onFormChange("body", e.target.value)} 
          rows={12}
        />
      </div>
      
      <PersonalizationTags 
        onInsertTag={(tag) => onInsertTag(tag, "body")} 
      />
    </div>
  );
}
