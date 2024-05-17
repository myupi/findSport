import React, { FC, useEffect, useState } from "react";
import { MyFavouriteWrap } from "./myFavourite.s";
import Styles, { Typography } from "src/styles";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";
import Link from "next/link";
import Common from "src/components/common";
import { useTranslation } from "react-i18next";

interface IMyFavouriteProps {}

export const MyFavourite: FC<IMyFavouriteProps> = (props) => {
  const { data, isLoading, isError } = addAPI.useFetchFavouritesQuery({
    uid: "www",
  });
  const [adds, setAdds] = useState<IAdd[]>([]);
  const { t } = useTranslation();

  const links = {
    club: "/clubs/",
    section: "/sections/",
    ground: "/grounds/",
  };

  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);


  if(isError){
    return <Typography.H1 align="center">{t("error")}</Typography.H1>
  }


  return (
    <MyFavouriteWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={{ xs: 8, sm: 8, md: 16, lg: 24 }}>
          {adds.map((el, index) => (
            <Styles.Row
              size={{ xs: 12, sm: 6, lg: 4, "2xl": 3 }}
              difference={{ xs: 8, sm: 8, lg: 16, "2xl": 18 }}
              key={index}
            >
              <Link href={`${(links as any)[el.ad_type]}${el.id}`}>
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
      </Styles.Container>
    </MyFavouriteWrap>
  );
};
