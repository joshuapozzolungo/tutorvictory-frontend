"use client";

import Link from "next/link";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";

export default function Header() {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleHover = () => setIsFlipped(!isFlipped);

  const [hamburgerActivated, setIsHamburgerActivated] = useState(false) 
  const toggleHamburger = () => setIsHamburgerActivated(!hamburgerActivated)

  return (
    <header className="w-full flex h-25 border-b-2 border-b-black/10 items-center sticky backdrop-blur top-0 z-50 bg-white/70">
      
      <div className="flex w-full px-[5%] sm:px-[10%] justify-between items-center"> 
        
        { /* Logo */ }
        <Link href="/" className="text-2xl whitespace-nowrap font-bold">Tutor Victory</Link>
        
        { /* Menu Items */ }
        <div className="flex gap-x-10">
          <div className="flex w-full">

            <nav className="hidden text-sm sm:flex items-center gap-x-6 font-primary-font font-semibold text-gray-900">
              <Link href="/about" className="menu-item">
                <span className="flex">About us</span>
              </Link>
              <Link href="/resources" className="menu-item">
                <span className="flex-1">Resources</span>
              </Link>
              <Link href="/pricing">
                <span className="menu-item">Pricing</span>
              </Link>
              <div className="relative">
                <button onClick={toggleHover} className={`menu-item items-center gap-x-2 ${isFlipped ? 'bg-button-hover text-call-to-action' : ''}`}>
                  <span>Our Services</span>
                  <ExpandMoreIcon sx={{ fontSize: 20}} className={`transition-transform duration-150 ${isFlipped ? 'rotate-180' : 'rotate-0'}`}/>
                </button>
                <div className={`absolute -left-1/3 pt-5 origin-top transition-all duration-150 ${isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="w-100 h-75 pt-5 bg-button-hover rounded-md">

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
        <div className="flex items-center gap-x-5 text-sm font-semibold">
          <Link href="/login" className="hidden sm:flex items-center hover:text-theme"> Sign In </Link>
          <button className="px-3 py-2 rounded-md bg-theme text-white text-sm hover:cursor-pointer hover:bg-theme/80">Try for free</button>
          <span className={`sm:hidden hover:cursor-pointer ${hamburgerActivated ? 'hidden' : ''}`} onClick={toggleHamburger}><MenuIcon/></span>
          <span className={`sm:hidden hover:cursor-pointer ${hamburgerActivated ? '' : 'hidden'}`} onClick={toggleHamburger}><CloseIcon/></span>
        </div>
      </div>
    </header>
  )
}
