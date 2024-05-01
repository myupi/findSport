import Image from "next/image";
import React, { FC } from "react";
import Styles, { Typography } from "src/styles";
import CustomIcon from "src/assets/custom-icons";
import Heart from "src/assets/icons/heart";
import { StyledCard } from "./card.s";
import { IAdd } from "src/models/IAdd";

interface ICardProps {
  add: IAdd;
}

function addThousandSeparator(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Card: FC<ICardProps> = ({ add }) => {
  return (
    <StyledCard>
      <Styles.Column direction={"column"} gap={10}>
        <Image
          width={500}
          height={200}
          src={add.images[0]}
          alt={add.title}
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <Styles.Column width="100%" style={{ padding: "18px 14px" }} gap={5}>
          <Typography.H6>{add.title}</Typography.H6>
          <Styles.Column width="100%" align_items={"center"} gap={5}>
            <Styles.Row size={1} difference={5}>
              <Typography.SMALL>{add.rating}</Typography.SMALL>
            </Styles.Row>
            <Styles.Row size={11} difference={5} align_items={"center"}>
              <CustomIcon.Stars rating={add.rating} />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" align_items={"center"} gap={5}>
            <Styles.Row size={1} difference={5}>
              <CustomIcon.Doc />
            </Styles.Row>
            <Styles.Row size={11} difference={5}>
              <Typography.LEAD_TEXT>Oylik obuna</Typography.LEAD_TEXT>
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" align_items={"center"} gap={5}>
            <Styles.Row size={1} difference={5}>
              <CustomIcon.Plan />
            </Styles.Row>
            <Styles.Row size={11} difference={5}>
              <Typography.LEAD_TEXT>{add.sport.title}</Typography.LEAD_TEXT>
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" align_items={"center"} gap={5}>
            <Styles.Row size={1} difference={5}>
              <CustomIcon.Location />
            </Styles.Row>
            <Styles.Row size={11} difference={5}>
              <Typography.LEAD_TEXT>{add.landmark}</Typography.LEAD_TEXT>
            </Styles.Row>
          </Styles.Column>
        </Styles.Column>
        <Styles.Column
          width="100%"
          style={{ padding: "0px 14px 18px 14px" }}
          gap={5}
          align_items="center"
        >
          <Styles.Row size={11} difference={5}>
            <Typography.H6>{addThousandSeparator(add.price)} sum</Typography.H6>
          </Styles.Row>
          <Styles.Row size={1} difference={5}>
            <Heart.Outline color="black" />
          </Styles.Row>
        </Styles.Column>
      </Styles.Column>
    </StyledCard>
  );
};
