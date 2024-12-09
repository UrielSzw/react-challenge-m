"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetPokemonsQuery } from "../store/pokemon.api";
import { MAX_ITEMS } from "../global/const";
import { ListSkeleton } from "../skeletons/ListSkeleton.component";
import { ErrorMessage } from "../components/ErrorMessage.component";
import { Pagination } from "../components/Pagination.component";
import { PokemonCard } from "../components/PokemonCard.component";
import { LinkButton } from "../components/LinkButton.component";

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

      {data?.results && data?.results.length > 0 ? (
        <div className="container_list custom-scrollbar">
          {data?.results?.map(({ name }, index) => (
            <PokemonCard
              key={name}
              name={name}
              numId={(page - 1) * MAX_ITEMS + index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="nodata">
          <span>
            No hay pokemones disponibles, pruebe nuevamente mas tarde o con otra
            pagina.
          </span>
          <LinkButton href="/">Volver al inicio</LinkButton>
        </div>
      )}
    </section>
  );
};
