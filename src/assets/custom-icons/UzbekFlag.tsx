import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const UzbekFlag: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 10"
      width="28"
      height="28"
    >
      <rect width="14" height="3.33" fill="#0073E6" />
      <rect y="3.33" width="14" height="3.34" fill="#FFFFFF" />
      <rect y="6.67" width="14" height="3.33" fill="#00966E" />
    </svg>
  );
};
