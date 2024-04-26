import React, { FC } from "react";
import { SectionPersonImage, SectionWrap } from "./section.s";
import Styles, { Typography } from "src/styles";
import Image from "next/image";
import CustomIcon from "src/assets/custom-icons";
import Heart from "src/assets/icons/heart";
import Common from "src/components/common";

interface ISectionProps {}

export const Section: FC<ISectionProps> = (props) => {
  return (
    <SectionWrap>
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
                  <Styles.Column width="100%" gap={20} align_items={"center"}>
                    <Typography.H2>200 000 sum</Typography.H2>
                    <Typography.LEAD_TEXT>
                      (Групповая тренировка)
                    </Typography.LEAD_TEXT>
                  </Styles.Column>
                  <Styles.Column width="100%" gap={20} align_items={"center"}>
                    <Typography.H2>400 000 sum</Typography.H2>
                    <Typography.LEAD_TEXT>
                      (Индивидуальная тренировка)
                    </Typography.LEAD_TEXT>
                  </Styles.Column>
                  <Typography.TINY>
                    Футбол на английском для 2010-2012 г.р. (команда для
                    международных турниров). Ведем прежде всего отбор (с
                    небольшой долей набора) мальчиков, но возможна отдельная
                    группа для девочек при сильной инициативе от родителей.
                    Можно без футбольного опыта (опыт в координационных видах
                    желателен). При себе иметь бутсы сороконожки, форму по
                    погоде (щитки-гетры на усмотрение).
                    <br />
                    Тренировки 3 р\нед по 1.5 часа в окно между 17:00 и 19:00
                    (мы будем подкручивать график под большинство).
                    <br />
                    <br />
                    Как проходит занятие? Тренировки проходят на английском (в
                    начале частично, детям синхронно переводится; будут
                    выдаваться памятки по словам и конструкциям).
                    <br />
                    <br />
                    Простой ребенка без мяча или связок с партнерами сведен
                    практически к нулю.
                    <br />
                    Родители будут активно вовлечены в процесс контролем по
                    питанию ребенка, контролем над домашними заданиями по
                    футболу и прикладному языку, будут принимать участие в
                    консилиуме с тренером и инвестором по итогам контрольных
                    тренировок с датчиками (вовлеченность родителей для нас
                    крайне важна, если у вас нет на это времени или желания –
                    рассмотрите для ребенка обычную коммерцию).
                  </Typography.TINY>
                </Styles.Column>
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" gap={0}>
                    <Styles.Row size={1} difference={12}>
                      <SectionPersonImage>
                        <Image
                          width={1000}
                          height={1500}
                          src="/images/testPhoto.avif"
                          alt="asd"
                        />
                      </SectionPersonImage>
                    </Styles.Row>
                    <Styles.Row size={11} difference={0}>
                      <Styles.Column width="100%" direction={"column"}>
                        <Typography.H6>Ronald Simpson</Typography.H6>
                        <Styles.Column
                          width="100%"
                          gap={5}
                          align_items={"center"}
                        >
                          <Typography.SMALL>4.5</Typography.SMALL>
                          <CustomIcon.Stars rating={4.5} />
                        </Styles.Column>
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.TINY>
                    Образование
                    <br />
                    <br />
                    2018 — Тренерская аттестация уровня «С» (Центр по подготовке
                    детско-юношеских тренеров по футболу имени К.И.Бескова
                    <br />
                    <br /> 2009-2013 — среднее-специальное
                    (спортивно-педагогический колледж)
                    <br />
                    <br /> 2013-2018 — Высшее педагогическое образование,
                    бакалавр (Московская международная академия)
                    <br />
                    <br /> Опыт <br />
                    <br />
                    2009 — МФК Динамо-2 футболист
                    <br />
                    <br /> 2011 — МФК ЦСКА футболист
                    <br />
                    <br /> 2014 — Звезда Люберцы футболист
                    <br />
                    <br /> 2015-2017 — Pinkov Аcademy тренер по футболу
                    <br />
                    <br />
                    2018 — Тренер FC Stuttgart
                  </Typography.TINY>
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
                <Styles.Column width="100%" direction={"column"} gap={15}>
                  <Styles.Column width="100%">
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
                      <Typography.SMALL>Крытая</Typography.SMALL>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.SMALL>
                    Возраст занимающихся: с 8 до 12 лет{" "}
                  </Typography.SMALL>
                  <Typography.SMALL>
                    Уровень подготовки: начинающие, любители
                  </Typography.SMALL>
                </Styles.Column>
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Orientir />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </SectionWrap>
  );
};
