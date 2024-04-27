import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CustomIcon from "./CustomIcon/CustomIcon";
import Container from "@mui/material/Container";
import { Tooltip } from "@mui/material";
import CustomToggleFilter from "../../Navbar/TableSettings/CustomToggleFilter/CustomToggleFilter";
import { Context } from "../../../pages/Home/Home";
import { useContext } from "react";
import { FILTER_TYPES } from "../../../constants/constants";

export default function PokemonAttributesModal({
  open,
  setOpen,
  pokemonDetails,
}) {
  const { setPokemonCaptured, setCapturedPokemons, capturedPokemons } =
    useContext(Context);
  const { imgURL, name, ...iconToRender } = pokemonDetails;
  const isCaptured = capturedPokemons.includes(name);

  const handleCapturedPokemon = () => {
    const newCapturedPokemons = isCaptured
      ? capturedPokemons.filter((pokemon) => pokemon !== name)
      : [...capturedPokemons, name];

    setCapturedPokemons(newCapturedPokemons);
    setPokemonCaptured({ name, isCaptured: !isCaptured });
  };

  const formatWord = (word) =>
    word.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {name} Power
          </Typography>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <CustomToggleFilter
              setting={{
                id: "capturePokemon",
                type: FILTER_TYPES.Toggle,
                label: isCaptured ? "Captured" : "Not Captured",
                checked: isCaptured,
                onChange: () => handleCapturedPokemon(name),
              }}
            />
          </Container>

          <Container
            sx={{
              height: "600px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {Object.keys(iconToRender).map((iconName) => (
              <Container
                key={iconName + pokemonDetails[iconName]}
                component="span"
                sx={{
                  display: "inline-flex",
                  gap: "30px",
                  alignItems: "center",
                }}
              >
                <Tooltip
                  title={<h1>{formatWord(iconName)}</h1>}
                  placement="top"
                >
                  <Typography id={iconName} variant="h3" component="span">
                    {pokemonDetails[iconName].toString()}
                  </Typography>
                </Tooltip>
                {pokemonDetails[iconName].toString() ? (
                  <CustomIcon name={iconName} iconName={iconName} />
                ) : null}
              </Container>
            ))}
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
