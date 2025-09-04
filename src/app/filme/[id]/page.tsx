'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getFilm } from '@/lib/ghibli';
import { Film } from '@/types/ghibli';
import Box from '@mui/material/Box';
import CircularRtScore from '@/components/CircularProgressWithLabel';
import Image from 'next/image';
import GhibliLoader from '@/components/ghibliLoader';
import { motion } from "framer-motion";

export default function FilmeDetalhe() {
  const { id } = useParams();
  const [filme, setFilme] = useState<Film | null>(null);

  useEffect(() => {
    async function fetchFilme() {
      if (!id) return;
      try {
        const data = await getFilm(id as string);
        setFilme(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchFilme();
  }, [id]);

  if (!filme) return <div className="flex items-center justify-center h-screen bg-black"><GhibliLoader /></div>;

  const rtScore = Number(filme.rt_score);

  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Fundo */}
      <div className="absolute inset-0">
        <Image
          src={filme.movie_banner}
          alt={filme.title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="m-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{filme.title}</h1>
          <p className="text-xl">{filme.original_title}</p>
          <p>{filme.release_date} | {filme.running_time} min</p>
        </div>
      

        <div className="flex flex-col md:flex-row p-8 text-white gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <Image
              className="rounded-md object-cover w-full max-w-xs md:max-w-none"
              src={filme.image}
              alt={filme.title}
              width={200}
              height={200}
            />
          </div>

          <div className="flex-1 mr-0 md:mr-8 flex flex-col items-start justify-start gap-10">
            <p className="text-2xl font-semibold">
              Direção por: {filme.director}
            </p>
            <p className="text-lg text-gray-100 leading-relaxed ">
              {filme.description}
            </p>
            <div className='flex gap-4 w-full justify-content: start text-sm flex-col sm:flex-row  '>
            <div className='border rounded-xl p-4 transition-transform duration-300 hover:scale-110'> Aventura </div>
            <div className='border rounded-xl  p-4 transition-transform duration-300 hover:scale-110'> Fantasia</div>
            <div className='border rounded-xl p-4 transition-transform duration-300 hover:scale-110'> Animação </div>
            </div>
          </div>

      
          <div className="flex items-center justify-center">
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularRtScore score={rtScore} />
            </Box>
           
          </div>
        </div>
      </div>
    </main>
  );
}
