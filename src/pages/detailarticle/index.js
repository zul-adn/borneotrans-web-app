import React, { useEffect } from "react";
import Layout from "../Layout";
import { getArticleById } from "../../utils/request";
import { TicketCard, SearchBox, Carousel } from "../../components";
import moment from "moment";

const assets_url = process.env.BACKEND_URL;

export default function Index({ content }) {
  return (
    <Layout title={"Cari Tiket"}>
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  mt-10`}
      >
        <img
          src={`${assets_url}/article/${
            JSON.parse(content?.article.data[0].img)[0]
          }`}
          alt="car"
          className={"w-full h-96 rounded-md  object-cover"}
          loading="lazy"
        />
        <div className="grid grid-cols-8 gap-4">
          {JSON.parse(content?.article.data[0].img).map((url, i) => (
            <img key={i} src={url} className="cursor-pointer" />
          ))}
        </div>
        <div className={`flex flex-col mt-3 p-5`}>
          <div className={`text-xs font-semibold`}>
            {moment(content?.article.data[0].createAt).format("LLL")}
          </div>
          <div className={`font-bold text-xl mb-2 line-clamp-2 `}>
            {content?.article.data[0].title}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content?.article.data[0].article }}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const article = await getArticleById(context.query.id);

    return {
      props: {
        content: {
          article,
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
