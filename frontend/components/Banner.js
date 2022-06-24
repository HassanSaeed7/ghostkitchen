import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanity.server";

const Banner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  
  return (
    <div
      className="py-10 
    px-14
    bg-[#00d5bf]
    rounded-lg
    relative
    text-white
    w-full
    my-24
    max-w-screen-xl
    m-auto
    h-98" 
    >
      <div className="flex justify-around">
        <div className="left">
          <p>{discount}</p>
          <h3 className='font-bold text-5xl ml-2 md:text-8xl md:ml-5'>{largeText1}</h3>
          <h3 className='font-bold text-5xl ml-2 md:text-8xl md:ml-5'>{largeText2}</h3>
          <p className='m-3 md:m-5'>{saleTime}</p>
        </div>
        <div className="leading-snug right">
          <p className='text-lg'>{smallText}</p>
          <h3 className='font-bold text-3xl md:text-6xl'>{midText}</h3>
          <p className='text-lg'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button
            type="button"
            className="rounded-lg
                py-5 px-4
                bg-white
                text-indigo-600
                b-none
                mt-10
                text-lg
                font-medium
                cursor-pointer"
            >
              {buttonText}
            </button>
          </Link>
        </div>

        <img
          src={urlFor(image)}
          className="hidden
          lg:absolute
          lg:block
          lg:-top-[35%]
          lg:left-[35%]
          lg:w-[30%]
          md: h-auto
          md: w-full"
        />
      </div>
    </div>
  );
};

export default Banner;



// -top-[60%]
// left-[10%]