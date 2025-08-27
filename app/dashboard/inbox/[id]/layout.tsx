import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import ConversationSmallList from "../components/ConversationSmallList";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="overflow-hidden">
      <Sidebar className="relative group-data-[state='collapsed']:w-0 w-80 h-full">
        <SidebarContent className="bg-white">
          <ConversationSmallList />
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="w-full">{children}</SidebarInset>
    </SidebarProvider>
  );
}
export default layout;
