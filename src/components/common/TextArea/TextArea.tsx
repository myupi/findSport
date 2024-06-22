import React, { FC, useState } from "react";
import { StyledTextArea } from "./textArea.s";
import { InputLabel } from "@mui/material";
import { Typography } from "src/styles";

interface ITextAreaProps {}

export const TextArea: FC<ITextAreaProps> = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <>
      <InputLabel shrink htmlFor="textarea">
        <Typography.H5>Description</Typography.H5>
      </InputLabel>
      <StyledTextArea
        value={value}
        onChange={handleChange}
        id="textarea"
        placeholder="Enter the description"
      />
    </>
  );
};
