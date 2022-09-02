import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://lwsserver7.herokuapp.com/"
});

export default axiosInstance;