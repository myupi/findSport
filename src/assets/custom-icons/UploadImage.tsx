import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const UploadImage: FC<IIconProps> = ({
  className,
  width = 24,
  height = 25,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6.5C7.9 6.5 7 7.4 7 8.5C7 9.6 7.9 10.5 9 10.5C10.1 10.5 11 9.6 11 8.5"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.49V15.5C2 20.5 4 22.5 9 22.5H15C20 22.5 22 20.5 22 15.5V10.5"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2.5H9C4 2.5 2 4.5 2 9.5"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 5.5H21.25"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 8.25V2.75"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.66992 19.4501L7.59992 16.1401C8.38992 15.6101 9.52992 15.6701 10.2399 16.2801L10.5699 16.5701C11.3499 17.2401 12.6099 17.2401 13.3899 16.5701L17.5499 13.0001C18.3299 12.3301 19.5899 12.3301 20.3699 13.0001L21.9999 14.4001"
        stroke="#B0B0BA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
