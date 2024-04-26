import React, { FC, useEffect, useState } from "react";
import Styles, { Typography } from "src/styles";
import { MostPopularWrap, ButtonAllPosts } from "./most-popular.s";
import Link from "next/link";
import Common from "src/components/common";
import CustomIcon from "src/assets/custom-icons";
import { addAPI } from "src/services/AddService";
import { IAdd } from "src/models/IAdd";

interface IMostPopularProps {}

export const MostPopular: FC<IMostPopularProps> = (props) => {
  const { data, isLoading } = addAPI.useFetchAllAddsQuery(8);
  const [adds, setAdds] = useState<IAdd[]>([]);

  useEffect(() => {
    if (data && !isLoading) {
      setAdds(data.data);
    }
  }, [data, isLoading]);
  return (
    <MostPopularWrap>
      <Styles.Container>
        <Typography.H2 align="center" color="black">
          The most popular ads
        </Typography.H2>
        <Typography.LEAD_TEXT align="center" color="black">
          Lorem ipsum dolor sit amet consectetur. Ipsum nibh risus vitae etiam
          vulputate. Leo ornare sed phasellus enim.
        </Typography.LEAD_TEXT>
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
        </Styles.Column>
        <ButtonAllPosts>
          <Link href="/all-adds">
            <Styles.Column
              width="100%"
              align_items={"center"}
              style={{ justifyContent: "center" }}
              gap={5}
            >
              <Typography.LEAD_TEXT>All Products</Typography.LEAD_TEXT>
              <CustomIcon.ArrowRight />
            </Styles.Column>
          </Link>
        </ButtonAllPosts>
      </Styles.Container>
    </MostPopularWrap>
  );
};
