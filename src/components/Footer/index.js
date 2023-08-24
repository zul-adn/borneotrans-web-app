import React, { useEffect } from "react";

const assets_url = process.env.BACKEND_URL;

export default function index({ content }) {
  return (
    <footer className="text-center bg-gray-900 text-white mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="container px-6 pt-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            <div className="mb-6 flex flex-col justify-start items-center pr-10 pt-10">
              <img
                src={`${assets_url}/config/${content?.configuration.data[0].logo}`}
                alt="logo"
                className={"w-5/6 mb-4"}
                loading="lazy"
              />
              <div className="flex justify-center mb-6">
                <a
                  href={`https://www.facebook.com/${
                    content?.configuration.data[0].social_media
                      ? JSON.parse(
                          content?.configuration.data[0].social_media
                        )[1]["values"]
                      : "#"
                  }`}
                  rel="noreferrer"
                  target="_blank"
                  type="button"
                  className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="w-2 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </a>

                <a
                  href={`https://goo.gl/maps/${
                    content?.configuration.data[0].social_media
                      ? JSON.parse(
                          content?.configuration.data[0].social_media
                        )[2]["values"]
                      : "#"
                  }`}
                  rel="noreferrer"
                  type="button"
                  target="_blank"
                  className="rounded-full border-2 justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  {/* <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  > */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="w-3 h-full mx-auto"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </a>

                <a
                  href={`https://www.instagram.com/${
                    content?.configuration.data[0].social_media
                      ? JSON.parse(
                          content?.configuration.data[0].social_media
                        )[0]["values"]
                      : "#"
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="w-3 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mb-6 flex flex-col justify-start items-start">
              <h5 className="uppercase font-bold mb-2.5">Partners</h5>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {content?.partners.data.slice(0, 11).map((v, i) => (
                  <div key={i} title={v.name}>
                    <img
                      src={`${assets_url}/partners/${v.img}`}
                      className="rounded-full aspect-square"
                      style={{ width: 50 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 flex flex-col justify-start items-start">
              <h5 className="uppercase font-bold mb-2.5">About us</h5>
              <div className="w-full">
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: content?.configuration.data[0].about_us,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/">
          Borneotrans
        </a>
      </div>
    </footer>
  );
}
