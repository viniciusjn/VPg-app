import Image from 'next/image';
import { GameInfo } from './GameInfo';

interface GameCardProps {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: { platform: { name: string } }[];
  genres: { name: string }[];
}

export const GameCard = ({ id, name, background_image, rating, platforms, genres }: GameCardProps) => (
  <div className='group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] '>
    <Image
      alt={name}
      src={background_image}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />

    <div className='invisible absolute top-0 z-10 w-full min-w-[20vw] scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:scale-110 group-hover:opacity-100 sm:visible'>
      <Image
        src={background_image} 
        alt={name}
        width={600}
        height={400}
        className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transition'
      />

      <GameInfo name={name} rating={rating} platforms={platforms} genres={genres} />
    </div>
  </div>
);