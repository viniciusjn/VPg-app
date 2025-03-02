import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6 px-6">
        <h2 className="text-2xl font-bold tracking-wider">VPg</h2>

        <nav className="flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Ranking</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </nav>

        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-gray-400">© {new Date().getFullYear()} VPg. All rights reserved.</p>
      </div>
    </footer>
  );
}
