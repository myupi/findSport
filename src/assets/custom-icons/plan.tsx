import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Plan: FC<IIconProps> = ({
  className,
  width = 18,
  height = 19,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.78125 15.8213C5.86856 15.8213 6.75 14.9398 6.75 13.8525C6.75 12.7652 5.86856 11.8838 4.78125 11.8838C3.69394 11.8838 2.8125 12.7652 2.8125 13.8525C2.8125 14.9398 3.69394 15.8213 4.78125 15.8213Z"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8125 5.69629L5.625 8.50879"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 5.69629L2.8125 8.50879"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 12.4463L15.1875 15.2588"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1875 12.4463L12.375 15.2588"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5625 6.25879V3.44629H12.375"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5625 3.44629L10.6875 4.57129C13.5 7.38379 11.25 10.7588 9 11.3213"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
