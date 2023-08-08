import React from "react";
import { Card, Modal } from "../../components";
import { carToRent } from "../../mockup/datas";

export default function Index(props) {
  const { vehicles, itemToShow, filterBy } = props;

  const [showModal, setShowModal] = React.useState(false);
  const [tickectProps, setTicketProps] = React.useState(null);
  const [values, setValue] = React.useState({
    name: "",
    phoneNumber: "",
    rentStartDate: "",
    totalDays: "",
  });

  const handleChange = (prop) => (event) => {
    setValue({ ...values, [prop]: event.target.value });
  };

  function booking(props) {
    setShowModal(!showModal);
    console.log(props);
    setTicketProps(props);
  }

  function sendWA() {
    const phoneNumber =
      props.content.admin.data[
        Math.floor(Math.random() * content.admin.data.length)
      ];

    window.open(
      `https://wa.me/${phoneNumber.wa_number}?text=Hi%20${phoneNumber.username}%2C%0ASaya%20${values.name}%20akan%20memesan%20tiket%20dengan%20tujuan%20${tickectProps.from}(${tickectProps?.trip[0].from})%20ke%20${tickectProps.to}(${tickectProps?.trip[0].to})%20pada%20tanggal%20${tickectProps.date}%20jam%20${tickectProps.time}.%20dengan%20jumlah%20tiket%20${values.totalTicket}%20pcs.%0AHubungi%20saya%20di%20${values.phoneNumber}%20untuk%20informasi%20tiket%20yang%20tersedia.%0ATerima%20Kasih.%0A`,
      "_blank"
    );
  }
  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("DD/MM/YYYY");
    setValue({ ...values, rentStartDate: newDate });
  };

  return (
    <div className={`max-w-5xl mx-auto mt-10`}>
      <div
        className={`grid m-auto grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2`}
      >
        {vehicles?.data
          .filter((car) =>
            filterBy === "Bus"
              ? car.maintype === ""
              : car.maintype === "Mini Bus"
          )
          ?.slice(0, itemToShow ?? vehicles.length)
          .sort((a, b) => (a.availability && b.availability ? null : -1))
          .map((vehicle, index) => {
            let images = JSON.parse(vehicle?.thumbnail);

            return (
              <>
                {/* {images} */}
                <Card
                  key={`vehicle-${index}`}
                  name={vehicle?.name}
                  brand={vehicle?.brand}
                  availability={vehicle?.available}
                  price={vehicle?.price_per_day}
                  owndriven={vehicle?.own_driving}
                  maintype={vehicle?.maintype}
                  image={images[Math.floor(Math.random() * images.length)]}
                  onClick={() => booking(vehicle)}
                />
              </>
            );
          })}
      </div>
      <Modal
        show={showModal}
        setModalClose={() => {
          setShowModal(!showModal);
        }}
        title={`Pesan Tiket`}
        width={"3/4"}
        onSubmit={() => sendWA()}
        cb={() => sendWA()}
      >
        <form>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Nama Pemesan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nama Pemesan"
            value={values.name}
            onChange={handleChange("name")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Nomor Handphone
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nomor Handphone"
            value={values.phoneNumber}
            onChange={handleChange("phoneNumber")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Jumlah hari pemakaian
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Jumlah Hari Pemakaian"
            value={values.totalTicket}
            onChange={handleChange("totalDays")}
            required
          />
          <label
            class="block text-gray-700 text-sm font-bold my-2"
            for="username"
          >
            Tanggal Pengambilan
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Jumlah Ticket"
            value={values.totalTicket}
            onChange={onChangeDate}
            required
          />
        </form>
        <div className="flex flex-col mt-4">
          <span className="font-bold">Detail Rental dan Kendaraan</span>
          <span className="text-sm mt-2">Detail Kendaraan</span>
          <span className="font-semibold">
            {tickectProps?.brand} ( {tickectProps?.name} )
          </span>
        </div>
      </Modal>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const tickets = await getTickets(context.query);
    const trips = await getTrips();
    const partners = await getPartner();
    const cities = await getDestinations();
    const admin = await getAdmin();

    // console.log(admin);

    return {
      props: {
        content: {
          tickets,
          trips,
          partners,
          cities,
          admin,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return error;
    // return {
    //   redirect: {
    //     permanent: false,
    //     destination: `/login`,
    //   },
    // };
  }
}
