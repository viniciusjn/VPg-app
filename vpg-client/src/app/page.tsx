"use client";

import Header from "./components/Header";
import { Banner } from "./components/Banner";
import { GameCard } from "./components/gamecard/GameCard";
import { useEffect, useState } from "react";
import { fetchGames } from "./services/rawgApi";
import ParallaxBanner from "./components/ParallaxBanner";
import Footer from "./components/Footer";

export default function Home() {

  const [games, setGames] = useState([]);
  const bannerId = 3;

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
    <div className="relative bg-gradient-to-b min-h-screen flex flex-col">      
      <Header />       
      <div className="relative p-8 pb-0.5 w-full lg:px-16">
        <Banner bannerId={bannerId} />
      </div>

      <ParallaxBanner 
        title="LIVE THE GAMES INTENSELY!" 
        subtitle="Your adventure begins here." 
      />
      
      <main className="relative z-10 p-8 pb-20 scrollbar-hide lg:px-16 flex-grow">
        <div className='flex-col space-y-2'>
          <div className='flex'>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
      <Footer />
    </div>
    

  );
}

