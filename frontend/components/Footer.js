import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-gray-800 min-h-half text-white flex flex-col md:flex-row md:justify-evenly md:items-center">

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
  )
}

export default Footer
