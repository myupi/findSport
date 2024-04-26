import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const ArrowRight: FC<IIconProps> = ({
  className,
  width = 25,
  height = 25,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6777 13H4M21.6777 13L15.3388 19.5M21.6777 13L15.3388 6.5"
        stroke="#01001F"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
