import React, { useEffect } from "react";
import Layout from "../Layout";
import { SectionTitle } from "../../components";
import CarToRent from "../../layout/cartorent";
import {
  getCars,
  getArticles,
  getPartner,
  getConfiguration,
} from "../../utils/request";
import ArticleList from "../../layout/articlelist";

export default function Index({ content }) {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <Layout title={"Rent Car"} content={content}>
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  `}
      >
        <div className="bg-white">
          <SectionTitle
            title={"Baca Artikel Kami!"}
            subtitle={"Temukan artikel menarik disini!"}
          />
          <ArticleList articles={content?.articles} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const partners = await getPartner();
    const articles = await getArticles();
    const configuration = await getConfiguration();

    return {
      props: {
        content: {
          articles,
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
