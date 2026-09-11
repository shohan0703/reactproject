import React from 'react';
import bannerStack from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 shadow-md hover:opacity-95 transition">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-sm text-gray-700 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img 
            src={bannerStack} 
            alt="Development Stack Illustration" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl" 
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;