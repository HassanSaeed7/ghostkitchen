import React from 'react'

const ShopFilter = () => {

    const selectionHandler = () => {

    }

  return (
    <div className='text-center m-auto mt-5'>
        <h1 className='text-5xl font-bold text-indigo-600'>Shop</h1>
        <ul className='flex justify-center gap-20 align-center mt-10'>
            <li><button onClick={selectionHandler} >All</button></li>
            <li><button onClick={selectionHandler} >Tincture</button></li>
            <li><button onClick={selectionHandler} >Capsules</button></li>
            <li><button onClick={selectionHandler} >Vape</button></li>
        </ul>
    </div>
  )
}

export default ShopFilter
