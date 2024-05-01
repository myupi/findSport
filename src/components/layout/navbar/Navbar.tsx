import { FC, useState } from "react";
import {
  ChangeLanguage,
  LanguageButton,
  Languages,
  LogoLink,
  NavbarWrap,
} from "./navbar.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import Image from "next/image";
import Heart from "src/assets/icons/heart";
import CustomIcon from "src/assets/custom-icons";
import { useTranslation } from "react-i18next";

interface INavbarProps {}

interface Langugaes {
  lang: string;
  value: string;
  icon: FC;
}

const languages: Langugaes[] = [
  { lang: "Russian", value: "ru", icon: CustomIcon.RussianFlag },
  { lang: "English", value: "en", icon: CustomIcon.AmericanFlag },
  { lang: "Uzbek", value: "uz", icon: CustomIcon.AmericanFlag },
];

export const Navbar: FC<INavbarProps> = ({}) => {
  const { i18n } = useTranslation();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <NavbarWrap>
        <Styles.Container>
          <Styles.Column width="100%" align_items={"center"}>
            <Styles.Row size={6} difference={0}>
              <Link href="/">
                <LogoLink>
                  <Image
                    height={42}
                    width={42}
                    src="/images/Icon.png"
                    alt="Brand logo"
                  />
                  <Typography.H5 color="white" style={{ display: "block" }}>
                    FindSport
                  </Typography.H5>
                </LogoLink>
              </Link>
            </Styles.Row>
            <Styles.Row size={6} difference={0}>
              <Styles.Column
                width="100%"
                align_items={"center"}
                gap={10}
                style={{ justifyContent: "flex-end" }}
              >
                <Link href={"/user"}>
                  <CustomIcon.User color="white" />
                </Link>
                <Link href={"/user"}>
                  <Heart.Outline color="white" />
                </Link>
                <ChangeLanguage
                  id="select"
                  defaultValue={i18n.language}
                  onChange={onChange}
                >
                  {languages.map((el, index) => (
                    <option key={index} value={el.value}>
                      {el.lang}
                    </option>
                  ))}
                </ChangeLanguage>
                {languages.map((el, index) => {
                  if (el.value === i18n.language) {
                    return <el.icon key={index} />;
                  }
                })}
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
        </Styles.Container>
      </NavbarWrap>
    </>
  );
};
