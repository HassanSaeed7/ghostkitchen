import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/logo.png"
import { useStateContext } from '../context/StateContext'

const register = () => {
  const { user } = useStateContext();



  return (
    <>
      
      <div className="min-h-screen max-w-screen-lg flex flex-col justify-center items-center m-auto my-10">
         <Image src={logo} alt='logo' width={300} height={300} />

          <div>
          <h1 className="text-5xl text-indigo-600 font-bold mb-7">
            Register
          </h1>
            <form action='post' className='grid grid-cols-2 gap-2 items-start w-screen max-w-lg'>
             
              <div>
                  <label className='text-xl font-bold mb-1' for="firstName">First Name</label>
                  <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='text' name='firstName' id='firstName' required></input>
              </div>
              
              <div>
                 <label className='text-xl font-bold mb-1' for="lastName">Last Name</label>
                  <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='text' name='lastName' id='lastName' required></input>
              </div>
              

              <div>
              <label className='text-xl font-bold mb-1' for="email">Email</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='email' name='email' id='email' required></input>
              </div> 
              
              <div>
              <label className='text-xl font-bold mb-1' for="dob">Date of Birth</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='date' name='dob' id='dob' placeholder='Must be 21 or older.' required></input>
              </div>

              <div>
              <label className='text-xl font-bold mb-1' for="password">Password</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='password' name='password' id='password' required></input>
              </div>

              <div>
              <label className='text-xl font-bold mb-1' for="reEnterPassword">Enter Password Again</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='reEnterPassword' name='reEnterPassword' id='reEnterPassword' required></input>
              </div>
              
             

              <div className='col-span-2'>
              <input type='checkbox' className='border-1 mb-5 rounded-lg mr-2' name='agree' id='agree' required></input>
              <label for='agree'>I agree to the terms and conditions.</label>
              </div>

              <button type='submit' className='my-5 col-span-2 w-full bg-indigo-600 py-3 px-4 text-white rounded-lg'>Register</button>
            </form>
          </div>
      </div>

    </>
  )
}

export default register
