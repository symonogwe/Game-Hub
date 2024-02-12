import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2423b2b9c1364faaab25ff18c0468079",
  },
});
