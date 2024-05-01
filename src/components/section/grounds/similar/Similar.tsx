import React, { FC, useEffect, useState } from "react";
import { AllProductLink, SimilarWrap } from "./similar.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface ISimilarProps {}

export const Similar: FC<ISimilarProps> = (props) => {
  const { data, isLoading } = addAPI.useFetchAllAddsQuery(8);
  const [adds, setAdds] = useState<IAdd[]>([]);
  const { t } = useTranslation();
  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);
  return (
    <SimilarWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items={"center"}>
          <Styles.Row size={6} difference={0}>
            <Typography.H4>{t("similarAds")}</Typography.H4>
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
          {Array(4)
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
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "center" }}
        >
          <Link href={"/all-adds"}>
            <AllProductLink>
              <Styles.Column
                width="100%"
                align_items={"center"}
                style={{ justifyContent: "center" }}
                gap={5}
              >
                <Typography.LEAD_TEXT>{t("allProducts")}</Typography.LEAD_TEXT>
                <CustomIcon.ArrowRight />
              </Styles.Column>
            </AllProductLink>
          </Link>
        </Styles.Column>
      </Styles.Container>
    </SimilarWrap>
  );
};
