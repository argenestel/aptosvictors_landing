import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <>
      <div className='p-4 my-20 w-full h-fit' id='about'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='md:w-2/3 w-full p-8 rounded-3xl backdrop-blur-md bg-black/30 shadow-lg border border-black/30'>
            <h3 className='font-bold text-2xl my-3'>Join the Revolution with Aptos Victors!</h3>
            <p className='text-base font-light my-2'>Aptos Victors is an endless runner game that blends the thrill of augmented reality with web3. Step into the shoes of Victor, a courageous hero on a mission to defend the decentralized metaverse from the clutches of centralization and the oppressive forces of Web2.</p>
            <p className='text-base font-light my-2'>But that is not all - the true power of Aptos Victors lies in its innovative NFT collection, coming soon! These mighty Victors are not just unique digital assets; they are your key to unlocking a whole new realm of in-game perks, bonuses, and customization options.</p>
            <p className='text-base font-light my-2'>But the benefits dont stop there. As you progress through the game, your NFT Victor will level up alongside you, evolving and growing in strength, ensuring that your gaming experience remains fresh, challenging, and utterly captivating.</p>
            <p className='text-base font-light my-2'>Stay tuned for the launch of the Aptos Victors NFT collection and get ready to join the ranks of the decentralized heroes who will shape the future of gaming.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
