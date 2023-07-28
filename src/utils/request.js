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

const getTickets = (params) =>
  axios({
    url: `/ticket?main_from=${params.main_from}&main_to=${params.main_to}`,
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

const getArticles = () =>
  axios({
    url: "/article",
    method: "GET",
  });

const getArticleById = (id) =>
  axios({
    url: `/article?id=${id}`,
    method: "GET",
  });

export {
  getBanners,
  getDestinations,
  getCars,
  getTickets,
  getTrips,
  getPartner,
  getArticles,
  getArticleById,
};
