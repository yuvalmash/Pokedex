import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSwitch = styled(Switch)(({ theme }) => ({
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
  [theme.breakpoints.down("lg")]: {
    width: 60,
    height: 24,
    padding: 5,
    "& .MuiSwitch-thumb": {
      width: 20,
      height: 20,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 30,
    height: 12,
    padding: 2.5,
    "& .MuiSwitch-thumb": {
      width: 10,
      height: 10,
    },
  },
}));
