import React, { FC } from "react";
import { SearchButton, SearchIcons, SearchInput, SearchWrap } from "./search.s";
import Styles from "src/styles";
import { Lupa } from "src/assets/custom-icons/lupa";
import { Location } from "src/assets/custom-icons/location";

interface ISearchProps {}

export const Search: FC<ISearchProps> = (props) => {
  return (
    <SearchWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={{ xs: 5, lg: 0 }}>
          <Styles.Row
            size={{ xs: 6, lg: 5.5 }}
            difference={{ xs: 5, lg: 0 }}
            style={{ borderRight: "2px solid #00000f14" }}
          >
            <SearchIcons>
              <Lupa />
            </SearchIcons>
            <SearchInput placeholder="We have 21 215 486 ads, ask what you need" />
          </Styles.Row>
          <Styles.Row size={{ xs: 6, lg: 5.5 }} difference={{ xs: 5, lg: 0 }}>
            <SearchIcons>
              <Location width={24} height={24} />
            </SearchIcons>
            <SearchInput placeholder="The whole of Uzbekistan" />
          </Styles.Row>
          <Styles.Row size={{ xs: 12, lg: 1 }} difference={{ xs: 10, lg: 0 }}>
            <SearchButton>Search</SearchButton>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </SearchWrap>
  );
};
