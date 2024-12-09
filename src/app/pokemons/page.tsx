import React, { Suspense } from "react";
import { PokemonList } from "../../elements/PokemonList.element";
import { ListSkeleton } from "../../skeletons/ListSkeleton.component";

export default function PokemonsPage() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <PokemonList />
    </Suspense>
  );
}
