'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getFilm } from '@/lib/ghibli';
import { Film } from '@/types/ghibli';
import Box from '@mui/material/Box';
import CircularRtScore from '@/components/CircularProgressWithLabel';
import Image from 'next/image';

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

  if (!filme) return <p className="text-center mt-10 text-xl">Carregando...</p>;

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

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="m-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{filme.title}</h1>
          <p className="text-2xl">{filme.original_title}</p>
          <p>{filme.release_date} | {filme.running_time} min</p>
        </div>

        <div className="flex flex-row p-8 text-white gap-8">
          {/* Poster */}
          <div>
            <Image
              className="rounded-md w-50 object-cover"
              src={filme.image}
              alt={filme.title}
              width={1920}
              height={1080}
            />
          </div>

          {/* Descrição */}
          <div className="flex-1 mr-8 items-start gap-10">
            <p className="text-2xl font-semibold">
              Direção por: {filme.director}
            </p>
            <p className="text-lg text-gray-100 leading-relaxed mb-8">
              {filme.description}
            </p>
          </div>

          {/* Score com animação */}
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
