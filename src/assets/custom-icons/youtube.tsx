import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Youtube: FC<IIconProps> = ({
  className,
  width = 23,
  height = 17,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.635 0.999039C21.5968 1.12434 22.5159 2.05965 22.6329 3.03505C23.0469 6.60977 23.0469 10.0762 22.6329 13.6498C22.5159 14.6252 21.5968 15.5616 20.635 15.6858C14.7706 16.4145 8.83994 16.4145 2.97721 15.6858C2.01461 15.5613 1.09546 14.6252 0.978508 13.6498C0.564456 10.0759 0.564456 6.60977 0.978508 3.03505C1.09546 2.05965 2.01461 1.12406 2.97721 0.999039C8.83994 0.27034 14.7703 0.27034 20.635 0.999039ZM9.94928 4.63028V12.0557L15.5182 8.34311L9.94928 4.63028Z"
        fill="white"
      />
    </svg>
  );
};
