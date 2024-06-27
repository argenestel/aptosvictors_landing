import React from 'react'
import PerkItem from '../components/PerkItem'

const features = [
  {
    "title": "Early Access",
    "attribute": "Be the first to experience new features and content drops",
    "img": "perk1.svg"
  },
  {
    "title": "Economic Opportunities",
    "attribute": "Participate in the player-driven NFT marketplace economy",
    "img": "perk2.svg"
  },
  {
    "title": "Unique Abilities",
    "attribute": "Unleash exclusive powers tailored to your NFT Victor",
    "img": "perk3.svg"
  },
  {
    "title": "Dynamic Evolution",
    "attribute": "Watch your NFT grow stronger as you progress",
    "img": "perk4.svg"
  },
  {
    "title": "Voting Rights",
    "attribute": "Shape the future of Aptos Victors with governance participation",
    "img": "perk5.svg"
  }
]


const Perks = () => {
  return (
    <>
      <div id='perks' className='m-3 my-[100px] font-lato h-fit flex flex-col flex-wrap'>
        <h3 className='font-bold text-3xl font-lato mx-10'>Perks for NFT Holders</h3>
        <h5 className='font-light mx-10 my-5'>Unlock Unique Advantages with Aptos Victors cNFTs</h5>
        <div className='w-full flex flex-wrap items-center justify-evenly bg-black '>
          {features.map((feature,ind)=>{
            return <PerkItem key={ind} img={feature.img} title={feature.title} attribute={feature.attribute} />
          })}
        </div>
      </div></>
  )
}

export default Perks