import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Succes: FC<IIconProps> = ({
  className,
  width = 17,
  height = 14,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8L6 13L16 1"
        stroke="#327BED"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
