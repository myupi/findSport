import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Failure: FC<IIconProps> = ({
  className,
  width = 14,
  height = 14,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 13L1 1M1 13L13 1L1 13Z"
        stroke="#FF0000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
