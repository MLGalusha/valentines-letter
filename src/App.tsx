import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter";
import NoPage from "./components/NoPage";
import SweetheartsBackground from "./components/SweetheartsBackground";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("start");

  function updatePage(newPage: string) {
    setCurrentPage(newPage);
  }

  return (
    <div className="contain-main-page">
      <SweetheartsBackground />
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
          <NoPage onSubmit={() => setCurrentPage("final-no-page")} />
        </div>
      ) : currentPage === "final-no-page" ? (
        <div>
          <h1>
            Wow what a loser you just wasted your time on that dumbass form!
          </h1>
        </div>
      ) : (
        <div>
          <h3 onClick={() => updatePage("letter")}>
            You didn't mean to select yes?
          </h3>
          <h1>YESSSSSSSSS!!!!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
