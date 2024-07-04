import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuTwitter } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-4 w-full font-lato">
        <div className="bg-white h-[0.5px] w-full"></div>
        <h3 className="text-lg font-bold my-5">Join the Aptos Victor Community!</h3>
        <div className="bg-white h-[0.5px] w-full"></div>
        <div className="flex md:flex-row flex-col justify-between py-10">
          <div className="text-black flex flex-col font-cc">
            <div className="flex justify-center text-[20px] my-2">
              <Link href={'https://twitter.com/aptosvictors'}>
                <LuTwitter color="white" className="mx-3 cursor-pointer" />
              </Link>
              <Link href={'https://t.me/aptosvictors'}>
                <FaTelegramPlane color="white" className="mx-3 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-black h-[1px] w-full"></div>
        <div className="text-white text-xs md:text-left text-center">
          <p>© 2024 Playsphere Labs</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
