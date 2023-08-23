import React, { useEffect } from "react";
import Layout from "../Layout";
import {
  getPartner,
  getTickets,
  getTrips,
  getDestinations,
  getAdmin,
  getConfiguration,
} from "../../utils/request";
import { TicketCard, SearchBox, Carousel, Modal } from "../../components";

export default function Index({ content }) {
  const [showModal, setShowModal] = React.useState(false);
  const [tickectProps, setTicketProps] = React.useState(null);
  const [values, setValue] = React.useState({
    name: "",
    phoneNumber: "",
    totalTicket: "",
  });

  const handleChange = (prop) => (event) => {
    setValue({ ...values, [prop]: event.target.value });
  };

  function _ticketNotFound() {
    return (
      <div className={`w-full  flex justify-center items-center h-20 mt-10`}>
        <div>Ticket Not Found</div>
      </div>
    );
  }

  function booking(props) {
    setShowModal(!showModal);
    setTicketProps(props);
  }

  function sendWA() {
    const phoneNumber =
      content.admin.data[Math.floor(Math.random() * content.admin.data.length)];

    window.open(
      `https://wa.me/${phoneNumber.wa_number}?text=Hi%20${phoneNumber.username}%2C%0ASaya%20${values.name}%20akan%20memesan%20tiket%20dengan%20tujuan%20${tickectProps.from}(${tickectProps?.trip[0].from})%20ke%20${tickectProps.to}(${tickectProps?.trip[0].to})%20pada%20tanggal%20${tickectProps.date}%20jam%20${tickectProps.time}.%20dengan%20jumlah%20tiket%20${values.totalTicket}%20pcs.%0AHubungi%20saya%20di%20${values.phoneNumber}%20untuk%20informasi%20tiket%20yang%20tersedia.%0ATerima%20Kasih.%0A`,
      "_blank"
    );
  }

  return (
    <Layout title={"Cari Tiket"} content={content}>
      <Carousel images={content?.banners} />
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  `}
      >
        <SearchBox destination={content?.cities} />
        {!content && <div>Loading</div>}
        {content.tickets.data.length === 0 && _ticketNotFound()}
        {content.tickets.data.map((ticket, index) => {
          let partner = content.partners.data.filter(
            (v) => v.id === Number(ticket.partner_id)
          );
          let trip = content.trips.data.filter(
            (v) => v.id === Number(ticket.route_id)
          );
          return (
            <TicketCard
              key={`ticket-${index}`}
              from={ticket.main_from}
              to={ticket.main_to}
              trip={trip}
              date={ticket.date}
              time={ticket.time}
              partner={partner}
              ticket_partner={ticket.partner_id}
              onClick={(v) => booking(v)}
            />
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
            Jumlah Tiket
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Jumlah Ticket"
            value={values.totalTicket}
            onChange={handleChange("totalTicket")}
            required
          />
        </form>
        <div className="flex flex-col mt-4">
          <span className="font-bold">Detail Tiket</span>
          <span className="text-sm mt-2">Berangkat Dari</span>
          <span className="font-semibold">
            {tickectProps?.from} ( {tickectProps?.trip[0].from} )
          </span>
          <span className="text-sm mt-2">Tujuan</span>
          <span className="font-semibold">
            {tickectProps?.to} ( {tickectProps?.trip[0].to} ){" "}
          </span>
          <span className="text-sm mt-2">Tanggal / Jam</span>
          <span className="font-semibold">
            {tickectProps?.date} - {tickectProps?.time}
          </span>
        </div>
      </Modal>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const tickets = await getTickets(context.query);
    const trips = await getTrips();
    const partners = await getPartner();
    const cities = await getDestinations();
    const admin = await getAdmin();
    const configuration = await getConfiguration();

    // console.log(admin);

    return {
      props: {
        content: {
          tickets,
          trips,
          partners,
          cities,
          admin,
          configuration,
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
