import React, { FC, useEffect, useState } from "react";
import { GroundWrap } from "./ground.s";
import Styles, { Typography } from "src/styles";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";
import { addAPI } from "src/services/AddService";
import { IDetailAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface IGroundProps {
  id: number;
}

function addThousandSeparator(number: number) {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Ground: FC<IGroundProps> = ({ id }) => {
  const { data, isLoading, isError } = addAPI.useFetchDetailQuery({ id: id });
  const [ground, setGround] = useState<IDetailAdd>({} as IDetailAdd);
  const { t } = useTranslation();

  useEffect(() => {
    if (data && !isLoading) {
      setGround(data.data);
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
    <GroundWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          <Styles.Row size={{ md: 12, lg: 7, "2xl": 8 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Common.ImageSlider
                  images={
                    ground.images && ground.images.length > 0
                      ? ground.images
                      : []
                  }
                />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row size={{ xs: 7, sm: 8, md: 10 }} difference={0}>
                      <Styles.Column width="100%" direction={"column"} gap={8}>
                        <Typography.H4>{ground.title}</Typography.H4>
                        <Styles.Column
                          width="100%"
                          align_items={"center"}
                          gap={10}
                        >
                          <Typography.SMALL color="dark100">
                            {ground.rating}
                          </Typography.SMALL>
                          <CustomIcon.Stars rating={ground.rating} />
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
                        <Common.LikeBTN id={ground.id} />
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.H2>
                    {addThousandSeparator(ground.price)} sum
                  </Typography.H2>
                  <Typography.SMALL>{ground.description}</Typography.SMALL>
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
                        <Typography.SMALL>
                          {ground.ground_size}
                        </Typography.SMALL>
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
                <Common.Orientir
                  landmark={ground.landmark}
                  latitude={ground.location && ground.location.latitude}
                  longitude={ground.location && ground.location.longitude}
                />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Contact
                  name={
                    ground.phones && ground.phones.length > 0
                      ? ground.phones[0].name
                      : ""
                  }
                  phone={
                    ground.phones && ground.phones.length > 0
                      ? ground.phones[0].phone
                      : ""
                  }
                />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </GroundWrap>
  );
};
