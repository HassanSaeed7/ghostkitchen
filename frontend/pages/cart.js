import React from 'react'

const cartItems = [
  {"id": "1", "name": "CBD Gummies", "price": 30, "qty": 1},
  {"id": "2", "name": "CBD Tincture", "price": 40, "qty": 1},
]

const Cart = () => {


  const getSum = (total, num) => { 

    return total + num 
  }

  return (
    <div className='min-h-screen pt-10 m-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
        <h1 className='text-center text-5xl text-indigo-600'>Cart</h1>

        <div>
          
          <ul className='max-w-screen-lg m-auto divide-y divide-stone-300'>
            {cartItems.map(({ id, name, price }) => ( <li key={id} className='py-10 flex justify-between'> <p>{name}</p> <p>${price}</p></li>) )}  
          </ul>
        </div>

        <div className='max-w-screen-lg flex flex-col items-end gap-5'>
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
