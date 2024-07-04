'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const onDocClick = () => {
    // Handle click event for the Docs button
    console.log("Docs button clicked");
  };

  return (
    <div className="h-fit p-3 relative text-white z-1 items-center justify-center text-center">
      <h1 className=" text-white font-bsst font-semibold text-8xl mt-12">
        APTOS VICTORS
      </h1>
      <p className="text-xl mt-4 font-lato">Endless adventure, infinite possibilities with cNFTs</p>
      
      <div className="flex space-x-4 mt-8 px-5 items-center justify-center">
        <Link href="https://dashboard.aptosvictors.xyz" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full mx-4 w-[150px] hover:shadow-md">
            Dashboard
        </Link>
        <Link href="" className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold rounded-full mx-4 w-[150px] hover:shadow-md">
          Docs
        </Link>
      </div>
      
      <div className="flex items-center justify-center text-center mt-14">
         <Image className="md:w-1/3 w-[80%]" src={'/Victors.png'} alt="header" width={800} height={800}/>
      </div>
    </div>
  );
};

export default Header;
