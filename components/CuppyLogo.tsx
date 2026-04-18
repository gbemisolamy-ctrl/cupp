import React from "react";

interface CuppyLogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

const CuppyLogo: React.FC<CuppyLogoProps> = ({ className = "", iconOnly = false, light = false }) => {
  const primaryColor = light ? "#FFFFFF" : "var(--foreground)"; 
  const accentColor = "var(--primary-container)"; // Luxury Gold

  return (
    <div className={`flex items-center space-x-4 select-none ${className}`}>
      {/* Icon: Minimalist C with Hair-Stroke accent */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M32 12C28 6 18 6 12 12C6 18 6 28 12 34C18 40 28 40 32 34"
          stroke={primaryColor}
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M18 20C18 10 32 10 38 4"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {!iconOnly && (
        <span
          className={`font-sans font-black text-lg tracking-[0.4em] ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          CUPPY
        </span>
      )}
    </div>
  );
};

export default CuppyLogo;
