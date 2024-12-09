import React from "react";
import type { Metadata } from "next";
import "../styles/main.scss";
import { StoreProvider } from "../store/StoreProvider";
import { noto_sans } from "../global/fonts";
import { ThemeProvider } from "../store/ThemeProvider";
import { ThemeSwitch } from "../components/ThemeSwitch.component";

export const metadata: Metadata = {
  title: "Pokédex - Explora Pokémon y sus habilidades",
  description:
    "Descubre y aprende sobre tus Pokémon favoritos con la app Pokédex. Explora estadísticas, habilidades y mucho más usando la PokéAPI.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/pokeball.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${noto_sans.className}`}>
        <StoreProvider>
          <ThemeProvider>
            <div id="root" className="layout">
              <ThemeSwitch />
              <h1>Pokédex</h1>

              {children}
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
