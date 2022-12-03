import React from "react";
import { getBanners, getDestinations } from "../../utils/request";
import { Carousel } from "../../components";
import Layout from "../Layout";

export default function Index({ content }) {
  React.useEffect(() => {
    if (content) {
      console.log(content);
    }
  }, []);

  return (
    <Layout>
      <Carousel images={content?.banners} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const banners = await getBanners();
    const city = await getDestinations();

    return {
      props: {
        content: {
          banners,
          city,
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
