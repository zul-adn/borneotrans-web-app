import Link from "next/link";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const assets_url = process.env.BACKEND_URL;

export default function Navbar({ content }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <>
      <nav
        id="nav"
        className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg  bg-opacity-30 "
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <img
                src={`${assets_url}/config/${content?.configuration.data[0].logo}`}
                alt="car"
                className={"w-36 "}
                loading="lazy"
              />
            </Link>
            <div className="hidden space-x-8 text-gray-900 md:flex lg:flex ">
              <Link href="/">Home</Link>
              <Link href="/article">Article</Link>
              <Link href="/rentcar">Rent</Link>
              <Link href="/aboutus">About us</Link>
            </div>
            {isMobile ? (
              <svg
                viewBox="0 0 100 80"
                width="40"
                height="25"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                <rect width="80" height="15" rx="10"></rect>
                <rect y="30" width="100" height="15" rx="10"></rect>
                <rect y="60" width="80" height="15" rx="10"></rect>
              </svg>
            ) : null}
          </div>
        </div>
      </nav>

      <div
        className={`${
          openMobileMenu ? "flex" : "hidden"
        } h-full bg-white fixed flex-col text-right z-30 w-1/2 right-0 top-0 shadow-sm`}
      >
        <div className="mb-8 pt-5 pr-5 flex justify-end items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            onClick={() => setOpenMobileMenu(false)}
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
        <Link href="/" className="text-3xl mb-2 border-b-2 p-2">
          Home
        </Link>
        <Link href="/article" className="text-3xl mb-2 border-b-2 p-2">
          Article
        </Link>
        <Link href="/rentcar" className="text-3xl mb-2 border-b-2 p-2">
          Rent
        </Link>
        <Link href="/aboutus" className="text-3xl mb-2 border-b-2 p-2">
          About us
        </Link>
      </div>
    </>
  );
}
