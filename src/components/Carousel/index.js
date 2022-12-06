/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
    <div className={`w-full top-0 absolute h-3/5 bg-slate-200 -z-10`}>
      {/* <Carousel autoPlay>
        {images?.data
          .filter((image) => image.status)
          .map((img, i) => (
            <div key={i}> */}
      <Image
        // src={`${backendUrl}/${img.filename}`}
        // src={
        //   "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        // }
        // src={`${backendUrl}/banner/${images?.data[0].filename}`}
        src={
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
        }
        layout="fill"
        objectFit="cover"
        alt={images?.data[0]?.alt}
      />
      {/* </div>
          ))}
      </Carousel> */}
    </div>
  );
}
