export type PokemonListResult = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
};
