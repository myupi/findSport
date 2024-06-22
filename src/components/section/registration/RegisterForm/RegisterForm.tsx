import React, { FC, useEffect, useState } from "react";
import { RegisterFormWrap } from "./registerForm.s";
import Styles, { Typography } from "src/styles";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Common from "src/components/common";
import CustomIcon from "src/assets/custom-icons";
import Link from "next/link";

interface IRegisterFormProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IRegister {
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: FC<IRegister> = ({ setConfirm, setState }) => {
  return (
    <Styles.Column
      width="100%"
      direction={"column"}
      style={{ paddingInline: "100px" }}
      gap={20}
    >
      <Typography.H3>Sign Up</Typography.H3>
      <Common.LabelBTN
        title="first-name"
        label="First name"
        placeholder="Enter your first name"
      />
      <Common.LabelBTN
        title="last-name"
        label="Last name"
        placeholder="Enter your last name"
      />
      <Common.LabelBTN
        title="phone-name"
        label="Phone name"
        placeholder="+998 (__) ___ __ __"
      />
      <Common.LabelBTN
        title="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Common.LabelBTN
        title="confirm-password"
        label="Confirm password"
        placeholder="Enter your confirm-password"
      />
      <Button
        style={{ background: "#5F5CF1", paddingBlock: 10 }}
        variant="contained"
        onClick={() => setConfirm(true)}
      >
        next <ArrowForwardIosIcon />
      </Button>
      <Typography.SMALL align="center">
        Already have an account?{" "}
        <span
          style={{ color: "#5F5CF1", cursor: "pointer" }}
          onClick={() => setState && setState(true)}
        >
          Sign In
        </span>
      </Typography.SMALL>
    </Styles.Column>
  );
};

const CongfirNumber: FC<IRegister> = ({ setConfirm }) => {
  return (
    <Styles.Column
      width="100%"
      direction={"column"}
      style={{ paddingInline: "100px" }}
      gap={20}
    >
      <Typography.H3>Confirm Number</Typography.H3>
      <Common.LabelBTN
        title="phone-number"
        label="Phone number"
        placeholder="+998 (91) 123 45 67"
      />
      <Common.BorderText title="Verification code has been sent (2:00)" />
      <Common.LabelBTN
        title="verification-code"
        label="Verification code"
        placeholder="Enter the verification code"
      />
      <Styles.Column width="100%" gap={5}>
        <Styles.Row size={6} difference={5}>
          <Button
            variant="outlined"
            style={{
              borderColor: "#5F5CF1",
              color: "#5F5CF1",
              width: "100%",
              paddingBlock: 10,
            }}
            onClick={() => setConfirm(false)}
          >
            Cancel
          </Button>
        </Styles.Row>
        <Styles.Row size={6} difference={5}>
          <Button
            variant="contained"
            style={{ background: "#5F5CF1", width: "100%", paddingBlock: 10 }}
          >
            Confirm
          </Button>
        </Styles.Row>
      </Styles.Column>
      <Typography.SMALL align="center">
        Did you get the password?{" "}
        <span style={{ color: "#5F5CF1", cursor: "pointer" }}>
          Resend Password
        </span>
      </Typography.SMALL>
    </Styles.Column>
  );
};

export const RegisterForm: FC<IRegisterFormProps> = ({ setState }) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  return (
    <RegisterFormWrap>
      <Styles.Container>
        <Styles.Column width="100%">
          <Styles.Row size={6} difference={0}>
            <Link href={"./"}>
              <Styles.Column width="100%" gap={10}>
                <CustomIcon.Logo />
                <Typography.H2 style={{ marginBottom: 20, color: "#5F5CF1" }}>
                  FindSport
                </Typography.H2>
              </Styles.Column>
            </Link>
            {!confirm ? (
              <SignUp setConfirm={setConfirm} setState={setState} />
            ) : (
              <CongfirNumber setConfirm={setConfirm} />
            )}
          </Styles.Row>
          <Styles.Row size={6} difference={0}>
            <Styles.Column width="100%">
              <Image
                alt="futbol"
                src={"/images/register.png"}
                width={664}
                height={944}
              />
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </RegisterFormWrap>
  );
};
