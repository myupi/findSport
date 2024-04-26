import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Elipse: FC<IIconProps> = ({
  className,
  width = 120,
  height = 121,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 121"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.08"
        cx="60"
        cy="60.2676"
        r="56"
        stroke="#AABBC6"
        strokeWidth="8"
      />
    </svg>
  );
};
