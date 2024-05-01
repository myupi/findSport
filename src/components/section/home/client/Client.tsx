import { FC, useState } from "react";
import {
  ClientWrap,
  ImageDots,
  ImageElipse,
  ImagesCircle,
  LeftImages,
  PerImage,
  RightImage,
  SliderDots,
} from "./client.s";
import Styles, { Typography } from "src/styles";
import Animations from "src/animations";
import Image from "next/image";
import CustomIcon from "src/assets/custom-icons";
import { useTranslation } from "react-i18next";

interface IClientProps {}
interface Comments {
  name: string;
  desc: string;
}

const arr: Comments[] = [
  {
    name: "Ali Gaybullaev",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Jahongir Axtamov",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ",
  },
  {
    name: "Matthew Paul",
    desc: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
  },
  {
    name: "Ali Gaybullaev",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    name: "Jahongir Axtamov",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ",
  },
];

export const Client: FC<IClientProps> = (props) => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const handleChangeActive = (index: number) => {
    setActive(index);
  };
  return (
    <ClientWrap>
      <Styles.Container>
        <Animations.Title>
          <Typography.H2 align="center">
            {t("clientTitleFirst")}{" "}
            <span style={{ color: "#5F5CF1" }}> {t("clientTitleSecond")}</span>
          </Typography.H2>
        </Animations.Title>
        <Animations.Title>
          <Typography.LEAD_TEXT align="center">
            {t("client")}
          </Typography.LEAD_TEXT>
        </Animations.Title>
        <Styles.Column width="100%">
          <Styles.Row size={{ xs: 12, lg: 4 }} difference={0}>
            <Styles.Column width="100%">
              <RightImage>
                <Image
                  width={1000}
                  height={1500}
                  src={"/images/testPhoto.avif"}
                  alt="photo"
                />
                <ImageDots>
                  <CustomIcon.Dots />
                </ImageDots>
                <ImageElipse>
                  <CustomIcon.Elipse />
                </ImageElipse>
              </RightImage>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ xs: 12, lg: 4 }} difference={0}>
            <Styles.Column
              width="100%"
              direction={"column"}
              style={{ justifyContent: "center" }}
              gap={28}
            >
              <Animations.SlideAnimate active={active}>
                <Typography.H4>{arr[active].name}</Typography.H4>
                <Typography.LEAD_TEXT>{arr[active].desc}</Typography.LEAD_TEXT>
              </Animations.SlideAnimate>
              <Styles.Column width="100%" gap={12}>
                {Array(5)
                  .fill(undefined)
                  .map((el, index) => (
                    <SliderDots
                      active={index == active ? 1 : 0}
                      onClick={() => handleChangeActive(index)}
                      key={index}
                    />
                  ))}
              </Styles.Column>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ xs: 12, lg: 4 }} difference={0}>
            <Styles.Column width="100%">
              <LeftImages>
                {Array(7)
                  .fill(undefined)
                  .map((el, index) => (
                    <PerImage index={index} key={index}>
                      <Image
                        width={1000}
                        height={1500}
                        src={"/images/testPhoto.avif"}
                        alt="photo"
                      />
                    </PerImage>
                  ))}
                <ImagesCircle>
                  <CustomIcon.Circle />
                </ImagesCircle>
              </LeftImages>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ClientWrap>
  );
};
