import Image from "next/image";
import Header from "./components/Header";
import { Banner } from "./components/Banner";
import { GameCard } from "./components/gamecard/GameCard";

export default function Home() {
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
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
          </div>
        </div>
      </main>
    </div>

  );
}
