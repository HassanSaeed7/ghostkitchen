import React from "react";
import Hours from "./Hours";
import Image from "next/image";
import Logo from "../public/samo.png";
import Link from "next/link";

const navigation = [
  { name: "Facebook", src: "/facebook.svg", href: "#" },
  { name: "Instagram", src: "/instagram.svg", href: "#" },
  { name: "Email", src: "/email.svg", href: "#" },
  { name: "Phone", src: "/phone.svg", href: "#" },
  { name: "Home", href: "/" },
  { name: "Order", href: "/order" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Legal", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Catering", href: "#" },
  { name: "Sanitation", href: "#" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-[60vh]">
      <div className="w-full min-h-half lg:flex justify-center items-center gap-20 m-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={80}
              className="m-auto fill-white"
            />
            <h6 className="text-center text-4xl font-bold mb-5">
              Samosa House
            </h6>{" "}
          </div>

          <Hours />
        </div>

        <div className="flex justify-start items-center lg:items-start">
          <ul className="w-full lg:grid grid-rows-4 grid-cols-3 grid-flow-col justify-evenly gap-5">
            {navigation.map((i) => (
            <li className="h-16 w-full rounded-lg hover:bg-indigo-600 transition-colors">

              {i.src
              ? <Link href={i.href}>
                <a className="p-5 flex justify-center items-center h-full text-lg gap-3">
                <Image src={i.src} alt={i.name} width={30} height={30} />
                <p>{i.name}</p>
              </a>
              </Link>
              : <Link href={i.href}>
                <a className="p-5 flex justify-center items-center h-full text-lg ">
                  {i.name}
                </a>
                </Link>}
            </li>

            ))}
          </ul>
        </div>
      </div>

      <p className="text-center">
        &copy; 2022 | Samosa House Inc, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
