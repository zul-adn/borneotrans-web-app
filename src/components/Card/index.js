/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/legacy/image";
import { Button } from "..";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const {
    image,
    name,
    brand,
    price,
    availability,
    owndriven,
    maintype,
    onClick,
  } = props;
  return (
    <div
      className={`flex flex-col drop-shadow-md hover:drop-shadow-xl rounded-md p-2 bg-white cursor-pointer`}
    >
      <div>
        <div className={`w-full aspect-square`}>
          <img
            src={`${assets_url}/vehicles/${image}`}
            alt="car"
            className={"w-full h-full rounded  object-cover "}
          />
        </div>

        <div className={`flex flex-col mt-3 p-2`}>
          <div className={`text-xs font-semibold`}>{brand}</div>
          <div className={`text-lg `}>{name}</div>
          <div
            className={`${
              availability
                ? "text-green-800 text-sm font-semibold"
                : " text-gray-500 text-sm"
            }  `}
          >
            {availability ? "Tersedia" : "Tidak Tersedia"}
          </div>
        </div>
      </div>
      <div className={"justify-self-end"}>
        <div
          className={
            "text-right mb-7 text-lg text-orange-600 font-semibold mr-2"
          }
        >
          Rp {price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </div>
        <Button onClick={onClick} label={"Pesan Sekarang"} />
      </div>
      {owndriven ? (
        <div
          className={
            "absolute bg-green-500 right-0 mr-3 mt-2 px-5 rounded text-white text-sm py-1"
          }
        >
          {" "}
          Lepas Kunci
        </div>
      ) : null}
    </div>
  );
}
