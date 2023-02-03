/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment/moment";

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { title, article, image, createAt } = props;
  return (
    <div
      className={`flex flex-col  shadow-md hover:drop-shadow-md rounded-md bg-white cursor-pointer`}>
      <div>
        <div className={`w-full aspect-square`}>
          <img
            src={`${assets_url}/article/${image}`}
            alt="car"
            className={"w-full h-full  rounded-t-md  object-cover"}
          />
        </div>
        <div className={`flex flex-col mt-3 p-5`}>
          <div className={`text-xs font-semibold`}>
            {moment(createAt).format("LLL")}
          </div>
          <div className={`font-bold text-xl mb-2 line-clamp-2 `}>{title}</div>
        </div>
      </div>
    </div>
  );
}
