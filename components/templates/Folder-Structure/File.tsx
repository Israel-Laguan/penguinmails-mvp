"use client";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Input } from "@/components/ui/input";
import { FileText, Edit2, Trash2 } from "lucide-react";

interface FileProps {
  file: Template;
  onRename?: (fileId: number, newName: string) => void;
  onDelete?: (fileId: number) => void;
}

function File({ file, onRename, onDelete }: FileProps) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(file.name);

  const handleRename = () => {
    if (newName.trim() && newName !== file.name && onRename) {
      onRename(file.id, newName.trim());
    }
    setIsRenaming(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRename();
    } else if (e.key === "Escape") {
      setNewName(file.name);
      setIsRenaming(false);
    }
  };

  const handleDelete = () => {
    if (
      onDelete &&
      confirm(`Are you sure you want to delete the template "${file.name}"?`)
    ) {
      onDelete(file.id);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer">
          <FileText className="w-4 h-4 text-gray-500" />

          <span className="text-sm ">{file.name}</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <Edit2 />
          Rename
        </ContextMenuItem>
        <ContextMenuItem className="text-red-600 focus:text-red-600">
          <Trash2 className="text-red-600" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default File;
