import Head from "next/head";
import Image from "next/image";
import {
  getBanners,
  getCars,
  getDestinations,
  getArticles,
} from "../utils/request";
import { Carousel, SearchBox } from "../components";
import CarToRent from "../layout/cartorent";
import Layout from "./Layout";
import { useEffect } from "react";

export default function Home({ content }) {
  useEffect(() => {
    console.log("Content", content);
    console.log("asd");
  }, []);
  return (
    <Layout title="Home">
      <Carousel images={content?.banners} />
      <SearchBox destination={content?.cities} />
      <CarToRent vehicles={content?.vehicles} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const banners = await getBanners();
    const cities = await getDestinations();
    const vehicles = await getCars();
    const articles = await getArticles();

    console.log("vehicles", articles);

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
