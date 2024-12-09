import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListResponse } from "../types/pokemon.types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<
      PokemonListResponse,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonApi;
