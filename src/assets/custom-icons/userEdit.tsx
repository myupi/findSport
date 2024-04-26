import { FC } from "react";
import IIconProps from "../icons/interfaces";

export const UserEdit: FC<IIconProps> = ({
  className,
  width = 20,
  height = 20,
  color = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99967 10C12.3009 10 14.1663 8.13454 14.1663 5.83335C14.1663 3.53217 12.3009 1.66669 9.99967 1.66669C7.69849 1.66669 5.83301 3.53217 5.83301 5.83335C5.83301 8.13454 7.69849 10 9.99967 10Z"
        stroke="#5F5CF1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0085 13.1167L13.0585 16.0667C12.9418 16.1834 12.8335 16.4 12.8085 16.5584L12.6502 17.6833C12.5919 18.0917 12.8752 18.375 13.2835 18.3167L14.4085 18.1583C14.5668 18.1333 14.7919 18.025 14.9002 17.9084L17.8502 14.9584C18.3585 14.45 18.6002 13.8583 17.8502 13.1083C17.1085 12.3667 16.5169 12.6083 16.0085 13.1167Z"
        stroke="#5F5CF1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.584 13.5417C15.834 14.4417 16.534 15.1417 17.434 15.3917"
        stroke="#5F5CF1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M2.8418 18.3333C2.8418 15.1083 6.05015 12.5 10.0002 12.5C10.8668 12.5 11.7001 12.625 12.4751 12.8583"
        stroke="#5F5CF1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
