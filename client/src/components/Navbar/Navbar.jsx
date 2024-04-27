import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import lightNavbarBackground from "../../assets/img/lightNavbarBackground.jpg";
import darkNavbarBackground from "../../assets/img/darkNavbarBackground.jpg";
import TableSettings from "./TableSettings/TableSettings";
import { Context } from "../../pages/Home/Home";
import { useContext } from "react";

export default function Navbar() {
  const { toggleDarkMode } = useContext(Context);
  return (
    <AppBar
      sx={{
        backgroundImage: `url(${
          toggleDarkMode ? darkNavbarBackground : lightNavbarBackground
        })`,
        backgroundSize: "cover",
        height: "fit-content",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" sx={{ ml: { xs: 1, sm: 2 } }}>
              Pokemon's list
            </Typography>
          </Grid>
          <Grid item>
            <TableSettings />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
