import React, { FC } from "react";
import { AllProductLink, SimilarWrap } from "./similar.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";

interface ISimilarProps {}

export const Similar: FC<ISimilarProps> = (props) => {
  return (
    <SimilarWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items={"center"}>
          <Styles.Row size={6} difference={0}>
            <Typography.H4>Similar ads</Typography.H4>
          </Styles.Row>
          <Styles.Row size={6} difference={0}>
            <Styles.Column
              width="100%"
              align_items={"center"}
              style={{ justifyContent: "flex-end" }}
              gap={20}
            >
              <CustomIcon.PinMap />
              <CustomIcon.DocRow />
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
        <Styles.Column width="100%" gap={{ xs: 8, sm: 8, md: 16, lg: 24 }}>
          {Array(4)
            .fill(undefined)
            .map((el, index) => (
              <Styles.Row
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                difference={{ xs: 8, sm: 8, md: 11, lg: 18 }}
                key={index}
              >
                <Link href="/grounds">
                  <Common.Card />
                </Link>
              </Styles.Row>
            ))}
        </Styles.Column>
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "center" }}
        >
          <Link href={"/all-adds"}>
            <AllProductLink>
              <Styles.Column width="100%" align_items={"center"} style={{justifyContent: "center"}} gap={5}> 
                <Typography.LEAD_TEXT>All Products</Typography.LEAD_TEXT>
                <CustomIcon.ArrowRight />
              </Styles.Column>
            </AllProductLink>
          </Link>
        </Styles.Column>
      </Styles.Container>
    </SimilarWrap>
  );
};
