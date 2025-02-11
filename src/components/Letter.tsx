import "./styles/styles.css";

interface LetterProps {
  onSetCurrentPage: (currentPage: string) => void;
  isFullScreen: boolean;
}

function Letter({ onSetCurrentPage, isFullScreen }: LetterProps) {
  return (
    <div className={`overflow ${isFullScreen ? "fullscreen" : "in-envelope"}`}>
      <div onClick={() => onSetCurrentPage("start")} className="letter-opened">
        <div
          className={`the-question ${
            isFullScreen ? "fullscreen" : "in-envelope"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Letter;
