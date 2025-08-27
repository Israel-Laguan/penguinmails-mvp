"use client";
import { createContext, useContext, useState } from "react";

const ConversationContext = createContext<{
  selectedConversation: Conversation;
  setSelectedConversation: (conversation: Conversation) => void;
  showNotes: boolean;
  setShowNotes: (show: boolean) => void;
}>({
  selectedConversation: {} as Conversation,
  setSelectedConversation: () => {},
  showNotes: false,
  setShowNotes: () => {},
});

export function ConversationProvider({
  children,
  conversation,
}: {
  children: React.ReactNode;
  conversation: Conversation;
}) {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation>(conversation);
  const [showNotes, setShowNotes] = useState(false);

  const value = {
    selectedConversation,
    setSelectedConversation,
    showNotes,
    setShowNotes,
  };
  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      "useConversation must be used within a ConversationProvider"
    );
  }
  return context;
}
