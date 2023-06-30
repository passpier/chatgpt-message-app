"use client";

import React from "react";
import NewChat from "@/components/NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "@firebase/firestore";
import { db } from "../../firebase";
import ChatRow from "@/components/ChatRow";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/*  Model Selection */}</div>
          {/*  Map through the CharRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <button
          onClick={() => signOut()}
          className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800"
        >
          <img
            src={session.user?.image!}
            alt="Profile Pic"
            className="h-5 w-5 rounded-sm"
          />
          <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white">
            User Name
          </div>
        </button>
      )}
    </div>
  );
};

export default SideBar;
