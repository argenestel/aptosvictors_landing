import Image from 'next/image'
import React from 'react'

const FeatureItem = ({ title, attribute, img }) => {
    return (
        <div className="h-[300px] w-[230px] m-2 flex flex-wrap relative bg-black items-end justify-center overflow-hidden rounded-[10px] feature-item">
            <div className="shine"></div>
            <Image src={`/${img}`} alt="Image" className="absolute h-[45%] top-0 left-[50%] -translate-x-[50%] transform-glass" width={100} height={100} />
            <div className="w-full p-1 text-center h-[70%] rounded-[10px] opacity-100 z-10 backdrop-blur-sm bg-[#29292950] ">
                <h4 className="text-lg my-10">{title}</h4>
                <p className="text-sm font-light">{attribute}</p>
            </div>
        </div>
    )
}

export default FeatureItem
