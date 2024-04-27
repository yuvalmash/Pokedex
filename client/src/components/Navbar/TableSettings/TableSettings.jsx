import { FormControl, Container, Grid } from "@mui/material";
import CustomSelectFilter from "./CustomSelectFilter/CustomSelectFilter";
import CustomToggleFilter from "./CustomToggleFilter/CustomToggleFilter";
import { FiltersConfigurations } from "./filtersConfigurations";
import { FILTER_TYPES } from "../../../constants/constants";

export default function TableSettings() {
  const filterConfigs = FiltersConfigurations();
  return (
    <Container sx={{ mt: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {filterConfigs.map((setting) => (
          <Grid item key={setting.id}>
            <FormControl sx={{ minWidth: 120 }}>
              {setting.type === FILTER_TYPES.Select ? (
                <CustomSelectFilter setting={setting} />
              ) : setting.type === FILTER_TYPES.Toggle ? (
                <CustomToggleFilter setting={setting} />
              ) : null}
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
