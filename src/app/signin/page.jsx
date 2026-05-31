'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Gravity UI Icons
import { Eye, EyeSlash, LogoFacebook } from '@gravity-ui/icons';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Login:', formData);
  };

  return (
    // 1. Fixed Main Screen Viewport bounds wrapper context
    <main className="relative w-full py-30 bg-[#0a0a0a] text-white flex items-center justify-center overflow-x-hidden overflow-y-auto">
      
      {/* Background ambient glow effect */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* 2. Added deep layout container to block external relative components pushing card down */}
      <div className="w-full max-w-md flex flex-col items-center justify-center my-auto z-10">
        
        {/* Auth Card Container - Added macro card hover scale, border color shift, and ambient shadow flare */}
        <div className="w-full bg-[#121212]/90 border border-neutral-800/80 hover:border-neutral-700/60 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ease-out hover:scale-[1.01] shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_60px_rgba(88,80,236,0.1)]">
          
          {/* Logo and Header text */}
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="mb-4 inline-block transition-transform duration-200 hover:scale-105">
              <Image 
                src="/recources/logo.png" 
                alt="Hireloop Logo" 
                width={130} 
                height={34} 
                className="object-contain"
                priority
              />
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight text-white mb-1.5">
              Welcome back
            </h1>
            <p className="text-sm text-neutral-400">
              Sign in to manage your pipeline and track applications.
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Email Address Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#181818] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-200 hover:border-neutral-700/60 focus:border-indigo-500/80 focus:bg-[#161616] focus:ring-1 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5 relative">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
                  Password
                </label>
                <Link href="#" className="text-xs text-[#6366f1] hover:text-[#4f46e5] transition-colors hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#181818] border border-neutral-800 rounded-xl pl-4 pr-11 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-200 hover:border-neutral-700/60 focus:border-indigo-500/80 focus:bg-[#161616] focus:ring-1 focus:ring-indigo-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-start gap-2.5 mt-1">
              <input
                id="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="w-4 h-4 mt-0.5 rounded border-neutral-800 bg-[#181818] text-[#5850ec] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#5850ec] transition-transform active:scale-90"
              />
              <label htmlFor="rememberMe" className="text-xs text-neutral-400 leading-normal select-none cursor-pointer hover:text-neutral-300 transition-colors">
                Keep me signed in on this device
              </label>
            </div>

            {/* Submit Button - Added hover lighting gradient, scaling shadow flare, and active press scale */}
            <button
              type="submit"
              className="w-full h-11 bg-[#5850ec] hover:bg-[#4d45e4] text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(88,80,236,0.2)] hover:shadow-[0_4px_25px_rgba(88,80,236,0.45)] hover:scale-[1.005] active:scale-[0.995]"
            >
              Sign In
            </button>
          </form>

          {/* Divider Line */}
          <div className="flex items-center gap-3 my-6">
            <span className="h-[1px] flex-1 bg-neutral-800/60" />
            <span className="text-xs font-medium text-neutral-600 uppercase tracking-wider">Or continue with</span>
            <span className="h-[1px] flex-1 bg-neutral-800/60" />
          </div>

          {/* Social Provider Logins */}
          <div className="grid grid-cols-2 gap-3">
            {/* Google Login Button */}
            <button 
              type="button"
              className="flex items-center justify-center gap-2.5 h-11 rounded-xl bg-[#181818] border border-neutral-800/80 hover:bg-[#1f1f1f] hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200 active:scale-[0.97]"
            >
              <svg className="w-4 h-4 transition-transform duration-200" viewBox="0 0 24 24" width="100%" height="100%">
                <path
                  fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.352 2.673 1.432 6.58l3.834 3.185z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.275c0-.796-.073-1.564-.207-2.304H12v4.51h6.47c-.29 1.504-1.14 2.782-2.42 3.633l3.77 2.923c2.2-2.028 3.67-5.014 3.67-8.762z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.266 14.235L1.432 17.42A11.944 11.944 0 010 12c0-1.996.49-3.882 1.432-5.58l3.834 3.185A7.07 7.07 0 004.91 12c0 .79.13 1.55.356 2.235z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.97-1.077 7.96-2.924l-3.77-2.923c-1.05.704-2.39 1.127-4.19 1.127-3.373 0-6.223-2.273-7.234-5.335L.932 17.13C2.852 21.327 7.09 24 12 24z"
                />
              </svg>
              <span>Google</span>
            </button>
            
            {/* Facebook Login Button */}
            <button 
              type="button"
              className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#181818] border border-neutral-800/80 hover:bg-[#1f1f1f] hover:border-neutral-700 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-200 active:scale-[0.97]"
            >
              <LogoFacebook className="w-4 h-4 text-neutral-400" />
              <span>Facebook</span>
            </button>
          </div>

          {/* Bottom Signup redirect toggle */}
          <div className="text-center mt-8 text-sm text-neutral-500">
            Don't have an account?{' '}
            <Link href="/signup" className="text-[#6366f1] font-medium hover:text-[#4f46e5] transition-colors hover:underline">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}