import React from "react";
import Image from "next/image";
import Img from "../public/oil.jpg";
import { Icon } from "@iconify/react";

const contact = () => {
  const submitHandler = (event) => {
    event.preventDefault;
  };

  return (
    <div className="flex flex-col items-start justify-center pt-10 lg:flex-row">
      <div className="px-20 lg:w-2/4">
        <h2 className="font-bold mb-4 text-5xl text-indigo-600">
          Contact Us
        </h2>
        <p className="py-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quis
          repellendus? Possimus, hic qui? Ipsam illo incidunt dolorum corrupti
          ab officiis culpa eveniet eligendi dicta nostrum nihil.
        </p>

        <div>
          <form className="flex flex-col gap-2">
            <label for="name">Name</label>
            <input
              className="border-solid border-2 rounded-lg indent-1"
              type="text"
              id="name"
              name="name"
              required
            />

            <label for="email">Email</label>
            <input
              className="border-solid border-2 rounded-lg indent-1"
              type="email"
              id="email"
              name="email"
              required
            />

            <label for="company">Company</label>
            <input
              className="border-solid border-2 rounded-lg indent-1"
              type="text"
              id="company"
              name="company"
            />

            <label for="phone">Phone Number</label>
            <input
              className="border-solid border-2 rounded-lg indent-1"
              type="tel"
              id="phone"
              name="phone"
              required
            />

            <label for="message">Message</label>
            <textarea
              className="border-solid border-2 rounded-lg indent-1"
              rows="5"
              cols="33"
              id="message"
              name="message"
            ></textarea>

            <button
              type="submit"
              onClick={submitHandler}
              className="bg-indigo-600 my-5 w-fit rounded-lg m-auto p-6 text-white font-bold uppercase hover:bg-indigo-900"
            >
              Submit
            </button>
          </form>
        </div>

        <div
          before="— "
          after=" —"
          className="w-auto text-center py-10 text-4xl font-bold before:content-[attr(before)] after:content-[attr(after)]"
        >
          OR
        </div>

        <div className="flex flex-col items-center ">
          <ul>
            <li className="flex justify-start items-center gap-5 py-4 text-2xl">
              <Icon icon="carbon:phone" />
              (000) 000 - 0000
            </li>
            <li className="flex justify-start items-center gap-5 py-4 text-2xl">
              <Icon icon="carbon:email" />
              <a href=''>email@email.com</a>
            </li>
            <li className="flex justify-start items-center gap-5 py-4 text-2xl">
              <Icon icon="carbon:location" />
              <div>
                <p>12345 Address</p>
                <p>City, State 00000</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-2/4 h-auto">
        <Image src={Img} alt="Img" />
      </div>
    </div>
  );
};

export default contact;
