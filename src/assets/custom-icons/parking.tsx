import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const Parking: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_869_2328)">
        <path
          d="M17.854 15.147L17.692 15.039L17.5 15H3.238L4.838 11H8.95C9.226 11 9.45 10.776 9.45 10.5C9.45 10.224 9.227 10 8.951 10H4.5C4.295 10 4.112 10.124 4.036 10.314L2.074 15.219L0.147 17.146C0.053 17.24 0 17.367 0 17.5V21.5C0 21.776 0.224 22 0.5 22H1V23.5C1 23.776 1.224 24 1.5 24H4.5C4.776 24 5 23.776 5 23.5V22H15V23.5C15 23.776 15.224 24 15.5 24H18.5C18.776 24 19 23.776 19 23.5V22H19.5C19.776 22 20 21.776 20 21.5V17.5C20 17.367 19.947 17.24 19.854 17.146L17.854 15.147ZM4 23H2V22H4V23ZM18 23H16V22H18V23ZM18.5 21H1V20H5C5.276 20 5.5 19.776 5.5 19.5C5.5 19.224 5.276 19 5 19H1V17.707L2.707 16H17.293L19 17.707V19H15C14.724 19 14.5 19.224 14.5 19.5C14.5 19.776 14.724 20 15 20H19V21H18.5ZM17 0C13.14 0 10 3.141 10 7C10 10.859 13.14 14 17 14C20.86 14 24 10.859 24 7C24 3.141 20.86 0 17 0ZM17 13C13.691 13 11 10.309 11 7C11 3.691 13.691 1 17 1C20.309 1 23 3.691 23 7C23 10.309 20.309 13 17 13ZM17.5 3H15.5C15.224 3 15 3.224 15 3.5V10.5C15 10.776 15.224 11 15.5 11C15.776 11 16 10.776 16 10.5V8H17.5C18.878 8 20 6.879 20 5.5C20 4.121 18.878 3 17.5 3ZM17.5 7H16V4H17.5C18.327 4 19 4.673 19 5.5C19 6.327 18.327 7 17.5 7Z"
          fill="#01001F"
        />
      </g>
      <defs>
        <clipPath id="clip0_869_2328">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
