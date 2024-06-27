import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const comps = [
  "comp1.svg",
  "comp2.svg",
  "comp3.svg",
  "comp4.svg",
  "comp5.svg"
];

const Companies = () => {
  return (
    <div id='team' className='flex items-center justify-center transparent my-[100px]'>
      <Marquee autoFill>
        {comps.map((e, ind) => (
          <div key={ind} className='mx-10'>
            <Image 
              src={`/${e}`} 
              className='h-full' 
              width={200} 
              height={200} 
              alt={`Company logo ${ind + 1}`} 
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Companies;
