export type Film = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised?: string;
  image: string;  
  movie_banner:string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  running_time: string;
}

export interface FilmPT extends Film {
  title_pt: string;
  description_pt: string;
  cachedAt: number; 
}
