import Link from "next/link";
import { motion, useAnimation } from "framer-motion";


export default function Hero() {

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

    return (
      <div className="min-h-[100vh] relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Crisp and Delicious</span>{' '}
                <span className="block text-indigo-600 xl:inline">Samosas</span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              We aim to combine Indian delicacies with the western palate. Our meals are always fresh and flavorful. Our high-quality standards start from our raw ingredients and continue throughout the cooking process to ensure the most soulful meals. 
              </p>
            </div>
            <div>
              <div className="my-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="mb-5 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                            transition={{ delay: 0.25 }}
                            src="1.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="2.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="3.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="8.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="9.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="10.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <motion.img
                            initial="hidden" 
                            animate="visible"
                            variants={item}
                              transition={{ delay: 0.25 }}
                            src="11.webp"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <Link href="/order">
                <a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                  Order Now
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  