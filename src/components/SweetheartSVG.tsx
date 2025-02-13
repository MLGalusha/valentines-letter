import React, { useMemo } from "react";
import "./styles/sweethearts.css";

// Example phrases & colors from your existing code:
const phrases = [
  "BE MINE.",
  "BESTIE.",
  "CUTIE PIE.",
  "UR MINE",
  "ALL MINE",
  "I♥U",
  "ME + YOU",
  "ONLY YOU",
  "QT PIE",
  "SO SWEET",
  "UR SWEET",
  "KISS ME",
  "CALL ME",
  "HUG ME",
  "LOVE YOU",
  "XOXO",
  "YOU ROCK",
  "BFF",
  "MARRY ME",
  "TEXT ME",
  "ILY",
  "MISS YOU",
  "TRUE LOVE",
  "FOREVER",
  "I<3U",
  "LOL",
  "ILYSM",
  "UR HOT",
  "MY BABY",
  "OMG",
  "4EVER",
];

// Your color list:
const colors = [
  "#FFC0CB", // Pink
  "#90EE90", // Green
  "#D8BFD8", // Purple
  "#FFFFE0", // Yellow
  "#FFA500", // Orange
  "#ADD8E6", // Light Blue
];

// Darken a hex color by a given factor (0 to 1)
function darkenColor(hex: string, factor: number): string {
  const cleanHex = hex.replace("#", "");
  let r = parseInt(cleanHex.substring(0, 2), 16);
  let g = parseInt(cleanHex.substring(2, 4), 16);
  let b = parseInt(cleanHex.substring(4, 6), 16);

  r = Math.floor(r * (1 - factor));
  g = Math.floor(g * (1 - factor));
  b = Math.floor(b * (1 - factor));

  const toHex = (val: number) => val.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

interface SweetheartSVGProps {
  width?: number;
  height?: number;
}

const SweetheartSVG: React.FC<SweetheartSVGProps> = ({
  width = 100,
  height = 100,
}) => {
  // Randomly pick a phrase & color once per mount
  const randomPhrase = useMemo(
    () => phrases[Math.floor(Math.random() * phrases.length)],
    []
  );
  const randomColor = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  );
  // Slightly darken the main color for the "side" portion
  const sideColor = useMemo(
    () => darkenColor(randomColor, 0.15),
    [randomColor]
  );

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* A subtle drop shadow for added depth */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="2"
            floodColor="#000"
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      {/*
        "Side" path: slightly offset behind the "front" path.
        This shape simulates the angled thickness of the candy.
      */}
      <path
        d="M 5,35
        A 20,20 0,0,1 45,35
        A 20,20 0,0,1 85,35
        Q 85,65 45,95
        Q 5,65 5,35 z"
        fill={sideColor}
        stroke={sideColor}
        strokeWidth="1.5"
        filter="url(#shadow)"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/*
        "Front" path: main face of the heart, slightly to the right.
        Same general shape, offset horizontally for that 3D look.
      */}
      <path
        d="M 10,30
        A 20,20 0,0,1 50,30
        A 20,20 0,0,1 90,30
        Q 90,60 50,90
        Q 10,60 10,30 z"
        fill={randomColor}
        stroke={sideColor}
        strokeWidth="1.5"
        filter="url(#shadow)"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Centered text on the "front" heart area.
          Slightly adjusted x=52 to better center it on the front shape.
      */}
      <text
        className="sweetheart-font"
        x="45"
        y="44" // Adjust this number for fine-tuning vertical centering
        dominantBaseline="middle" // Aligns text by its center
        textAnchor="middle" // Keeps text centered horizontally
        fill="#d7372b" // Darker text color based on heart color
        style={{ pointerEvents: "none" }}
      >
        {randomPhrase.split(" ").map((word, index) => (
          <tspan key={index} x="52" dy={index === 0 ? 0 : 13}>
            {word}
          </tspan>
        ))}
      </text>
    </svg>
  );
};

export default SweetheartSVG;
