"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetPokemonsQuery } from "../store/pokemon.api";
import { MAX_ITEMS } from "../global/const";
import { ListSkeleton } from "../skeletons/ListSkeleton.component";
import { ErrorMessage } from "../components/ErrorMessage.component";
import { Pagination } from "../components/Pagination.component";
import { PokemonCard } from "../components/PokemonCard.component";

export const PokemonList = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, error } = useGetPokemonsQuery({
    limit: MAX_ITEMS,
    offset: (page - 1) * MAX_ITEMS,
  });

  if (isLoading) return <ListSkeleton />;

  if (error) return <ErrorMessage />;

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
};