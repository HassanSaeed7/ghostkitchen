import Link from "next/link"

const features = [
    { name: 'CBD Oil Tincture (250mg)', description: 'Designed by Good Goods, Inc.' },
    { name: 'CBD Gummie Pack (4 ounce)', description: 'A great snack before a night of relaxation.' },
    { name: 'CBD Oil Capsules (5 Count)', description: 'Perfect for a stressful day.' },
    { name: 'CBD Balm (4 ounce)', description: 'Soothe your aching muscles, the natural way.' },
    ]



  export default function BundleOffer() {
    return (
      <div className="bg-white py-24">
        <div className="max-w-2xl mx-auto py-5 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold text-indigo-600 tracking-tight text-gray-900 md:text-6xl">First Time?</h2>
            <p className="mt-4 text-gray-500">
            Try Our Newcomer CBD Bundles Today. An assortment of Premium CBD Products Delivered to Your Door.
            </p>
            <p className='mt-4 text-xl font-bold'>$85</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="/oil.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="/featured0.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="/pill.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="/balm.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
        <div className='pt-5 text-right m-auto max-w-md md:max-w-lg lg:max-w-5xl '>
            <Link href='/shop'><a className='font-bold underline text-white px-5 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500'>Add To Cart</a></Link>
        </div>
      </div>
    )
  }
