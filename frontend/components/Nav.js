import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../public/samo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Order", href: "/order" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { setShowCart, showCart, totalQuantity } = useStateContext();
  const router = useRouter();

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

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="flex items-center text-2xl font-bold">
                      Samosa
                      <div className="px-2">
                        <Image
                          src={Logo}
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </div>
                      House
                    </a>
                  </Link>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="h-full flex items-center space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            "px-3 py-2 rounded-md text-sm font-medium",
                            router.route === item.href
                              ? "bg-gray-900 text-white"
                              : "text-black hover:bg-gray-700 hover:text-white"
                          )}
                          aria-current={
                            router.route === item.href ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex gap-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {router.route === "/checkout" ? null : (
                  <button
                    onClick={() => setShowCart(showCart => !showCart)}
                    className="relative rounded-full text-gray-400 hover:text-white"
                  >
                    <Image
                      src="/cart.svg"
                      alt="Shopping Cart"
                      width={40}
                      height={40}
                    />
                    <span className="bg-red-800 rounded-[50%] w-3 h-3 p-3 flex items-center justify-center absolute -top-1 -left-1 text-white">
                      {totalQuantity}
                    </span>
                  </button>
                )}
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
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
  );
}
