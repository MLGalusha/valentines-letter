import React from "react";
import "./styles/SweetheartsBackground.css";

interface Sweetheart {
  id: number;
  phrase: string;
  color: string;
  left: number; // percentage (0-90)
  top: number; // percentage (0-90)
  moveX: string; // e.g., "200px" or "-150px"
  moveY: string; // e.g., "100px" or "-80px"
  duration: number; // seconds
  delay: number; // seconds
}

const phrases = [
  "BE MINE.",
  "BESTIE.",
  "CUTIE PIE.",
  "UR MINE",
  "ALL MINE",
  "I ♥ U",
  "ME + YOU",
  "ONLY YOU",
  "QT PIE",
  "SO SWEET",
  "UR SWEET",
  "Kiss Me",
  "Call Me",
  "Hug Me",
  "Love You",
  "XOXO",
  "You Rock",
  "BFF",
  "Marry Me",
  "Text Me",
  "ILY",
  "Miss You",
  "True Love",
  "Forever",
  "I <3 U",
  "LOL",
  "ILYSM",
  "U R Hot",
  "My Baby",
  "OMG",
  "4EVER",
];

const colors = [
  "#FFC0CB",
  "#90EE90",
  "#D8BFD8",
  "#FFFFE0",
  "#FFA500",
  "#FFFFFF",
  "#A52A2A",
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

const NUM_SWEETHEARTS = 20;

const SweetheartsBackground: React.FC = () => {
  const sweethearts: Sweetheart[] = Array.from(
    { length: NUM_SWEETHEARTS },
    (_, index) => {
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = randomBetween(0, 90); // keep within container
      const top = randomBetween(0, 90);
      const moveX = `${Math.floor(randomBetween(-200, 200))}px`;
      const moveY = `${Math.floor(randomBetween(-200, 200))}px`;
      const duration = randomBetween(10, 20);
      const delay = randomBetween(0, 5);
      return {
        id: index,
        phrase,
        color,
        left,
        top,
        moveX,
        moveY,
        duration,
        delay,
      };
    }
  );

  return (
    <div className="sweethearts-background">
      {sweethearts.map((s) => (
        <div
          key={s.id}
          className="sweetheart"
          style={
            {
              backgroundColor: s.color,
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              // Set custom CSS variables for movement:
              "--moveX": s.moveX,
              "--moveY": s.moveY,
            } as React.CSSProperties
          }
        >
          <span className="sweetheart-text">{s.phrase}</span>
        </div>
      ))}
    </div>
  );
};

export default SweetheartsBackground;
