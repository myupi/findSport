import React, { FC } from "react";
import { DefaultBtn } from "./copyURL.s";
import CustomIcon from "src/assets/custom-icons";

interface ICopyURL {}

const copyUrlToClipboard = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("URL скопирован в буфер обмена!");
};

export const CopyURL: FC<ICopyURL> = (props) => {
  return (
    <DefaultBtn onClick={copyUrlToClipboard}>
      <CustomIcon.Share />
    </DefaultBtn>
  );
};
