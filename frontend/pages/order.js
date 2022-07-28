import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'
import { useStateContext } from '../context/StateContext';


const Shop = ({products}) => {
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  const { quantity, incrementQuantity, decrementQuantity, addToCartHandler } = useStateContext();


  return (
    <div className="bg-white mt-20">
      
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl mb-10 text-center">Order Now</h2>

        <div className="divide-y-4">
          {products.map((product) => (
            <div className="flex flex-col justify-center items-center gap-12 py-16 md:flex-row">
            
            <div className="w-3/4 h-[500px] ">
                <img
                  src={urlFor(product.image[0].asset._ref)}
                  alt="product image"
                  className="rounded-lg w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>


            <div className="flex flex-col w-[50%]">
              <h3 className="mb-4 text-3xl font-bold text-gray-700">{product.name}</h3>
              <p className="mb-2 text-lg font-italic text-gray-900">${product.price}</p>
              <p className="">{product.description}</p>

              <form className='flex flex-col gap-10 mt-10 w-fit'>                   

              <div class='grid grid-cols-3'>
              <button className='mr-1 px-5 border-2' onClick={decrementQuantity}>-</button>
              <span className='leading-loose text-center border-2 border-gray-200' id='quantity' name='quantity'>{quantity}</span>
              <button className='ml-1 px-5  border-2' onClick={incrementQuantity}>+</button>
              </div>
            
              
              <button onClick={() => addToCartHandler(product, quantity) } type='button' className="w-fit m-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Add to Cart ({'$' + quantity * product.price})
              </button>
            </form>
            </div>
            </div>

              







          ))}
        </div>
      </div>
    </div>
  )
}

//sanity
export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]'
  const products = await sanityClient.fetch(query)

  return {
    props: {products}
  }
}


export default Shop;