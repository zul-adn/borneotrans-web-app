import axios from "./axios";

const getBanners = () =>
  axios({
    url: "/banner",
    method: "GET",
  });

const searchTicket = () => {};

const getDestinations = () =>
  axios({
    url: "/vehicle-details",
    method: "GET",
  });

const getCars = () =>
  axios({
    url: "/vehicle-details",
    method: "GET",
  });

// const getArticles = () =>
//   axios({
//     url: "/article",
//     method: "GET",
//   });

export { getBanners, getDestinations, getCars };
