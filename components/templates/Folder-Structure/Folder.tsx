"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Input } from "@/components/ui/input";
import { ContextMenuSeparator } from "@radix-ui/react-context-menu";
import {
  Edit2,
  FileText,
  Folder as FolderIcon,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import File from "./File";

function Folder({
  folder,
  showFiles = true,
}: {
  folder: TemplateFolder;
  showFiles?: boolean;
}) {
  const [isRenaming, setIsRenaming] = useState(false);

  function handleRenameButton() {
    setIsRenaming(true);
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      // TODO: Implement rename logic
      setIsRenaming(false);
    } else if (e.key === "Escape") {
      setIsRenaming(false);
    }
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <AccordionItem value={folder.id.toString()}>
          <ContextMenuTrigger>
            <AccordionTrigger className="flex items-center justify-between  p-2 hover:bg-gray-100 rounded-md flex-row-reverse">
              {isRenaming ? (
                <Input
                  defaultValue={folder.name}
                  autoFocus
                  onKeyDown={handleKeyDown}
                />
              ) : (
                <div className="flex items-center justify-start space-x-3 flex-1">
                  <FolderIcon className="w-4 h-4" />
                  <span className="font-medium">{folder.name}</span>
                  {showFiles && (
                    <span className="ml-auto text-xs bg-blue-100 px-2 py-1 rounded-full">
                      {folder.children.length}
                    </span>
                  )}
                </div>
              )}
            </AccordionTrigger>
          </ContextMenuTrigger>

          <AccordionContent className="pl-8">
            {folder.children.map((child) =>
              "children" in child ? (
                <Folder key={child.id} folder={child as TemplateFolder} />
              ) : (
                showFiles && <File key={child.id} file={child as Template} />
              )
            )}
          </AccordionContent>
        </AccordionItem>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <FileText />
          New Template
        </ContextMenuItem>
        <ContextMenuItem>
          <Plus />
          New Folder
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleRenameButton}>
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
export default Folder;
