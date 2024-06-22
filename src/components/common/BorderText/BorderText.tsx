import { FC } from "react";
import { Border, BorderTextWrap, TextH5 } from "./borderText.s";

interface IBorderText {
  title: string;
  width?: string;
}

export const BorderText: FC<IBorderText> = ({ title, width }) => {
  return (
    <BorderTextWrap>
      <Border width={width} />
      <TextH5>{title}</TextH5>
    </BorderTextWrap>
  );
};
