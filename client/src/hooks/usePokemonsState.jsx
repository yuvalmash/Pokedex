import { useEffect, useState } from "react";
import { getPokemonPage } from "../api/getPokemons";
import { putPokemonCapture } from "../api/putPokemon";
import {
  POKEMON_TYPE_ATTRIBUTES,
  SERVER_RESPONSE,
} from "../constants/constants";

export default function usePokemonsState(
  pageNumber,
  toggleDescendingSort,
  pageSize,
  pokemonTypeFilter,
  setIsToastOpen,
  pokemonCaptured
) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [toastObj, setToastObj] = useState({
    msg: "",
    status: SERVER_RESPONSE.Success,
  });
  const [pageError, setPageError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let fetchAllPokemons =
        pokemonTypeFilter !== POKEMON_TYPE_ATTRIBUTES.Clear;

      setIsLoading(true);

      try {
        const { pokemonsListFromLocalStorage, hasNextPageFromLocalStorage } =
          checkPageInLocalStorage(localStorage.getItem("pageNumber"));

        if (
          !pokemonsListFromLocalStorage ||
          (fetchAllPokemons && hasNextPageFromLocalStorage)
        ) {
          const response = await getPokemonPage(
            pageNumber,
            pageSize,
            fetchAllPokemons
          );

          if (response.status === SERVER_RESPONSE.Error) {
            setPageError(true);
            setIsLoading(false);
            return;
          }
          const { pokemonsList, hasNextPage } = response.data;

          setToastObj({ msg: response.msg, status: response.status });
          setIsToastOpen(true);
          updateLocalStorage(
            pageNumber,
            pokemonsList,
            hasNextPage,
            fetchAllPokemons
          );

          setPokemonsList((prevPokemonsList) =>
            fetchAllPokemons
              ? filterPokemons(pokemonsList)
              : [...prevPokemonsList, ...pokemonsList]
          );
          setHasNextPage(hasNextPage);
        } else {
          setPokemonsList(filterPokemons(pokemonsListFromLocalStorage));
          setHasNextPage(hasNextPageFromLocalStorage);
        }
      } finally {
        setIsLoading(false);
      }
    };
    const filterPokemons = (pokemonsFetchingList) => {
      if (pokemonTypeFilter === POKEMON_TYPE_ATTRIBUTES.Clear)
        return pokemonsFetchingList;
      else {
        return pokemonsFetchingList.filter((pokemon) => {
          return (
            pokemon.type_one === pokemonTypeFilter ||
            pokemon.type_two === pokemonTypeFilter
          );
        });
      }
    };
    fetchData();
  }, [pageNumber, pageSize, pokemonTypeFilter, setIsToastOpen]);

  useEffect(() => {
    if (toggleDescendingSort) {
      setPokemonsList((prevList) =>
        [...prevList].sort((a, b) => b.number - a.number)
      );
    } else {
      setPokemonsList((prevList) =>
        [...prevList].sort((a, b) => a.number - b.number)
      );
    }
  }, [toggleDescendingSort]);

  useEffect(() => {
    async function capturePokemon() {
      const response = await putPokemonCapture(pokemonCaptured);
      setToastObj({ msg: response.msg, status: response.status });
      setIsToastOpen(true);
      return;
    }
    if (Object.keys(pokemonCaptured).length !== 0) capturePokemon();
  }, [pokemonCaptured, setIsToastOpen]);

  const checkPageInLocalStorage = (pageNumber) => {
    const pokemonsList = JSON.parse(localStorage.getItem("pokemonsList"));
    if (!pokemonsList)
      return {
        pokemonsListFromLocalStorage: null,
        hasNextPageFromLocalStorage: null,
      };

    const pageData = pokemonsList[pageNumber];
    if (pageData) {
      const { hasNextPage, pokemonsList: pagePokemonsList } = pageData;
      const allPokemonsList = Object.values(pokemonsList).flatMap(
        (page) => page.pokemonsList
      );
      return {
        pokemonsListFromLocalStorage: allPokemonsList,
        hasNextPageFromLocalStorage: hasNextPage,
      };
    }
    return {
      pokemonsListFromLocalStorage: null,
      hasNextPageFromLocalStorage: null,
    };
  };

  const updateLocalStorage = (
    pageNumber,
    pokemonsList,
    hasNextPage,
    fetchAllPokemons
  ) => {
    const existingData = JSON.parse(localStorage.getItem("pokemonsList")) || {};
    const newData = fetchAllPokemons
      ? {
          [pageNumber]: { pokemonsList, hasNextPage },
        }
      : {
          ...existingData,
          [pageNumber]: { pokemonsList, hasNextPage },
        };
    localStorage.setItem("pokemonsList", JSON.stringify(newData));
  };

  return {
    isLoading,
    pokemonsList,
    hasNextPage,
    toastObj,
    pageError,
  };
}
