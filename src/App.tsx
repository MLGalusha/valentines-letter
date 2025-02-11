import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("start");
  // Pages [start, letter, no, yes]

  return (
    <div className="contain-main-page">
      {currentPage === "start" ? (
        <div
          className="contain-envelope"
          onClick={() => setCurrentPage("letter")}
        >
          <div className="envelope">
            <div className="envelope-closed"></div>
            {/* <div className="envelope-letter"></div> */}
            <div className="contain-letter">
              <Letter onSetCurrentPage={setCurrentPage} isFullScreen={false} />
            </div>
            <div className="envelope-opened-top"></div>
            <div className="envelope-opened"></div>
          </div>
        </div>
      ) : currentPage === "letter" ? (
        <div>
          <Letter onSetCurrentPage={setCurrentPage} isFullScreen={true} />
        </div>
      ) : currentPage === "no" ? (
        <div>
          <h3 onClick={() => setCurrentPage("letter")}>
            Need to think about your decision again?
          </h3>
          <h1>NOOOOOOOO!!!!</h1>
        </div>
      ) : (
        <div>
          <h3 onClick={() => setCurrentPage("letter")}>
            You didn't mean to select yes?
          </h3>
          <h1>YESSSSSSSSS!!!!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
