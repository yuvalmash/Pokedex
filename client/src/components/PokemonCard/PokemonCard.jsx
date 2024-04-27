import { useState, forwardRef, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import { COLOR_PALETS } from "../../constants/constants";
import CardHeader from "@mui/material/CardHeader";
import PokemonAttributesModal from "./PokemonAttributesModal/PokemonAttributesModal";
import placeholder from "../../assets/img/placeholder.png";
import gotchaImg from "../../assets/icons/gotcha.png";
import { Context } from "../../pages/Home/Home";

const PokemonCard = forwardRef(({ pokemonDetails }, ref) => {
  const { name, imgURL, number, type_one, type_two } = pokemonDetails;
  const [open, setOpen] = useState(false);
  const { capturedPokemons } = useContext(Context);
  const isCaptured = capturedPokemons.includes(name);

  const gradientBackground = `linear-gradient(to left, ${
    COLOR_PALETS[type_one]
  }, ${type_two ? COLOR_PALETS[type_two] : COLOR_PALETS["Natural"]})`;

  const TypeContainer = () => (
    <Container
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" color={COLOR_PALETS[type_one]}>
        {type_one}
      </Typography>
      {type_two ? (
        <Typography variant="h4" color={COLOR_PALETS[type_two]}>
          {type_two}
        </Typography>
      ) : null}
    </Container>
  );

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          backgroundImage: gradientBackground,
        }}
        onClick={() => setOpen(true)}
        ref={ref}
      >
        <CardHeader
          sx={{ height: 60, position: "relative" }}
          title={
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              {number}
              {isCaptured ? (
                <img
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  width="100"
                  height="60"
                  src={gotchaImg}
                  alt="gotchaImg"
                />
              ) : null}
            </Container>
          }
        ></CardHeader>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            width="345"
            image={imgURL}
            alt="pokemon img"
            onError={(e) => {
              e.target.src = placeholder;
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              whiteSpace="nowrap"
              justifyContent="center"
              display="flex"
            >
              {name}
            </Typography>

            <TypeContainer />
          </CardContent>
        </CardActionArea>
      </Card>
      {open ? (
        <PokemonAttributesModal
          open={open}
          setOpen={setOpen}
          pokemonDetails={pokemonDetails}
        />
      ) : null}
    </>
  );
});

export default PokemonCard;
