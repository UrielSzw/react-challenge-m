"use client";

import { Button } from "../components/Button.component";
import { LinkButton } from "../components/LinkButton.component";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="bounderies">
      <h3>500 - Error inesperado</h3>
      <p>Lo sentimos, algo salió mal.</p>
      <img src="/sad_pikachu.png" alt="Sad pikachu" className="error_image" />
      <Button onClick={() => reset()}>Intentar nuevamente</Button>
      <LinkButton href="/">Volver al inicio</LinkButton>
    </section>
  );
}
