import React, { FC, useState } from "react";
import { CreateSectionWrap } from "./createSection.s";
import Styles, { Typography } from "src/styles";
import Common from "src/components/common";
import { Button } from "@mui/material";

interface ICreateSectionProps {}

export const CreateSection: FC<ICreateSectionProps> = (props) => {
  const [images, setImages] = useState<File[]>([]);
  return (
    <CreateSectionWrap>
      <Styles.Container>
        <form>
          <Typography.H2>Add new section</Typography.H2>
          <Common.LabelBTN
            label="Title"
            placeholder="Product title"
            title="title"
            width="100%"
          />
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Price (UZS)"
                placeholder="Enter price"
                title="price"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Price title"
                placeholder="Enter price title"
                title="price-title"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={12} difference={0}>
              <Styles.Column
                width="100%"
                style={{ justifyContent: "flex-end" }}
              >
                <Button
                  variant="contained"
                  style={{ background: "#5F5CF1", padding: "14px 24px" }}
                >
                  Add price
                </Button>
              </Styles.Column>
            </Styles.Row>
          </Styles.Column>
          <Common.LabelBTN
            label="Necessary inventory"
            placeholder="Enter your necessary inventory"
            title="necessary-inventory"
          />
          <Styles.Column width="100%" style={{ justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              style={{ background: "#5F5CF1", padding: "14px 24px" }}
            >
              Add inventory
            </Button>
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
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Age of participants"
                placeholder="Minimum"
                title="minimum"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label=""
                placeholder="Maximum"
                title="maximum"
                width="100%"
              />
            </Styles.Row>
          </Styles.Column>
          <Common.TextArea />
          <Common.LabelBTN
            label="Name of coach"
            placeholder="Enter coach name"
            title="name-of-coach"
          />
          <Common.BorderText title="Change Club" width="100%" />
          <Common.LabelBTN
            label="Change club"
            placeholder="Choose club"
            title="change-club"
          />
          <Common.BorderText title="Add employee" width="100%" />
          <Styles.Column width="100%" gap={10}>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Username"
                title="username"
                placeholder="Enter username"
                width="100%"
              />
            </Styles.Row>
            <Styles.Row size={6} difference={5}>
              <Common.LabelBTN
                label="Phone number"
                title="phone-number"
                placeholder="+998 (__) ___ __ __"
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
            label="Location"
            title="location"
            placeholder="Enter location name"
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
    </CreateSectionWrap>
  );
};
