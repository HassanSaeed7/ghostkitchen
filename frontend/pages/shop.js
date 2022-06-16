import ShopFilter from "../components/ShopFilter"

const products = [
  {
    id: 1,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    id: 2,
    name: 'CBD Gummies',
    href: '/product/2',
    price: '$35',
    imageSrc: "/featured0.jpg",
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    id: 3,
    name: 'CBD Oil Capsules',
    href: '/product/3',
    price: '$89',
    imageSrc: '/pill.jpg',
    imageAlt: 'lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    id: 4,
    name: 'CBD Balm',
    href: '/product/4',
    price: '$35',
    imageSrc: '/balm.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    id: 5,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 6,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 7,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 8,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
  {
    id: 9,
    name: 'Tincture',
    href: `/product/1`,
    price: '$48',
    imageSrc: '/oil.jpg',
    imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
  },
 
  // More products...
]

export default function Shop() {
  return (
    <div className="bg-white mt-20">
      <ShopFilter />
      
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
