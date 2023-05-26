import React from "react";

export default function Index(props) {
  const { title, subtitle } = props;
  return (
    <div className={`max-w-5xl mx-auto   mt-20 bg-white `}>
      <h1 className={"text-4xl font-bold text-black"}>{title}</h1>
      <p className={"mt-2 text-gray-600 text-xl"}>{subtitle}</p>
    </div>
  );
}
