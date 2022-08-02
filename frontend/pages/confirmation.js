import React, { useEffect } from 'react'
import { useStateContext } from "../context/StateContext"
import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'

const confirmation = ({products}) => {
    const { cartItems, totalPrice, onConfirmation, tax, total, purchasedItems } = useStateContext();
    const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    setTimeout(() => {
      onConfirmation();
    }, 50)
  }, [])

  return (
    <div className='mt-20 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl m-auto'>
        <h1 className='text-5xl font-bold text-center'>Order Confirmation</h1>
        <div>
            {purchasedItems.map(i => (
                <div className='flex justify-between items-center p-10'>
                <div className="rounded-lg overflow-hidden">                
                  <img src={urlFor(i.image[0].asset._ref)} alt='Product Img' width={120} height={100} className='object-cover' />
                </div>
                    <p>{i.name}</p>
                    <p>{i.quantity}/ea.</p>
                    <p>${i.price}</p>
                </div>
            ))}
            <div className="text-right">
                 <h2>Subtotal: ${totalPrice}</h2>
            <p>Tax: {tax}</p>
            <p>Total: ${(totalPrice + total).toFixed(2)}</p>
            </div>
           
        </div>
    </div>
  )
}


export default confirmation