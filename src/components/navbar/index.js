import Link from "next/link";
import React from "react";

const assets_url = process.env.BACKEND_URL;

export default function Navbar({ content }) {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg  bg-opacity-30 ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img
            src={`${assets_url}/config/${content?.configuration.data[0].logo}`}
            alt="car"
            className={"w-36 "}
            loading="lazy"
          />
          <div className="flex space-x-8 text-gray-900">
            <Link href="/">Home</Link>
            <Link href="/article">Article</Link>
            <Link href="/rentcar">Rent</Link>
            <Link href="#">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
