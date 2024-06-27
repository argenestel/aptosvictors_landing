import Image from 'next/image'
import React from 'react'

const VictorCard = ({img,text,sub}) => {
    return (
        <>
            <div className="text-center rounded-[20px] border p-[5px] border-white bg-black/20 w-[300px] h-[320px] my-2">
                <Image src={`${img}`} width={350} height={350} alt="Roadmap" className="mx-auto mt-2 mb-4 w-full"  />
                <h3 className="text-lg  font-lato">{text}</h3>
                <p className="mt-2 font-lato text-sm m-1">{sub}</p>
            </div>
            
        </>
    )
}

export default VictorCard