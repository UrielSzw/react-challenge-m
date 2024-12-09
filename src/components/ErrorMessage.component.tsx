import React from "react";
import { Button } from "./Button.component";

const DEFAULT_MSG =
  "No pudimos cargar los Pokémon en este momento. Por favor, verifica tu conexión a internet o inténtalo de nuevo más tarde.";

type Props = {
  message?: string;
};

export const ErrorMessage: React.FC<Props> = ({ message = DEFAULT_MSG }) => {
  return (
    <section className="bounderies">
      <h2>¡Oh no! Algo salió mal.</h2>
      <p>{message}</p>
      <Button onClick={() => window.location.reload()}>Reintentar</Button>
    </section>
  );
};
