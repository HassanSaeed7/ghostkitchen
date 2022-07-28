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
        <h2 className="text-4xl font-bold text-center">Menu</h2>

        <div className='grid grid-cols-2'>
            {/* {products.map(product => (
                <div>
                    {product.name}
                </div>    
            ))}    */}
            
        </div>


    </div>
  )
}


//sanity
// export const getServerSideProps = async () => { 
//     const query = '*[_type == "product"]'
//     const products = await sanityClient.fetch(query)
  
//     return {
//       props: {products}
//     }
// }

export default Menu