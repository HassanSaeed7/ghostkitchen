import React from 'react'

const Card = () => {
  return (

    <div className="flex flex-col items-center justify-around gap-10 bg-[#00d5bf] rounded-lg p-20 m-auto md:flex-row md:max-w-screen-lg ">
        <p>Need Help? We got you covered.</p>
        <div className='flex gap-2'>
           <a
                    href="/contact"
                    className="whitespace-nowrap px-8 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-700 text-white hover:bg-indigo-900 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/about"
                    className="whitespace-nowrap px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
        </div>

      </div>
  )
}

export default Card
