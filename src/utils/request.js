import axios from "./axios";

const getBanners = () =>
  axios({
    url: "/banner",
    method: "GET",
  });

const searchTicket = () => {};

const getDestinations = () =>
  axios({
    url: "/cities-destination?$limit=100",
    method: "GET",
  });

const getCars = () =>
  axios({
    url: "/vehicle-details?$limit=100",
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

const getAdmin = () =>
  axios({
    url: "/users?$limit=50",
    method: "GET",
  });

const getArticles = () =>
  axios({
    url: "/article?$limit=50",
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
  getAdmin,
};
