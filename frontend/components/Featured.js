import React from "react";
import { urlFor } from "../lib/sanity.server";

const Featured = ({ sections }) => {
  return (
    <div className="min-h-screen m-auto overflow-hidden">
      <div className=" relative lg:flex gap-12 items-center py-5 my-5">
        <img
          src={urlFor(sections[0].image.asset._ref)}
          alt="display image"
          width={800}
          height={650}
          className="rounded-lg drop-shadow-md -translate-x-10"
        />
        <div className="lg:w-2/4 p-5">
          <h3 className="text-4xl font-bold text-indigo-600 mb-2">
            {sections[0].title}
          </h3>
          <p className="leading-relaxed text-gray-500">
            {sections[0].description}
          </p>
        </div>
      </div>

      <div className="lg:flex gap-12 items-center py-5 my-5 flex-row-reverse">
        <img
          src={urlFor(sections[1].image.asset._ref)}
          alt="display image"
          width={800}
          height={650}
          className="rounded-lg drop-shadow-md translate-x-10"
        />
        <div className="lg:w-2/4 p-5">
          <h3 className="text-4xl font-bold text-indigo-600 mb-2 text-right">
            {sections[1].title}
          </h3>
          <p className="leading-relaxed text-gray-500 text-justify">
            {sections[1].description}
          </p>
        </div>
      </div>

      <div className=" relative lg:flex gap-12 items-center py-5 my-5">
        <img
          src={urlFor(sections[2].image.asset._ref)}
          alt="display image"
          width={800}
          height={650}
          className="rounded-lg drop-shadow-md -translate-x-10"
        />
        <div className="w-2/4 p-5">
          <h3 className="text-4xl font-bold text-indigo-600 mb-2">
            {sections[2].title}
          </h3>
          <p className="leading-relaxed text-gray-500">
            {sections[2].description}
          </p>
        </div>
      </div>

      <div className="lg:flex gap-12 items-center py-5 my-5 flex-row-reverse">
        <img
          src={urlFor(sections[3].image.asset._ref)}
          alt="display image"
          width={800}
          height={650}
          className="rounded-lg drop-shadow-md translate-x-10"
        />
        <div className="lg:w-2/4 p-5">
          <h3 className="text-4xl font-bold text-indigo-600 mb-2 text-right">
            {sections[3].title}
          </h3>
          <p className="leading-relaxed text-gray-500 text-justify">
            {sections[3].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
