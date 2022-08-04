import React from 'react'

const Hours = () => {
  return (
    <>
        <ul className='w-full grid items-center gap-2'>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-lg italic'>Mon - Wed</span>
                <span>12 pm - 12 am</span>
            </li>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-lg italic'>Thurs - Sat</span>
                <span>12 pm - 2 am</span>
            </li>
            <li className='flex justify-between px-4 lg:px-0'>
                <span className='text-lg italic'>Sun</span>
                <span>Closed</span>
            </li>
        </ul>
    </>
  )
}

export default Hours