import React from "react";
import Link from "next/link";

const breadcrumbs = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/shop" },
];

const checkout = () => {
  return (
    <>
      <div className="min-h-screen mt-20">
        <nav aria-label="Breadcrumb" className="my-10">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href}>
                    <a className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <p className="font-medium text-gray-500">Checkout</p>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col justify-center items-center gap-5 m-auto md:w-2/4">
          <h1 className="text-8xl font-bold ">
            Thank you for visiting my demo shop. &#128512;
          </h1>
          <a href="/" className="bg-indigo-800 p-5 text-white rounded-lg">
            Home
          </a>
        </div>
      </div>
    </>
  );
};

export default checkout;
