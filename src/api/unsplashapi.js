import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ikb8IG1Th7Gy-Ry8eyqNSAvGmmRF4uNvXW__aZktiV0"
  }
});
