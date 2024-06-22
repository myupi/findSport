import { Button } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, FC } from "react";
import CustomIcon from "src/assets/custom-icons";
import Styles, { Typography } from "src/styles";

interface IImagesBtnProps {
  images: File[];
  setImages: (files: File[]) => void;
}

export const ImagesBtn: FC<IImagesBtnProps> = ({ images, setImages }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages(files);
    }
  };
  return (
    <Button
      variant="outlined"
      component="label"
      style={{
        borderStyle: "dashed",
        borderColor: "#C2C2C2",
        minHeight: 150,
        textTransform: "capitalize",
      }}
    >
      <Styles.Column
        width="100%"
        direction={"column"}
        align_items={"center"}
        style={{ justifyContent: "center" }}
        gap={10}
      >
        {images.length === 0 ? (
          <>
            <Typography.H4>Select Image</Typography.H4>
            <CustomIcon.UploadImage />
            <Typography.SMALL style={{ fontWeight: 600, color: "#C2C2C2" }}>
              Select an image or drop it here
            </Typography.SMALL>
          </>
        ) : (
          <div style={{ display: "flex", gap: 10 }}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={URL.createObjectURL(image)}
                alt={`preview ${index}`}
                height={140}
                width={140}
                style={{ objectFit: "cover" }}
              />
            ))}
          </div>
        )}
      </Styles.Column>
      <input
        type="file"
        hidden
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
    </Button>
  );
};
