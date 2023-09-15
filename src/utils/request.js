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
    url: `/ticket?$limit=100&main_from=${params.main_from}&main_to=${params.main_to}&date=${params.date}`,
    method: "GET",
  });

const getTrips = () =>
  axios({
    url: "/routes-trip?$limit=100",
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

const getConfiguration = () =>
  axios({
    url: "/configuration",
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
  getConfiguration,
};
