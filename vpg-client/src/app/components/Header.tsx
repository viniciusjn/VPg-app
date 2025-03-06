import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#2d0846] p-2 px-4 transition-all lg:px-16 lg:py-4">
            <Link href="/">
                <Image src="/VPg_logo.png" alt="logo Netflix" width={70} height={70} className="cursor-pointer"/>
            </Link>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <nav>
                    <ul className="hidden md:flex md:space-x-6 hover:underline-offset-1">
                        <Link href="/ranking"><li className="cursor-pointer p-2 hover:bg-purple-700 hover:rounded">About</li></Link>
                        <Link href="/ranking"><li className="cursor-pointer p-2 hover:bg-purple-700 hover:rounded">Ranking</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}