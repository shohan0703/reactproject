import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

         
          <div className="flex items-center cursor-pointer">
            <img src={logoText} alt="Dev Stack Logo" className="h-8 object-contain" />
          </div>

          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-black transition">Home</a>
            <a href="#technologies" className="hover:text-black transition">Technologies</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>

         
          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 hover:text-black px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:opacity-90 transition shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block text-gray-600 hover:text-black py-2 font-medium">Home</a>
          <a href="#technologies" className="block text-gray-600 hover:text-black py-2 font-medium">Technologies</a>
          <a href="#projects" className="block text-gray-600 hover:text-black py-2 font-medium">Projects</a>
          <a href="#about" className="block text-gray-600 hover:text-black py-2 font-medium">About</a>
          <a href="#contact" className="block text-gray-600 hover:text-black py-2 font-medium">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;