import React, { FC, useEffect, useState } from "react";
import {
  AllItemsWrap,
  ItemsInput,
  ItemsInputWrap,
  ItemsSelect,
} from "./allItems.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import Common from "src/components/common";
import CustomIcon from "src/assets/custom-icons";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface IAllItemsProps {}

export const AllItems: FC<IAllItemsProps> = (props) => {
  const { data, isLoading, isError } = addAPI.useFetchAllAddsQuery(8);
  const [adds, setAdds] = useState<IAdd[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);

  return (
    <AllItemsWrap>
      <Styles.Container>
        {!isError && !isLoading && (
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={{ xs: 12, sm: 3.5 }} difference={0}>
              <Styles.Column width="100%" direction={"column"} gap={7.5}>
                <Typography.TINY>{t("sports")}</Typography.TINY>
                <ItemsSelect>
                  <option>Barcha Sport Turlari</option>
                </ItemsSelect>
              </Styles.Column>
            </Styles.Row>
            <Styles.Row size={{ xs: 12, sm: 3.5 }} difference={0}>
              <Styles.Column width="100%" direction={"column"} gap={7.5}>
                <Typography.TINY>{t("types")}</Typography.TINY>
                <ItemsSelect>
                  <option>Barcha elon Turlari</option>
                </ItemsSelect>
              </Styles.Column>
            </Styles.Row>
            <Styles.Row size={{ xs: 12, sm: 3.5 }} difference={0}>
              <Styles.Column width="100%" direction={"column"} gap={7.5}>
                <Typography.TINY>{t("price")}(sum)</Typography.TINY>
                <ItemsInputWrap>
                  <ItemsInput placeholder="Minimum" type="number" />
                  <Typography.SMALL>~</Typography.SMALL>
                  <ItemsInput placeholder="Maximum" type="number" />
                </ItemsInputWrap>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
        )}

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
          {isLoading &&
            Array(4)
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
        {!isError && !isLoading && (
          <Styles.Column
            width="100%"
            align_items={"center"}
            style={{ justifyContent: "flex-end" }}
            gap={10}
          >
            <Typography.H6>{t("pages")}</Typography.H6>
            <Common.Select>
              <option>20</option>
              <option>15</option>
              <option>10</option>
            </Common.Select>
            <Common.Button>
              <CustomIcon.Back />
            </Common.Button>
            <Common.Select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Common.Select>
            <Common.Button right={1}>
              <CustomIcon.Back />
            </Common.Button>
          </Styles.Column>
        )}
      </Styles.Container>
    </AllItemsWrap>
  );
};
