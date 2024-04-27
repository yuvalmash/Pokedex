import { useContext } from "react";
import { POKEMON_TYPE_ATTRIBUTES } from "../../../constants/constants";
import { Context } from "../../../pages/Home/Home";

export const handleToggleDarkMode = (setToggleDarkMode) => () => {
  setToggleDarkMode((prev) => !prev);
};

export const handleToggleDescendingSort = (setToggleDescendingSort) => () => {
  setToggleDescendingSort((prev) => !prev);
};

export const handlePageSizeChange = (setPageSize) => (event) => {
  setPageSize(event.target.value);
};

export const handleFilterTypeChange = (setPokemonTypeFilter) => (event) => {
  setPokemonTypeFilter(event.target.value);
};

export const FiltersConfigurations = () => {
  const {
    toggleDarkMode,
    setToggleDarkMode,
    toggleDescendingSort,
    setToggleDescendingSort,
    pageSize,
    setPageSize,
    pokemonTypeFilter,
    setPokemonTypeFilter,
  } = useContext(Context);

  const handleDarkModeToggle = handleToggleDarkMode(setToggleDarkMode);
  const handleDescendingSortToggle = handleToggleDescendingSort(
    setToggleDescendingSort
  );
  const handlePageSizeChangeHandler = handlePageSizeChange(setPageSize);
  const handleFilterTypeChangeHandler =
    handleFilterTypeChange(setPokemonTypeFilter);

  const FilterConfigurations = [
    {
      id: "darkMode",
      type: "toggle",
      label: "Dark Mode",
      checked: toggleDarkMode,
      onChange: handleDarkModeToggle,
    },
    {
      id: "descendingSort",
      type: "toggle",
      label: "Sort Descending",
      checked: toggleDescendingSort,
      onChange: handleDescendingSortToggle,
    },
    {
      id: "pageSize",
      type: "select",
      label: "Page Size",
      value: pageSize,
      onChange: handlePageSizeChangeHandler,
      options: [10, 20, 30],
    },
    {
      id: "pokemonTypeFilter",
      type: "select",
      label: "Type",
      value: pokemonTypeFilter,
      onChange: handleFilterTypeChangeHandler,
      options: Object.keys(POKEMON_TYPE_ATTRIBUTES),
    },
  ];

  return FilterConfigurations;
};
