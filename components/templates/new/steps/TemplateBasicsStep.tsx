"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useAddTemplateContext } from "@/context/AddTemplateContext";
import { initialFolders } from "@/lib/data/template.mock";
import { useState } from "react";
import { X, Plus, ArrowLeft, ArrowRight } from "lucide-react";

function TemplateBasicsStep() {
  const { form, setCurrentStep } = useAddTemplateContext();
  const [newTag, setNewTag] = useState("");
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);

  const watchType = form.watch("type");
  const watchTags = form.watch("tags") || [];
  const watchIsFavorite = form.watch("isFavorite");

  // Filter folders based on selected type
  const availableFolders = initialFolders.filter(
    (folder) =>
      folder.type === (watchType === "quick-reply" ? "quick-reply" : "template")
  );

  const handleAddTag = () => {
    if (newTag.trim() && !watchTags.includes(newTag.trim())) {
      form.setValue("tags", [...watchTags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    form.setValue(
      "tags",
      watchTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleNext = async () => {
    const isValid = await form.trigger(["name", "type"]);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Template Basics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Template Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Template Name *</Label>
            <Input
              id="name"
              placeholder="Enter template name"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label>Type *</Label>
            <Select
              value={watchType}
              onValueChange={(value) =>
                form.setValue("type", value as "quick-reply" | "campaign-email")
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select template type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quick-reply">Quick Reply</SelectItem>
                <SelectItem value="campaign-email">Campaign Email</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.type && (
              <p className="text-sm text-red-500">
                {form.formState.errors.type.message}
              </p>
            )}
          </div>

          {/* Folder */}
          <div className="space-y-2">
            <Label>Folder</Label>
            <div className="space-y-2">
              <Select
                value={form.watch("folder")}
                onValueChange={(value) => {
                  if (value === "new") {
                    setShowNewFolderInput(true);
                    form.setValue("folder", "");
                  } else {
                    setShowNewFolderInput(false);
                    form.setValue("folder", value);
                    form.setValue("newFolder", "");
                  }
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a folder" />
                </SelectTrigger>
                <SelectContent>
                  {availableFolders.map((folder) => (
                    <SelectItem key={folder.id} value={folder.name}>
                      {folder.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="new">+ Create New Folder</SelectItem>
                </SelectContent>
              </Select>

              {showNewFolderInput && (
                <Input
                  placeholder="Enter new folder name"
                  value={form.watch("newFolder") || ""}
                  onChange={(e) => form.setValue("newFolder", e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label>Tags (optional)</Label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleAddTag}
                  disabled={!newTag.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {watchTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {watchTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 hover:bg-transparent"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Favorite */}
          <div className="flex items-center space-x-2">
            <Switch
              id="favorite"
              checked={watchIsFavorite}
              onCheckedChange={(checked) =>
                form.setValue("isFavorite", checked)
              }
            />
            <Label htmlFor="favorite">Mark as favorite</Label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              <span>Discard</span>
            </Button>
            <Button onClick={handleNext}>
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TemplateBasicsStep;
