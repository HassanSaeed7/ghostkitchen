import { useStateContext } from '../context/StateContext'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import {sanityClient} from '../lib/sanity.server'
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router'



export default function Cart() {
  const { showCart, setShowCart, cartItems, totalPrice, toggleCartItemsQuantity, onCartItemRemoval } = useStateContext();
  const router = useRouter()
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }


  const continueShoppingHandler = () => {
    setShowCart(false);
    router.push('/order');
  }

  return (
    <>
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=> setShowCart(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"> Cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">

                            {cartItems.length >= 1 ? cartItems.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  
                                  {product && <img
                                    src={urlFor(product.image[0].asset._ref)}
                                    alt='Product Image'
                                    className="h-full w-full object-cover object-center"
                                  />}
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                      {product.name}
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div class='flex w-full mr-2'>
                                    <button className='mr-1 flex-1 border-2' onClick={ () => toggleCartItemsQuantity(product._id, 'dec') }>-</button>
                                    <span className='leading-loose text-center flex-auto border-2 border-gray-200' id='quantity' name='quantity'>{product.quantity}</span>
                                    <button className='ml-1 flex-1 border-2' onClick={ () => toggleCartItemsQuantity(product._id, 'inc') }>+</button>
                                    </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={ () => onCartItemRemoval(product)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )) 
                            : <div className='min-h-half flex flex-col items-center justify-center gap-5 text-gray-900'>
                              <h3 >No items in cart.</h3>
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={continueShoppingHandler}
                                >
                                  Order Now<span aria-hidden="true"> &rarr;</span>
                              </button>
                              </div>
                            }

                          </ul>
                        </div>
                      </div>
                    </div>

                    {cartItems.length > 0 && <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="/checkout" //hook checkout window here
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={continueShoppingHandler}
                          >
                            Add More Items<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div> }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
