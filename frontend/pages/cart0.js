import Image from 'next/image'
import React from 'react'

const cartItems = [
  {"id": "1", "name": "CBD Gummies", "price": 30, "qty": 1, "image": "/featured0.jpg"},
  {"id": "2", "name": "CBD Tincture", "price": 40, "qty": 1, "image": "/oil.jpg"},
]

const Cart = () => {


  const getSum = (total, num) => { cbd

    return total + num 
  }

  return (
    <div className='min-h-screen pt-10 m-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
        <h1 className='text-center text-5xl text-indigo-600'>Cart</h1>

        <div>
          
          <ul className='m-auto max-w-xs divide-y divide-stone-300 xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm'>
            {cartItems.map(({ id, name, price, image }) => ( 
            <li key={id} className='py-10 flex justify-between items-center'> 
              <div className='flex items-center gap-2'> 
              <Image src={image} alt={name} width={100} height={125}/> 
              <p>{name}</p> 
              </div>
              
              <p>${price}</p>
            </li>) )}  
          </ul>
        </div>

        <div className='flex flex-col items-center gap-5 lg:items-end xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm'>
          <p className='subtotal'>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</p>
          <p className='w-18'>Subtotal: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
          <button className="w-18 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Checkout
        </button>
        </div>

        
    </div>
  )
}

export default Cart
