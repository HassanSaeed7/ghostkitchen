import React from 'react'
import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'

const Menu = ({products}) => {
    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
      return builder.image(source)
    }

    console.log(products)
  return (
    <div>
        <h2 className="text-4xl font-bold text-center mt-20 mb-5 text-indigo-600">House Specials</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map(product => (
                
              <div className="w-full h-[400px] overflow-hidden">
                <img
                  src={urlFor(product.image[0].asset._ref)}
                  alt="product image"
                  className="w-full h-full object-center object-cover hover:scale-105 transition-scale ease-in-out duration-500"
                />
              </div>
                  
            ))}   
            
        </div>


    </div>
  )
}



export default Menu