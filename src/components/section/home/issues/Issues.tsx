import { FC } from "react";
import {
  IssuesWrap,
  IssuesItemIcon,
  IssuesProblem,
  AvatarGroup,
  Avatar,
  RegisterButton,
  Background,
  OtherAvatar,
} from "./issues.s";
import Styles, { Typography } from "src/styles";
import Animations from "src/animations";
import CustomIcon from "src/assets/custom-icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface IIssuesProps {}

interface Issuesitem {
  title: string;
  icon: FC;
}

export const Issues: FC<IIssuesProps> = (props) => {
  const { t } = useTranslation();
  const arr: Issuesitem[] = [
    {
      title: t("issueUpgrade"),
      icon: CustomIcon.Upgrade,
    },
    {
      title: t("issueDocument"),
      icon: CustomIcon.Document,
    },
    {
      title: t("issueCursor"),
      icon: CustomIcon.Cursor,
    },
    {
      title: t("issuePersons"),
      icon: CustomIcon.Persons,
    },
  ];
  return (
    <IssuesWrap>
      <Styles.Container style={{ zIndex: 20, position: "relative" }}>
        <Styles.Column width="100%" direction={"column"} gap={32}>
          <Animations.Title>
            <Typography.H2 align="center">
              {t("issueTitleFirst")}{" "}
              <span style={{ color: "#5F5CF1" }}>{t("issueTitleSecond")}</span>
            </Typography.H2>
          </Animations.Title>
          <Animations.Title>
            <Typography.LEAD_TEXT align="center">
              {t("issueDescription")}
            </Typography.LEAD_TEXT>
          </Animations.Title>
        </Styles.Column>
        <Styles.Column width="100%" gap={{ xs: 8, sm: 16, lg: 24 }}>
          {arr.map((el, index) => (
            <Styles.Row
              size={{ xs: 12, sm: 6, lg: 3 }}
              difference={{ xs: 8, sm: 16, lg: 18 }}
              key={index}
            >
              <Styles.Column
                width="100%"
                align_items={"center"}
                direction="column"
                style={{ padding: "20px", justifyContent: "center" }}
              >
                <IssuesItemIcon>
                  <div>
                    <el.icon />
                  </div>
                  <Typography.H6 align="center">{el.title}</Typography.H6>
                </IssuesItemIcon>
              </Styles.Column>
            </Styles.Row>
          ))}
        </Styles.Column>
        <IssuesProblem>
          <Styles.Column
            width="100%"
            style={{ justifyContent: "center" }}
            gap={10}
          >
            <Styles.Row size={{ xs: 12, md: 6 }} difference={10}>
              <Styles.Column width="100%" direction={"column"} gap={10}>
                <Typography.H3 color="white">
                  {t("solveProblem")} 😍
                </Typography.H3>
                <Typography.SMALL color="white">
                  {t("joinCustomers")}
                </Typography.SMALL>
                <OtherAvatar>
                  <Styles.Column width="100%" align_items={"center"}>
                    <Styles.Row
                      size={{ xs: 9, md: 8, lg: 6, "2xl": 4 }}
                      difference={0}
                    >
                      <AvatarGroup>
                        <Avatar>
                          <Image
                            width={1000}
                            height={1500}
                            alt=""
                            src="/images/testPhoto.avif"
                          />
                        </Avatar>
                        <Avatar>
                          <Image
                            width={1000}
                            height={1500}
                            src="/images/testPhoto.avif"
                            alt=""
                          />
                        </Avatar>
                        <Avatar>
                          <Image
                            width={1000}
                            height={1500}
                            src="/images/testPhoto.avif"
                            alt=""
                          />
                        </Avatar>
                        <Avatar>
                          <Image
                            width={1000}
                            height={1500}
                            src="/images/testPhoto.avif"
                            alt=""
                          />
                        </Avatar>
                      </AvatarGroup>
                    </Styles.Row>
                    <Styles.Row
                      size={{ xs: 3, md: 4, lg: 6, "2xl": 8 }}
                      difference={0}
                    >
                      <Typography.SMALL color="white">
                        and others
                      </Typography.SMALL>
                    </Styles.Row>
                  </Styles.Column>
                </OtherAvatar>
              </Styles.Column>
            </Styles.Row>
            <Styles.Row size={{ xs: 12, md: 6 }} difference={10}>
              <Styles.Column
                width="100%"
                align_items={"center"}
                style={{ justifyContent: "center" }}
              >
                <RegisterButton>{t("registration")}</RegisterButton>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
          <div className="circles"></div>
        </IssuesProblem>
      </Styles.Container>
      <Background>
        <Image
          width={1440}
          height={1052}
          src={"/images/Background.svg"}
          alt="bg"
        />
      </Background>
    </IssuesWrap>
  );
};
