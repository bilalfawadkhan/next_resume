import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div>
        <h1 className="text-center borel-regular text-[clamp(3.5rem,10vw,7rem)] m-24"> I am Bilal</h1>
        <div className='grid grid-cols-1 grid-rows-2 p-8 gap-x-14 gap-y-52 lg:grid-cols-12 mt-28'
        >  
        <Image
          src={'/comicdp.webp'}
          className='lg:col-end-5 lg:col-start-1 rounded-t-4xl'
          alt="Bilal"
          width={500} 
          height={500}
          />
      <span className='lg:col-start-6 lg:col-end-13'>
            <h2 className="text-center borel-regular text-[clamp(3.5rem,10vw,5rem)] m-24"> In Progress</h2>
        <p>I am a Front end enginneer focusing on the full stack development to become knows to all areas of development</p>
        </span>
        </div>
    </div>
  );
}

export default about
