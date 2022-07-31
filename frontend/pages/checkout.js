import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'

const breadcrumbs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Order", href: "/order" },
];

const checkout = () => {
  const { cartItems, totalPrice, tax } = useStateContext();
  const router = useRouter();
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace("/order");
    }
  }, []);


  const total = totalPrice * (tax/100);

  const orderHandler = () => {
    if (cartItems.length === 0) {
    router.push('/confirm');
    }
  };

  return (
    <>
      <div className="min-h-screen mt-20">
        <nav aria-label="Breadcrumb" className="my-10">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href}>
                    <a className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <p className="font-medium text-gray-500">Checkout</p>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-center">Checkout</h1>
        <div className="max-w-screen-xl m-auto grid grid-cols-4 gap-5">
          <div className="border border-2 col-span-3 min-h-[50vh]">
            <div className='grid grid-cols-4 gap-5 px-10 items-center'>
              <p className='col-span-2 text-center'>Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {cartItems.length > 0 
            ? cartItems.map(i => (
              <div className="grid gap-5 grid-cols-4 items-center px-10">
                <div className="w-5/8 h-3/4 rounded-lg overflow-hidden">                
                  <img src={urlFor(i.image[0].asset._ref)} alt='Product Img' className='object-cover object-center' />
                </div>
                <p className='text-lg'>{i.name}</p>
                
                <p className="italic">{i.quantity}/ea.</p>
                
                <p className='text-xl font-bold'>${i.price}</p>
              </div>

            ))
              
            
            : (
              <p className="w-full h-full flex justify-center items-center">
                No Items in Cart. Redirecting...
              </p>
            )}


            <div className='border-t-2 p-5 text-right'>Subtotal: {totalPrice > 0 && <p className="font-bold text-xl">${totalPrice}</p>}</div>
          </div>
         
         
          <div className="border border-2 p-5">
            <div>
              <p>Subtotal: ${totalPrice}</p>
              <p>Tax: {tax}%</p>
              <p>Total: {(totalPrice + total).toFixed(2)}</p>

            </div>
            <form className="flex flex-col justify-evenly min-h-[50vh]">
              <fieldset className="">
                <legend className="mb-2 text-xl font-bold">
                  Order Options
                </legend>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="options"
                    value="pickup"
                    defaultChecked
                  />
                  <label htmlFor="pickup">Pickup</label>
                </div>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="options"
                    value="delivery"
                  />
                  <label htmlFor="delivery">Delivery</label>
                </div>
              </fieldset>

              <fieldset className="">
                <legend className="mb-2 text-xl font-bold">Pickup Time</legend>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="time"
                    value="Now"
                    defaultChecked
                  />
                  <label htmlFor="Now">Now</label>
                </div>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="time"
                    value="Later"
                  />
                  <label htmlFor="Later">Later</label>
                </div>
              </fieldset>

              <fieldset className="">
                <legend className="mb-2 text-xl font-bold">Payment</legend>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="payment"
                    value="Cash"
                    defaultChecked
                  />
                  <label htmlFor="Cash">Cash</label>
                </div>
                <div className="flex gap-2">
                  <input
                    className="w-5 h-5"
                    type="radio"
                    name="payment"
                    value="Credit"
                  />
                  <label htmlFor="Credit">Credit</label>
                </div>
              </fieldset>

              <button
                type="submit"
                className="bg-indigo-600 w-2/4 m-auto my-0 text-white rounded-lg py-2 px-4"
                onClick={orderHandler}
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default checkout;
