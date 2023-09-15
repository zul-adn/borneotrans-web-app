import React, { useEffect, useState, useCallback } from "react";
import Layout from "../Layout";
import {
  getArticleById,
  getConfiguration,
  getPartner,
} from "../../utils/request";
import { TicketCard, SearchBox, Carousel } from "../../components";
import moment from "moment";
import ImageViewer from "react-simple-image-viewer";

const assets_url = process.env.BACKEND_URL;

export default function Index({ content }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState([]);

  useEffect(() => {
    const cpImageToShow = [...imageToShow];
    JSON.parse(content?.article.data[0].img)?.forEach((img) => {
      cpImageToShow.push(`${assets_url}/article/${img}`);
    });
    setImageToShow(cpImageToShow);
    // setImageReady(true);
  }, [content?.article.data[0].img]);

  const openImageViewer = useCallback((index) => {
    const nav = document.getElementById("nav");
    nav.style.zIndex = 0;
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    const nav = document.getElementById("nav");
    nav.style.zIndex = 10;
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Layout title={"Cari Tiket"} content={content}>
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
        <div className="grid grid-cols-8 gap-4 mt-6">
          {JSON.parse(content?.article.data[0].img).map((url, i) => (
            <img
              key={i}
              src={`${assets_url}/article/${url}`}
              className="cursor-pointer rounded"
              onClick={() => openImageViewer(1)}
            />
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
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: content?.article.data[0].article }}
        />
      </div>
      {isViewerOpen && (
        <>
          <ImageViewer
            src={imageToShow}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const article = await getArticleById(context.query.id);
    const partners = await getPartner();
    const configuration = await getConfiguration();

    return {
      props: {
        content: {
          article,
          partners,
          configuration,
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
