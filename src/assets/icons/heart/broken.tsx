import { FC } from "react";
import IIconProps from "../interfaces";

export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.59 4.9701C21.47 5.9601 22 7.2601 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8201C12.28 20.9401 11.72 20.9401 11.38 20.8201C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
