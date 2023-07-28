import Head from "next/head";
import Image from "next/legacy/image";
import {
  getBanners,
  getCars,
  getDestinations,
  getArticles,
} from "../utils/request";
import { CardArticles, Carousel, SearchBox, SectionTitle } from "../components";
import CarToRent from "../layout/cartorent";
import ArticleList from "../layout/articlelist";
import Layout from "./Layout";
import { useEffect } from "react";
import { carToRent, destinations } from "../mockup/datas";

export default function Home({ content }) {
  useEffect(() => {
    console.log("Content", content);
  }, []);
  return (
    <Layout title="Home">
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
          itemToShow={7}
          filterBy={"Bus"}
        />
        <SectionTitle
          title={"Kami juga menyediakan Mini Bus!"}
          subtitle={
            "Buat perjalanan keluarga anda lebih menyenangkan. Temukan mobil impian anda!"
          }
        />
        <CarToRent
          vehicles={content?.vehicles}
          itemToShow={11}
          filterBy={"Mini Bus"}
        />
        <SectionTitle
          title={"Baca Artikel Kami!"}
          subtitle={"Temukan artikel menarik disini!"}
        />
        <ArticleList articles={content?.articles} />
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

    return {
      props: {
        content: {
          banners,
          cities,
          vehicles,
          articles,
        },
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
