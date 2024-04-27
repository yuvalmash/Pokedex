import { Select, Switch, InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSwitch = styled(Switch)(() => ({
  width: 85,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(50px)",
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
  },
}));

export const CustomSelect = styled(Select)({
  width: 160,
  fontSize: "x-large",
});

export const CustomLabel = styled(InputLabel)({
  fontSize: "xx-large",
});

export const CustomTextField = styled(TextField)({
  width: 100,
  fontSize: "x-large",
});
