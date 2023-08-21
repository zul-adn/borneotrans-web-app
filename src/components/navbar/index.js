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
            <a href="/">Home</a>
            <a href="/article">Article</a>
            <a href="/rentcar">Rent</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
