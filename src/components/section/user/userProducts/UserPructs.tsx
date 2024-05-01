import React, { FC, useEffect, useState } from "react";
import { UserButton, UserProductWrap } from "./userProduct.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import Common from "src/components/common";
import CustomIcon from "src/assets/custom-icons";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface IUserProductsProps {}

const arr = [
  {
    label: "All",
    num: 411,
  },
  {
    label: "Fool",
    num: 120,
  },
  {
    label: "Kutilayotgan",
    num: 8,
  },
  {
    label: "Rad etilgan",
    num: 16,
  },
  {
    label: "Nofaol",
    num: 48,
  },
];

export const UserPructs: FC<IUserProductsProps> = (props) => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const { data, isLoading, isError } = addAPI.useFetchAllAddsQuery(8);
  const [adds, setAdds] = useState<IAdd[]>([]);

  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);

  return (
    <UserProductWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          {!isError &&
            arr.map((el, index) => (
              <UserButton
                active={index == active ? 1 : 0}
                key={index}
                onClick={() => setActive(index)}
              >
                {el.label} <span>{el.num}</span>
              </UserButton>
            ))}
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
          {isLoading && Array(4)
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
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "flex-end" }}
          gap={10}
        >
          <Typography.H6>Sahifalar soni</Typography.H6>
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
      </Styles.Container>
    </UserProductWrap>
  );
};
