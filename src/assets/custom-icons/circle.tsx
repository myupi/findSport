import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Circle: FC<IIconProps> = ({
  className,
  width = 184,
  height = 185,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 184 185"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.12" cx="92" cy="92.7676" r="92" fill="#AABBC6" />
    </svg>
  );
};
