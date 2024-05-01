import React, { FC, useEffect, useState } from "react";
import { RentWrap } from "./rent.s";
import Styles, { Typography } from "src/styles";
import { PinMap } from "src/assets/custom-icons/pinmap";
import { DocRow } from "src/assets/custom-icons/docrow";
import Link from "next/link";
import Common from "src/components/common";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface IRentProps {}

export const Rent: FC<IRentProps> = (props) => {
  const { data, isLoading, isError } = addAPI.useFetchAllAddsQuery(8);
  const [adds, setAdds] = useState<IAdd[]>([]);
  const { t } = useTranslation();
  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);
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
          {adds.map((el, index) => (
            <Styles.Row
              size={{ xs: 12, sm: 6, lg: 4, "2xl": 3 }}
              difference={{ xs: 8, sm: 8, lg: 16, "2xl": 18 }}
              key={index}
            >
              <Link href="/grounds">
                <Common.Card add={el} />
              </Link>
            </Styles.Row>
          ))}
          {Array(8)
            .fill(undefined)
            .map((el, index) => (
              <Styles.Row
                size={{ xs: 12, sm: 6, lg: 4, "2xl": 3 }}
                difference={{ xs: 8, sm: 8, lg: 16, "2xl": 18 }}
                key={index}
              >
                <Common.SkeletonCard />
              </Styles.Row>
            ))}
        </Styles.Column>
        {isError && <Typography.H2 align="center">{t("error")}</Typography.H2>}
      </Styles.Container>
    </RentWrap>
  );
};
