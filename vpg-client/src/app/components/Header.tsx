import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#2d0846] p-2 px-4 transition-all lg:px-16 lg:py-4">
            <a href="/">
                <Image src="/VPg_logo.png" alt="logo Netflix" width={98} height={98} className="cursor-pointer"/>
            </a>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <nav>
                    <ul className="hidden cursor-pointer md:flex md:space-x-4 hover:underline-offset-1">
                        <li>About</li>
                        <li>Ranking</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}