import React from "react";
import Map from "../components/Map"
import { Icon } from "@iconify/react";

const contact = () => {
  const submitHandler = (event) => {
    event.preventDefault;
  };

  return (
    <div className="flex flex-col items-start justify-center mt-10 py-10 lg:flex-row">
      <div className="px-20 lg:w-2/4">
        <h2 className="font-bold mb-4 text-5xl text-indigo-600">
          Contact Us
        </h2>
        <p className="py-3">
          Have any questions or comments? Please reach out to us! We will get back to you at our earliest convenience.
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

            <label for="phone">Phone</label>
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


        
      </div>

      <div className="w-full h-[50vh] lg:w-2/4 lg:h-[80vh] p-5">
        <Map /> 
      </div>

    </div>
  );
};

export default contact;
