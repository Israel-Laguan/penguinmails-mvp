import ConversationHeader from "@/components/inbox/conversation/conversation-header";
import ConversationMessages from "@/components/inbox/conversation/conversation-messages";
import ConversationReplay from "@/components/inbox/conversation/conversation-replay";
import ConversationSkeleton from "@/components/inbox/conversation/conversation-skeleton";
import NotesPanel from "@/components/inbox/conversation/notes-panel";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ConversationProvider } from "@/context/ConversationContext";
import { conversations } from "@/lib/data/Inbox.mock";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) {
    return notFound();
  }
  return (
    <Suspense fallback={<ConversationSkeleton />}>
      <Conversation id={id} />
    </Suspense>
  );
}
export default page;
async function Conversation({ id }: { id: string }) {
  const conversation = conversations.find((conv) => conv.id.toString() === id);
  if (!conversation) {
    return notFound();
  }
  return (
    <ConversationProvider conversation={conversation}>
      <Card className="shadow-none border-0 rounded-none gap-0 p-0">
        <CardHeader className="p-0">
          <ConversationHeader />
          <NotesPanel />
        </CardHeader>
        <CardContent className="p-0">
          <ConversationMessages />
        </CardContent>
        <CardFooter className="p-0">
          <ConversationReplay />
        </CardFooter>
      </Card>
    </ConversationProvider>
  );
}
