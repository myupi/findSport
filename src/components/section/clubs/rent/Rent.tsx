import React, { FC } from "react";
import { RentWrap } from "./rent.s";
import Styles, { Typography } from "src/styles";
import { PinMap } from "src/assets/custom-icons/pinmap";
import { DocRow } from "src/assets/custom-icons/docrow";
import Link from "next/link";
import Common from "src/components/common";

interface IRentProps {}

export const Rent: FC<IRentProps> = (props) => {
  return (
    <RentWrap>
      <Styles.Container>
        <Typography.H4 align="center">Аренда спортивных площадок</Typography.H4>
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "flex-end" }}
        >
          <PinMap />
          <DocRow />
        </Styles.Column>
        <Styles.Column width="100%" gap={{ xs: 8, sm: 8, md: 16, lg: 24 }}>
          {Array(6)
            .fill(undefined)
            .map((el, index) => (
              <Styles.Row
                size={{ xs: 12, sm: 6, lg: 4, "2xl": 3 }}
                difference={{ xs: 8, sm: 8, lg: 16, "2xl": 18 }}
                key={index}
              >
                <Link href="/grounds">
                  <Common.Card />
                </Link>
              </Styles.Row>
            ))}
        </Styles.Column>
      </Styles.Container>
    </RentWrap>
  );
};
