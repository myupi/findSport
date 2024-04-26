import Image from "next/image";
import React, { FC, useState } from "react";
import Styles, { Typography } from "src/styles";
import { ContactButton, ContactImage, DropBox, DropDown } from "./contact.s";
import { AnimatePresence } from "framer-motion";
import Animations from "src/animations";

interface IContactProps {}

export const Contact: FC<IContactProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((props) => !props);
  }

  return (
    <Styles.Column width="100%" gap={8}>
      <Styles.Column width="100%" gap={12}>
        <Styles.Row size={{ xs: 2, sm: 1, lg: 1.5 }} difference={12}>
          <ContactImage>
            <Image
              width={1000}
              height={1500}
              src="/images/testPhoto.avif"
              alt="asd"
            />
          </ContactImage>
        </Styles.Row>
        <Styles.Row size={{ xs: 10, sm: 11, lg: 10.5 }} difference={12}>
          <Styles.Column width="100%" direction={"column"}>
            <Typography.H6>Ronald Simpson</Typography.H6>
            <Typography.SMALL>+998-(99)-Показать телефон</Typography.SMALL>
          </Styles.Column>
        </Styles.Row>
      </Styles.Column>
      <Styles.Column width="100%">
        <DropDown>
          <ContactButton onClick={handleOpen}>Connection</ContactButton>
          <AnimatePresence>
            {isOpen && (
              <Animations.ContactAnimate duration={0.5}>
                <DropBox>
                  <Styles.Column width="100%" gap={5}>
                    <Styles.Row size={6} difference={5}>
                      <Animations.ContactAnimate duration={1}>
                        <ContactButton width={true}>Chat</ContactButton>
                      </Animations.ContactAnimate>
                    </Styles.Row>
                    <Styles.Row size={6} difference={5}>
                      <Animations.ContactAnimate duration={1}>
                        <ContactButton width={true}>Phone Number</ContactButton>
                      </Animations.ContactAnimate>
                    </Styles.Row>
                  </Styles.Column>
                </DropBox>
              </Animations.ContactAnimate>
            )}
          </AnimatePresence>
        </DropDown>
      </Styles.Column>
    </Styles.Column>
  );
};
