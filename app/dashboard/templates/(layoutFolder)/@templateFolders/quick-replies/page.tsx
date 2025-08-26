import Folders from "@/components/templates/Folder-Structure/Folders";
import { initialFolders } from "@/lib/data/template.mock";
import { FolderIcon } from "lucide-react";

function TemplateFolders() {
  const folders = initialFolders.filter(
    (folder) => folder.type === "quick-reply"
  );
  const files = folders.flatMap((folder) => folder.children);
  if (files.length === 0 && folders.length === 0) {
    return null;
  }
  return (
    <>
      <h1 className="text-md font-semibold">Folders</h1>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg">
          <FolderIcon className="w-4 h-4" />
          <span className="font-medium">All Templates</span>
          <span className="ml-auto text-xs bg-blue-100 px-2 py-1 rounded-full">
            {files.length}
          </span>
        </div>
        <Folders folders={folders} />
      </div>
    </>
  );
}
export default TemplateFolders;
