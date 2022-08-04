import React from "react";
import Hours from "./Hours";
import Image from "next/image";
import Logo from "../public/samo.png";

const footerNav = [
  { name: "Facebook", src: "/facebook.svg", href: "#" },
  { name: "Instagram", src: "/instagram.svg", href: "#" },
  { name: "Email", src: "/email.svg", href: "#" },
  { name: "Phone", src: "/phone.svg", href: "#" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Order", href: "/order" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-twothirds">
      <div className="min-h-twothirds grid lg:grid-cols-3 items-center gap-20 m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              className="m-auto fill-white"
            />
            <h6 className="text-center text-4xl font-bold mb-5">
              Samosa House
            </h6>{" "}
          </div>

          <Hours />
        </div>

        <div className="flex justify-center items-center lg:items-start">
          <ul className="w-full flex flex-col gap-5">
            {footerNav.map((i) => (
              <li className="h-16 rounded-lg border border-white">
                <a
                  href={i.href}
                  className="pl-[25%] flex items-center h-full text-lg gap-3"
                >
                  <Image src={i.src} alt={i.name} width={64} height={64} />
                  <p>{i.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 justify-center items-center lg:items-start">
          <ul className="w-full flex flex-col gap-2">
            {navigation.map((i) => (
              <li className="h-16 w-full border border-white rounded-lg ">
                <a
                  href={i.href}
                  className="flex justify-center items-center h-full text-lg "
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 text-center">
        &copy; 2022 | Samosa House Inc, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
