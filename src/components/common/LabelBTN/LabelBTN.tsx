import {
  FormControl,
  InputBase,
  InputLabel,
  alpha,
  styled,
} from "@mui/material";
import { FC, useState } from "react";
import { Typography } from "src/styles";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { VisibleEye } from "./labelBtn.s";

const StyledFormControl = styled(FormControl)<{ width?: string }>(
  ({ width }) => ({
    width: width || "auto",
  })
);

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 6,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#FDFDFD" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface ILabelBTN {
  title: string;
  label: string;
  placeholder: string;
  isPassword?: boolean;
  width?: string;
  setState?: (value: string) => void;
}

export const LabelBTN: FC<ILabelBTN> = ({
  title,
  label,
  placeholder,
  width,
  setState,
  isPassword,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState && setState(event.target.value);
  };
  return (
    <StyledFormControl
      variant="standard"
      width={width}
      style={{ position: "relative" }}
    >
      <InputLabel shrink htmlFor={title}>
        <Typography.H5>{label}</Typography.H5>
      </InputLabel>
      <BootstrapInput
        placeholder={placeholder}
        id={title}
        type={isPassword && !isActive ? "password" : "text"}
        onChange={handleChange}
      />
      {isPassword && (
        <VisibleEye
          onMouseDown={() => {
            setIsActive(true);
          }}
          onMouseUp={() => {
            setIsActive(false);
          }}
        >
          <RemoveRedEyeOutlinedIcon />
        </VisibleEye>
      )}
    </StyledFormControl>
  );
};
