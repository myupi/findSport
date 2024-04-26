import React, { FC } from "react";
import { BreadcrumbWrap } from "./breadcrumb.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import CustomIcon from "src/assets/custom-icons";
import { useRouter } from "next/router";

interface IBreadcrumbProps {}

export const Breadcrumb: FC<IBreadcrumbProps> = (props) => {
  const router = useRouter();
  return (
    <BreadcrumbWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items={"center"} gap={5}>
          <Styles.Row size={{ lg: 2 }} difference={5}>
            <Link href={"/"}>
              <Styles.Column width="100%" align_items={"center"} gap={10}>
                <CustomIcon.Back />
                <Typography.H5>Backspace</Typography.H5>
              </Styles.Column>
            </Link>
          </Styles.Row>
          <Styles.Row size={{ lg: 10}} difference={5}>
            <Styles.Column width="100%" gap={7.5}>
              <Link href={"/"}>
                <Typography.SMALL style={{ textDecoration: "underline" }}>
                  home
                </Typography.SMALL>
              </Link>
              /
              <Link href={router.asPath}>
                <Typography.SMALL>
                  {router.asPath.substring(1)}
                </Typography.SMALL>
              </Link>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </BreadcrumbWrap>
  );
};
