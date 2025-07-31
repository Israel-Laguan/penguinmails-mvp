import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ConversationSmallList from "../components/ConversationSmallList";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup direction="horizontal" className="flex h-full">
      <ResizablePanel defaultSize={40} minSize={35} className="flex flex-col">
        <ConversationSmallList />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={65} className="flex-1">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default layout;
