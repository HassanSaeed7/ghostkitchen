import React, { useState } from 'react'
import Image from 'next/image'
import Facebook from '../public/facebook.svg'
import Instagram from "../public/instagram.svg"
import Pinterest from "../public/pinterest.svg"
import Wordpress from "../public/wordpress.svg"
import Logo from "../public/logo0.png"

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
        <div className=" m-auto divide-y divide-stone-600 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">



 <div className="min-h-third grid grid-cols-2 justify-center items-center pb-10 lg:pb-0 lg:grid-cols-5 md:justify-evenly">
    <div className="col-span-2 lg:col-span-1 text-center pt-10 lg:pt-0 lg:text-left">
        <Image src={Logo} alt='Logo' width={150} height={100} />
    </div>

    <div className="flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
        <h4 className="font-bold text-xl my-5 lg:my-0">Shop</h4>
        <ul className="grid gap-2 lg:gap-0">
            <li>
                <a href="/">Tincture</a>
            </li>
            <li>
                <a href="/">Gummies</a>
            </li>
            <li>
                <a href="/">Capsules</a>
            </li>
            <li>
                <a href="/">Ointments</a>
            </li>
        </ul>
    </div>


    <div className="flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
        <h4 className="font-bold text-xl my-5 lg:my-0">Support</h4>
        <ul className="grid gap-2 lg:gap-0">
            <li>
                <a href="/">Returns</a>
            </li>
            <li>
                <a href="/">Payments</a>
            </li>
            <li>
                <a href="/">Orders</a>
            </li>
            <li>
                <a href="/">Get Help</a>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
        <h4 className="font-bold text-xl my-5 lg:my-0">Account</h4>
        <ul className="grid gap-2 lg:gap-0">
            <li>
                <a href="/">Cart</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
            <li>
                <a href="/">Register</a>
            </li>
        </ul>
    </div>

    <div className="flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
        <h4 className="font-bold text-xl my-5 lg:my-0">Legal</h4>
        <ul className="grid gap-2 lg:gap-0">
            <li>
                <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
                <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
                <a href="/">Lab Reports</a>
            </li>

        </ul>
    </div>


    </div>


    <section className='flex flex-col justify-between items-center min-h-ten p-9 lg:p-0 md:flex-row '>
        <div className='mb-5 md:mb-0'>
            <p className='font-bold text-xl text-center md:text-left'>Subscribe to our newsletter</p>
            <p>The latest products, offers, and deals straight to your mailbox.</p>
        </div>
        <form onSubmit={submitHandler} className='flex items-baseline gap-5'>
            <label for="email">Email</label>
            <input onChange={emailSubscribeHandler} value={email} type="email" className='rounded-lg leading-loose p-3 text-black'></input>
            <button type="submit" className='bg-indigo-500 p-3 rounded-lg'>Subscribe</button>
        </form>
    </section>

    <section className='flex flex-col-reverse justify-between items-center min-h-ten p-9 lg:p-0 md:flex-row'>
        <p>&copy; 2022 | Wholesale Inc, All Rights Reserved.</p>
        <ul className='w-1/8 flex gap-3'>
            <li>
                <a href="/">
                    <Image
                    src={Facebook}
                    alt='Facebook'
                    />
                </a>
            </li>
            <li>
                <a href="/">
                    <Image
                    src={Instagram}
                    alt='Instagram'
                    />
                </a>
            </li>
            <li>
                <a href="/">
                <Image
                    src={Pinterest}
                    alt='Pinterest'
                />
                </a>
            </li>
            <li>
                <a href="/">
                <Image
                    src={Wordpress}
                    alt='Wordpress'
                />
                </a>
            </li>
        </ul>
    </section>

    <section className='flex justify-between items-center min-h-[20vh] p-9 lg:p-0'>
    These products are not for use by or sale to persons under the age of 18. These products should be used only as directed on the label. They should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. A Doctor's advice should be sought before using these and any other supplemental dietary products. All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse these products. These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure nor prevent any disease. By using this site, you agree to follow the site's Privacy Policy and all Terms & Conditions. Void Where Prohibited by Law. All sales limited to legal-aged residents of the United States of America only.
    </section>
    </div>
    </div>
  )
}

export default Footer
