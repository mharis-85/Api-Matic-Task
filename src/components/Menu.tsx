import React from "react";
import { Page } from "../types/Types";

interface MenuProps {
  pages: Page[];
  selectedPage: number;
  onSelectPage: (page: number) => void;
}

const Menu: React.FC<MenuProps> = ({ pages, selectedPage, onSelectPage }) => {
  return (
    <nav className=" px-4 py-4">
      <ul className="space-y-2">
        {pages.map((page, i) => (
          <li
            key={i}
            className={`p-2 rounded font-medium cursor-pointer ${
              selectedPage === i ? "bg-blue-100 text-blue-700" : ""
            }`}
            onClick={() => onSelectPage(i)}
          >
            {page.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
