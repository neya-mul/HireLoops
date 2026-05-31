'use client'
import React from 'react';
// Gravity UI Icons
import { Magnifier, Person, Briefcase, LayoutCellsLarge, Star } from '@gravity-ui/icons';

export default function Banner() {
  return (
    <section className="relative w-full h-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col items-center justify-start pt-20 px-4">
      
      {/* 1. Background Earth Image Layout */}
      <div 
        className="absolute inset-0 z-60 bg-bottom bg-no-repeat pointer-events-none opacity-75"
        style={{ 
          backgroundImage: `url('/globe.png')`,
          backgroundSize: '100% auto',
        }}
      />
      
      {/* Soft gradient mask overlaying the image to blend into the top background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent z-0 max-h-[50%]" />

      {/* Decorative top radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* 2. Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md shadow-inner text-xs tracking-wider uppercase mb-8">
          <span>💼</span>
          <span className="font-extrabold text-white">50,000+</span>
          <span className="text-neutral-400 font-medium">New Jobs This Month</span>
        </div>

        {/* 3. Main Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mb-4 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">
          Find Your Dream Job Today
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-10">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        {/* 4. Dual Search Bar Wrapper (Pure Tailwind Replacement for Hero UI) */}
        <div className="w-full max-w-3xl bg-[#121212]/90 border border-neutral-800/80 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-6">
          
          {/* Search Box 1 */}
          <div className="relative flex items-center w-full px-3 py-2 bg-transparent">
            <Magnifier className="text-neutral-500 w-4 h-4 absolute left-4" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-white text-sm pl-8 pr-2 outline-none border-none placeholder:text-neutral-600 focus:ring-0"
            />
          </div>
          
          {/* Subtle Vertical Internal Separator */}
          <span className="hidden sm:block h-6 w-[1px] bg-neutral-800/80 mx-1" />

          {/* Search Box 2 */}
          <div className="relative flex items-center w-full px-3 py-2 bg-transparent">
            <Person className="text-neutral-500 w-4 h-4 absolute left-4" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-white text-sm pl-8 pr-2 outline-none border-none placeholder:text-neutral-600 focus:ring-0"
            />
          </div>
          
          {/* Action Button */}
          <button
            type="button"
            aria-label="Search"
            className="w-full sm:w-12 h-11 bg-[#5850ec] hover:bg-[#453e97] text-white rounded-xl shadow-[0_0_15px_rgba(88,80,236,0.4)] transition-all flex items-center justify-center min-w-[44px] shrink-0"
          >
            <Magnifier className="w-5 h-5" />
          </button>
        </div>

        {/* 5. Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400 mb-24">
          <span className="mr-1">Trending Position</span>
          <span className="bg-neutral-900/60 text-neutral-300 border border-neutral-800/80 hover:text-white cursor-pointer transition-colors px-3 py-1.5 rounded-xl">Product Designer</span>
          <span className="bg-neutral-900/60 text-neutral-300 border border-neutral-800/80 hover:text-white cursor-pointer transition-colors px-3 py-1.5 rounded-xl">AI Engineering</span>
          <span className="bg-neutral-900/60 text-neutral-300 border border-neutral-800/80 hover:text-white cursor-pointer transition-colors px-3 py-1.5 rounded-xl">Dev-ops Engineer</span>
        </div>

        {/* 6. Subtitle overlaying Earth Image */}
        <h2 className="text-2xl sm:text-3xl font-normal max-w-xl leading-tight mb-20 text-neutral-200">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span> find their dream positions.
        </h2>

        {/* 7. Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-left mt-auto pb-12">
          
          {/* Card 1 */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800/70 p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-44 group hover:border-neutral-700 transition-colors duration-300">
            <Briefcase className="text-neutral-500 group-hover:text-neutral-300 w-5 h-5 transition-colors" />
            <div>
              <div className="text-3xl sm:text-4xl font-semibold mb-1 tracking-tight">50K</div>
              <div className="text-xs text-neutral-400 font-medium">Active Jobs</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800/70 p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-44 group hover:border-neutral-700 transition-colors duration-300">
            <LayoutCellsLarge className="text-neutral-500 group-hover:text-neutral-300 w-5 h-5 transition-colors" />
            <div>
              <div className="text-3xl sm:text-4xl font-semibold mb-1 tracking-tight">12K</div>
              <div className="text-xs text-neutral-400 font-medium">Companies</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800/70 p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-44 group hover:border-neutral-700 transition-colors duration-300">
            <Person className="text-neutral-500 group-hover:text-neutral-300 w-5 h-5 transition-colors" />
            <div>
              <div className="text-3xl sm:text-4xl font-semibold mb-1 tracking-tight">2M</div>
              <div className="text-xs text-neutral-400 font-medium">Job Seekers</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0f0f0f]/80 backdrop-blur-md border border-neutral-800/70 p-6 rounded-2xl flex flex-col justify-between aspect-square md:aspect-auto md:h-44 group hover:border-neutral-700 transition-colors duration-300">
            <Star className="text-neutral-500 group-hover:text-neutral-300 w-5 h-5 transition-colors" />
            <div>
              <div className="text-3xl sm:text-4xl font-semibold mb-1 tracking-tight">97%</div>
              <div className="text-xs text-neutral-400 font-medium">Satisfaction Rate</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}