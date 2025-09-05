import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e453f7575cff48618229b85a78422ee3",
  },
});
