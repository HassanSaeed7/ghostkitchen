import React from 'react'
import Image from 'next/image'
import HeroImg from "../public/cbd0.jpg"

const Hero = () => {
  return (
      <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full md:pb-20 min-h-[95vh]">

        <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className=" mx-auto max-w-7xl  px-4 pt-10 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Enrich your Health with</span>{' '}
                <span className="block text-indigo-600 xl:inline">CBD</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Buy from our collection of high quality CBD products for sale – including CBD oil tinctures, gummies, capsules, and sleep aides in a variety of options. Our CBD products deliver superior hemp extracts with consistent, lab-guaranteed quality.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/shop"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover lg:w-full lg:h-full lg:min-h-screen md:h-96 sm:h-72"
          src={HeroImg}
          alt="Hero Image"
          layout='fill'
        />
      </div>
    </div>
      <div>
      </div>
      </>
  )
}

export default Hero
