/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import "moment/locale/id";
moment().locale("id");

const assets_url = process.env.BACKEND_URL;

export default function Index(props) {
  const { id, title, article, image, createAt } = props;
  return (
    <Link
      href={`/detailarticle?id=${id}`}
      className={`flex flex-col  shadow-md hover:drop-shadow-md rounded-md bg-white cursor-pointer`}
    >
      <div>
        <div className={`w-full aspect-square`}>
          <img
            // src={`${assets_url}/article/${JSON.parse(image)[0]}`}
            src={`${assets_url}/article/${JSON.parse(image)[0]}`}
            alt="article"
            className={"w-full h-full  rounded-t-md  object-cover"}
            loading="lazy"
          />
        </div>
        <div className={`flex flex-col mt-3 p-5`}>
          <div className={`text-xs font-semibold text-black`}>
            {moment(createAt).format("LLL")}
          </div>
          <div className={`font-bold text-xl mb-2 line-clamp-2 text-black`}>
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
