import Image from "next/image";
import React, { FC } from "react";
import Styles, { Typography } from "src/styles";
import { SignInFormWrap } from "./signInForm.s";
import Common from "src/components/common";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomIcon from "src/assets/custom-icons";
import Link from "next/link";

interface ISignInFormProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignInForm: FC<ISignInFormProps> = ({ setState }) => {
  return (
    <SignInFormWrap>
      <Styles.Container>
        <Styles.Column width="100%">
          <Styles.Row size={6} difference={0}>
            <Styles.Column width="100%">
              <Image
                alt="futbol"
                src={"/images/signin.png"}
                width={664}
                height={944}
              />
            </Styles.Column>
          </Styles.Row>
          <Styles.Row size={6} difference={0}>
            <Link href={"./"}>
              <Styles.Column width="100%" gap={10}>
                <CustomIcon.Logo />
                <Typography.H2 style={{ marginBottom: 20, color: "#5F5CF1" }}>
                  FindSport
                </Typography.H2>
              </Styles.Column>
            </Link>
            <Styles.Column
              width="100%"
              direction={"column"}
              style={{ paddingInline: "100px" }}
              gap={20}
            >
              <Typography.H3>Sign In</Typography.H3>
              <Common.LabelBTN
                title="phone-number"
                label="Phone number"
                placeholder="+998 (__) ___ __ __"
              />
              <Common.LabelBTN
                title="password"
                label="Enter password"
                placeholder="Enter your password"
              />
              <Button
                style={{ background: "#5F5CF1", paddingBlock: 10 }}
                variant="contained"
              >
                next <ArrowForwardIosIcon />
              </Button>
              <Typography.SMALL align="center">
                Don't have an account?{" "}
                <span
                  onClick={() => setState(false)}
                  style={{ color: "#5F5CF1", cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </Typography.SMALL>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </SignInFormWrap>
  );
};
