'use client'
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import Link from "next/link";
import './Navbar.css';

const Navbar = () => {
  const [vis, setVis] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !audioRef.current.muted;
  };

  return (
    <nav className={`navbar flex justify-between items-center py-6 px-8 bg-dark-glass relative w-full sticky`}>
      <div className="text-xl font-bold font-lato text-white text-left flex-1">AptosVictors</div>
      <audio ref={audioRef} src="path/to/background-music.mp3" loop autoPlay />
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
      <div className={`audio-controls text-white mx-4 cursor-pointer`} onClick={toggleMute}>
        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
      </div>
      {vis && (
        <div className="absolute top-full z-10 bg-dark-glass left-0 flex flex-col w-full items-center">
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

