import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
});

const apiServer = axios.create({
  baseURL: "https://api.mihomo.me/",
});

const apiImages = axios.create({
  baseURL: "https://github.com/Mar-7th/StarRailRes/blob/master/",
});

export default { apiClient, apiServer, apiImages };
