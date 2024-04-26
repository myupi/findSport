import { FC, useState } from "react";
import { ChangeLanguage, Languages, LogoLink, NavbarWrap } from "./navbar.s";
import Styles, { Typography } from "src/styles";
import Link from "next/link";
import Image from "next/image";
import Heart from "src/assets/icons/heart";
import CustomIcon from "src/assets/custom-icons";
import { AnimatePresence } from "framer-motion";
import Animations from "src/animations";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((props) => !props);
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
                <Heart.Outline color="white" />
                <Styles.Row size={2} difference={10}>
                  <Styles.Column width="100%">
                    <ChangeLanguage onClick={handleOpen}>
                      <Typography.SMALL color="white">English</Typography.SMALL>
                      <CustomIcon.RussianFlag />
                      <AnimatePresence>
                        {open && <Languages>Russian</Languages>}
                      </AnimatePresence>
                    </ChangeLanguage>
                  </Styles.Column>
                </Styles.Row>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
        </Styles.Container>
      </NavbarWrap>
    </>
  );
};
