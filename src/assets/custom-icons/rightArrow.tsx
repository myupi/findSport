import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const RightArrow: FC<IIconProps> = ({
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
        d="M16.0002 2.66665C8.63637 2.66665 2.66683 8.63618 2.66683 16C2.66683 23.3638 8.63637 29.3333 16.0002 29.3333C23.364 29.3333 29.3335 23.3638 29.3335 16C29.3335 8.63618 23.364 2.66665 16.0002 2.66665Z"
        stroke="#01001F"
      />
      <path
        d="M14.0002 21.3333L19.3335 16L14.0002 10.6666"
        stroke="#01001F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
