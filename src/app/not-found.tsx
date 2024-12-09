import { LinkButton } from "../components/LinkButton.component";

export default function Custom404() {
  return (
    <div className="bounderies">
      <h3>404 - Página no encontrada</h3>
      <p>La página que buscas no existe o fue movida.</p>
      <img src="/sad_pikachu.png" alt="Sad pikachu" className="error_image" />
      <LinkButton href="/">Volver al inicio</LinkButton>
    </div>
  );
}
