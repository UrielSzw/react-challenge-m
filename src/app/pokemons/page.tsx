"use client";

import React from "react";
import { useGetPokemonsQuery } from "../../store/pokemon.api";
import { PokemonCard } from "../../components/PokemonCard.component";
import { Pagination } from "../../components/Pagination.component";
import { MAX_ITEMS } from "../../global/const";
import { useSearchParams } from "next/navigation";

export default function PokemonsPage() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, error } = useGetPokemonsQuery({
    limit: MAX_ITEMS,
    offset: (page - 1) * MAX_ITEMS,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error loading Pokémon list.</p>;

  return (
    <section className="container">
      <Pagination count={data?.count} />

      <div className="container_list custom-scrollbar">
        {data?.results &&
          data?.results?.map(({ name }, index) => (
            <PokemonCard
              key={name}
              name={name}
              numId={(page - 1) * MAX_ITEMS + index + 1}
            />
          ))}
      </div>
    </section>
  );
}
