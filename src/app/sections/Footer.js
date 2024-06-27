import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuInstagram, LuSparkle, LuTwitter } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="p-10 w-full font-lato">
                {/* <div className="bg-black h-[1px] w-full"></div> */}
                <div className="bg-white h-[0.5px] w-full"></div>
                <h3 className="text-lg font-bold my-5">Join the Aptos Victor Community!</h3>
                <div className="bg-white h-[0.5px] w-full"></div>
                <div className="flex md:flex-row flex-col justify-between py-10">
                    <div className="text-black flex flex-col font-cc">
                        <div className="flex justify-center text-[20px] my-2">
                            <Link href={'https://twitter.com/aptosvictors'}><LuTwitter color="white" className="mx-3 cursor-pointer" /></Link>
                            <Link href={'https://instagram.com/aptosvictors'}><LuInstagram color="white" className="mx-3 cursor-pointer" /></Link>
                            <Link href={'https://t.me/aptosvictors'}><FaTelegramPlane color="white" className="mx-3 cursor-pointer" /></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-black h-[1px] w-full"></div>
                <div className="text-white text-xs md:text-left text-center">
                    <p>© 2024 Playsphere Labs</p>
                </div>
            </div>
            <div className="opacity-100 text-center z-10 backdrop-blur-sm bg-[#d9d9d950]">
                <h3 className="py-4 text-xl font-light">Share your AR Victor with</h3>
                <h2 className="py-4 text-2xl font-semibold">#AptosVictorAR</h2>
            </div>
        </>
    );
};

export default Footer;
