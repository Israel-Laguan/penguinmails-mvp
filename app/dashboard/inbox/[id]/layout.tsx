import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ConversationSmallList from "../components/ConversationSmallList";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25} minSize={15}>
        <ConversationSmallList />
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default layout;
