import React, { FC, useEffect, useState } from "react";
import { CreateGroundWrap } from "./createGround.s";
import Styles, { Typography } from "src/styles";
import Common from "src/components/common";
import { Button } from "@mui/material";

interface ICreateGroundProps {}

export const CreateGround: FC<ICreateGroundProps> = (props) => {
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <CreateGroundWrap>
      <Styles.Container>
        <form>
          <Typography.H2>Add new ground</Typography.H2>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Pitle"
                placeholder="Product title"
                title="Title"
                width="100%"
                setState={setTitle}
              />
            </Styles.Row>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Price"
                placeholder="Product price"
                title="Price"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={4} difference={10}>
              <Common.LabelBTN
                label="Area size"
                placeholder="Height"
                title="height"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={4} difference={10}>
              <Common.LabelBTN
                label=""
                placeholder="Width"
                title="width"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={4} difference={10}>
              <Common.LabelBTN
                label=""
                placeholder="Length"
                title="length"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={10}>
              <Common.SelectBtn />
            </Styles.Row>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Type"
                placeholder="Product type"
                title="type"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Accomodates players"
                placeholder="Enter a place for the players"
                title="accomodates-players"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={10}>
              <Common.SelectBtn />
            </Styles.Row>
          </Styles.Column>
          <Styles.Column width="100%">
            <Common.TextArea />
          </Styles.Column>
          <Common.BorderText title="Change Club" width="100%" />
          <Common.LabelBTN
            label="Sports"
            title="sports"
            placeholder="Choose a sports"
            width="100%"
          />
          <Common.BorderText title="Add employee" width="100%" />
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Username"
                title="username"
                placeholder="Enter username"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={10}>
              <Common.LabelBTN
                label="Phone Number"
                title="phone-number"
                placeholder="+998 (90) ___ __ __"
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
    </CreateGroundWrap>
  );
};
