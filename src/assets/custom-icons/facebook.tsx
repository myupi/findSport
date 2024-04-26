import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Facebook: FC<IIconProps> = ({
  className,
  width = 10,
  height = 19,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.065 18.2646V10.0686H8.83L9.241 6.85961H6.065V4.81561C6.065 3.88961 6.323 3.25561 7.652 3.25561H9.336V0.394606C8.517 0.306606 7.693 0.264606 6.869 0.267606C4.425 0.267606 2.747 1.75961 2.747 4.49861V6.85361H0V10.0626H2.753V18.2646H6.065Z"
        fill="white"
      />
    </svg>
  );
};
