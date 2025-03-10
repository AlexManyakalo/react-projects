import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
});

const apiServer = axios.create({
  baseURL: "https://api.mihomo.me/",
});

const apiImages = axios.create({
  baseURL: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/",
});

export default { apiClient, apiServer, apiImages };
