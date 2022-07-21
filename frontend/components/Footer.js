import React from "react";
import Image from "next/image";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Email from "../public/email.svg";
import Phone from "../public/phone.svg";
import Logo from "../public/Samosa.png";

const Footer = () => {
  return (
    <div className="min-h-third bg-gray-800 text-white grid items-end">
      <div className="m-auto pt-20 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
        <div className="pb-10 justify-evenly items-center ">
          <div className=" lg:col-span-1 text-center pt-10 lg:pt-0 lg:text-left">
            <h6 className="text-center text-4xl font-bold mb-5">Samosa House</h6>{" "}
          </div>

          <div className="flex gap-4 justify-center items-center lg:items-start">
            <ul className="w-1/8 flex gap-3">
              <li>
                <a href="#">
                  <Image src={Facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Email} alt="Email" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Phone} alt="Phone" />
                </a>
              </li>
            </ul>
          </div>
          <p className='mt-5'>&copy; 2022 | Samosa House Inc, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
