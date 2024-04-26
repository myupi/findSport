import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Location: FC<IIconProps> = ({
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
        d="M9 10.3838C10.2426 10.3838 11.25 9.37643 11.25 8.13379C11.25 6.89115 10.2426 5.88379 9 5.88379C7.75736 5.88379 6.75 6.89115 6.75 8.13379C6.75 9.37643 7.75736 10.3838 9 10.3838Z"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 2.13379C7.4087 2.13379 5.88258 2.76593 4.75736 3.89115C3.63214 5.01637 3 6.54249 3 8.13379C3 9.55279 3.3015 10.4813 4.125 11.5088L9 17.1338L13.875 11.5088C14.6985 10.4813 15 9.55279 15 8.13379C15 6.54249 14.3679 5.01637 13.2426 3.89115C12.1174 2.76593 10.5913 2.13379 9 2.13379V2.13379Z"
        stroke="#01001F"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
