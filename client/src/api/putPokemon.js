import { api } from "./axios";
import { SERVER_RESPONSE } from "../constants/constants";

export const putPokemonCapture = async ({ name, isCaptured }) => {
  try {
    const response = await api.put(
      `put?pokemonName=${name}&isCaptured=${isCaptured}`
    );
    return {
      msg: `${response.data.msg}`,
      status: SERVER_RESPONSE.Success,
    };
  } catch (error) {
    return {
      msg: `${error.message}`,
      status: SERVER_RESPONSE.Error,
    };
  }
};
