'use client';
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Film} from "@/types/ghibli";
import {getFilms} from "@/lib/ghibli";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";






export default  function Home() {
  const [filmes, setFilmes] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilms();
        setFilmes(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  
  

  return (
    <>
    <Header />
    
    <main className="p-6  m-10 text-white relative ">

      
       <div className="itens-left w-[50%] max-w-3xl">
        <p>Main page | Fest 2025</p>
        <h1 className="text-5xl font-bold mt-2">Filmes do Studio Ghibli</h1>
        <p className="mt-4">
          Studios Ghibli ipsum dolor sit, amet consectetur adipisicing elit.
          Veniam adipisci doloribus, numquam eveniet assumenda laborum est iste
          dolores aliquid cupiditate non beatae error nisi at accusamus repellat!
          Totam, reiciendis vitae.
        </p>
      </div>
      
        <Carousel className="w-full mt-20">
        <CarouselContent className="-ml-4">
          {filmes.map((filme) => (
            <CarouselItem key={filme.id} className="pl-4 md:basis-1/2 lg:basis-1/3 ">
              <Card className="bg-white/10 backdrop-blur-lg border border-none text-white rounded-xl">
                <CardContent className="aspect-w-3 aspect-h-4">
                  <img
                    src={`/images/${filme.title.toLowerCase().replace(/\s/g, '-')}.jpg`}
                    alt={filme.title}
                    className="rounded-md w-full h-60 object-cover"
                  />
                  <p className="mt-2 text-center font-semibold">{filme.title}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  </>
  )
}
