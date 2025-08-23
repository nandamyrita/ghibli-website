import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Studio Ghibli",
  description: "Lista de filmes do Studio Ghibli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body
      className=" min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/fundo.jpg')]   "
      
      >
        {children}
      </body>
    </html>
  );
}
