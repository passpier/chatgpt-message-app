import React from "react";
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

const ChatPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
