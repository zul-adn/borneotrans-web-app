import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import DatePicker from "react-datepicker";

export default function Index(props) {
  const { destination } = props;

  const formatResult = (item) => {
    console.log(item);
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className="z-100 max-w-4xl mx-auto px-4 border rounded mt-10 bg-white">
      <div className="flex items-center justify-around  p-5">
        <div className={"w-full p-1"}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Berangkat dari
          </label>
          <ReactSearchAutocomplete
            items={destination?.data}
            // onSelect={handleOnSelectRoute('route_id')}
            formatResult={formatResult}
            placeholder={"Berangkat dari"}
            styling={{ zIndex: 2, borderRadius: 2 }}
          />
        </div>
        <div className={"w-full p-1"}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ke Kota
          </label>
          <ReactSearchAutocomplete
            items={destination?.data}
            // onSelect={handleOnSelectRoute('route_id')}
            // formatResult={formatResult}
            placeholder={"Ke Kota"}
            styling={{ zIndex: 2, borderRadius: 2 }}
          />
        </div>
        <div className={"w-3/4 p-1"}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal
          </label>
          <DatePicker
            className=" appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            //   selected={values.date}
            //   onChange={(date) => setValue({ ...values, date: date })}
          />
        </div>
      </div>
    </div>
  );
}
