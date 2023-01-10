import React, { useEffect } from "react";
import Layout from "../Layout";
import {
  getPartner,
  getTickets,
  getTrips,
  getDestinations,
} from "../../utils/request";
import { TicketCard, SearchBox, Carousel } from "../../components";

export default function Index({ content }) {
  useEffect(() => {
    console.log(content);
  }, []);

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
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  `}>
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
              from={ticket.from}
              to={ticket.to}
              trip={trip}
              date={ticket.date}
              time={ticket.time}
              partner={partner}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log(context);
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
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
}
