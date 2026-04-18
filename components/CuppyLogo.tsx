import React from "react";

interface CuppyLogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

const CuppyLogo: React.FC<CuppyLogoProps> = ({ className = "", iconOnly = false, light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "#101111"; // Retail Black or White
  const accentColor = "#FF5400"; // Signature Gold-Orange

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Icon: Minimalist C with Hair-Stroke accent */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M32 12C28 6 18 6 12 12C6 18 6 28 12 34C18 40 28 40 32 34"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M18 20C18 10 32 10 38 4"
          stroke={accentColor}
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-pulse"
        />
      </svg>

      {!iconOnly && (
        <span
          className={`font-sans font-black text-xl tracking-[0.25em] ${
            light ? "text-white" : "text-primary"
          }`}
          style={{ textShadow: light ? "0 2px 4px rgba(0,0,0,0.1)" : "none" }}
        >
          CUPPY
        </span>
      )}
    </div>
  );
};

export default CuppyLogo;
