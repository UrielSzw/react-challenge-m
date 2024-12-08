import Link from "next/link";

export default function Home() {
  return (
    <section className="home">
      <Link className="home_button" href="/pokemons">
        Toca para ver pokemones
      </Link>
    </section>
  );
}
