import React, { FC } from "react";
import CustomIcon from "src/assets/custom-icons";
import Styles, { Typography } from "src/styles";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { CustomMap } from "./orientir.s";
import { ILocation } from "src/models/IAdd";

interface IOrientirProps extends ILocation {
  landmark: string;
}

export const Orientir: FC<IOrientirProps> = ({
  landmark,
  latitude,
  longitude,
}) => {
  return (
    <Styles.Column width="100%" align_items={"center"} gap={12}>
      <Styles.Row size={{ xs: 12, md: 8 }} difference={12}>
        <Styles.Column width="100%" gap={8} direction={"column"}>
          <Styles.Column width="100%" direction={"column"} gap={6}>
            <Typography.H5>Location</Typography.H5>
            <Styles.Column width="100%" gap={8}>
              <Styles.Row size={1} difference={8}>
                <CustomIcon.Location />
              </Styles.Row>
              <Styles.Row size={11} difference={8}>
                <Typography.TINY>{landmark}</Typography.TINY>
              </Styles.Row>
            </Styles.Column>
          </Styles.Column>
          <Styles.Column width="100%" direction={"column"} gap={6}>
            <Typography.H5>Orientir</Typography.H5>
            <Styles.Column width="100%" gap={8}>
              <Styles.Row size={1} difference={8}>
                <CustomIcon.Location />
              </Styles.Row>
              <Styles.Row size={11} difference={8}>
                <Typography.TINY>{landmark}</Typography.TINY>
              </Styles.Row>
            </Styles.Column>
          </Styles.Column>
        </Styles.Column>
      </Styles.Row>
      <Styles.Row size={{ xs: 12, md: 4 }} difference={12}>
        <Styles.Column width="100%">
          <CustomMap>
            <YMaps>
              <Map
                defaultState={{
                  center: [latitude, longitude],
                  zoom: 15,
                }}
              />
            </YMaps>
          </CustomMap>
        </Styles.Column>
      </Styles.Row>
    </Styles.Column>
  );
};
