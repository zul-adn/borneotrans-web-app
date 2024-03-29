/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import { filterArr } from "../../helper/utils";
import { Button } from "..";
import { isMobile } from "react-device-detect";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const {
    from,
    to,
    price,
    date,
    time,
    partner,
    trip,
    ticket_partner,
    onClick,
  } = props;

  const d = new Date(date);

  return (
    <>
      {isMobile ? (
        <div
          className={`flex flex-col justify-between drop-shadow-md hover:drop-shadow-xl rounded-sm bg-white cursor-pointer p-4 mt-2`}
          onClick={() => onClick(props)}
        >
          <div className={"flex flex-col items-center text-lg"}>
            <div
              className={`w-28 flex justify-center items-center flex-col py-4`}
            >
              <img
                src={`${assets_url}/partners/${partner[0]?.img}`}
                style={{ width: "50%", height: "auto" }}
              />
              {/* <div className="mt-2">{partner[0]?.name}</div> */}
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col items-center">
                <span className={`text-xs`}> </span>
                <div className={"w-1 h-full  mx-5 bg-black my-1"}></div>
              </div>
              <div className="flex justify-center items-center flex-col px-1 ">
                <div className="flex flex-col">
                  <span className="font-semibold">{from}</span>
                  <span className="text-sm ">{trip[0].from}</span>
                </div>

                <div className="flex flex-col mt-4">
                  <span className="font-semibold">{to}</span>
                  <span className="text-sm ">{trip[0].to}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row justify-between items-center mt-5 px-5 pt-2"
            style={{ borderTop: "1px solid #bdc3c7" }}
          >
            <div className={`flex flex-col `}>
              {date}
              <span className={`text-xl`}>{time}</span>
            </div>
            <div className={`flex flex-col items-center justify-center`}>
              <div
                className={
                  "text-right text-orange-600 font-semibold mr-2 text-xl "
                }
              >
                Rp{" "}
                {trip[0].price
                  ?.toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}{" "}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button label={"Pesan"} onClick={() => onClick(props)} />
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-row justify-between drop-shadow-md hover:drop-shadow-xl rounded-sm p-2 bg-white cursor-pointer p-4 mt-2`}
          onClick={() => onClick(props)}
        >
          <div className={"flex flex-row items-center text-lg"}>
            <div className={`w-28 flex justify-center items-center flex-col`}>
              <img
                src={`${assets_url}/partners/${partner[0]?.img}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            {/* <div className="w-full flex justify-center items-center flex-row px-10 ">
              <div className="flex flex-col">
                <span>{from}</span>
                <span className="text-sm ">{trip[0].from}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-xs`}> </span>
                <div className={"w-24 h-1 border mx-5 bg-black my-1"}></div>
              </div>
              <div className="flex flex-col">
                <span>{to}</span>
                <span className="text-sm ">{trip[0].to}</span>
              </div>
              
            </div> */}
            <div className="flex mt-4 w-96">
              <div className="flex flex-col items-center">
                <span className={`text-xs`}> </span>
                <div className={"w-0.5 h-full mx-5 bg-black my-1"}></div>
              </div>
              <div className="flex justify-center items-center flex-col px-1 ">
                <div className="flex flex-col">
                  <span className="font-semibold">{from}</span>
                  <span className="text-sm ">{trip[0].from}</span>
                </div>

                <div className="flex flex-col mt-4">
                  <span className="font-semibold">{to}</span>
                  <span className="text-sm ">{trip[0].to}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-col  justify-center items-center`}>
            {date}
            <span className={`text-xl font-bold`}>{time}</span>
          </div>

          <div className={`flex flex-col items-center justify-center `}>
            <div
              className={
                "text-right  text-orange-600 font-semibold mr-2 text-2xl"
              }
            >
              Rp{" "}
              {trip[0].price
                ?.toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
            </div>
          </div>

          <div className="flex justify-center items-center  w-40 mt-5">
            <Button label={"Pesan"} onClick={() => onClick(props)} />
          </div>
        </div>
      )}
    </>
  );
}
