'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/recources/logo.png'
import { authClient } from '@/lib/auth-client'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="w-full bg-[#0b0b0b] px-4 py-6 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <header className="flex h-16 items-center justify-between bg-[#161616] border border-neutral-800/60 rounded-2xl px-6 shadow-xl">

                    {/* Left Side: Burger Menu & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-neutral-400 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="Hireloop Logo" width={125} height={32} className="object-contain" priority />
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        {/* Desktop Links */}
                        <ul className="hidden items-center gap-6 md:flex text-sm font-medium text-neutral-300">
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Browse Jobs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Company</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
                        </ul>

                        <span className="hidden md:block h-4 w-[1px] bg-neutral-800 mx-1" />

                        {/* Auth Section */}
                        {isPending ? (
                            // Loading skeleton
                            <div className="h-8 w-24 rounded-lg bg-neutral-800 animate-pulse" />
                        ) : user ? (
                            // Logged-in user info
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="flex items-center gap-2.5">
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name ?? 'User avatar'}
                                            width={32}
                                            height={32}
                                            className="rounded-full object-cover border border-neutral-700"
                                        />
                                    ) : (
                                        <div className="h-8 w-8 rounded-full bg-[#5850ec] flex items-center justify-center text-white text-xs font-semibold">
                                            {user.name?.charAt(0).toUpperCase() ?? user.email?.charAt(0).toUpperCase() ?? '?'}
                                        </div>
                                    )}
                                    <span className="hidden md:block text-sm text-neutral-300 font-medium">
                                        {user.name ?? user.email}
                                    </span>
                                </div>

                                {/* Sign Out */}
                                <button
                                    onClick={handleSignOut}
                                    className="text-sm text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500 px-3 py-1.5 rounded-lg transition-all duration-200"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            // Logged-out buttons
                            <div className="flex items-center gap-4 text-sm">
                                <Link href="/signin" className="text-[#6366f1] hover:text-[#5053f0] font-semibold transition-colors duration-200">
                                    Sign In
                                </Link>
                                <Link href="/signup" className="bg-[#5850ec] hover:bg-[#453e97] text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(88,80,236,0.25)]">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>
                </header>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="mt-2 bg-[#161616] border border-neutral-800/60 rounded-xl md:hidden animate-fade-in">
                        <ul className="flex flex-col gap-1 p-4 text-sm font-medium text-neutral-300">
                            <li><Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">Browse Jobs</Link></li>
                            <li><Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">Company</Link></li>
                            <li><Link href="#" className="block py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 hover:text-white transition-colors">Pricing</Link></li>
                            {user && (
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-neutral-800/40 text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}