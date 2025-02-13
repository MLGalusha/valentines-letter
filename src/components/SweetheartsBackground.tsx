import React from "react";
import SweetheartSVG from "./SweetheartSVG";
import "./styles/sweethearts.css";

interface SweetheartsBackgroundProps {
  currentPage: string;
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

interface HeartPosition {
  id: number;
  left: number;
  top: number;
  moveX: string;
  moveY: string;
  duration: number;
  delay: number;
}

const NUM_SWEETHEARTS = 20;

const SweetheartsBackground: React.FC<SweetheartsBackgroundProps> = ({
  currentPage,
}) => {
  // Render the hearts only if we're on the "start" or "letter" page.
  if (
    currentPage !== "start" &&
    currentPage !== "letter" &&
    currentPage !== "yes"
  ) {
    return null;
  }

  // Generate random positions and animation parameters for each heart.
  const hearts: HeartPosition[] = Array.from(
    { length: NUM_SWEETHEARTS },
    (_, index) => {
      const left = randomBetween(0, 90);
      const top = randomBetween(0, 90);
      const moveX = `${Math.floor(randomBetween(-400, 400))}px`;
      const moveY = `${Math.floor(randomBetween(-400, 400))}px`;
      const duration = randomBetween(10, 20);
      const delay = randomBetween(0, 5);
      return { id: index, left, top, moveX, moveY, duration, delay };
    }
  );

  return (
    <div className="sweethearts-background">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="sweetheart"
          style={
            {
              position: "absolute",
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animation: `moveHeart ${heart.duration}s linear ${heart.delay}s infinite`,
              // Pass custom CSS variables for the movement animation
              "--moveX": heart.moveX,
              "--moveY": heart.moveY,
            } as React.CSSProperties
          }
        >
          <SweetheartSVG width={120} height={120} />
        </div>
      ))}
    </div>
  );
};

export default SweetheartsBackground;
