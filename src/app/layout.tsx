import React from "react";
import type { Metadata } from "next";
import "../styles/main.scss";
import { StoreProvider } from "../store/StoreProvider";
import { noto_sans } from "../global/fonts";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className}`}>
        <StoreProvider>
          <div id="root" className="layout">
            <h1>Pokedex</h1>

            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
