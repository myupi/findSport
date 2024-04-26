import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Back: FC<IIconProps> = ({
  className,
  width = 8,
  height = 14,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
