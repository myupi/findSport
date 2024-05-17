import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import CustomIcon from "src/assets/custom-icons";
import Styles from "src/styles";
import { DotsDiv, SlideDots } from "./imageSlider.s";
import Animations from "src/animations";

interface IImageSliderProps {
  images: string[];
}

export const ImageSlider: FC<IImageSliderProps> = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleChangeActive = (index: number) => {
    setActive(index);
  };

  const NextSlideImage = () => {
    if (active == images.length - 1) {
      return setActive(0);
    }

    setActive((props) => props + 1);
  };

  const PrevSlideImage = () => {
    if (active == 0) {
      return setActive(images.length - 1);
    }

    setActive((props) => props - 1);
  };

  return (
    <Styles.Column width="100%">
      <Styles.Row size={1} difference={0}>
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "center" }}
        >
          <button onClick={PrevSlideImage}>
            <CustomIcon.LeftArrow />
          </button>
        </Styles.Column>
      </Styles.Row>
      <Styles.Row size={10} difference={0}>
        <Styles.Column width="100%" style={{ position: "relative" }}>
          <Animations.SlideAnimate active={active}>
            <Image
              width={1600}
              height={900}
              src={`https://projects-findsport.pn32gk.easypanel.host/${images[active]}`}
              alt="image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
              }}
              priority
            />
          </Animations.SlideAnimate>
          <DotsDiv>
            {Array(images.length)
              .fill(undefined)
              .map((el, index) => (
                <SlideDots
                  active={active == index ? 1 : 0}
                  onClick={() => handleChangeActive(index)}
                  key={index}
                />
              ))}
          </DotsDiv>
        </Styles.Column>
      </Styles.Row>
      <Styles.Row size={1} difference={0}>
        <Styles.Column
          width="100%"
          align_items={"center"}
          style={{ justifyContent: "center" }}
        >
          <button onClick={NextSlideImage}>
            <CustomIcon.RightArrow />
          </button>
        </Styles.Column>
      </Styles.Row>
    </Styles.Column>
  );
};
