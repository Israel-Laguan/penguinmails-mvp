import { initialFolders } from "@/lib/data/template.mock";
import { Folder as FolderIcon } from "lucide-react";
import Folders from "./Folder-Structure/Folders";

function QuickRepliesTab() {
  const quickRepliesFolders = initialFolders.filter(
    (folder) => folder.type === "quick-reply"
  );
  const quickReplies = quickRepliesFolders.flatMap((folder) => folder.children);
  return null;
}
export default QuickRepliesTab;
