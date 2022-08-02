import Image from 'next/image'
import React from 'react'
import image from "../public/1.jpg"
import image0 from "../public/2.jpg"
import image1 from "../public/12.jpg"
import image2 from "../public/13.jpg"

const Featured = () => {
  return (
    <div className='min-h-screen m-auto'>
                
        <div className=' relative lg:flex gap-12 items-center py-5 my-5'>
          <Image src={image} alt='display image' width={800} height={600} className='rounded-lg drop-shadow-md -translate-x-10' />
          <div className='lg:w-2/4 p-5'>
            <h3 className='text-4xl font-bold text-indigo-600 mb-2'>Lorem</h3>
            <p className='leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. 
            </p>
          </div>
        </div>

        <div className='lg:flex gap-12 items-center py-5 my-5 flex-row-reverse'>
        <Image src={image0} alt='display image' width={800} height={600} className='rounded-lg drop-shadow-md translate-x-10' />
          <div className='lg:w-2/4 p-5'>
            <h3 className='text-4xl font-bold text-indigo-600 mb-2 text-right'>Lorem</h3>
            <p className='leading-relaxed text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. 
            </p>
          </div>
        </div>

        <div className=' relative lg:flex gap-12 items-center py-5 my-5'>
          <Image src={image1} alt='display image' width={800} height={600} className='rounded-lg drop-shadow-md -translate-x-10' />
          <div className='w-2/4 p-5'>
            <h3 className='text-4xl font-bold text-indigo-600 mb-2'>Lorem</h3>
            <p className='leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. 
            </p>
          </div>
        </div>

        <div className='lg:flex gap-12 items-center py-5 my-5 flex-row-reverse'>
        <Image src={image2} alt='display image' width={800} height={600} className='rounded-lg drop-shadow-md translate-x-10' />
          <div className='lg:w-2/4 p-5'>
            <h3 className='text-4xl font-bold text-indigo-600 mb-2 text-right'>Lorem</h3>
            <p className='leading-relaxed text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercise nulla pariatur et dolore magna aliqua. 
            </p>
          </div>
        </div>

        
        


    </div>
  )
}

export default Featured