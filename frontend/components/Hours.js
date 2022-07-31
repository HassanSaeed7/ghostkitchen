import React from 'react'

const Hours = () => {
  return (
    <div className='min-h-half'>
        <h3 className='mt-20 mb-5 text-3xl italic text-center'>We're open...</h3>
        <ul className=' min-h-third max-w-screen-sm m-auto grid items-center'>
            <li className='flex justify-between'>
                <span className='text-xl font-bold'>Monday - Wednesday</span>
                <span>12 pm - 12 am</span>
            </li>
            <li className='flex justify-between'>
                <span className='text-xl font-bold'>Thursday - Saturday</span>
                <span>12 pm - 2 am</span>
            </li>
            <li className='flex justify-between'>
                <span className='text-xl font-bold'>Sunday</span>
                <span>12 pm - 4 pm</span>
            </li>
        </ul>
    </div>
  )
}

export default Hours