import { FC, useEffect, useState } from "react";
import { OfferWrap, OfferItemImage, OfferSlider, Offers } from "./offer.s";
import Styles, { Typography } from "src/styles";
import Animations from "src/animations";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import CustomIcon from "src/assets/custom-icons";
import { useTranslation } from "react-i18next";
import { addAPI } from "src/services/AddService";
import { ISport } from "src/models/IAdd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IOfferProps {}

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
  const { data, isLoading, isError } = addAPI.useFetchAllAddsQuery(8);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <PrevButton className="prev-button" onClick={() => {}} />,
    nextArrow: <NextButton className="next-button" onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [arr, setArr] = useState<ISport[]>([]);

  useEffect(() => {
    if (data && !isLoading) {
      setArr(data.append.sports);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return (
      <Typography.H1 align="center" style={{ width: "100%" }}>
        Loading...
      </Typography.H1>
    );
  }

  if (isError) {
    return (
      <Typography.H1 align="center" style={{ width: "100%" }}>
        {t("error")}
      </Typography.H1>
    );
  }

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
              <Link href={`/all-adds?id=${el.id}`} key={index}>
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
                      src={`https://projects-findsport.pn32gk.easypanel.host${el.image}`}
                      alt={el.title}
                    />
                  </OfferItemImage>
                  <Typography.H6 align="center">{el.title}</Typography.H6>
                </Styles.Column>
              </Link>
            ))}
          </Slider>
        </OfferSlider>
      </Styles.Container>
    </OfferWrap>
  );
};
