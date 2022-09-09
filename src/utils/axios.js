import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://priyoserver.herokuapp.com",
});

export default axiosInstance;
