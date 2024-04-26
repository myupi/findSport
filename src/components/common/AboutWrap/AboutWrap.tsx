import React, { FC, ReactNode } from "react";
import { StyledAbout } from "./aboutWrap.s";

interface IAboutWrapProps {
  children: ReactNode;
}

export const AboutWrap: FC<IAboutWrapProps> = ({ children }) => {
  return <StyledAbout>{children}</StyledAbout>;
};
