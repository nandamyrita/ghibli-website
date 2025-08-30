'use client';

import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import { getFilm } from '@/lib/ghibli';
import { Film } from '@/types/ghibli';

export default function CircularRtScore() {
  const { id } = useParams();
  const [film, setFilm] = React.useState<Film | null>(null);

  React.useEffect(() => {
    async function fetchFilm() {
      if (!id) return;
      try {
        const data = await getFilm(id as string);
        setFilm(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchFilm();
  }, [id]);

  if (!film) return <p>Carregando...</p>;

  const rtScore = Number(film.rt_score);

  const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'text.primary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );

  return <CircularProgressWithLabel value={rtScore} size={120} />;
}
