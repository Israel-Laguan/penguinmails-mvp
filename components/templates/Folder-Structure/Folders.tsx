import { Accordion } from "@/components/ui/accordion";
import Folder from "./Folder";

function Folders({ folders , showFiles }: { folders: TemplateFolder[] , showFiles?: boolean }) {
  return (
    <Accordion type="multiple">
      {folders.map((folder) => (
        <Folder key={folder.id} folder={folder} showFiles={showFiles} />
      ))}
    </Accordion>
  );
}
export default Folders;
