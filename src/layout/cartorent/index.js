import React from "react";
import { Card } from "../../components";
import { carToRent } from "../../mockup/datas";

export default function Index(props) {
  const { vehicles, itemToShow, filterBy } = props;

  return (
    <div className={`max-w-5xl mx-auto mt-10`}>
      <div
        className={`grid m-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2`}>
        {vehicles.data
          // .filter((car) =>
          //   filterBy === "Bus"
          //     ? car.maintype === "Bus"
          //     : car.maintype === "Mini Bus"
          // )
          ?.slice(0, itemToShow ?? vehicles.length)
          .sort((a, b) => (a.availability && b.availability ? null : -1))
          .map((vehicle, index) => {
            let images = JSON.parse(vehicle?.thumbnail);

            return (
              <Card
                key={`vehicle-${index}`}
                name={vehicle?.name}
                brand={vehicle?.brand}
                availability={vehicle?.available}
                price={vehicle?.price_per_day}
                owndriven={vehicle?.own_driving}
                maintype={vehicle?.maintype}
                image={images[Math.floor(Math.random() * images.length)]}
              />
            );
          })}
      </div>
    </div>
  );
}
