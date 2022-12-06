/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const backendUrl = process.env.BACKEND_URL;

export default function Index(props) {
  const { images } = props;
  console.log(backendUrl);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <div className={`w-full absolute top-0 h-3/5 bg-slate-400 -z-10`}>
      {/* <Slider {...settings} className={"w-full h-full relative bg-slate-400"}>
          {images?.data
            .filter((image) => image.status)
            .map((img, i) => (
              <div key={`banner-${i}`} className={"relative"}> */}
      <img
        // src={`${backendUrl}/${img.filename}`}
        src={
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        }
        alt={"alt"}
        className={`w-full h-full object-cover `}
      />

      {/* ))}
        </Slider>
      </div> */}
    </div>
  );
}
