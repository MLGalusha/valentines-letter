"use client";
import { useState } from "react";
import "./styles/letter.css";

interface LetterProps {
  onSetCurrentPage: (currentPage: string) => void;
  isFullScreen: boolean;
}

function Letter({ onSetCurrentPage, isFullScreen }: LetterProps) {
  const [noCount, setNoCount] = useState(0);
  // Calculate the yes button size based on noCount
  // (Optionally, you might cap this value if desired)
  const yesButtonSize = noCount * 6 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Think again.",
      "Why not?",
      "You might regret this!",
      "Give it another thought.",
      "Have a heart!",
      "Don't be so cold!",
      "Would you reconsider?",
      "I can't believe this!",
      "WOW!",
      "Don't you dare press it again!",
    ];

    if (noCount > phrases.length - 1) {
      onSetCurrentPage("no");
    }

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className={`overflow ${isFullScreen ? "fullscreen" : "in-envelope"}`}>
      <div className="letter-opened">
        <div
          className={`the-question ${
            isFullScreen ? "fullscreen" : "in-envelope"
          }`}
        />
        <div className="extra-text">
          Your choice today will affect the next 24 hours of your life. Maybe
          forever. Maybe not. Who knows?
        </div>
        {/* New Button Container: positions buttons at the bottom center */}
        <div className="button-container">
          <button
            className="yes-button"
            style={
              {
                "--yes-button-font-size": `${yesButtonSize}px`,
              } as React.CSSProperties
            }
            onClick={() => onSetCurrentPage("yes")}
          >
            Yes
          </button>
          <button className="no-button" onClick={handleNoClick}>
            <div className="yes-button-text">
              {noCount === 0 ? "No" : getNoButtonText()}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Letter;
