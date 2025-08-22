import Header from "@/components/Header";
import Link from "next/link";
import {getFilms} from "@/lib/ghibli";

export default async function Home() {
  const films = await getFilms();

  return (
    <>
    <Header />
    
    <main className="p-6">
      <h1 className="text-3x1 font-bold"> Filmes do Studio Ghibli </h1>
    </main>
    </>
  )
}
