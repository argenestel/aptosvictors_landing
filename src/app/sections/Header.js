import React from "react";
import Image from "next/image";

const images = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png",
  "/7.png", "/8.png", "/9.png", "/10.png", "/11.png", "/12.png",
  "/13.png", "/14.png", "/15.png", "/16.png", "/17.png", "/18.png",
  "/20.png"
];

const Header = () => {
  return (
    <div className="h-fit p-3 relative text-white z-1 items-center justify-center text-center">
      <h1 className=" text-white font-bsst font-semibold text-8xl mt-12">
        APTOS VICTORS
      </h1>
      <p className="text-xl mt-4 font-lato">Endless adventure, infinite possibilities with cNFTs</p>
      
      <div className="flex space-x-4 mt-8 px-5 items-center justify-center">
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full mx-4 w-[150px]">Dashboard</button>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold rounded-full mx-4 w-[150px]">Docs</button>
      </div>
      <div className="flex items-center justify-center text-center mt-14">
         <Image className="md:w-1/3 w-[80%]" src={'/header.svg'} alt="header" width={400} height={400}/>
      </div>
    </div>
  );
};

export default Header;
