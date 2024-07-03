'use client'
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import './Navbar.css';

const Navbar = () => {
  const [vis, setVis] = useState(false);

  return (
    <nav className={`flex justify-between items-center py-6 px-8 bg-gray-800 relative w-full glassmorphic sticky`}>
      <div className="text-xl font-bold font-lato">AptosVictors</div>
      <div className="md:flex md:hidden cursor-pointer" onClick={() => setVis(!vis)}>
        <GiHamburgerMenu size={20} color="white" />
      </div>
      <div className="space-x-4 hidden md:flex">
        <Link href="#about" className="text-gray-400 px-3 hover:text-white font-lato">Lore</Link>
        <Link href="#perks" className="text-gray-400 px-3 hover:text-white font-lato">Perks</Link>
        <Link href="#roadmap" className="text-gray-400 px-3 hover:text-white font-lato">Roadmap</Link>
        <Link href="#faq" className="text-gray-400 px-3 hover:text-white font-lato">Faq</Link>
        <Link href="#sneakpeek" className="text-gray-400 px-3 hover:text-white font-lato">SneakPeak</Link>
      </div>
      {vis && (
        <div className="absolute top-[100%] z-10 bg-gray-800 left-0 flex flex-col w-full items-center glassmorphic">
          <Link href="#about" className="my-2 text-gray-400 px-3 hover:text-white font-lato">Lore</Link>
          <Link href="#perks" className="my-2 text-gray-400 px-3 hover:text-white font-lato">Perks</Link>
          <Link href="#roadmap" className="my-2 text-gray-400 px-3 hover:text-white font-lato">Roadmap</Link>
          <Link href="#faq" className="my-2 text-gray-400 px-3 hover:text-white font-lato">Faq</Link>
          <Link href="#sneakpeek" className="my-2 text-gray-400 px-3 hover:text-white font-lato">SneakPeak</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
