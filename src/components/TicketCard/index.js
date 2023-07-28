/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import { filterArr } from "../../helper/utils";
import { Button } from "..";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { from, to, price, date, time, partner, trip, ticket_partner } = props;

  const d = new Date(date);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div
      className={`flex flex-row justify-between drop-shadow-md hover:drop-shadow-xl rounded-sm p-2 bg-white cursor-pointer p-4 mt-2`}
    >
      <div className={"flex flex-row items-center text-lg"}>
        <div className={`w-16 mr-5 flex justify-center items-center flex-col`}>
          <img src={`${assets_url}/partners/${partner[0]?.img}`} />
          <div className="mt-2">{partner[0]?.name}</div>
        </div>
        <div className="w-full flex justify-center items-center flex-row px-10 ">
          {from}
          <div className="flex flex-col items-center">
            <span className={`text-xs`}>1jam 24m</span>
            <div className={"w-24 h-1 border mx-5 bg-black my-1"}></div>
            <span className={`text-xs`}>Langsung</span>
          </div>
          {to}
        </div>
      </div>
      <div className={`flex flex-col`}>
        {/* {d.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })} */}
        {date}
        <span className={`text-xl`}>{time}</span>
      </div>
      <div className={`flex flex-col items-center justify-center`}>
        <div
          className={
            "text-right mb-7 text-orange-600 font-semibold mr-2 text-2xl"
          }
        >
          Rp{" "}
          {trip[0].price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </div>
      </div>
    </div>
  );
}
