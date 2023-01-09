/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import { Button } from "..";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { from, to, price, date, time, partner, trip } = props;

  const d = new Date(date);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div
      className={`flex flex-row justify-between drop-shadow-md hover:drop-shadow-xl rounded-sm p-2 bg-white cursor-pointer p-4 mt-2`}>
      <div className={"flex flex-row items-center text-lg"}>
        <div className={`w-16 mr-5 `}>
          <img
            src={
              "http://unmabanten.ac.id/wp-content/uploads/2017/11/airasia.png"
            }
          />
        </div>
        {from}
        <div className="flex flex-col items-center">
          <span className={`text-xs`}>1jam 24m</span>
          <div className={"w-24 h-1 border mx-5 bg-black my-1"}></div>
          <span className={`text-xs`}>Langsung</span>
        </div>
        {to}
      </div>
      <div className={`flex flex-col`}>
        {d.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        <span className={`text-xl`}>{time}</span>
      </div>
      <div className={`flex flex-col items-center justify-center`}>
        <div
          className={
            "text-right mb-7 text-orange-600 font-semibold mr-2 text-2xl"
          }>
          Rp{" "}
          {trip[0].price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
        </div>
      </div>
    </div>
  );
}
