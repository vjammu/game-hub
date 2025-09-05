import axios from "axios";

export default axios.create({
  baseURL: "/api",
  params: {
    key: "9b0036c8af1b4dbbb12e3fb455ca29a2",
  },
});
