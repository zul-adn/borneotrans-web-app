import React, { useEffect } from "react";
import Layout from "../Layout";
import { SectionTitle } from "../../components";
import CarToRent from "../../layout/cartorent";
import {
  getBanners,
  getCars,
  getDestinations,
  getArticles,
  getAdmin,
  getPartner,
  getConfiguration,
} from "../../utils/request";

export default function Index({ content }) {
  useEffect(() => {
    // getVehicles()
    console.log(content);
  }, []);

  const getVehicles = async () => {
    const vehicles = await getCars();
    console.log(vehicles);
  };

  return (
    <Layout title={"Rent Car"} content={content}>
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  `}
      >
        <div className="bg-white">
          <SectionTitle
            title={"Mau sewa Mobil ?"}
            subtitle={
              "Ada berbagai pilihan Bus dengan harga spesial, lho. Jangan sampai kehabisan ya!"
            }
          />
          <CarToRent
            Rent
            vehicles={content?.vehicles}
            itemToShow={100}
            // filterBy={"Bus"}
            admin={content?.admin}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const vehicles = await getCars();
    const admin = await getAdmin();
    const partners = await getPartner();
    const configuration = await getConfiguration();

    return {
      props: {
        content: {
          vehicles,
          admin,
          partners,
          configuration,
        },
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
