import React, { useEffect } from "react";
import Layout from "../Layout";
import {
  getPartner,
  getTickets,
  getTrips,
  getDestinations,
  getAdmin,
} from "../../utils/request";
import { TicketCard, SearchBox, Carousel, Modal } from "../../components";

export default function Index({ content }) {
  useEffect(() => {
    console.log(content);
    console.log("TES");
  }, []);

  const [showModal, setShowModal] = React.useState(false);
  const [tickectProps, setTicketProps] = React.useState(null);

  function _ticketNotFound() {
    return (
      <div className={`w-full  flex justify-center items-center h-20 mt-10`}>
        <div>Ticket Not Found</div>
      </div>
    );
  }

  function booking(props) {
    setShowModal(!showModal);
    console.log(props);
    setTicketProps(props);
  }

  return (
    <Layout title={"Cari Tiket"}>
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
        onSubmit={() => {}}
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
