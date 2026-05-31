'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/recources/logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Root container matching the dark background of the page
        <nav className="w-full bg-[#0b0b0b] px-4 py-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                {/* Floating Navigation Card */}
                <header className="flex h-16 items-center justify-between bg-[#161616] border border-neutral-800/60 rounded-2xl px-6 shadow-xl">

                    {/* Left Side: Burger Menu & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-neutral-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Logo Container */}
                        <Link href="/" className="flex items-center">
                            {/* Make sure to replace '/logo.png' with your actual logo file path */}
                            <Image
                                src={logo}
                                alt="Hireloop Logo"
                                width={125}
                                height={32}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right Side: Navigation Links & CTA Buttons */}
                    <div className="flex items-center gap-6">
                        {/* Desktop Links */}
                        <ul className="hidden items-center gap-6 md:flex text-sm font-medium text-neutral-300">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors duration-200">
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors duration-200">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors duration-200">
                                    Pricing
                                </Link>
                            </li>
                        </ul>

                        {/* Thin Vertical Divider Line from Image */}
                        <span className="hidden md:block h-4 w-[1px] bg-neutral-800 mx-1" />

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 text-sm">
                            <Link
                                href="#"
                                className="text-[#6366f1] hover:text-[#5053f0] font-semibold transition-colors duration-200"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/signup"
                                className="bg-[#5850ec] hover:bg-[#453e97] text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(88,80,236,0.25)]"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Mobile Dropdown Drawer */}
                {isMenuOpen && (
                    <div className="mt-2 bg-[#161616] border border-neutral-800/60 rounded-xl md:hidden animate-fade-in">
                        <ul className="flex flex-col gap-1 p-4 text-sm font-medium text-neutral-300">
                            <li>
                                <Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}