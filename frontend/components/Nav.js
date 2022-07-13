import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Logo from "../public/logo.png"
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Shop', href: '/shop', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'FAQ', href: '/faq', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const { showCart, setShowCart, totalQuantity, logOutHandler, setIsLoggedIn, isLoggedIn } = useStateContext();



  return (
    <Disclosure as="nav" className="w-full fixed top-0 z-50 bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>



              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    
                  <Link href='/'>
                    <a>
                    <Image src={Logo} alt="logo" width={55} height={35} />
                  </a>
                  </Link>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        
                      >
                        <a className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </a>
                        
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <button onClick={ () => setShowCart(!showCart) }
                  className="relative rounded-full text-gray-400 hover:text-white"
                >
                
                  <Image src='/cart.svg' alt='Shopping Cart' width={50} height={35} />
                  <span className="bg-red-800 rounded-[50%] w-3 h-3 p-3 flex items-center justify-center absolute -top-1 -left-1 text-white">{totalQuantity}</span>
                </button>

                {/* Profile dropdown */}
                {isLoggedIn ? (<Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-lg">
                      <span className="sr-only">Open user menu</span>
                      HASSAN SAEED
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                          >
                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            Your Profile
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link href="#">
                            <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                              Settings
                            </a>
                          </Link>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={()=> setIsLoggedIn(false)}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:cursor-pointer')}
                          >
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                )
                
                : 
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link href='/register'>
                    <a 
                    className='text-black h-fit px-3 py-2 rounded-md text-sm font-medium '>
                          Register
                    </a>
                  </Link>
                  <Link href='/login'>
                  <a
                  className='text-black h-fit px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'
                  >
                    Login
                    </a>
                  </Link>
                  </div>
                }

              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
