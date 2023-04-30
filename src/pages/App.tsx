import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Page from "../components/ContentSection";
import { DocsData } from "../types/Types";
import Header from "../components/Header";

function App() {
  const [docsUrl, setDocsUrl] = useState<string>("");
  const [docsData, setDocsData] = useState<DocsData | null>(null);
  const [selectedPage, setSelectedPage] = useState(0);

  /* ***** Note:Not required since api call is fetching on submit button not on loading component ***
   useEffect(() => {
    
     if (docsUrl) {
     fetchData();
     }
   }, [docsUrl]);
  *******   */

  const fetchData = async () => {
    try {
      const response = await fetch(docsUrl);
      const data = await response?.json?.();
      console.log(data.Pages);
      setDocsData(data);
    } catch (error) {
      // Handle error here
    }
  };

  const handleSelectPage = (index: number) => {
    setSelectedPage(index);
  };

  return (
    <>
      <Header docsUrl={docsUrl} setDocsUrl={setDocsUrl} onClick={fetchData} />
      {docsData ? (
        <div className="flex h-full">
          <div className="w-1/4 h-auto bg-white border-r border-gray-100 bg-white shadow ">
            <Sidebar
              docsData={docsData}
              selectedPage={selectedPage}
              onSelectPage={handleSelectPage}
            />
          </div>
          <div className="w-3/4 mx-10  h-full flex flex-col ">
            {docsData && <Page page={docsData.Pages[selectedPage]} />}
          </div>
        </div>
      ) : (
        <div className=" flex w-full  justify-center items-center mt-32">
          <h1 className="text-xl font-sm">{"Nothing to show"}</h1>
        </div>
      )}
    </>
  );
}

export default App;
