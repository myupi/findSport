import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Upgrade: FC<IIconProps> = ({
  className,
  width = 74,
  height = 75,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 74 75"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2.76758V61.9983C2 64.8545 3.13461 67.5937 5.15423 69.6133C7.17386 71.633 9.91305 72.7676 12.7692 72.7676H72"
        stroke="#5F5CF1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7692 51.2292L28.9231 35.0754L39.6923 45.8446L66.6154 18.9215"
        stroke="#5F5CF1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.6155 35.0754V18.9215H50.4616"
        stroke="#5F5CF1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
