import React from 'react'

const Hours = () => {
  return (
    <>
        <h3 className='text-xl italic text-center'>Hours of Operation:</h3>
        <ul className='w-full m-auto grid items-center gap-5'>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-xl font-bold'>Monday - Wednesday</span>
                <span>12 pm - 12 am</span>
            </li>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-xl font-bold'>Thursday - Saturday</span>
                <span>12 pm - 2 am</span>
            </li>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-xl font-bold'>Sunday</span>
                <span>Closed</span>
            </li>
        </ul>
    </>
  )
}

export default Hours