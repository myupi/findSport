import React, { FC } from "react";
import { EditProfileWrap } from "./editProfile.s";
import Styles, { Typography } from "src/styles";
import Common from "src/components/common";
import { Button } from "@mui/material";
import Link from "next/link";

interface IEditProfileProps {}

export const EditProfile: FC<IEditProfileProps> = (props) => {
  return (
    <EditProfileWrap>
      <Styles.Container>
        <form>
          <Typography.H2>Edit profile</Typography.H2>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Enter your first name"
                label="First name"
                title="first-name"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Enter your last name"
                label="Last name"
                title="last-name"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Enter your email"
                label="Email"
                title="email"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Enter your phone  number"
                label="Phone number"
                title="phone-number"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" direction={"column"} gap={20}>
            <Common.BorderText title="Change password" width="100%" />
            <Common.LabelBTN
              placeholder="Enter your old password"
              label="Old password"
              title="old-password"
              width="100%"
              isPassword
            />
          </Styles.Column>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Enter your new password"
                label="New password"
                title="new-password"
                width="100%"
                isPassword
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                placeholder="Re enter your new password"
                label="New password"
                title="p"
                width="100%"
                isPassword
              />
            </Styles.Row>
            <Styles.Row size={12} difference={10}>
              <Styles.Column
                width="100%"
                gap={10}
                align_items={"center"}
                style={{ justifyContent: "flex-end" }}
              >
                <Link href={"/"}>
                  <Button
                    variant="outlined"
                    style={{
                      borderColor: "#5F5CF1",
                      color: "#5F5CF1",
                      padding: "14px 24px",
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  style={{ background: "#5F5CF1", padding: "14px 24px" }}
                >
                  Save
                </Button>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
        </form>
      </Styles.Container>
    </EditProfileWrap>
  );
};
