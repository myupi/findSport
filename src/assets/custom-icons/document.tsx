import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Document: FC<IIconProps> = ({
  className,
  width = 60,
  height = 75,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 75"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.9957 2.28553L57.8762 20.166M15.3503 35.3435H44.56M15.3503 57.0004H44.56M15.3503 46.1719H44.56M5.52515 2.28553C4.59127 2.30848 3.70338 2.69566 3.05109 3.36438C2.39881 4.03309 2.03384 4.93034 2.03412 5.8645V68.6886C2.03383 69.6225 2.39855 70.5194 3.05045 71.1881C3.70235 71.8568 4.58979 72.2442 5.52335 72.2676H54.3869C55.3361 72.2676 56.2465 71.8905 56.9177 71.2193C57.5888 70.5481 57.9659 69.6378 57.9659 68.6886V20.166H43.6482C42.714 20.1431 41.8259 19.7556 41.1735 19.0865C40.5212 18.4174 40.1564 17.5197 40.1572 16.5853V2.26758L5.52515 2.28553Z"
        stroke="#5F5CF1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
