import { sanityClient } from '../../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'

// const product = {
//   name: 'CBD Vape',
//   price: '$92',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Home', href: '/' },
//     { id: 2, name: 'Shop', href: '/shop' },
//   ],
//   images: [
//     {
//       src: '/cbd.jpg',
//       alt: 'Tincture.',
//     },
//     {
//       src: '/cbd0.jpg',
//       alt: 'Tincture.',
//     },
//     {
//       src: '/cbd1.jpg',
//       alt: 'Tincture.',
//     },
//     {
//       src: '/oil.jpg',
//       alt: 'Tincture.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: '50mg', inStock: true },
//     { name: '100mg', inStock: true },
//     { name: '200mg', inStock: true },
//     { name: '300mg', inStock: true },
//   ],
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   highlights: [
//     'Lab Tested',
//     'Quality Assured',
//     '100% Natural Ingredients',
//     'Processed in Southern California',
//   ],
//   details:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// }

// const reviews = { href: '#', average: 4, totalCount: 117 }



const Product = ({products, product}) => {
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <>
    
      <div className="min-h-screen flex flex-col justify-center items-center">
        
        
       {product.image.map(image => (<img src={urlFor(image.asset._ref)} className='w-20 h-20' alt='product image'/>))} 
        <p>{product.name}</p>
        <p>${product.price}</p>

      </div>
    </>
  )
}








export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await sanityClient.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current,
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await sanityClient.fetch(query);
  const products = await sanityClient.fetch(productsQuery);


  return {
    props: { products, product }
  }
}


export default Product