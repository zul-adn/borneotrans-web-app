import Head from "next/head";
import Image from "next/legacy/image";
import {
  getBanners,
  getCars,
  getDestinations,
  getArticles,
  getAdmin,
  getPartner,
} from "../utils/request";
import {
  CardArticles,
  Carousel,
  SearchBox,
  SectionTitle,
  Button,
} from "../components";
import CarToRent from "../layout/cartorent";
import ArticleList from "../layout/articlelist";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { carToRent, destinations } from "../mockup/datas";
import Link from "next/link";

export default function Home({ content }) {
  useEffect(() => {
    console.log("Content", content);
  }, []);

  return (
    <Layout title="Home" content={content}>
      <Carousel images={content?.banners} />
      <SearchBox destination={content?.cities} />

      <div className="bg-white">
        <SectionTitle
          title={"Mau sewa Bus ?"}
          subtitle={
            "Ada berbagai pilihan Bus dengan harga spesial, lho. Jangan sampai kehabisan ya!"
          }
        />
        <CarToRent
          vehicles={content?.vehicles}
          itemToShow={8}
          filterBy={"Bus"}
          admin={content?.admin}
        />
        <div className="flex items-center justify-center p-12 ">
          {/* <Button label={"Cari"} onClick={() => {}} /> */}
          <Link
            className={`w-1/2 py-2 mt-6 rounded border px-5 border-blue-500 -mt-5 mr-1 text-center text-sm xl:text-md lg:text-md text-blue-500`}
            href={`/rentcar?type=bus`}
          >
            Lihat Lebih Banyak Bus
          </Link>
        </div>
        <SectionTitle
          title={"Kami juga menyediakan Mini Bus!"}
          subtitle={
            "Buat perjalanan keluarga anda lebih menyenangkan. Temukan mobil impian anda!"
          }
        />
        <CarToRent
          vehicles={content?.vehicles}
          itemToShow={12}
          filterBy={"Mini Bus"}
          admin={content?.admin}
        />
        <div className="flex items-center justify-center p-12 ">
          <Link
            className={`w-1/2 py-2 mt-6 rounded border px-5 border-blue-500 -mt-5 mr-1 text-center text-sm xl:text-md lg:text-md text-blue-500`}
            href={`/rentcar?type=minibus`}
          >
            Lihat Lebih Banyak Mini Bus
          </Link>
        </div>
        <SectionTitle
          title={"Baca Artikel Kami!"}
          subtitle={"Temukan artikel menarik disini!"}
        />
        <ArticleList articles={content?.articles} />
        <div className="flex items-center justify-center p-12 ">
          <Link
            className={`w-1/2 py-2 mt-6 rounded border px-5 border-blue-500 -mt-5 mr-1 text-center text-sm xl:text-md lg:text-md text-blue-500`}
            // href={`tickets?main_from=${values.from}&main_to=${values.to}&date=${values.date}`}
            href="/article"
          >
            Lihat Lebih Banyak Artikel
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const banners = await getBanners();
    const cities = await getDestinations();
    const vehicles = await getCars();
    const articles = await getArticles();
    const admin = await getAdmin();
    const partners = await getPartner();

    return {
      props: {
        content: {
          banners,
          cities,
          vehicles,
          articles,
          admin,
          partners,
        },
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
