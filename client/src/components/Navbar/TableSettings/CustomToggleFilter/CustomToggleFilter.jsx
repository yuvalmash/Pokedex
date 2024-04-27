import { FormControlLabel, Typography } from "@mui/material";
import { CustomSwitch } from "./styles";

export default function CustomToggleFilter({ setting }) {
  return (
    <FormControlLabel
      control={
        <CustomSwitch checked={setting.checked} onChange={setting.onChange} />
      }
      label={
        <Typography variant="h4" ml="10px">
          {setting.label}
        </Typography>
      }
    />
  );
}
