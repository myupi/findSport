import React, { FC } from "react";
import {
  StyledSkeletonCard,
  StyledSkeletonImage,
  StyledSkeletonTitle,
} from "./skeletonCard.s";
import Styles from "src/styles";

interface ISkeletonCardProps {}

export const SkeletonCard: FC<ISkeletonCardProps> = (props) => {
  return (
    <StyledSkeletonCard>
      <Styles.Column direction={"column"} gap={10}>
        <StyledSkeletonImage />
        <Styles.Column width="100%" style={{ padding: "18px 14px" }} gap={5}>
          <StyledSkeletonTitle />
          <StyledSkeletonTitle />
          <StyledSkeletonTitle />
          <StyledSkeletonTitle />
        </Styles.Column>
        <Styles.Column
          width="100%"
          style={{ padding: "0px 14px 18px 14px" }}
          gap={5}
        >
          <StyledSkeletonTitle />
        </Styles.Column>
      </Styles.Column>
    </StyledSkeletonCard>
  );
};
