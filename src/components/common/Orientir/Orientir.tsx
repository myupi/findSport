import React, { FC } from "react";
import CustomIcon from "src/assets/custom-icons";
import Styles, { Typography } from "src/styles";

interface IOrientirProps {}

export const Orientir: FC<IOrientirProps> = (props) => {
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
                <Typography.TINY>
                  286290, Псковская область, город Дорохово, наб. Будапештсткая,
                  62
                </Typography.TINY>
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
                <Typography.TINY>
                  286290, Псковская область, город Дорохово, наб. Будапештсткая,
                  62
                </Typography.TINY>
              </Styles.Row>
            </Styles.Column>
          </Styles.Column>
        </Styles.Column>
      </Styles.Row>
      <Styles.Row size={{ xs: 12, md: 4 }} difference={12}>
        <Styles.Column width="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.53825030698!2d69.25569201928712!3d41.33112231565032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b70de29132d%3A0x4f62d5ff05a9a3dd!2z0JPQsNGE0YPRgCDQk9GD0LvQvtC8!5e0!3m2!1sru!2s!4v1712922924575!5m2!1sru!2s"
            style={{
              border: 0,
              width: "100%",
              borderRadius: "6px",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Styles.Column>
      </Styles.Row>
    </Styles.Column>
  );
};
