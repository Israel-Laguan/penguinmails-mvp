import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Minimize2, MoveDiagonal } from "lucide-react";

function SidebarTriggerButton() {
  const { open, setOpen } = useSidebar();
  function handleToggleSidebar() {
    setOpen(!open);
  }
  return (
    <Button variant="ghost" size="icon" onClick={handleToggleSidebar}>
      {open ? (
        <Minimize2 className="w-5 h-5" />
      ) : (
        <MoveDiagonal className="w-5 h-5" />
      )}
    </Button>
  );
}
export default SidebarTriggerButton;
