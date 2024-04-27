import { Select, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomSelect = styled(Select)(({ theme }) => ({
  width: 160,
  fontSize: theme.typography.pxToRem(24),
  [theme.breakpoints.down("sm")]: {
    width: 140,
    fontSize: theme.typography.pxToRem(14),
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.pxToRem(15),
  },
}));

export const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(28),
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.pxToRem(24),
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: theme.typography.pxToRem(25),
  },
}));
