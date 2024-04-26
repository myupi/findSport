import { FC } from "react";
import { PartnersWrap } from "./partners.s";
import Styles from "src/styles";
import Image from "next/image";

interface IPartnersProps {}

interface Partners {
  title: string;
  image: string;
}

const arr: Partners[] = [
  {
    title: "slack",
    image: "/images/Partners/image3.png",
  },
  {
    title: "airbnb",
    image: "/images/Partners/image4.png",
  },
  {
    title: "amazon",
    image: "/images/Partners/image5.png",
  },
  {
    title: "google",
    image: "/images/Partners/image7.png",
  },
  {
    title: "netflix",
    image: "/images/Partners/image8.png",
  },
];

export const Partners: FC<IPartnersProps> = (props) => {
  return (
    <PartnersWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={20} align_items={"center"}>
          {arr.map((el, index) => (
            <Styles.Row size={2.4} difference={16} key={index}>
              <Styles.Column
                width="100%"
                align_items={"center"}
                style={{ justifyContent: "center" }}
              >
                <Image width={168} height={44} src={el.image} alt={el.title} />
              </Styles.Column>
            </Styles.Row>
          ))}
        </Styles.Column>
      </Styles.Container>
    </PartnersWrap>
  );
};
