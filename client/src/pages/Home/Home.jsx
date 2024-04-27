import { useState, createContext, useEffect } from "react";
import usePokemonsState from "../../hooks/usePokemonsState";
import PokemonsTable from "../../components/PokemonsTable/PokemonsTable";
import Spinner from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import { darkTheme, lightTheme } from "../../styles/themes";
import CssBaseline from "@mui/material/CssBaseline";
import { POKEMON_TYPE_ATTRIBUTES } from "../../constants/constants";
import Toast from "../../components/Toast/Toast";
import { ThemeProvider } from "@mui/material/styles";
import { Error } from "../Error/Error";

export const Context = createContext();

export function Home() {
  const [pageNumber, setPageNumber] = useState(
    localStorage.getItem("pageNumber") || 1
  );
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [pokemonCaptured, setPokemonCaptured] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [toggleDescendingSort, setToggleDescendingSort] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [pokemonTypeFilter, setPokemonTypeFilter] = useState(
    POKEMON_TYPE_ATTRIBUTES.Clear
  );

  const { isLoading, pokemonsList, hasNextPage, toastObj, pageError } =
    usePokemonsState(
      pageNumber,
      toggleDescendingSort,
      pageSize,
      pokemonTypeFilter,
      setIsToastOpen,
      pokemonCaptured
    );

  useEffect(() => {
    if (!localStorage.getItem("pageNumber"))
      localStorage.setItem("pageNumber", 1);
  }, []);

  const handlePageIncrement = () => {
    setPageNumber((prevPage) => {
      const newPageNumber = Number(prevPage) + 1;
      localStorage.setItem("pageNumber", newPageNumber);
      return newPageNumber;
    });
  };

  return (
    <>
      <Toast
        isToastOpen={isToastOpen}
        setIsToastOpen={setIsToastOpen}
        toastObj={toastObj}
      />
      {pageError ? (
        <Error />
      ) : (
        <ThemeProvider theme={toggleDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Context.Provider
            value={{
              toggleDarkMode,
              setToggleDarkMode,
              toggleDescendingSort,
              setToggleDescendingSort,
              pageSize,
              setPageSize,
              pokemonTypeFilter,
              setPokemonTypeFilter,
              setPokemonCaptured,
              setCapturedPokemons,
              capturedPokemons,
            }}
          >
            <Grid container spacing={10}>
              <Grid item mt="70px">
                <Navbar />
              </Grid>

              <Grid item xs={12}>
                <PokemonsTable
                  pokemonsList={pokemonsList}
                  hasNextPage={hasNextPage}
                  isLoading={isLoading}
                  handlePageIncrement={handlePageIncrement}
                />
                {isLoading && <Spinner />}
              </Grid>
            </Grid>
          </Context.Provider>
        </ThemeProvider>
      )}
    </>
  );
}
