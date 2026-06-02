"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleHover = () => setIsFlipped(!isFlipped);

  return (
    <header className="w-full h-30 border-b-2 border-b-black/10">
      <div className="flex w-full h-30 px-[8%] justify-between items-center">
        
        <div className="flex gap-x-5">
          <div className="flex">
            <Image src="/tutorvictory-logo.png" width={300} height={100}/>
          </div>
          <div className="flex w-full">
            <nav className="flex items-center gap-x-10 text-gray-900 font-primary-font">
              <Link href="/about" className="hover:cursor-pointer">About Us</Link>
              <div className="flex gap-x-2 justify-center items-center hover:cursor-pointer" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <button className="hover:cursor-pointer">Our Services</button>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isFlipped ? 'rotate-180' : 'rotate-0'}`}/>
              </div>
              <Link href="/subjects" className="hover:cursor-pointer">Subjects</Link>
              <Link href="/contact" className="hover:cursor-pointer">Contact Us</Link>
            </nav>
          </div>
        </div>
        <div className="flex gap-x-5">
          <button className="px-4 py-2 rounded-md hover:cursor-pointer hover:bg-bg-primary-hover">Log In</button>
          <button className="px-4 py-2 rounded-md bg-bg-primary text-white hover:cursor-pointer hover:bg-bg-primary/80">Sign Up</button>
        </div>

      </div>
    </header>
  )
}
