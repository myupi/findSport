import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import Styles, { Typography } from "src/styles";
import { ContactButton, ContactImage, DropBox, DropDown } from "./contact.s";
import { AnimatePresence } from "framer-motion";
import Animations from "src/animations";
import { IPhones } from "src/models/IAdd";

interface IContactProps extends IPhones {}

interface IContactOptionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactOptions: FC<IContactOptionsProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DropBox>
          <div onClick={onClose}>
            <button>Chat</button>
            <button>Phone Number</button>
          </div>
        </DropBox>
      )}
    </AnimatePresence>
  );
};

export const Contact: FC<IContactProps> = ({ name, phone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropDownRef]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
            <Typography.H6>{name}</Typography.H6>
            <Typography.SMALL>{phone}</Typography.SMALL>
          </Styles.Column>
        </Styles.Row>
      </Styles.Column>
      <Styles.Column width="100%">
        <DropDown ref={dropDownRef}>
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
