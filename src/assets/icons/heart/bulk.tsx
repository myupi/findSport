import { FC } from "react";
import IIconProps from "../interfaces";

export const Bulk: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8.6901C22 9.8801 21.81 10.9801 21.48 12.0001H2.52C2.19 10.9801 2 9.8801 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.9801 12 5.3301C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M21.48 12C19.9 17 15.03 19.99 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.97002 19.99 4.10002 17 2.52002 12H21.48Z"
        fill="#292D32"
      />
    </svg>
  );
};
