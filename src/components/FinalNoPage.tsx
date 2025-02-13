import React from "react";
import "./styles/FinalNoPage.css";
import Mushu from "/Users/masongalusha/Documents/CodeVault/valentines-app/src/assets/mushu.gif";

interface NoPageProps {
  onSetCurrentPage: (newPage: string) => void;
}

const FinalNoPage: React.FC<NoPageProps> = ({ onSetCurrentPage }) => {
  return (
    <div className="final-no-page-container">
      <h1 className="final-no-title">FINE, BE THAT WAY.</h1>
      <p className="final-no-subtitle">
        I hope you're happy with this choice...
      </p>
      <img className="final-no-gif" src={Mushu} alt="Sad Trombone" />
      <p className="final-no-message">
        What a loser you just wasted your time on that dumbass form!
      </p>
      <button
        className="final-restart-button"
        onClick={() => onSetCurrentPage("letter")}
      >
        Beg For Forgiveness
      </button>
    </div>
  );
};

export default FinalNoPage;
