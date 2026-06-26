/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "#1C0863";
  const accentColor = light ? "#FF6B6B" : "#840C0C";
  const subtextColor = light ? "rgba(255,255,255,0.8)" : "#1E293B";

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <svg
        viewBox="0 0 520 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* S */}
        <path
          d="M35 85C22 85 15 78 15 67H28C28 71 31 74 35 74C39 74 42 72 42 69C42 66 40 64 33 62C22 59 15 54 15 44C15 32 24 25 35 25C46 25 54 31 54 44H41C41 39 38 37 35 37C31 37 28 39 28 42C28 45 30 46 37 48C48 51 55 56 55 67C55 78 46 85 35 85Z"
          fill={primaryColor}
        />

        {/* E */}
        <path
          d="M65 27H105V38H78V48H101V59H78V69H105V80H65V27Z"
          fill={primaryColor}
        />

        {/* M */}
        <path
          d="M115 27H128L143 56L158 27H171V80H159V45L146 71H140L127 45V80H115V27Z"
          fill={primaryColor}
        />

        {/* Z */}
        <path
          d="M180 27H218V38L193 69H218V80H180V69L205 38H180V27Z"
          fill={primaryColor}
        />

        {/* O (Stylized Gear) */}
        <g id="gear-o">
          {/* Outer Rim of the O */}
          <circle cx="255" cy="53.5" r="26.5" stroke={primaryColor} strokeWidth="12" />
          
          {/* Gear teeth in accent color */}
          <g fill={accentColor}>
            {/* Top Tooth */}
            <path d="M251 11H259L261 21H249L251 11Z" />
            {/* Bottom Tooth */}
            <path d="M251 96H259L261 86H249L251 96Z" />
            {/* Right Tooth */}
            <path d="M297 49.5V57.5L287 59.5V47.5L297 49.5Z" />
            {/* Left Tooth */}
            <path d="M213 49.5V57.5L223 59.5V47.5L213 49.5Z" />
            {/* Diagonal Teeth */}
            <path d="M282 23L287 29L278.5 34.5L273.5 28.5L282 23Z" />
            <path d="M228 78L233 84L224.5 89.5L219.5 83.5L228 78Z" />
            <path d="M282 84L287 78L278.5 72.5L273.5 78.5L282 84Z" />
            <path d="M228 29L233 23L224.5 17.5L219.5 23.5L228 29Z" />
          </g>

          {/* Central Dot/Axle in Accent Color */}
          <circle cx="255" cy="53.5" r="9" fill={accentColor} />
        </g>

        {/* N */}
        <path
          d="M300 27H312L332 61V27H344V80H332L312 46V80H300V27Z"
          fill={primaryColor}
        />

        {/* ENGINEERING */}
        <text
          x="15"
          y="112"
          fill={subtextColor}
          fontFamily="'Inter', sans-serif"
          fontSize="17"
          fontWeight="600"
          letterSpacing="19.5"
        >
          ENGINEERING
        </text>
      </svg>
    </div>
  );
};
