import ConversationHeader from "@/components/inbox/conversation/conversation-header";
import ConversationMessages from "@/components/inbox/conversation/conversation-messages";
import ConversationReplay from "@/components/inbox/conversation/conversation-replay";
import ConversationSkeleton from "@/components/inbox/conversation/conversation-skeleton";
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

function page({ params: { id } }: { params: { id: string } }) {
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
        </CardHeader>
        <CardContent className="p-0">
          <ConversationMessages />
        </CardContent>
        <CardFooter className="p-0" >
          <ConversationReplay />
        </CardFooter>
      </Card>
    </ConversationProvider>
  );
}

{
  /* Reply Box */
}
// <div className="p-6 border-t border-gray-200 bg-white">
//   <div className="space-y-4">
//     {/* Quick Actions */}
//     <div className="flex items-center space-x-2">
//       <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2">
//         <Calendar className="w-4 h-4" />
//         <span>Schedule Follow-up</span>
//       </button>
//       <div className="relative">
//         <button
//           onClick={() => setShowQuickReplies(!showQuickReplies)}
//           className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2"
//         >
//           <Zap className="w-4 h-4" />
//           <span>Quick Reply</span>
//           <ChevronDown className="w-3 h-3" />
//         </button>
//         {showQuickReplies && (
//           <div className="absolute bottom-full mb-2 left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//             <div className="p-3 border-b border-gray-200">
//               <h4 className="font-medium text-gray-900">
//                 Quick Replies
//               </h4>
//             </div>
//             <div className="p-2">
//               {quickReplies.map((reply, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleQuickReply(reply)}
//                   className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm text-gray-700"
//                 >
//                   {reply}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>

{
  /* Reply Textarea */
}
//     <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
//       <div className="flex items-center space-x-2 p-3 border-b border-gray-200 bg-gray-50">
//         <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-200 transition-colors">
//           <Bold className="w-4 h-4" />
//         </button>
//         <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-200 transition-colors">
//           <Italic className="w-4 h-4" />
//         </button>
//         <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-200 transition-colors">
//           <Link className="w-4 h-4" />
//         </button>
//         <div className="w-px h-4 bg-gray-300"></div>
//         <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-200 transition-colors">
//           <Paperclip className="w-4 h-4" />
//         </button>
//         <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-200 transition-colors">
//           <Smile className="w-4 h-4" />
//         </button>
//       </div>
//       <textarea
//         value={replyText}
//         onChange={(e) => setReplyText(e.target.value)}
//         placeholder="Type your reply..."
//         rows={4}
//         className="w-full p-4 border-0 focus:ring-0 resize-none"
//       />
//     </div>

//     {/* Send Actions */}
//     <div className="flex items-center justify-between">
//       <div className="flex items-center space-x-2">
//         <select
//           value={selectedTag}
//           onChange={(e) => setSelectedTag(e.target.value)}
//           className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//         >
//           <option value="">Tag as...</option>
//           <option value="interested">Interested</option>
//           <option value="not-interested">Not Interested</option>
//           <option value="maybe-later">Maybe Later</option>
//           <option value="follow-up">Needs Follow-up</option>
//         </select>
//       </div>
//       <div className="flex items-center space-x-2">
//         <button
//           onClick={() => setReplyText("")}
//           className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleSendReply}
//           disabled={!replyText.trim()}
//           className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
//         >
//           <Send className="w-4 h-4" />
//           <span>Send Reply</span>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

{
  /* Notes Panel */
}
// {showNotes && (
//   <div className="p-4 bg-yellow-50 border-b border-yellow-200">
//     <div className="flex items-center justify-between mb-2">
//       <h3 className="font-medium text-yellow-900">Internal Notes</h3>
//       <button
//         onClick={() => setShowNotes(false)}
//         className="text-yellow-600 hover:text-yellow-800"
//       >
//         <X className="w-4 h-4" />
//       </button>
//     </div>
//     <textarea
//       value={notes || selectedConv.notes}
//       onChange={(e) => setNotes(e.target.value)}
//       placeholder="Add internal notes about this conversation..."
//       className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none bg-white"
//       rows={3}
//     />
//     <div className="flex justify-end mt-2">
//       <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
//         Save Notes
//       </button>
//     </div>
//   </div>
// )}
