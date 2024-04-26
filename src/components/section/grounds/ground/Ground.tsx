import React, { FC } from "react";
import { GroundWrap } from "./ground.s";
import Styles, { Typography } from "src/styles";
import Heart from "src/assets/icons/heart";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";

interface IGroundProps {}

export const Ground: FC<IGroundProps> = (props) => {
  return (
    <GroundWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          <Styles.Row size={{ md: 12, lg: 7, "2xl": 8 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Common.ImageSlider />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row size={{ xs: 7, sm: 8, md: 10 }} difference={0}>
                      <Styles.Column width="100%" direction={"column"} gap={8}>
                        <Typography.H4>
                          Зал единоборств "Золотой Дракон"
                        </Typography.H4>
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
                  <Typography.H2>200 000 sum</Typography.H2>
                  <Typography.SMALL>
                    Спортивный зал 140 м2 в 5-ти минутах пешком от м.
                    Авиамоторная. Зал отлично подойдет для проведения
                    индивидуальных и групповых занятий самбо, дзюдо, йогой,
                    восточными практиками, для организации семинаров,
                    мастер-классов. Мягкое покрытие, душевые, раздевалки,
                    туалеты. Есть необходимый инвентарь для занятий.
                    <br />
                    <br />
                    Спортивный зал 173 м2 в 5-ти минутах пешком от м.
                    Авиамоторная. Зал отлично подойдет для проведения
                    индивидуальных и групповых занятий самбо, дзюдо, йогой,
                    восточными практиками, для организации семинаров,
                    мастер-классов. Мягкое покрытие, душевые, раздевалки,
                    туалеты. Есть необходимый инвентарь для занятий
                  </Typography.SMALL>
                </Styles.Column>
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ md: 12, lg: 5, "2xl": 4 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={15}>
                  <Styles.Column
                    width="100%"
                    style={{
                      borderBottom: "1px solid #F2F2F2",
                      paddingBottom: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Styles.Row size={10} difference={0}>
                      <Styles.Column
                        width="100%"
                        gap={10}
                        align_items={"center"}
                      >
                        <CustomIcon.Field />
                        <Typography.SMALL>15 x 11.5 x 4.5</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={2} difference={0}>
                      <Styles.Column
                        width="100%"
                        align_items={"center"}
                        style={{ justifyContent: "center" }}
                      >
                        <Typography.SMALL>Крытая</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0}>
                      <Styles.Column
                        width="100%"
                        gap={10}
                        align_items={"center"}
                      >
                        <CustomIcon.Shower />
                        <Typography.SMALL>Душ</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Succes />
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0} align_items={"center"}>
                      <Styles.Column width="100%" gap={10}>
                        <CustomIcon.Chrooms />
                        <Typography.SMALL>Раздевалка</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Succes />
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0} align_items={"center"}>
                      <Styles.Column width="100%" gap={10}>
                        <CustomIcon.Lighting />
                        <Typography.SMALL>Освещение</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Succes />
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0} align_items={"center"}>
                      <Styles.Column width="100%" gap={10}>
                        <CustomIcon.Parking />
                        <Typography.SMALL>
                          Парковка — бесплатная
                        </Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Succes />
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0} align_items={"center"}>
                      <Styles.Column width="100%" gap={10}>
                        <CustomIcon.Tribunes />
                        <Typography.SMALL>Трибуны</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Failure />
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%">
                    <Styles.Row size={11} difference={0} align_items={"center"}>
                      <Styles.Column width="100%" gap={10}>
                        <CustomIcon.Inventory />
                        <Typography.SMALL>Инвентарь</Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={1} difference={0}>
                      <CustomIcon.Succes />
                    </Styles.Row>
                  </Styles.Column>
                </Styles.Column>
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Orientir />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Contact />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </GroundWrap>
  );
};
