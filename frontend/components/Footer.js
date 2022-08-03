import React from "react";
import Image from "next/image";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Email from "../public/email.svg";
import Phone from "../public/phone.svg";
import Logo from "../public/samo.png";

const Footer = () => {
  return (
    <div className="min-h-half m-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
      <div className="min-h-third border-4 p-10 md:w-full">
        <div className="justify-evenly items-center">
          <div className=" lg:col-span-1 text-center pt-10 lg:pt-0">
            <Image src={Logo} alt='logo' width={100} height={100} className="m-auto" />
            <h6 className="text-center text-4xl font-bold mb-5">Samosa House</h6>{" "}
          </div>

          <div className="flex gap-4 justify-center items-center lg:items-start">
            <ul className="w-1/8 flex gap-3">
              <li>
                <a href="#">
                  <Image src={Facebook} alt="Facebook" width={64} height={64} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Instagram} alt="Instagram" width={64} height={64} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Email} alt="Email" width={64} height={64} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Phone} alt="Phone" width={64} height={64} />
                </a>
              </li>
            </ul>
          </div>
          <p className='mt-5 text-center'>&copy; 2022 | Samosa House Inc, All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
