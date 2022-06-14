import React from "react";
import Image from "next/image";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    name: "CBD Tinctures",
    href: `/shop`,
    price: "$48",
    imageSrc: "/featured.jpg",
    imageAlt: "CBD Oil.",
  },
  {
    id: 2,
    name: "CBD Gummies",
    href: `/shop`,
    price: "$28",
    imageSrc: "/featured0.jpg",
    imageAlt: "CBD Gummies candy.",
  },
  {
    id: 3,
    name: "CBD Health",
    href: `/shop`,
    price: "$8",
    imageSrc: "/featured1.jpg",
    imageAlt: "CBD ointments and balms.",
  },
];

const Featured = () => {
  return (
    <>
      <div className="flex flex-col gap-10 m-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-xs">
        <h2 className="text-5xl font-extrabold text-center my-10">Find Relief Today.</h2>
        <p className="text-center">Discover our best sellers today. </p>
        <div>
          <ul className="flex flex-col justify-center items-center gap-6 lg:flex-row">
            {featuredItems.map((i) => (
              <li>
                <a href={i.href}>
                  <Image
                    src={i.imageSrc}
                    alt={i.imageAlt}
                    className="w-auto object-center object-cover"
                    width={450}
                    height={700}
                  />
                  <p className='text-xl font-semibold'>{i.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Featured;
