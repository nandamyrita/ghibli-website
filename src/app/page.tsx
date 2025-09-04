"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Film } from "@/types/ghibli";
import { getFilms } from "@/lib/ghibli";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
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

      <main className="p-6 m-10 text-white relative">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col w-[50%] mt-10">
          <p className="text-2xl">Main page | Fest 2025</p>
          <h1 className="text-7xl font-bold mt-2">Filmes do Studio Ghibli</h1>
          <p className="mt-4">
            Prepare-se para embarcar em uma viagem mágica pelo universo encantador dos filmes do Studio Ghibli. Neste festival, você vai explorar mundos repletos de aventura, fantasia e emoção, onde cada história é um convite para sonhar e se inspirar.
            Descubra detalhes dos filmes, conheça os personagens inesquecíveis e mergulhe na arte que transformou simples animações em verdadeiras obras-primas. Venha celebrar a magia do Studio Ghibli conosco!
          </p>
          </div>
        </motion.div>

        <Carousel className="w-full mt-20 ">
          <CarouselContent className="-ml-4">
            {filmes.map((filme) => (
              <CarouselItem
                key={filme.id}
                className="pl-3 md:basis-1/3 lg:basis-1/4"
              >

                <Link href={`/filme/${filme.id}`}>
                
                <Image
                  className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
                  src={filme.image}
                  alt={filme.title}
                  width={300}
                  height={450}
                />
              

                <div className="text-left flex flex-col">
                  <p className="mt-2">{filme.release_date}</p>
                  <p className="font-semibold">{filme.title}</p>
                </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </>
  );
}
