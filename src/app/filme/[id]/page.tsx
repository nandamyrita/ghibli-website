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
    <main className="">
      <h1> {filme.description} </h1>
      
    </main>
  )
}
