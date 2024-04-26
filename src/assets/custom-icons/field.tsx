import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Field: FC<IIconProps> = ({
  className,
  width = 23,
  height = 16,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 0H0.5C0.224 0 0 0.224 0 0.5V15.5C0 15.776 0.224 16 0.5 16H22.5C22.776 16 23 15.776 23 15.5V0.5C23 0.224 22.776 0 22.5 0ZM11 10.45C9.86 10.217 9 9.208 9 8C9 6.792 9.86 5.783 11 5.55V10.45ZM12 5.55C13.14 5.782 14 6.792 14 8C14 9.208 13.14 10.217 12 10.45V5.55ZM1 4H4V12H1V4ZM1 13H4.5C4.776 13 5 12.776 5 12.5V3.5C5 3.224 4.776 3 4.5 3H1V1H11V4.55C9.308 4.796 8 6.241 8 8C8 9.759 9.308 11.204 11 11.45V15H1V13ZM12 15V11.45C13.692 11.205 15 9.759 15 8C15 6.241 13.692 4.796 12 4.55V1H22V3H18.5C18.224 3 18 3.224 18 3.5V12.5C18 12.776 18.224 13 18.5 13H22V15H12ZM22 12H19V4H22V12Z"
        fill="#01001F"
      />
    </svg>
  );
};
