import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (

    <div className="flex flex-col items-center justify-around gap-10 bg-[#00d5bf] rounded-lg p-20 m-auto md:flex-row md:max-w-screen-lg ">
        <h3 className='text-2xl text-white'>Join using referral code NEWMEMBER and get 10% off your first order!</h3>
        <Link href='/register'> 
        <a className="whitespace-nowrap px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">Register</a>
        </Link>
       
      </div>
  )
}

export default Card
