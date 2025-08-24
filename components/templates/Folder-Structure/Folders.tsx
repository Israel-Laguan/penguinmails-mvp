import { Accordion } from "@/components/ui/accordion";
import Folder from "./Folder";

function Folders({ folders }: { folders: TemplateFolder[] }) {
  return (
    <Accordion type="multiple">
      {folders.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
    </Accordion>
  );
}
export default Folders;
