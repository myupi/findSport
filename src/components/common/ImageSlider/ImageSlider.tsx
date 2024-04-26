import Image from "next/image";
import React, { FC, useState } from "react";
import CustomIcon from "src/assets/custom-icons";
import Styles from "src/styles";
import { DotsDiv, SlideDots } from "./imageSlider.s";
import Animations from "src/animations";

interface IImageSliderProps {}

export const ImageSlider: FC<IImageSliderProps> = (props) => {
  const [active, setActive] = useState(0);

  const handleChangeActive = (index: number) => {
    setActive(index);
  };

  const NextSlideImage = () => {
    if (active == 4) {
      return setActive(0);
    }

    setActive((props) => props + 1);
  };

  const PrevSlideImage = () => {
    if (active == 0) {
      return setActive(4);
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
              src="https://images.wallpaperscraft.ru/image/single/devushka_uedinenie_art_129798_1600x900.jpg"
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
            {Array(5)
              .fill(undefined)
              .map((el, index) => (
                <SlideDots
                  active={active == index ? 1 : 0}
                  onClick={() => handleChangeActive(index)}
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
