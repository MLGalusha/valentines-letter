import React from "react";
import "./styles/yespage.css";
import RickGif from "/Users/masongalusha/Documents/CodeVault/valentines-app/src/assets/rick-dance.gif";
import HagGif from "/Users/masongalusha/Documents/CodeVault/valentines-app/src/assets/hag-dance.gif";
import Cheers from "/Users/masongalusha/Documents/CodeVault/valentines-app/src/assets/cheers.gif";

interface YesPageProps {
  onSetCurrentPage: (newPage: string) => void;
}

const YesPage: React.FC<YesPageProps> = ({ onSetCurrentPage }) => {
  return (
    <div className="yes-page-container">
      <h1 className="yes-title">Of course you said yes—look at me.</h1>
      <p className="yes-subtitle">I mean, was there really another choice?</p>
      <div className="smug-animation">
        {/* This could be a GIF, Lottie animation, or any image */}
        <div className="hagrid-position">
          <img src={HagGif} alt="Smug GIF" />
        </div>
        <div className="rick-position">
          <img src={RickGif} alt="Smug GIF" />
        </div>
        <div className="cheers-position">
          <img src={Cheers} alt="Smug GIF" />
        </div>
      </div>
      <p className="yes-followup">
        Now that we agree I'm always right, click “Obviously” to move on.
      </p>
      <button
        className="yes-cta-button"
        onClick={() => onSetCurrentPage("start")}
      >
        Obviously
      </button>
    </div>
  );
};

export default YesPage;
