import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const RussianFlag: FC<IIconProps> = ({
  className,
  width = 28,
  height = 28,
  color = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      width={width}
      height={height}
    >
      <clipPath id="circleClip">
        <circle cx="14" cy="14" r="14" />
      </clipPath>

      <path d="m0 0h28v9H0" fill="#fff" clipPath="url(#circleClip)" />
      <path d="m0 9h28v9H0" fill="#0039a6" clipPath="url(#circleClip)" />
      <path d="m0 18h28v9H0" fill="#d52b1e" clipPath="url(#circleClip)" />
    </svg>
  );
};
