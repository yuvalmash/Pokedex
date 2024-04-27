import { Grid, Typography } from "@mui/material";
import errorImg from "../../assets/img/errorImg.png";
import "./style.css";

export function Error() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="error-container"
    >
      <Grid item>
        <img src={errorImg} alt="Error" className="error-img" />
      </Grid>
      <Grid item>
        <Typography variant="body1" gutterBottom>
          The server may be down. Please check if the server is up and running
          and refresh this page.
        </Typography>
      </Grid>
    </Grid>
  );
}
