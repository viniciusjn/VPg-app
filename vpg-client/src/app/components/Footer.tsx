import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6 px-6">
        <h2 className="text-2xl font-bold tracking-wider">VPg</h2>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-purple-700 transition">Home</Link>
          <Link href="#" className="hover:text-purple-700 transition">About</Link>
          <Link href="/ranking" className="hover:text-purple-700 transition">Ranking</Link>
        </nav>

        <div className="flex space-x-4">
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition">
            <FaFacebookF className="w-5 h-5" />
          </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition">
            <FaInstagram className="w-5 h-5" />
            </Link>
          <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-700 transition">
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-xs text-gray-400">© {new Date().getFullYear()} VPg. All rights reserved.</p>
      </div>
    </footer>
  );
}
