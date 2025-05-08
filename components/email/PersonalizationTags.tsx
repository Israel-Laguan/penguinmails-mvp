
import React from "react";
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Common personalization tags that can be used across the application
export const personalizationTags = [
  { id: 1, name: "First Name", tag: "{First Name}" },
  { id: 2, name: "Last Name", tag: "{Last Name}" },
  { id: 3, name: "Company", tag: "{Company}" },
  { id: 4, name: "Job Title", tag: "{Job Title}" },
  { id: 5, name: "Industry", tag: "{Industry}" },
  { id: 6, name: "City", tag: "{City}" },
  { id: 7, name: "Website", tag: "{Website}" },
  { id: 8, name: "Company Size", tag: "{Company Size}" },
  { id: 9, name: "My First Name", tag: "{My First Name}" },
  { id: 10, name: "My Company", tag: "{My Company}" },
];

interface PersonalizationTagsProps {
  onInsertTag: (tag: string) => void;
  label?: string;
  className?: string;
}

export default function PersonalizationTags({ 
  onInsertTag, 
  label = "Personalization Tags", 
  className = ""
}: PersonalizationTagsProps) {
  const handleTagClick = (tag: string, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    onInsertTag(tag);
    toast.message('Tag inserted', {
      description: `${tag} has been inserted into your template.`,
    });
  };
  
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-2 mt-2">
        {personalizationTags.map(tag => (
          <Button 
            key={tag.id}
            variant="outline" 
            size="sm" 
            onClick={(event) => handleTagClick(tag.tag, event)}
            className="text-xs"
          >
            <Tag className="h-3 w-3 mr-1" />
            {tag.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
