import React from "react";
import { LinkButton } from "../../../components/LinkButton.component";

export default function PokemonsDetail() {
  return (
    <div className="bounderies">
      <h3>Página en construcción</h3>
      <p>
        La página que buscas esta en desarrollo. ¡Pronto podras disfrutarla!
      </p>
      <img src="/heart_pikachu.png" alt="Sad pikachu" className="error_image" />
      <LinkButton href="/">Volver al inicio</LinkButton>
    </div>
  );
}
