import PokemonCard from "../PokemonCard/PokemonCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useInfiniteScroll from "../../hooks/useIntersectionObserver";
import { useMemo } from "react";

export default function PokemonsTable({
  pokemonsList,
  hasNextPage,
  isLoading,
  handlePageIncrement,
}) {
  const { lastElement } = useInfiniteScroll(
    isLoading,
    hasNextPage,
    handlePageIncrement
  );

  lastElement();

  const renderPokemonsList = useMemo(
    () =>
      pokemonsList.map((pokemonDetails, index) => (
        <Grid item key={pokemonDetails.name}>
          <PokemonCard
            pokemonDetails={pokemonDetails}
            ref={index === pokemonsList.length - 1 ? lastElement : null}
          />
        </Grid>
      )),
    [pokemonsList, lastElement]
  );

  return (
    <Container>
      <Grid container spacing={2}>
        {renderPokemonsList}
      </Grid>
    </Container>
  );
}
