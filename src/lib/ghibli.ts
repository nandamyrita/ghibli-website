import {Film} from '../types/ghibli';

const API_BASE ="https://ghibliapi.vercel.app";

export async function getFilms(): Promise<Film[]>{
  const res = await fetch(`${API_BASE}/films`);
  if (!res.ok) throw new Error ("Erro em buscar o filme");

  return res.json();
}

export async function getFilm(id: string): Promise<Film> {
const res = await fetch(`${API_BASE}/films/${id}`);
if (!res.ok) throw new Error ("Erro em buscar o filme");
return await res.json();

}