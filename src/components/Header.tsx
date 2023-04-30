import React from "react";

interface HeaderProps {
  setDocsUrl: (url: string) => void;
  docsUrl: string;
  onClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ setDocsUrl, docsUrl, onClick }) => {
  return (
    <div
      style={{ backgroundColor: "#f0f0f0", position: "relative" }}
      className="flex flex-row border-gray-300 border-b shadow overflow-hidden  flex-wrap pb-4 justify-center "
    >
      <div className="flex items-center left-10 absolute top-4 pt-4">
        <h2 className="text-xl font-bold">Documentation Viewer</h2>
      </div>
      <input
        type="text"
        value={docsUrl}
        onChange={(e) => setDocsUrl(e.target.value)}
        placeholder="Enter docs URL"
        className="block ml-12 mt-6 px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-600 w-72 "
      />
      <button
        //style={{ height: 100, width: 100 }}
        className="mr-0  mt-6 ml-8 py-2 rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb- dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
};

export default Header;
