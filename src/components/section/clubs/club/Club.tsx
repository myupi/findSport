import { FC, useEffect, useState } from "react";
import { ClubWrap } from "./club.s";
import Styles, { Typography } from "src/styles";
import CustomIcon from "src/assets/custom-icons";
import Common from "src/components/common";
import { addAPI } from "src/services/AddService";
import { IDetailAdd } from "src/models/IAdd";
import { useTranslation } from "react-i18next";

interface IClubsProps {
  id: number;
}

export const Club: FC<IClubsProps> = ({ id }) => {
  const { data, isLoading, isError } = addAPI.useFetchDetailQuery({ id: id });
  const [club, setClub] = useState<IDetailAdd>({} as IDetailAdd);
  const { t } = useTranslation();

  useEffect(() => {
    if (data && !isLoading) {
      setClub(data.data);
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
    <ClubWrap>
      <Styles.Container>
        <Styles.Column width="100%" gap={16}>
          <Styles.Row size={{ md: 12, lg: 7, "2xl": 8 }} difference={16}>
            <Styles.Column width="100%" gap={20}>
              <Common.AboutWrap>
                <Common.ImageSlider
                  images={
                    club.images && club.images.length > 0 ? club.images : []
                  }
                />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Styles.Column width="100%" direction={"column"} gap={16}>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row size={{ xs: 7, sm: 8, md: 10 }} difference={0}>
                      <Styles.Column width="100%" direction={"column"} gap={8}>
                        <Typography.LEAD_TEXT>
                          {club.title}
                        </Typography.LEAD_TEXT>
                        <Styles.Column
                          width="100%"
                          align_items={"center"}
                          gap={10}
                        >
                          <Typography.SMALL color="dark100">
                            {club.rating}
                          </Typography.SMALL>
                          <CustomIcon.Stars rating={club.rating} />
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
                        <Common.LikeBTN id={club.id} />
                      </Styles.Column>
                    </Styles.Row>
                  </Styles.Column>
                  <Typography.SMALL>{club.description}</Typography.SMALL>
                </Styles.Column>
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={{ md: 12, lg: 5, "2xl": 4 }} difference={16}>
            <Styles.Column width="100%" direction={"column"} gap={16}>
              <Common.AboutWrap>
                <Common.Contact
                  name={
                    club.phones && club.phones.length > 0
                      ? club.phones[0].name
                      : ""
                  }
                  phone={
                    club.phones && club.phones.length > 0
                      ? club.phones[0].phone
                      : ""
                  }
                />
              </Common.AboutWrap>
              <Common.AboutWrap>
                <Common.Orientir
                  landmark={club.landmark}
                  latitude={club.location && club.location.latitude}
                  longitude={club.location && club.location.longitude}
                />
              </Common.AboutWrap>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ClubWrap>
  );
};
