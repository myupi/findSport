import { FC } from "react";
import { OfferWrap, OfferItemImage, OfferSlider, Offers } from "./offer.s";
import Styles, { Typography } from "src/styles";
import Animations from "src/animations";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomIcon from "src/assets/custom-icons";
import { useTranslation } from "react-i18next";

interface IOfferProps {}

interface OfferItems {
  title: string;
  image: string;
}

const arr: OfferItems[] = [
  {
    title: "Paintball",
    image: "/images/Offer/Property1.png",
  },
  {
    title: "Game club",
    image: "/images/Offer/Property2.png",
  },
  {
    title: "Suv sporti",
    image: "/images/Offer/Property3.png",
  },
  {
    title: "Kibersport",
    image: "/images/Offer/Property4.png",
  },
  {
    title: "Stol tennis",
    image: "/images/Offer/Property5.png",
  },
  {
    title: "Badminton",
    image: "/images/Offer/Property6.png",
  },
  {
    title: "Basketbol",
    image: "/images/Offer/Property7.png",
  },
  {
    title: "Raqs",
    image: "/images/Offer/Property8.png",
  },
  {
    title: "Tennis",
    image: "/images/Offer/Property9.png",
  },
  {
    title: "Valleybol",
    image: "/images/Offer/Property10.png",
  },
  {
    title: "Gimnastika",
    image: "/images/Offer/Property11.png",
  },
  {
    title: "Jang sanati",
    image: "/images/Offer/Property12.png",
  },
  {
    title: "Fudbol",
    image: "/images/Offer/Property13.png",
  },
];

interface PrevButtonProps {
  className: string;
  onClick: () => void;
}

const PrevButton: FC<PrevButtonProps> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <CustomIcon.LeftArrow />
    </button>
  );
};

const NextButton: FC<PrevButtonProps> = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <CustomIcon.RightArrow />
    </button>
  );
};

export const Offer: FC<IOfferProps> = (props) => {
  const { t } = useTranslation();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevButton className="prev-button" onClick={() => {}} />, // ваш компонент для кнопки "назад"
    nextArrow: <NextButton className="next-button" onClick={() => {}} />, // ваш компонент для кнопки "вперед"
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <OfferWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction={"column"} gap={32}>
          <Animations.Title>
            <Typography.H2 align="center">{t("offer")}</Typography.H2>
          </Animations.Title>
        </Styles.Column>
        <OfferSlider>
          <Slider {...settings}>
            {arr.map((el, index) => (
              <Link href="/all-adds" key={index}>
                <Styles.Column
                  width="100%"
                  direction={"column"}
                  align_items={"center"}
                  gap={12}
                >
                  <OfferItemImage>
                    <Image
                      width={90}
                      height={90}
                      src={el.image}
                      alt={el.title}
                    />
                  </OfferItemImage>
                  <Typography.H6 align="center">{el.title}</Typography.H6>
                </Styles.Column>
              </Link>
            ))}
          </Slider>
        </OfferSlider>
        <Offers>
          <Styles.Column
            width="100%"
            gap={20}
            align_items={"center"}
            style={{ justifyContent: "center" }}
          >
            {arr.map((el, index) => (
              <Styles.Row size={{ "2xl": 1.7 }} difference={20} key={index}>
                <Link href="/all-adds">
                  <Styles.Column
                    width="100%"
                    direction={"column"}
                    align_items={"center"}
                    gap={12}
                  >
                    <OfferItemImage>
                      <Image
                        width={90}
                        height={90}
                        src={el.image}
                        alt={el.title}
                      />
                    </OfferItemImage>
                    <Typography.H6 align="center">{el.title}</Typography.H6>
                  </Styles.Column>
                </Link>
              </Styles.Row>
            ))}
          </Styles.Column>
        </Offers>
      </Styles.Container>
    </OfferWrap>
  );
};
