import React from 'react'
import { useStateContext } from '../context/StateContext'

const profile = () => {
    const { email, name, dateOfBirth, } = useStateContext();

  return (
    <div className='relative mt-16 min-h-screen flex'>
        
        <div className='relative min-h-screen bg-gray-800 w-full md:w-1/4 inset-0'>
            <div className="w-full text-white text-xl">
            <ul className='w-full py-20 flex flex-col gap-3'>
                <li className='w-full hover:bg-indigo-800 hover:cursor-pointer p-5'>
                    <a href='#'>
                        Profile
                    </a>
                </li>
                <li className='w-full hover:bg-indigo-800 hover:cursor-pointer p-5'>
                    <a href='#'>
                        Order History
                    </a>
                </li>
                <li className='w-full hover:bg-indigo-800 hover:cursor-pointer p-5'>
                    <a href='#'>
                        Settings
                    </a>
                </li>
               
            </ul>
        </div>
        </div>
        
        <div className='p-20'>
            <h1 className='text-5xl font-bold'>Profile</h1>
            
        </div>


    </div>
  )
}

export default profile