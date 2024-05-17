import React, { FC, ReactNode } from "react";
import { StyledButton, StyledSelect } from "./select.s";

interface ISelectProps {
  children: ReactNode;
  right?: number;
}

export const Select: FC<ISelectProps> = ({ children }) => {
  return <StyledSelect>{children}</StyledSelect>;
};

export const Button: FC<ISelectProps> = ({ children, right }) => {
  return <StyledButton right={right}>{children}</StyledButton>;
};
