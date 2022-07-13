import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext';
import logo from "../public/logo.png";
import Image from "next/image";
import toast from 'react-hot-toast';


const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggedIn, setIsLoggedIn, user } = useStateContext();
    const router = useRouter();

    const loginHandler = (event) => {
        event.preventDefault();
        if (email.trim().length > 7 && password.trim().length > 8) {
            setIsLoggedIn(true);
            router.push('/');
        } else {
            toast.fail('Please try again.');
            setIsLoggedIn(false);
        }
    };


  return (
    <>
      
      <div className="min-h-screen max-w-screen-lg flex flex-col justify-center items-center m-auto my-10">
      <Image src={logo} alt='logo' width={300} height={300} />
          <div>
          <h1 className="text-5xl text-indigo-600 font-bold mb-7">
            Login
          </h1>
            <form action='post' onSubmit={loginHandler} className='flex flex-col items-start w-screen max-w-lg'>
               
              <label className='text-xl font-bold mb-1' for="email">Email</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='email' name='email' id='email' onChange={(event) => setEmail(event.target.value)} value={email} required></input>
              
              <label className='text-xl font-bold mb-1' for="password">Password</label>
              <input className='indent-3 border-1 mb-5 w-full outline outline-1 rounded-lg leading-loose' type='password' name='password' id='password' onChange={(event) => setPassword(event.target.value)} value={password} required></input>
             
              <button type='submit' className='my-5 w-full bg-indigo-600 py-3 px-4 text-white rounded-lg'>Login</button>
            </form>
          </div>
      </div>

    </>
  )
}

export default login