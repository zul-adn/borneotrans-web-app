import React from "react";

export default function Index(props) {
  const { label, onClick } = props;

  return (
    <div
      className={`w-full py-2 rounded px-5 bg-blue-500 -mt-5 mr-1 text-center text-sm xl:text-md lg:text-md`}
      onClick={() => onClick()}>
      <span className={`text-white`}>{label}</span>
    </div>
  );
}
