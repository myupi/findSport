import React, { FC } from "react";
import { FooterWrap, ListItem } from "./footer.s";
import Styles, { Typography } from "src/styles";
import mock from "src/mock";
import Link from "next/link";
import Image from "next/image";
import CustomIcon from "src/assets/custom-icons";
import { useRouter } from "next/router";

interface IFooterProps {}

interface ISocials {
  label: string;
  icon: FC;
  link: string;
}

const socials: ISocials[] = [
  {
    label: "facebook",
    icon: CustomIcon.Facebook,
    link: "/",
  },
  {
    label: "instagram",
    icon: CustomIcon.Instagram,
    link: "/",
  },
  {
    label: "twitter",
    icon: CustomIcon.Twitter,
    link: "/",
  },
  {
    label: "youtube",
    icon: CustomIcon.Youtube,
    link: "/",
  },
  {
    label: "Wordpress",
    icon: CustomIcon.Wordpress,
    link: "/",
  },
];

export const Footer: FC<IFooterProps> = ({}) => {
  const navFooter = mock.navFooter;
  const router = useRouter();
  return (
    <FooterWrap hidden={router.asPath == "/registration"}>
      <Styles.Container>
        <Styles.Column
          width="100%"
          gap={{ xs: 6, sm: 10, md: 18, lg: 24, "2xl": 28 }}
        >
          <Styles.Row
            size={{ xs: 12, sm: 6, md: 4, lg: 3, "2xl": 2.4 }}
            difference={{ xs: 6, sm: 10, md: 16, lg: 20, "2xl": 24 }}
          >
            <Link href="/">
              <Styles.Column align_items="center" gap={12}>
                <Image
                  height={48}
                  width={48}
                  src="/images/Icon.png"
                  alt="Brand logo"
                />
                <Typography.H4 color="white">FindSport</Typography.H4>
              </Styles.Column>
            </Link>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 6, md: 4, lg: 3, "2xl": 2.4 }}
            difference={{ xs: 6, sm: 10, md: 16, lg: 20, "2xl": 24 }}
          >
            <Styles.Column
              width="100%"
              gap={20}
              style={{ alignContent: "flex-start" }}
            >
              <Typography.H5 color="white">
                {navFooter.learnMore.title}
              </Typography.H5>
              <Styles.Column width="100%" gap={16} direction="column">
                {navFooter.learnMore.links.map((link, index) => (
                  <ListItem href={link.href} key={index}>
                    <Typography.PARAGRAPH color="dark100">
                      {link.label}
                    </Typography.PARAGRAPH>
                  </ListItem>
                ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 6, md: 4, lg: 3, "2xl": 2.4 }}
            difference={{ xs: 6, sm: 10, md: 16, lg: 20, "2xl": 24 }}
          >
            <Styles.Column
              width="100%"
              gap={20}
              style={{ alignContent: "flex-start" }}
            >
              <Typography.H5 color="white">
                {navFooter.TicketsAndBooking.title}
              </Typography.H5>
              <Styles.Column width="100%" gap={16} direction="column">
                {navFooter.TicketsAndBooking.links.map((link, index) => (
                  <ListItem href={link.href} key={index}>
                    <Typography.PARAGRAPH color="dark100">
                      {link.label}
                    </Typography.PARAGRAPH>
                  </ListItem>
                ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 6, md: 4, lg: 3, "2xl": 2.4 }}
            difference={{ xs: 6, sm: 10, md: 16, lg: 20, "2xl": 24 }}
          >
            <Styles.Column
              width="100%"
              gap={20}
              style={{ alignContent: "flex-start" }}
            >
              <Typography.H5 color="white">
                {navFooter.ContactUs.title}
              </Typography.H5>
              <Styles.Column width="100%" gap={16} direction="column">
                {navFooter.ContactUs.links.map((link, index) => (
                  <ListItem href={`tel:${link.number}`} key={index}>
                    <Typography.PARAGRAPH color="dark100">
                      {link.label}:{" "}
                      <span style={{ color: "white" }}>{link.number}</span>
                    </Typography.PARAGRAPH>
                  </ListItem>
                ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, sm: 6, md: 4, lg: 3, "2xl": 2.4 }}
            difference={{ xs: 6, sm: 10, md: 16, lg: 20, "2xl": 24 }}
          >
            <Styles.Column
              width="100%"
              gap={20}
              style={{ alignContent: "flex-start" }}
            >
              <Typography.H5 color="white">
                {navFooter.Social.title}
              </Typography.H5>
              <Styles.Column width="100%" gap={16}>
                {socials.map((link, index) => (
                  <ListItem href={link.link} key={index}>
                    <link.icon />
                  </ListItem>
                ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </FooterWrap>
  );
};
