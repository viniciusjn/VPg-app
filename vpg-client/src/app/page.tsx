"use client";

import Image from "next/image";
import Header from "./components/Header";
import { Banner } from "./components/Banner";
import { GameCard } from "./components/gamecard/GameCard";
import { useEffect, useState } from "react";
import { fetchGames } from "./services/rawgApi";

export default function Home() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const data = await fetchGames();
      if (data && data.results) {
        console.log("Jogos carregados:", data.results);
        setGames(data.results);
      }
    };

    getGames();
  }, []);

  return (
    <div className="relative bg-gradient-to-b pb-8">      
      <Header />       
      <div className="relative p-8 pb-20 w-full h-[100vh] lg:px-16">
        <Banner />
      </div>
      <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16">
        <div className='flex-col space-y-2'>
          <div className='flex'>
            <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
              Games
            </h2>
          </div>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
          {games.map((game: any) => (
              <GameCard 
                key={game.id}
                id={game.id}
                name={game.name}
                background_image={game.background_image} 
                rating={game.rating} 
                platforms={game.platforms}
                genres={game.genres}
              />
            ))}

          </div>
        </div>
      </main>
    </div>

  );
}
