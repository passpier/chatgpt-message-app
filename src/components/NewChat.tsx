import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

interface NewChatProps {
  data: any;
}

const NewChat: React.FC<NewChatProps> = ({ data }) => {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
