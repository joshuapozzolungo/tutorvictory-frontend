"use client";

import "./header.css";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function Header() {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleHover = () => setIsFlipped(!isFlipped);

  return (
    <header className="w-full flex h-25 border-b-2 border-b-black/10 items-center">
      
      <div className="flex w-full px-[10%] justify-between items-center"> 
        
        { /* Logo */ }
        <Link href="/" className="text-2xl whitespace-nowrap font-bold">Tutor Victory</Link>
        
        { /* Menu Items */ }
        <div className="flex gap-x-10">
          <div className="flex w-full">

            <nav className="flex items-center gap-x-6 text-gray-900 font-primary-font font-semibold text-sm">
              <Link href="/about" className="menu-item">
                <span className="flex">About us</span>
              </Link>
              <Link href="/resources" className="menu-item">
                <span className="flex-1">Resources</span>
              </Link>
              <Link href="/pricing">
                <span className="menu-item">Pricing</span>
              </Link>
              <div className="relative" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Link href="/services" className={`menu-item items-center gap-x-2 ${isFlipped ? 'bg-hover text-call-to-action' : ''}`}>
                  <span>Our Services</span>
                  <ChevronDown size={15} className={`transition-transform duration-150 ${isFlipped ? 'rotate-180' : 'rotate-0'}`}/>
                </Link>
                <div className={`absolute -left-1/3 pt-5 origin-top transition-all duration-150 ${isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="w-100 h-75 pt-5 bg-hover rounded-md">

                  </div>
                </div>
              </div>
              <Link href="/subjects" className="menu-item">
                <span>Subjects</span>  
              </Link>
              <Link href="/contact" className="menu-item">
                <span className="flex-1">Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>

        { /* Login Section */}
        <div className="flex gap-x-5 text-sm font-semibold">
          <Link href="/login" className="flex items-center hover:text-call-to-action"> 
            <span>Sign in</span>
          </Link>
          <button className="px-4 py-2 rounded-md bg-call-to-action text-white hover:cursor-pointer hover:bg-bg-primary/80">Try for free</button>
        </div>
      </div>
    </header>
  )
}
