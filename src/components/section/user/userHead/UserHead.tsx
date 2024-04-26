import React, { FC } from "react";
import { UserBackground, UserBtn, UserHeadWrap, UserImage } from "./userHead.s";
import Styles, { Typography } from "src/styles";
import Image from "next/image";
import CustomIcon from "src/assets/custom-icons";

interface IUserHeadProps {}

export const UserHead: FC<IUserHeadProps> = (props) => {
  return (
    <UserHeadWrap>
      <UserBackground />
      <Styles.Container>
        <Styles.Column width="100%">
          <Styles.Row size={{ xs: 12, md: 6 }} difference={0}>
            <Styles.Column width="100%" gap={5}>
              <Styles.Row size={{ lg: 4, "2xl": 3 }} difference={5}>
                <Styles.Column
                  width="100%"
                  align_items={"center"}
                  style={{ justifyContent: "center" }}
                >
                  <UserImage>
                    <Image
                      width={1000}
                      height={1500}
                      src={"/images/testPhoto.avif"}
                      alt="123"
                    />
                  </UserImage>
                </Styles.Column>
              </Styles.Row>
              <Styles.Row size={{ lg: 8, "2xl": 9 }} difference={5}>
                <Styles.Column
                  width="100%"
                  direction={"column"}
                  style={{ justifyContent: "center", marginTop: "80px" }}
                >
                  <Typography.H4>Olivia Rhye</Typography.H4>
                  <Typography.SMALL>@olivia</Typography.SMALL>
                </Styles.Column>
              </Styles.Row>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ xs: 12, md: 6 }} difference={0}>
            <Styles.Column
              width="100%"
              align_items={"center"}
              gap={16}
              style={{ justifyContent: "flex-end", marginTop: "80px" }}
            >
              <UserBtn first={1}>
                <CustomIcon.UserEdit /> Edit profile
              </UserBtn>
              <UserBtn>Add new ads</UserBtn>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </UserHeadWrap>
  );
};
