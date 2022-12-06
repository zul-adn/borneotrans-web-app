import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg  bg-opacity-30 ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          <div className="flex space-x-8 text-gray-900">
            <a href="#">Home</a>
            <a href="#">Article</a>
            <a href="#">Rent</a>
            <a href="#">Abaout</a>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
