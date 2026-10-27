import React from "react";

interface LogoProps {
  className?: string;
  strokeColor?: string; // Color of the separating outlines (typically matches background)
  lotusColor?: string;  // Sage green color for the lotus petals
  stoneColors?: {
    top?: string;
    middle?: string;
    bottom?: string;
  };
}

export const Logo: React.FC<LogoProps> = ({
  className = "w-12 h-12",
  strokeColor = "#ffffff",
  lotusColor = "#9eb3a4",
  stoneColors = {
    top: "#c7d1cc",
    middle: "#a8b5b0",
    bottom: "#70807a",
  },
}) => {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="logo-graphic"
    >
      {/* Stones stacked on Left */}
      <path
        id="stone-bottom"
        d="M 62,212 C 62,185 142,192 142,215 C 142,238 62,238 62,212 Z"
        fill={stoneColors.bottom}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        id="stone-middle"
        d="M 75,178 C 75,155 145,155 145,178 C 145,198 75,198 75,178 Z"
        fill={stoneColors.middle}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        id="stone-top"
        d="M 90,147 C 90,131 138,131 138,147 C 138,162 90,162 90,147 Z"
        fill={stoneColors.top}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Needles rising from behind */}
      {/* Left Needle */}
      <line
        id="needle-left-shaft"
        x1="148"
        y1="185"
        x2="148"
        y2="82"
        stroke="#809187"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        id="needle-left-ring"
        cx="148"
        cy="80"
        r="5.5"
        stroke="#809187"
        strokeWidth="2.5"
        fill={strokeColor}
      />

      {/* Center Needle */}
      <line
        id="needle-center-shaft"
        x1="172"
        y1="180"
        x2="172"
        y2="52"
        stroke="#809187"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        id="needle-center-ring"
        cx="172"
        cy="50"
        r="5.5"
        stroke="#809187"
        strokeWidth="2.5"
        fill={strokeColor}
      />

      {/* Right Needle */}
      <line
        id="needle-right-shaft"
        x1="195"
        y1="185"
        x2="195"
        y2="107"
        stroke="#809187"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        id="needle-right-ring"
        cx="195"
        cy="105"
        r="5.5"
        stroke="#809187"
        strokeWidth="2.5"
        fill={strokeColor}
      />

      {/* Lotus Flower on Right, overlapping stones and needles */}
      {/* Left Outer Petal */}
      <path
        id="petal-outer-left"
        d="M 170,240 C 135,240 100,215 120,198 C 140,181 155,210 170,240 Z"
        fill={lotusColor}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Outer Petal */}
      <path
        id="petal-outer-right"
        d="M 170,240 C 205,240 240,215 220,198 C 200,181 185,210 170,240 Z"
        fill={lotusColor}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left Inner Petal */}
      <path
        id="petal-inner-left"
        d="M 170,240 C 145,230 125,198 142,182 C 160,166 170,215 170,240 Z"
        fill={lotusColor}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Right Inner Petal */}
      <path
        id="petal-inner-right"
        d="M 170,240 C 195,230 215,198 198,182 C 180,166 170,215 170,240 Z"
        fill={lotusColor}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Center Petal (Top layer of the blossom) */}
      <path
        id="petal-center"
        d="M 170,240 C 153,210 153,180 170,170 C 187,180 187,210 170,240 Z"
        fill={lotusColor}
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
};
