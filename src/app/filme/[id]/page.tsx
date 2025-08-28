'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getFilm } from "@/lib/ghibli";
import { Film } from "@/types/ghibli";


export default function FilmeDetalhe() {

const {id} = useParams();
const [filme, setFilme] = useState <Film|null>(null);

useEffect(() => {
  async function fetchFilme() {
    if(id) {
      try{
        const data = await getFilm(id as string);
        setFilme(data);
      } catch (err) {
        console.error(err);
      }
      }
    }
    
    fetchFilme();
  }, [id]);


  if (!filme) return <p> Carregando... </p>;

  return (
    <main className=" min-h-screen bg-white bg-cover bg-center bg-no-repeat">
      <img  className="w-full absolute " src={filme.movie_banner} alt={filme.movie_banner} />
      <div className="relative">
      <h1 className="text-8xl"> {filme.title} </h1>
      <p> {filme.description}</p>
      </div>
      
    </main>
  )
}
