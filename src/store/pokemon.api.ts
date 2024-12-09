import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListResponse } from "../types/pokemon.types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL,
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
