import axios from "axios";

const URL = "http://147.78.67.39/sotka_baksiv";

export const fetchData = () => {
  return axios.get(URL);
};
