import axios from "./axios";

const getBanners = () =>
  axios({
    url: "/banner",
    method: "GET",
  });

const searchTicket = () => {};

const getDestinations = () =>
  axios({
    url: "/cities-destination",
    method: "GET",
  });

const getCars = () =>
  axios({
    url: "/vehicle-details",
    method: "GET",
  });

const getTickets = () =>
  axios({
    url: "/ticket",
    method: "GET",
  });

const getTrips = () =>
  axios({
    url: "/routes-trip",
    method: "GET",
  });

const getPartner = () =>
  axios({
    url: "/partner",
    method: "GET",
  });

// const getArticles = () =>
//   axios({
//     url: "/article",
//     method: "GET",
//   });

export {
  getBanners,
  getDestinations,
  getCars,
  getTickets,
  getTrips,
  getPartner,
};
