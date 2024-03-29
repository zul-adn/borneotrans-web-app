import React from "react";
import { getBanners, getCars, getDestinations } from "../../utils/request";
import { Carousel, SearchBox } from "../../components";
import Layout from "../Layout";

export default function Index({ content }) {
  React.useEffect(() => {
    if (content) {
      console.log("CONTENT");
      console.log(content);
    }
  });

  return (
    <Layout title={"Home"}>
      <Carousel images={content?.banners} />
      <SearchBox destination={content?.cities} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const banners = await getBanners();
    const cities = await getDestinations();
    const vehicles = await getCars();
    const articles = await articles();

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
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
}
