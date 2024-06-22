import React, { FC } from "react";
import Styles from "src/styles";
import Common from "..";
import {
  GeolocationControl,
  Map,
  YMaps,
  ZoomControl,
} from "@pbe/react-yandex-maps";

interface ICustomMapProps {
  label: string;
  placeholder: string;
  title: string;
}

export const CustomMap: FC<ICustomMapProps> = ({
  label,
  placeholder,
  title,
}) => {
  return (
    <Styles.Column
      width="100%"
      direction={"column"}
      align_items={"flex-start"}
      gap={20}
    >
      <Common.LabelBTN label={label} placeholder={placeholder} title={title} />
      <YMaps>
        <Map
          width={"100%"}
          height={300}
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        >
          <ZoomControl
            options={{ position: { right: 10, top: 10 }, size: "small" }}
          />
          <GeolocationControl options={{ float: "left" }} />
        </Map>
      </YMaps>
    </Styles.Column>
  );
};
