/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/legacy/image";

const backendUrl = process.env.BACKEND_URL;

export default function Index(props) {
  const { images } = props;

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
  };

  return (
    <div className={`w-full top-0 absolute h-3/5 bg-white -z-10`}>
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={2000}
        interval={5000}
        dynamicHeight={200}
        showArrows={false}
        showThumbs={false}
      >
        {images.data.map((img, i) => (
          <div style={{ height: 950 }} key={i}>
            <img
              className={`w-full h-3/5 mb-10 object-cover`}
              src={`${backendUrl}/banner/${img.filename}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
