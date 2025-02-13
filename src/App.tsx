import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter";
import NoPage from "./components/NoPage";
import SweetheartsBackground from "./components/SweetheartsBackground";
import YesPage from "./components/YesPage";
import FinalNoPage from "./components/FinalNoPage";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("start");

  function updatePage(newPage: string) {
    setCurrentPage(newPage);
  }

  return (
    <div className="contain-main-page">
      <SweetheartsBackground currentPage={currentPage} />
      {currentPage === "start" ? (
        <div className="contain-envelope" onClick={() => updatePage("letter")}>
          <div className="env-shadow" />
          <div className="envelope">
            <div className="envelope-closed"></div>
            {/* <div className="envelope-letter"></div> */}
            <div className="contain-letter">
              <Letter onSetCurrentPage={updatePage} isFullScreen={false} />
            </div>
            <div className="envelope-opened-top"></div>
            <div className="envelope-opened"></div>
          </div>
        </div>
      ) : currentPage === "letter" ? (
        <div>
          <Letter onSetCurrentPage={updatePage} isFullScreen={true} />
        </div>
      ) : currentPage === "no" ? (
        <div>
          <NoPage
            onSetCurrentPage={updatePage}
            onSubmit={() => setCurrentPage("final-no-page")}
          />
        </div>
      ) : currentPage === "final-no-page" ? (
        <div>
          <FinalNoPage onSetCurrentPage={updatePage} />
        </div>
      ) : (
        <div>
          <YesPage onSetCurrentPage={updatePage} />
        </div>
      )}
    </div>
  );
}

export default App;
