import axios from "./axios";

const getBanners = () =>
  axios({
    url: "/banner",
    method: "GET",
  });

const searchTicket = () => {};

const getDestinations = () =>
  axios({
    url: "/banner",
    method: "GET",
  });

export { getBanners, getDestinations };
