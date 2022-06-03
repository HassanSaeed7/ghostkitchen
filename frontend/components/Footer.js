import React, { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')

    const emailSubscribeHandler = (event) => {
        setEmail(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault
    }

  return (
    <div className="bg-gray-800 min-h-half text-white">
        <div className="max-w-screen-2xl m-auto  divide-y divide-stone-600">
    <div className="min-h-third flex flex-col md:flex-row md:justify-between md:items-center">

        <div>
        <h4 className="font-bold text-3xl py-1">WHOLESALE</h4>
            <p>Premium products at affordable rates.</p>
        </div>

    <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Shop</h4>
        <ul>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
        </ul>
    </div>


    <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Support</h4>
        <ul>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Account</h4>
        <ul>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Legal</h4>
        <ul>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
            <li>
                <a href="/">Item</a>
            </li>
        </ul>
    </div>


    </div>


    <section className='flex justify-between items-center min-h-ten'>
        <div>
            <p>Subscribe to our newsletter</p>
            <p>The latest products, offers, and deals straight to your mailbox.</p>
        </div>
        <form onSubmit={submitHandler} className='flex items-baseline gap-5'>
            <label for="email">Email</label>
            <input onChange={emailSubscribeHandler} value={email} type="email" className='rounded-lg leading-loose p-3 text-black'></input>
            <button type="submit" className='bg-indigo-500 p-3 rounded-lg'>Subscribe</button>
        </form>
    </section>

    <section className='flex justify-between items-center min-h-ten'>
        <p>&copy; 2022 | Wholesale Inc, All Rights Reserved.</p>
        <ul className='w-1/8 flex gap-3'>
            <li>
                <a href="/">FB</a>
            </li>
            <li>
                <a href="/">Instagram</a>
            </li>
            <li>
                <a href="/">Pinterest</a>
            </li>

        </ul>
    </section>
    </div>
    </div>
  )
}

export default Footer
