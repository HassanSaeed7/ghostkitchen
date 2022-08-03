import React, { useEffect } from 'react'
import { useStateContext } from "../context/StateContext"
import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router'

const confirmation = ({products}) => {
    const { totalPrice, onConfirmation, tax, total, purchasedItems, taxTotal, purchasedPrice } = useStateContext();
    const builder = imageUrlBuilder(sanityClient);
    const router = useRouter();

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    onConfirmation();

    if (purchasedItems.length === 0) { 
      router.push('/');
    }

  }, [])

  return (
    <div className='mt-20 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl m-auto'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>Order Confirmation</h1>
        <div>
        <div className="grid grid-cols-4 gap-5 px-10 py-3 items-center border-b-2">
              <p className="col-span-2 text-center font-bold underline text-xl">
                Item(s)
              </p>
              <p className="font-bold underline text-xl">Quantity</p>
              <p className="font-bold underline text-xl">Price</p>
            </div>
            {purchasedItems.map(i => (
                <div className='grid grid-cols-4 gap-5 items-center p-10 border-b-2'>
                <div className="rounded-lg overflow-hidden">                
                  <img src={urlFor(i.image[0].asset._ref)} alt='Product Img' width={120} height={100} className='object-cover' />
                </div>
                    <p>{i.name}</p>
                    <div className='flex gap-2'>
                    
                    <p>{i.quantity}/ea.</p>
                    @
                    <p>${i.price}</p>

                    
                    </div>
                    <p>${i.quantity * i.price}</p>
                </div>
            ))}

            <div className="text-right p-5">
            <div><p className='text-lg'>Subtotal: ${purchasedPrice.toFixed(2)}</p></div>
            <div><p className='italic'>Tax ({tax}%): {taxTotal.toFixed(2)}</p></div>
            <div><p className='font-bold text-xl border-t-2 pt-2'>Total: ${(purchasedPrice + taxTotal).toFixed(2)}</p> </div>
            </div>
           
        </div>
    </div>
  )
}


export default confirmation