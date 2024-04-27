import { api } from "./axios";
import { SERVER_RESPONSE } from "../constants/constants";

export const getPokemonPage = async (
  pageParam = 1,
  pageSize = 10,
  fetchAllPokemons = false
) => {
  try {
    const response = await api.get(
      `get?page=${pageParam}&size=${pageSize}&fetchAllPokemons=${fetchAllPokemons}`
    );
    return {
      msg: `${response.data.msg}`,
      status: SERVER_RESPONSE.Success,
      data: response.data,
    };
  } catch (error) {
    return {
      msg: `${error.message}`,
      status: SERVER_RESPONSE.Error,
    };
  }
};
