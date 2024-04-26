import React from "react";

interface StarsProps {
  rating: number;
}

export const Stars: React.FC<StarsProps> = ({ rating }) => {
  const starSize = "24px";
  const starColor = "#1C1C36";
  const starBackground = "#fc0";
  const percent = `calc(${rating} / 5 * 100%)`;

  return (
    <div className="Stars">
      <style jsx>{`
        .Stars {
          --percent: ${percent};
          display: inline-block;
          font-size: ${starSize};
          font-family: Times;
          line-height: 1;
          margin-bottom: 2.5px;
        }
        .Stars::before {
          content: "★★★★★";
          letter-spacing: 3px;
          background: linear-gradient(
            90deg,
            ${starBackground} var(--percent),
            ${starColor} var(--percent)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

