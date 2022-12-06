import React from "react";

export default function Index(props) {
  const { label, onClick } = props;

  return (
    <div
      className={`py-2 rounded px-16 bg-blue-500 -mt-5 mr-1`}
      onClick={() => onClick()}>
      <span className={`text-white`}>{label}</span>
    </div>
  );
}
