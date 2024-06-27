import React from 'react'
import Image from 'next/image'

const SneakPeek = () => {
  return (
    <>
      <div id='sneakpeek' className='m-3 px-0 md:px-10 my-[100px] font-lato h-fit flex flex-col flex-wrap'>
        <h3 className='font-bold text-3xl font-lato'>Bring Your Victor to Life!</h3>
        <h5 className='font-light my-5'>Experience the future of gaming in your own space.</h5>
        <div className='opacity-100 p-5 my-10 z-10 flex md:flex-row flex-col backdrop-blur-xl bg-[#d9d9d920] w-full rounded-[10px]'>
          <div className='md:w-[60%] w-full flex justify-center items-center relative'>
            <h2 className='font-black text-2xl md:text-4xl tshadow absolute left-[50%] top-[25%] -translate-x-[200%] md:-translate-x-[160%]'>APTOS</h2>
            <Image className='h-[80%] md:h-full' src={'/sneakpeek.svg'} width={200} height={200}/>
            <h2 className='font-bold text-2xl md:text-4xl tshadow absolute right-[50%] top-[25%] translate-x-[150%] md:translate-x-[130%]'>VICTOR</h2>
          </div>
          <div className='md:w-[40%] md:mt-0 mt-20 w-full flex flex-col justify-center items-center'>
            <Image src={'/qr.svg'} className='w-[40%]' width={100} height={100}/>
            <h3 className='text-xl my-2'>"Scan to unleash your Victor in AR"</h3>
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full my-4 w-[150px]">Try AR Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SneakPeek