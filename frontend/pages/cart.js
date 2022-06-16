import React from 'react'

const cartItems = [
  {"id": "1", "name": "CBD Gummies", "price": "30", },
  {"id": "2", "name": "CBD Tincture", "price": "40", }
]

const Cart = () => {
  return (
    <div className='min-h-screen m-auto divide-y divide-stone-600 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
        <h1 className='text-center text-5xl'>Cart</h1>

        <div>
          
          <ul className='flex flex-col justify-center align-center'>
            {cartItems.map(({ id, name, price }) => ( <li key={id}>{name} {price}</li>) )}  
          </ul>
        </div>

        <button>
          Checkout
        </button>
    </div>
  )
}

export default Cart
