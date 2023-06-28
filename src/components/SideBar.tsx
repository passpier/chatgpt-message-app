import React from "react";
import NewChat from "@/components/NewChat";

interface SideBarProps {
  data?: any;
}

const SideBar: React.FC<SideBarProps> = ({ data }) => {
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat data="" />
          <div>{/*  Model Selection */}</div>
          {/*  Map through the CharRows */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
