'use client';

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularRtScoreProps {
  score: number; // Valor final do score (0–100)
}

export default function CircularRtScore({ score }: CircularRtScoreProps) {
  const [progress, setProgress] = React.useState(0);

  // Determina a cor baseada no score
  const getColor = (value: number) => {
    if (value >= 80) return 'success';  
    if (value >= 60) return 'warning';   
    return 'error';                     
  };

  React.useEffect(() => {
    let current = 0;
    const step = 3; 
    const interval = setInterval(() => {
      current += step;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setProgress(current);
    }, 20);

    return () => clearInterval(interval);
  }, [score]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={progress}
        size={120}
        thickness={4} 
        color={getColor(score)} 
         sx={{
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round', 
          },
        }}
      />
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
        <Typography
          variant="h6"
          component="div"
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          {score}
        </Typography>
      </Box>
    </Box>
  );
}
