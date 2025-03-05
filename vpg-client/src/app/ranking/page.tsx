"use client";

import { useEffect, useState } from "react";
import RankingTable from "./RankingTable";
import { fetchGames } from "../services/rawgApi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParallaxBanner from "../components/ParallaxBanner";

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  platforms: { platform: { name: string } }[];
}

const RankingPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    };

    getGames();
  }, []);

  return (
    <div className="relative bg-gradient-to-b min-h-screen flex flex-col bg-[#171717]">
        <Header />
        <ParallaxBanner />
        <RankingTable />
        <Footer />
    </div>
  );
};

export default RankingPage;
