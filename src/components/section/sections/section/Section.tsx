import React, { FC, useEffect, useState } from "react";
import { SectionPersonImage, SectionWrap } from "./section.s";
import Styles, { Typography } from "src/styles";
import Image from "next/image";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";
import { IDetailAdd } from "src/models/IAdd";
import { addAPI } from "src/services/AddService";
import { useTranslation } from "react-i18next";

interface ISectionProps {
  id: number;
}

function addThousandSeparator(number: number) {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Section: FC<ISectionProps> = ({ id }) => {
  const [section, setSection] = useState<IDetailAdd>({} as IDetailAdd);
  const { data, isLoading, isError } = addAPI.useFetchDetailQuery({ id });
  const { t } = useTranslation();

  useEffect(() => {
    if (data && !isLoading) {
      setSection(data.data);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return (
      <Typography.H1 style={{ width: "100%" }} align="center">
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
    <SectionWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          <Styles.Row size={{ md: 12, lg: 7, "2xl": 8 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Common.ImageSlider
                  images={
                    section.images && section.images.length > 0
                      ? section.images
                      : []
                  }
                />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row size={{ xs: 7, sm: 8, md: 10 }} difference={0}>
                      <Styles.Column width="100%" direction={"column"} gap={8}>
                        <Typography.LEAD_TEXT>
                          {section.title}
                        </Typography.LEAD_TEXT>
                        <Styles.Column
                          width="100%"
                          align_items={"center"}
                          gap={10}
                        >
                          <Typography.SMALL color="dark100">
                            {section.rating}
                          </Typography.SMALL>
                          <CustomIcon.Stars rating={section.rating} />
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
                        <Common.CopyURL />
                        <Common.LikeBTN id={section.id} />
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Styles.Column width="100%" gap={20} align_items={"center"}>
                    <Typography.H2>
                      {addThousandSeparator(section.price)} sum
                    </Typography.H2>
                    <Typography.LEAD_TEXT>
                      (Групповая тренировка)
                    </Typography.LEAD_TEXT>
                  </Styles.Column>
                  <Styles.Column width="100%" gap={20} align_items={"center"}>
                    <Typography.H2>
                      {section.prices &&
                      section.prices.length > 0 &&
                      section.prices[0].price
                        ? addThousandSeparator(section.prices[0].price)
                        : "0"}{" "}
                      sum
                    </Typography.H2>
                    <Typography.LEAD_TEXT>
                      (Индивидуальная тренировка)
                    </Typography.LEAD_TEXT>
                  </Styles.Column>
                  <Typography.TINY>{section.description}</Typography.TINY>
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
                <Common.Contact
                  name={
                    section.phones && section.phones.length > 0
                      ? section.phones[0].name
                      : ""
                  }
                  phone={
                    section.phones && section.phones.length > 0
                      ? section.phones[0].phone
                      : ""
                  }
                />
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
                        <Typography.SMALL>
                          {section.ground_size}
                        </Typography.SMALL>
                      </Styles.Column>
                    </Styles.Row>
                    <Styles.Row size={2} difference={0}>
                      <Typography.SMALL>Крытая</Typography.SMALL>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.SMALL>
                    Возраст занимающихся: с {section.age_begin} до{" "}
                    {section.age_end} лет{" "}
                  </Typography.SMALL>
                  <Typography.SMALL>
                    Уровень подготовки: начинающие, любители
                  </Typography.SMALL>
                </Styles.Column>
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Orientir
                  landmark={section.landmark}
                  latitude={section.location && section.location.latitude}
                  longitude={section.location && section.location.longitude}
                />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </SectionWrap>
  );
};
