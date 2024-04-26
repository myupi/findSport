import { FC } from "react";
import { ClubWrap } from "./club.s";
import Styles, { Typography } from "src/styles";
import CustomIcon from "src/assets/custom-icons";
import Heart from "src/assets/icons/heart";
import Common from "src/components/common";

interface IClubsProps {}

export const Club: FC<IClubsProps> = (props) => {
  return (
    <ClubWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          <Styles.Row size={{ md: 12, lg: 7, "2xl": 8 }} difference={16}>
            <Styles.Column width="100%">
              <Common.AboutWrap>
                <Common.ImageSlider />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row size={{ xs: 7, sm: 8, md: 10 }} difference={0}>
                      <Styles.Column width="100%" direction={"column"} gap={8}>
                        <Typography.LEAD_TEXT>
                          Зал единоборств "Золотой Дракон"
                        </Typography.LEAD_TEXT>
                        <Styles.Column
                          width="100%"
                          align_items={"center"}
                          gap={10}
                        >
                          <Typography.SMALL color="dark100">
                            4.5
                          </Typography.SMALL>
                          <CustomIcon.Stars rating={4.5} />
                        </Styles.Column>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={{ xs: 5, sm: 4, md: 2 }} difference={0}>
                      <Styles.Column
                        width="100%"
                        gap={6}
                        align_items={"center"}
                        style={{ justifyContent: "flex-end" }}
                      >
                        <CustomIcon.Share />
                        <Heart.Outline />
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.SMALL>
                    В Центре 2 больших тренировочных зала с высокими потолками и
                    со всем необходимым оборудованием (шведские стенки, станки,
                    зеркала, гимнастические ковры). Зона ожидания, раздевалки со
                    шкафчиками и душевыми комнатами. Обучение проводят
                    дипломированные тренеры и хореографы.
                  </Typography.SMALL>
                </Styles.Column>
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ md: 12, lg: 5, "2xl": 4 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Common.Contact />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Orientir />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ClubWrap>
  );
};
