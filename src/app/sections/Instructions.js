import React from 'react'
import Image from "next/image";
const Instructions = ({ }) => {
    return (
        <div className='flex md:flex-row flex-col justify-around'>
            <div className="my-5 flex flex-col text-center items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                </div>
                <p className="mb-4 font-lato">Scan the QR code with your smartphone</p>
                <Image className='w-[30%] md:w-[50%]' src={'/qr1.svg'} width={200} height={200} alt="Smartphone screen showing a QR code scanner" />
            </div>
            <div className="my-5 flex flex-col text-center items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                </div>
                <p className="mb-4 font-lato">Point your camera at a flat surface</p>
                <Image className='w-[30%] md:w-[50%]' src={'/qr2.svg'} width={200} height={200} alt="Smartphone screen showing a QR code scanner" />
            </div>
            <div className="my-5 flex flex-col text-center items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                </div>
                <p className="mb-4 font-lato">Watch as your Victor comes to life!</p>
                <Image className='w-[30%] md:w-[50%]' src={'/qr3.svg'} width={200} height={200} alt="Smartphone screen showing a QR code scanner" />
            </div>
        </div>

    )
}

export default Instructions