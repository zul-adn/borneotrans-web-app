import React, { useEffect } from "react";
import Layout from "../Layout";
import { getPartner, getTickets, getTrips } from "../../utils/request";
import { TicketCard } from "../../components";

export default function Index({ content }) {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <Layout title={"Cari Tiket"}>
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  `}>
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

export async function getServerSideProps() {
  try {
    const tickets = await getTickets();
    const trips = await getTrips();
    const partners = await getPartner();

    return {
      props: {
        content: {
          tickets,
          trips,
          partners,
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
