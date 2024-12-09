"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PokeballIcon } from "../assets/pokeball.icon";
import { ChevronRightIcon } from "../assets/chevronRight.icon";
import Link from "next/link";

type Props = {
  name: string;
  numId: number;
};

export const PokemonCard: React.FC<Props> = ({ name, numId }) => {
  const [isImage, setIsImage] = useState(true);

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${numId}.svg`;

  return (
    <Link
      // href={`/pokemons/${numId}`}
      href="/pokemons/in-progress"
      className="card"
      aria-label={`Ver detalles de ${name}`}
    >
      <div className="card_circle">
        {isImage ? (
          <Image
            src={image}
            alt={name}
            width={110}
            height={110}
            className="card_circle_image"
            onError={() => setIsImage(false)}
          />
        ) : (
          <div className="card_circle_fail">
            <PokeballIcon />
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>
      <div className="card_content">
        <span className="card_name">{name}</span>
        <ChevronRightIcon className="card_icon" />
      </div>
    </Link>
  );
};
