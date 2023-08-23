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

  //   useEffect(() => {
  //     const cpImageToShow = [...imageToShow];
  //     JSON.parse(content?.article.data[0].img)?.forEach((img) => {
  //       cpImageToShow.push(`${assets_url}/article/${img}`);
  //     });
  //     setImageToShow(cpImageToShow);
  //     // setImageReady(true);
  //   }, [content?.article.data[0].img]);

  //   const openImageViewer = useCallback((index) => {
  //     setCurrentImage(index);
  //     setIsViewerOpen(true);
  //   }, []);

  //   const closeImageViewer = () => {
  //     setCurrentImage(0);
  //     setIsViewerOpen(false);
  //   };

  return (
    <Layout title={"About Us"} content={content}>
      <div
        className={`lg:max-w-5xl md:max-w-5xl lg:mx-auto md:mx-auto sm:mx-auto  mt-10`}
      >
        <img
          src={`${assets_url}/config/${content?.configuration.data[0].logo}`}
          alt="logo"
          className={"w-5/6 mb-4"}
          loading="lazy"
        />
        <div className="w-full">
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{
              __html: content?.configuration.data[0].about_us,
            }}
          />
        </div>
        <div className="w-full mt-4 ">
          <span className="font-bold">Hubungi Kami :</span>
          <div className="flex flex-row mt-4">
            <a href="">
              <img
                className="w-6 aspect-square mr-4"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
              />
            </a>
            <span>{content?.configuration.data[0].no_hp_1}</span>
          </div>
          <div className="flex flex-row mt-4">
            <a href="">
              <img
                className="w-6 aspect-square mr-4"
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
              />
            </a>
            <span>{content?.configuration.data[0].no_hp_2}</span>
          </div>
          <div className="flex flex-row mt-4">
            <a href="">
              <img
                className="w-6 aspect-square mr-4"
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              />
            </a>
            <span>{content?.configuration.data[0].email}</span>
          </div>
        </div>
        <div className="w-full mt-6">
          <span className="font-bold">Alamat :</span>
          <div className="flex flex-row mt-4">
            <span>{content?.configuration.data[0].address}</span>
          </div>
        </div>
      </div>
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
