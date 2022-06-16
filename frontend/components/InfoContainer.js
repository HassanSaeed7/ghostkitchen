/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image"
import Link from 'next/link'


const features = [
  {
    name: 'Unbeatable pricing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    src: '/info3.svg',
  },
  {
    name: 'Fast and efficient service',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    src: '/info0.svg',
  },
  {
    name: 'Secure transactions',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    src: '/info1.svg',
  },
  {
    name: 'Free delivery on $100+ orders',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    src: '/info2.svg',
  },
]

export default function InfoContainer() {
  return (
    <div className=" my-20 py-12 bg-[#00d5bf] min-h-half grid items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-xs">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Trusted CBD Wholesaler
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            An assortment of Premium CBD Products available for retail and wholesale.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 text-white">
                    <Image src={feature.src} alt='idk' width='50' height='50'/>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>


        <div className='flex gap-2 justify-center mt-10'>
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
      
    </div>
  )
}
