"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VictorCard from "../components/VictorCard";
import Slider from "react-slick";

const images = ["/image.png", "/aboutbg.webp", "/image.png", "/aboutbg.webp"];

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronLeft className="arrows" style={{ color: "white" }} />
    </div>
  );
};
const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <FaChevronRight className="arrows" style={{ color: "white" }} />
    </div>
  );
};

const roads = [
  {
    "img": '/ExploreVictors.png',
    "text": "MIX & MATCH",
    "sub": "Combine character, weapon, and accessory NFTs for endless possibilities"

  },
  {
    "img": '/MultiVictors.png',
    "text": "Community Creations",
    "sub": "Trade and showcase your one-of-a-kind NFT combinations"
  },
  {
    "img": '/victor3.svg',
    "text": "Evolving Aesthetics",
    "sub": "Upgrade your NFTs to unlock new visual styles and effects"
  },
  {
    "img": '/ToolsVictors.png',
    "text": "Dynamic Abilities",
    "sub": "Unlock new skills and powers through unique NFT combinations"
  },

]



const Forge = () => {

  return (
    <>
      <div id="roadmap" className="m-3 my-[100px] font-lato h-fit flex flex-col flex-wrap">
      <h3 className='font-bold text-3xl font-lato mx-10'>Forge Your Victor</h3>
      <h5 className='font-light mx-10 my-5'>Unleash Your Creativity with Composable NFTs </h5>
        {/* <h1 className="font-lato text-4xl mx-10"> Forge Your Victor</h1>
        <p class=" mt-4 mx-10 my-5">Unleash Your Creativity with Composable NFTs </p> */}
        <div className="w-full flex flex-wrap items-center justify-around bg-black ">
          {roads.map((road, index) => {
            return (<VictorCard key={index} img={road.img} text={road.text} sub={road.sub} />)
          })}

        </div>
      </div>

    </>
  );
};

export default Forge;
