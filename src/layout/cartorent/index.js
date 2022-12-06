import React from "react";
import { Card } from "../../components";

export default function Index(props) {
  const { vehicles } = props;
  return (
    <div className={`max-w-5xl mx-auto px-4 mt-10`}>
      <div
        className={`grid grid-cols-4 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4`}>
        {vehicles?.data.map((vehicle, index) => (
          <Card
            key={`vehicle-${index}`}
            name={vehicle?.name}
            brand={vehicle?.brand}
            availability={vehicle?.availability}
          />
        ))}
      </div>
    </div>
  );
}
