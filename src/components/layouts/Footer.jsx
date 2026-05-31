'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/recources/logo.png'
// Gravity UI Icons (Make sure @gravity-ui/icons is installed)
import { LogoFacebook, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-neutral-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Section: Brand Info + Navigation Links Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          
          {/* Brand Presentation (Takes 5 columns on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-4 max-w-sm">
            <Link href="/" className="inline-block">
              <Image 
                src={logo}
                alt="Hireloop Logo" 
                width={120} 
                height={32} 
                className="object-contain"
              />
            </Link>
            <p className="text-neutral-500 text-sm font-normal leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Navigation Link Groups Grid (Takes 7 columns on desktop) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Product */}
            <div className="flex flex-col gap-3.5">
              <h3 className="text-[#5c56ec] font-medium text-sm tracking-wide">Product</h3>
              <ul className="flex flex-col gap-3 text-sm font-normal text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Job discovery</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Worker AI</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Companies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Salary data</Link></li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col gap-3.5">
              <h3 className="text-[#5c56ec] font-medium text-sm tracking-wide">Navigations</h3>
              <ul className="flex flex-col gap-3 text-sm font-normal text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Help center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Career library</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
              <h3 className="text-[#5c56ec] font-medium text-sm tracking-wide">Resources</h3>
              <ul className="flex flex-col gap-3 text-sm font-normal text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Brand Guideline</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Newsroom</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Socials & Copyright Meta Elements */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-900/60">
          
          {/* Left: Social Media Badge Grid */}
          <div className="flex items-center gap-3">
            <Link 
              href="#" 
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900/60 border border-neutral-800/40 text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-all duration-200"
            >
              <LogoFacebook className="w-4 h-4" />
            </Link>
            <Link 
              href="#" 
              aria-label="Pinterest"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#272152]/40 border border-purple-900/30 text-purple-400 hover:text-purple-300 transition-all duration-200"
            >
              <LogoGithub className="w-4 h-4" />
            </Link>
            <Link 
              href="#" 
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900/60 border border-neutral-800/40 text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-all duration-200"
            >
              <LogoLinkedin className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Copyright and Privacy legal lines */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-neutral-600 font-normal">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-neutral-400 transition-colors">Terms & Policy</Link>
              <span>·</span>
              <Link href="#" className="hover:text-neutral-400 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}