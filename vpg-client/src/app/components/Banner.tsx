import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from '@heroicons/react/24/solid';

export function Banner() {
    return (
        <div className="mb-10 lg:mb-20">
            <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[80vh] lg:justify-end lg:pb-12">
                <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col bg-[black] overflow-hidden">

                    <Image
                        src="/GTAVI_banner.webp"
                        alt="GTA VI"
                        fill={true} 
                        className="opacity-50 object-cover"
                    />
                        
                </div>       
                <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                    GTA VI
                </h1>
        
                <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                    Grand Theft Auto VI is an upcoming video game in development by 
                    Rockstar Games. It is due to be the eighth main Grand Theft Auto game, 
                    following Grand Theft Auto V (2013), and the sixteenth entry overall. 
                    Set within the fictional open world state of Leonida—based on Florida—and its 
                    Miami-inspired Vice City, the story is expected to follow the criminal duo of 
                    Lucia and her male partner.
                </p>

            </div>

            {/* <div className="flex space-x-3">
                <Link
                    href={`/watch/${movie.id}`}
                    className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                    <PlayIcon className='h-6' />
                    Play
                </Link>
                <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                    <InformationCircleIcon className='h-6' />
                    More Info
                </button>
            </div> */}
        </div>
    )
}