import React, { useEffect } from "react";
import Layout from "../Layout";
import {
  getPartner,
  getTickets,
  getTrips,
  getDestinations,
} from "../../utils/request";
import { TicketCard, SearchBox, Carousel, Modal } from "../../components";

export default function Index({ content }) {
  useEffect(() => {
    console.log(content);
    console.log("TES");
  }, []);

  const [showModal, setShowModal] = React.useState(false);

  function _ticketNotFound() {
    return (
      <div className={`w-full  flex justify-center items-center h-20 mt-10`}>
        <div>Ticket Not Found</div>
      </div>
    );
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
            />
          );
        })}
      </div>
      <Modal
        show={true}
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

    return {
      props: {
        content: {
          tickets,
          trips,
          partners,
          cities,
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
