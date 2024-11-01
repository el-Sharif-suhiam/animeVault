"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const respose = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=20&order=ranked`
  );
  const data = await respose.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
