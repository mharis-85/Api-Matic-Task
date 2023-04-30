import React from "react";
import { Page } from "../types/Types";
import ReactMarkdown from "react-markdown";

interface PageProps {
  page: Page;
}

const ContentSection: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="p-6 bg-gray-100 font-sans mt-12">
      <h1 className="text-xl font-medium">{page.title}</h1>
      <ReactMarkdown className="mt-4">{page.bodyText}</ReactMarkdown>
    </div>
  );
};
export default ContentSection;
//export {};
