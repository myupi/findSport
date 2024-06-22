import React, { FC, useState } from "react";
import { CreateClubWrap } from "./CreateClub.s";
import Styles, { Typography } from "src/styles";
import Common from "src/components/common";
import { Button } from "@mui/material";

interface ICreateClubProps {}

export const CreateClub: FC<ICreateClubProps> = (props) => {
  const [images, setImages] = useState<File[]>([]);
  return (
    <CreateClubWrap>
      <Styles.Container>
        <form>
          <Typography.H2>Add new club</Typography.H2>
          <Common.LabelBTN
            label="Title"
            placeholder="Product title"
            title="title"
            width="100%"
          />
          <Common.TextArea />
          <Common.BorderText title="Add employee" width="100%" />
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Username"
                placeholder="Enter username"
                title="username"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Phone number"
                placeholder="+998 (__) ___ __ __"
                title="phone-number"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={12} difference={10}>
              <Styles.Column
                width="100%"
                gap={10}
                align_items={"center"}
                style={{ justifyContent: "flex-end" }}
              >
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "#5F5CF1",
                    color: "#5F5CF1",
                    padding: "14px 24px",
                  }}
                >
                  Add me
                </Button>
                <Button
                  variant="contained"
                  style={{ background: "#5F5CF1", padding: "14px 24px" }}
                >
                  Add employee
                </Button>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
          <Common.BorderText title="Photo" width="100%" />
          <Common.ImagesBtn images={images} setImages={setImages} />
          <Common.BorderText title="Change location" width="100%" />
          <Common.CustomMap
            label="Your name"
            placeholder="John Doe"
            title="your-name"
          />
          <Styles.Column
            width="100%"
            gap={10}
            align_items={"center"}
            style={{ justifyContent: "flex-end" }}
          >
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
            <Button
              variant="contained"
              style={{ background: "#5F5CF1", padding: "14px 24px" }}
            >
              Save
            </Button>
          </Styles.Column>
        </form>
      </Styles.Container>
    </CreateClubWrap>
  );
};
