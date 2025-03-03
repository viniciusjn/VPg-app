import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#2d0846] p-2 px-4 transition-all lg:px-16 lg:py-4">
            <a href="/">
                <Image src="/VPg_logo.png" alt="logo Netflix" width={70} height={70} className="cursor-pointer"/>
            </a>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <nav>
                    <ul className="hidden md:flex md:space-x-6 hover:underline-offset-1">
                        <li className="cursor-pointer p-1 hover:bg-[#4b305e]">About</li>
                        <li className="cursor-pointer p-1 hover:bg-[#4b305e]">Ranking</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}