import MenuItem from "@mui/material/MenuItem";
import { CustomSelect, CustomLabel } from "./styles";

export default function CustomSelectFilter({ setting }) {
  return (
    <>
      <CustomLabel>{setting.label}</CustomLabel>
      <CustomSelect
        value={setting.value}
        onChange={setting.onChange}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {setting.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomSelect>
    </>
  );
}
