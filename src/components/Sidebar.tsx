import React from "react";
import Menu from "./Menu";
import { DocsData } from "../types/Types";

interface SidebarProps {
  docsData: DocsData | null;
  selectedPage: number;
  onSelectPage: (page: number) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  docsData,
  selectedPage,
  onSelectPage,
}) => {
  if (!docsData) return null;

  const { Pages } = docsData;

  return (
    <div
      style={{
        backgroundColor: "#FEFEFE",
      }}
      className="flex-1  h-full overflow-y-auto border-r shadow my-"
    >
      <div className="flex items-center justify-center pt-4">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>
      <Menu
        pages={Pages}
        selectedPage={selectedPage}
        onSelectPage={onSelectPage}
      />
    </div>
  );
};

export default Sidebar;
