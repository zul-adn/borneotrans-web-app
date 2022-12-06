/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function Index(props) {
  const { image, name, brand, price, availability, owndriven } = props;
  return (
    <div
      className={`drop-shadow-md hover:drop-shadow-xl rounded-md p-2 bg-white cursor-pointer`}>
      <img
        src={
          "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        }
        alt="car"
        className={"w-full rounded aspect-square"}
      />
      <div className={`flex flex-col mt-3 p-2`}>
        <div className={`text-sm font-semibold`}>{brand}</div>
        <div className={`text-lg `}>{name}</div>
        <div>{owndriven ? "asas" : "no"}</div>
      </div>
    </div>
  );
}
