import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "..";
import Link from "next/link";
import moment from "moment";
import { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";

registerLocale("id", id);

export default function Index(props) {
  const { destination } = props;
  const [values, setValue] = React.useState({
    from: "",
    to: "",
    date: new Date(),
  });

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const handleOnSelectRoute = (prop) => (item) => {
    console.log(item.name);
    // const datas = states.routeDatas.filter((v) => v.id === item.id);
    // console.log(datas.name);
    setValue({ ...values, [prop]: item.name });
  };

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("DD/MM/YYYY");
    setValue({ ...values, date: newDate });
  };

  return (
    <div
      className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  border rounded mt-80 bg-white z-50 shadow-lg `}
    >
      <div className="flex items-center justify-start border-b px-5 py-3">
        <span className={`text-lg`}>Hai kamu, mau ke mana?</span>
      </div>
      <div className="lg:flex md:flex items-center justify-around p-5  ">
        <div className={"w-full p-1"}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Berangkat dari
          </label>
          <ReactSearchAutocomplete
            items={destination?.data}
            onSelect={handleOnSelectRoute("from")}
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
            onSelect={handleOnSelectRoute("to")}
            formatResult={formatResult}
            placeholder={"Ke Kota"}
            styling={{ zIndex: 2, borderRadius: 2 }}
          />
        </div>
        <div className={"lg:w-3/4 sm:w-full p-1"}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal
          </label>
          <input
            className=" appearance-none border w-full py-3 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            onChange={onChangeDate}
          />
        </div>
      </div>
      <div className="flex items-center justify-end p-5 ">
        {/* <Button label={"Cari"} onClick={() => {}} /> */}
        <Link
          className={`w-full py-2 rounded px-5 bg-blue-500 -mt-5 mr-1 text-center text-sm xl:text-md lg:text-md text-white`}
          href={`tickets?main_from=${values.from}&main_to=${values.to}&date=${values.date}`}
        >
          Cari Ticket
        </Link>
      </div>
    </div>
  );
}
