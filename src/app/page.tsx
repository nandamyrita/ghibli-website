import Header from "@/components/Header";
import Link from "next/link";
import {getFilms} from "@/lib/ghibli";

export default async function Home() {
  const films = await getFilms();

  return (
    <>
    <Header />
    
    <main className="p-6  m-10">
      <div className="itens-left w-[50%]">
      <p> Main page | Fest 2025 </p>
      <h1 className="text-5xl font-bold"> Filmes do Studio Ghibli </h1>
      <p> Studios Ghibli ipsum dolor sit, amet consectetur adipisicing elit. Veniam adipisci doloribus, numquam eveniet assumenda laborum est iste dolores aliquid cupiditate non beatae error nisi at accusamus repellat! Totam, reiciendis vitae.</p>
      </div>
    </main>
    </>
  )
}
