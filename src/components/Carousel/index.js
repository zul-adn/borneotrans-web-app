/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/legacy/image";

const backendUrl = process.env.BACKEND_URL;

export default function Index(props) {
  const { images } = props;
  console.log(images);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <div className={`w-full top-0 absolute h-3/5 bg-slate-200 -z-10`}>
      ?
      <img
        // src={`${backendUrl}/banner/${imag.filename}`}
        src={
          "https://images.unsplash.com/photo-1620561099217-990c648c8502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        // height={300}
        // width={300}
        className={`w-full h-full object-cover`}
        alt={"alt"}
      />
      ?
    </div>
  );
}
