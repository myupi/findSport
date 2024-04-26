import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const LeftArrow: FC<IIconProps> = ({
  className,
  width = 32,
  height = 32,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0001 29.3334C23.3639 29.3334 29.3334 23.3638 29.3334 16C29.3334 8.63622 23.3639 2.66669 16.0001 2.66669C8.63628 2.66669 2.66675 8.63622 2.66675 16C2.66675 23.3638 8.63628 29.3334 16.0001 29.3334Z"
        stroke="#01001F"
      />
      <path
        d="M18.0001 10.6667L12.6667 16L18.0001 21.3334"
        stroke="#01001F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
